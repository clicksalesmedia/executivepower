"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

// TypeScript declaration for gtag
declare global {
  interface Window {
    gtag: (command: string, action: string, params: Record<string, unknown>) => void;
  }
}

export default function ElitePremiumSuccess() {
  useEffect(() => {
    // Fire Google Ads conversion tracking for Elite Premium form submission
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17571321701',
      });
    }
  }, []);
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

            .parallax-bg {
              background-image: 
                  radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
                  radial-gradient(circle at 40% 80%, rgba(212, 175, 55, 0.08) 0%, transparent 50%);
            }
          `
        }}
      />
      
      <div className="min-h-screen bg-[#1B1C1D] relative overflow-hidden">
        <div className="absolute inset-0 parallax-bg"></div>
        
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-12">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div className="flex items-center justify-center mb-8">
              <Image 
                src="/logoexec.png" 
                alt="Executive Power Logo" 
                className="h-20 w-auto"
                width={150}
                height={150}
                priority
              />
            </div>

            {/* Success Icon */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <div className="w-24 h-24 mx-auto glass-effect rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-yellow-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gold-gradient">Application Submitted Successfully!</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Thank you for your interest in our <span className="text-yellow-200 font-semibold">Elite Premium Executive Career Transformation Program</span>. 
                Your application has been received and is being reviewed by our team.
              </p>
            </motion.div>

            {/* Next Steps */}
            <motion.div
              className="glass-effect rounded-3xl p-8 mb-8 text-left max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 text-center">What Happens Next?</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-200/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-200 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Application Review</h3>
                    <p className="text-gray-400 text-sm">Our team will carefully review your application and CV within 7 days.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-200/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-200 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Personal Consultation</h3>
                    <p className="text-gray-400 text-sm">If selected, Isabelita will personally reach out to schedule a consultation call with you.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-200/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-200 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Program Details</h3>
                    <p className="text-gray-400 text-sm">We&apos;ll discuss the program details, timeline, and next steps during your consultation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div>
                    <p className="text-yellow-100 text-sm text-center">If you don&apos;t hear back from us within 3 business days please reach out to Isabelita directly</p>
                    <div className="text-yellow-100 text-sm text-center">
                      <a 
                        href="mailto:isabelita@executivespower.com" 
                        className="text-yellow-200 hover:text-yellow-100 underline transition-colors"
                      >
                        isabelita@executivespower.com
                      </a>
                      <span className="mx-2">or via</span>
                      <a 
                        href="https://www.linkedin.com/in/isabelitacastilho/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-yellow-200 hover:text-yellow-100 underline transition-colors"
                      >
                        LinkedIn
                      </a>
                    </div>
                </div> 
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <p className="text-gray-400 mb-6">
                Have questions? Feel free to reach out to us directly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="/"
                  className="luxury-button text-black px-8 py-3 rounded-full font-semibold inline-block text-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Return to Homepage
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/isabelitacastilho/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect text-yellow-200 px-8 py-3 rounded-full font-medium border border-yellow-200/30 inline-block text-center"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(212, 175, 55, 0.05)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Connect on LinkedIn
                </motion.a>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <div className="flex flex-wrap justify-center items-center space-x-8 text-gray-500 text-sm">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span>Confidential Process</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Forbes Member Council</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>Award Winner 2025</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
