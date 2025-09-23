import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { prisma } from "@/lib/prisma";
import { LeadStatus } from '@prisma/client';

// Check if Stripe keys are available
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY environment variable is not set');
}

if (!process.env.STRIPE_WEBHOOK_SECRET) {
  throw new Error('STRIPE_WEBHOOK_SECRET environment variable is not set');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-08-27.basil',
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.error(`Webhook signature verification failed.`, errorMessage);
    return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log('PaymentIntent succeeded:', paymentIntent.id);
      
      // Update lead status to paid
      const leadId = paymentIntent.metadata.lead_id;
      if (leadId) {
        try {
          await prisma.lead.update({
            where: { id: leadId },
            data: {
              status: LeadStatus.PAID,
              paymentIntentId: paymentIntent.id
            }
          });
          console.log(`Lead ${leadId} marked as paid`);
        } catch (error) {
          console.error('Error updating lead status:', error);
        }
      }
      break;

    case 'payment_intent.payment_failed':
      const failedPayment = event.data.object as Stripe.PaymentIntent;
      console.log('PaymentIntent failed:', failedPayment.id);
      
      // Update lead status to cancelled
      const failedLeadId = failedPayment.metadata.lead_id;
      if (failedLeadId) {
        try {
          const currentLead = await prisma.lead.findUnique({
            where: { id: failedLeadId }
          });
          
          if (currentLead) {
            await prisma.lead.update({
              where: { id: failedLeadId },
              data: {
                status: LeadStatus.CANCELLED,
                paymentIntentId: failedPayment.id,
                notes: (currentLead.notes || '') + `\nPayment failed: ${failedPayment.last_payment_error?.message || 'Unknown error'}`
              }
            });
            console.log(`Lead ${failedLeadId} marked as cancelled due to payment failure`);
          }
        } catch (error) {
          console.error('Error updating failed lead status:', error);
        }
      }
      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
