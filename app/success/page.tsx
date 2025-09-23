"use client";
import { motion } from 'framer-motion';
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function SuccessPageContent() {
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const paymentIntent = searchParams.get('payment_intent');

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      clearTimeout(timer);
      // Clean up script if component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#1B1C1D] flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-gold-light/30 border-t-gold-light rounded-full animate-spin mx-auto mb-4"
          />
          <p className="text-gold-light text-lg">Confirming your payment...</p>
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
            
            .gold-gradient {
              background: linear-gradient(135deg, #D4AF37, #F4E4C1, #D4AF37);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
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

            @keyframes confetti {
              0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
              100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
            }

            .confetti {
              position: absolute;
              width: 10px;
              height: 10px;
              background: #D4AF37;
              animation: confetti 3s linear infinite;
            }
          `
        }}
      />
      
      <div className="min-h-screen bg-[#1B1C1D] relative overflow-hidden">
        {/* Confetti Animation */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="confetti"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              backgroundColor: i % 2 === 0 ? '#D4AF37' : '#F4E4C1',
            }}
          />
        ))}

        <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* Success Icon */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
            >
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <motion.svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </motion.svg>
              </div>
            </motion.div>

            {/* Success Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gold-gradient">Thank You for Your Payment!</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Your Executive Power transformation journey begins now. Please book your 1-hour strategy session with Isabelita below.
              </p>
            </motion.div>

            {/* Calendly Booking Widget */}
            <motion.div
              className="glass-effect rounded-3xl p-8 mb-8 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Book Your 1-Hour Session</h2>
              
              {/* Calendly inline widget */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/isabelita-executivespower/meet-w-isabelita" 
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
            </motion.div>

            {/* Payment Details */}
            {paymentIntent && (
              <motion.div
                className="glass-effect rounded-2xl p-6 mb-8 max-w-md mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">Payment Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Package:</span>
                    <span className="text-white">Executive Power Consultation</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Amount:</span>
                    <span className="text-gold-light font-semibold">$150.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Payment ID:</span>
                    <span className="text-white text-xs">{paymentIntent.slice(-8).toUpperCase()}</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.button
                onClick={() => window.location.href = '/'}
                className="luxury-button text-black px-8 py-4 rounded-full font-bold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Return to Home
              </motion.button>
              
              <motion.button
                onClick={() => window.print()}
                className="glass-effect text-gold-light px-8 py-4 rounded-full font-semibold hover:bg-white/5 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Print Receipt
              </motion.button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <p className="text-gray-400 text-sm mb-2">
                Questions? Contact us at{' '}
                <a href="mailto:support@executivepower.com" className="text-gold-light hover:underline">
                  support@executivepower.com
                </a>
              </p>
              <p className="text-gray-500 text-xs">
                Your transformation journey starts now. Welcome to Executive Power.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#1B1C1D] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-200 mx-auto mb-4"></div>
          <p className="text-white">Loading success page...</p>
        </div>
      </div>
    }>
      <SuccessPageContent />
    </Suspense>
  );
}

