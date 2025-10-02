import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { LeadStatus } from '@prisma/client';

// GET - Fetch all leads (protected route)
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const leads = await prisma.lead.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return NextResponse.json({ leads });
  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}

// POST - Create new lead (public route for form submissions)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      linkedinUrl,
      currentEmployer,
      jobTitles,
      jobSearchDuration,
      freelanceConsulting,
      cvFileName,
      packageId,
      packageName,
      price,
      currency,
      isElitePremium
    } = body;

    // Validate required fields
    if (!name || !email || !packageId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newLead = await prisma.lead.create({
      data: {
        name,
        email,
        linkedinUrl,
        currentEmployer,
        jobTitles,
        jobSearchDuration,
        freelanceConsulting,
        cvFileName,
        packageId,
        packageName,
        price,
        currency: currency || 'USD',
        status: LeadStatus.PENDING,
        isElitePremium: isElitePremium || false
      }
    });

    return NextResponse.json({ lead: newLead }, { status: 201 });
  } catch (error) {
    console.error('Error creating lead:', error);
    return NextResponse.json({ error: 'Failed to create lead' }, { status: 500 });
  }
}

// PUT - Update lead status (protected route for admin, or public for CV upload)
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status, paymentIntentId, notes, cvUrl, cvPublicId, cvFileSize, cvFormat } = body;

    if (!id) {
      return NextResponse.json({ error: 'Lead ID is required' }, { status: 400 });
    }

    // Check if this is a CV upload (public) or admin update (protected)
    const isCvUpdate = cvUrl || cvPublicId || cvFileSize || cvFormat;
    
    if (!isCvUpdate) {
      // This is an admin update, require authentication
      const session = await getServerSession(authOptions);
      if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
    }

    const updateData: {
      status?: LeadStatus;
      paymentIntentId?: string;
      notes?: string;
      cvUrl?: string;
      cvPublicId?: string;
      cvFileSize?: number;
      cvFormat?: string;
    } = {};
    
    if (status) updateData.status = status as LeadStatus;
    if (paymentIntentId) updateData.paymentIntentId = paymentIntentId;
    if (notes !== undefined) updateData.notes = notes;
    if (cvUrl) updateData.cvUrl = cvUrl;
    if (cvPublicId) updateData.cvPublicId = cvPublicId;
    if (cvFileSize) updateData.cvFileSize = cvFileSize;
    if (cvFormat) updateData.cvFormat = cvFormat;

    const updatedLead = await prisma.lead.update({
      where: { id },
      data: updateData
    });

    return NextResponse.json({ lead: updatedLead });
  } catch (error) {
    console.error('Error updating lead:', error);
    return NextResponse.json({ error: 'Failed to update lead' }, { status: 500 });
  }
}
