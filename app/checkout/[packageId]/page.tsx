"use client";
import { useState, useEffect, Suspense } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { motion } from 'framer-motion';
import { useParams, useSearchParams } from 'next/navigation';
import Image from 'next/image';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// Package data
const packageData = {
  basic: {
    name: 'Strategic Job Search Intelligence',
    price: 149,
    currency: 'EUR',
    features: [
      '60-minute strategy session with Isabellita',
      'Comprehensive written report (10-15 business days)',
      'CV & LinkedIn professional analysis',
      'ATS compatibility optimization',
      'Strategic roadmap with market trends',
      'Personalized next steps recommendations'
    ]
  },
  comprehensive: {
    name: 'Customized Comprehensive Executive Career Roadmap',
    price: 495,
    currency: 'EUR',
    features: [
      '60-minute strategy session with Isabellita',
      'Comprehensive written report (10-15 business days)',
      '10 target companies aligned with your goals',
      '30 key headhunters with contact details',
      'CV & LinkedIn professional analysis',
      'Strategic roadmap with proven templates',
      'Step-by-step execution plan with timelines'
    ]
  }
};

interface PackageInfo {
  name: string;
  price: number;
  currency: string;
  features: string[];
}

function CheckoutForm({ packageInfo }: { packageInfo: PackageInfo }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });

    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message!);
      } else {
        setMessage("An unexpected error occurred.");
      }
    }

    setIsLoading(false);
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <PaymentElement />
      
      {message && (
        <motion.div 
          className="text-red-400 text-sm p-4 bg-red-400/10 rounded-lg border border-red-400/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {message}
        </motion.div>
      )}
      
      <motion.button
        disabled={isLoading || !stripe || !elements}
        className="w-full luxury-button text-black py-4 px-8 rounded-full font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: !isLoading ? 1.02 : 1 }}
        whileTap={{ scale: !isLoading ? 0.98 : 1 }}
        type="submit"
      >
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
            <span>Processing...</span>
          </div>
        ) : (
          `Complete Payment - ${packageInfo.currency} ${packageInfo.price}`
        )}
      </motion.button>
      
      <div className="text-xs gold-gradient text-center font-small">Non-Refundable</div>
    </motion.form>
  );
}

function DynamicCheckoutPageContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const [clientSecret, setClientSecret] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    linkedinUrl: string;
    currentEmployer: string;
    jobTitles: string;
    jobSearchDuration: string;
    freelanceConsulting: string;
    cvFileName?: string;
    packageId: string;
    price: string;
    leadId: string;
  } | null>(null);
  
  const packageId = params.packageId as string;
  const amount = searchParams.get('amount');
  const hasFormData = searchParams.get('hasFormData');
  const leadId = searchParams.get('leadId');
  const packageInfo = packageData[packageId as keyof typeof packageData];

  useEffect(() => {
    if (!amount || !packageInfo) return;

    // Check if user has completed the form
    if (!hasFormData) {
      // Redirect to form if no form data
      window.location.href = `/checkout/form?package=${packageId}&price=${packageInfo.price}`;
      return;
    }

    // Get form data from sessionStorage
    const storedFormData = sessionStorage.getItem('checkoutFormData');
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }

    // Create PaymentIntent with the selected amount
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        amount: parseInt(amount), 
        leadId: leadId,
        packageId: packageId 
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error creating payment intent:', error);
        setIsLoading(false);
      });
  }, [amount, packageInfo, hasFormData, packageId, leadId]);

  const appearance = {
    theme: 'night' as const,
    variables: {
      colorPrimary: '#D4AF37',
      colorBackground: '#1B1C1D',
      colorText: '#ffffff',
      colorDanger: '#df1b41',
      fontFamily: 'Inter, system-ui, sans-serif',
      spacingUnit: '4px',
      borderRadius: '8px',
    },
    rules: {
      '.Input': {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(212, 175, 55, 0.2)',
        backdropFilter: 'blur(10px)',
      },
      '.Input:focus': {
        borderColor: '#D4AF37',
        boxShadow: '0 0 0 2px rgba(212, 175, 55, 0.2)',
      },
      '.Label': {
        color: '#F4E4C1',
        fontWeight: '500',
      },
    },
  };

  const options = {
    clientSecret,
    appearance,
  };

  if (!packageInfo) {
    return (
      <div className="min-h-screen bg-[#1B1C1D] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Package Not Found</h1>
          <p className="text-gray-400">The requested package could not be found.</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#1B1C1D] flex items-center justify-center">
        <motion.div
          className="flex items-center space-x-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-8 h-8 border-2 border-yellow-200/30 border-t-yellow-200 rounded-full animate-spin"></div>
          <span className="text-yellow-200 text-lg">Loading payment form...</span>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            :root {
              --gold-primary: #D4AF37;
              --gold-light: #F4E4C1;
              --gold-dark: #B8941F;
            }
            
            body {
              font-family: 'Inter', sans-serif;
              background-color: #1B1C1D;
              overflow-x: hidden;
            }
            
            .luxury-button {
              background: linear-gradient(135deg, #D4AF37, #F4E4C1, #D4AF37);
              background-size: 200% 200%;
              animation: goldShift 3s ease infinite;
              position: relative;
              overflow: hidden;
            }

            @keyframes goldShift {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }

            .glass-effect {
              background: rgba(255, 255, 255, 0.02);
              backdrop-filter: blur(10px);
              border: 1px solid rgba(212, 175, 55, 0.2);
            }

            .gold-gradient {
              background: linear-gradient(135deg, #D4AF37, #F4E4C1, #D4AF37);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
          `
        }}
      />
      
      <div className="min-h-screen bg-[#1B1C1D] py-12 px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Image 
              src="/logoexec.png" 
              alt="Executive Power Logo" 
              className="h-16 w-auto"
              width={120}
              height={120}
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-gradient">Secure Checkout</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Complete your transformation journey with Isabellita&apos;s {packageInfo.name}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Package Summary */}
            <motion.div
              className="glass-effect rounded-3xl p-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
              
              {/* Customer Information */}
              {formData && (
                <div className="mb-8 p-4 bg-yellow-200/5 rounded-lg border border-yellow-200/10">
                  <h3 className="text-lg font-semibold text-white mb-4">Application Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Name:</span>
                      <span className="text-white">{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Email:</span>
                      <span className="text-white">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">LinkedIn:</span>
                      <span className="text-white text-xs break-all">{formData.linkedinUrl}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Employer:</span>
                      <span className="text-white">{formData.currentEmployer}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Job Titles:</span>
                      <span className="text-white text-xs">{formData.jobTitles}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Job Search:</span>
                      <span className="text-white text-xs">{formData.jobSearchDuration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Freelancing:</span>
                      <span className="text-white">{formData.freelanceConsulting}</span>
                    </div>
                    {formData.cvFileName && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">CV:</span>
                        <span className="text-white text-xs">{formData.cvFileName}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Package Details */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">{packageInfo.name}</h3>
                <div className="space-y-3">
                  {packageInfo.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-200 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-yellow-200/20 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-400">Package Price:</span>
                  <span className="text-2xl font-bold gold-gradient">
                    {packageInfo.currency} {packageInfo.price}.00
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Processing Fee:</span>
                  <span>Included</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-200/10 rounded-lg border border-yellow-200/20">
                <div className="flex items-center space-x-2 mb-2">
                  <svg className="w-5 h-5 text-yellow-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-yellow-200 font-semibold text-sm">Secure Payment</span>
                </div>
                <p className="text-xs text-gray-400">
                  Your payment information is encrypted and processed securely through Stripe.
                </p>
              </div>
            </motion.div>

            {/* Payment Form */}
            <motion.div
              className="glass-effect rounded-3xl p-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Payment Details</h2>
              
              {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                  <CheckoutForm packageInfo={packageInfo} />
                </Elements>
              )}

              <div className="mt-8 flex items-center justify-center space-x-4 text-xs text-gray-500">
                <span>Powered by</span>
                <svg className="h-4" viewBox="0 0 60 25" fill="currentColor">
                  <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04.8-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17L15.8 5.8v3.31h2.6v3.07h-2.6l-.01 2.46zm-8.13-3.05h-.12c-.69 0-1.08.59-1.08 1.3 0 .58.02 4.51.02 4.51s.18 1.59 1.24 1.59h.1v3.52a9.61 9.61 0 0 1-1.73.17 4.02 4.02 0 0 1-4.17-4.18V9.87c0-3.56 2.17-4.78 4.99-4.78.4 0 .87.04 1.2.07l-.45 3.36z"/>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="max-w-4xl mx-auto mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-wrap justify-center items-center space-x-8 text-gray-500 text-sm">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>SSL Encrypted</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <span>Instant Access</span>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default function DynamicCheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#1B1C1D] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-200 mx-auto mb-4"></div>
          <p className="text-white">Loading checkout...</p>
        </div>
      </div>
    }>
      <DynamicCheckoutPageContent />
    </Suspense>
  );
}


