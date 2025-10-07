"use client";
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function CheckoutPage() {
  const router = useRouter();

  const packages = [
    {
      id: 'basic',
      name: 'Strategic Job Search Intelligence',
      price: 149,
      currency: 'EUR',
      description: 'Strategic Job Search Intelligence for Senior Leaders with Job Landing Recommendations Actions',
      features: [
        'One 60-minute strategy session',
        'Comprehensive written report delivered within 10-15 business days',
        'CV & LinkedIn Feedback',
        'Professional analysis and optimization recommendations for your CV and LinkedIn profile to maximize executive appeal and ATS compatibility',
        'Strategic Roadmap',
        'Recommendations for your next steps with a comprehensive customized report, including market trends'
      ],
      process: [
        'One-hour strategic consultation meeting',
        'Comprehensive report delivery within 7-10 business days after meeting'
      ],
      popular: false
    },
    {
      id: 'comprehensive',
      name: 'Customized Comprehensive Executive Career Roadmap',
      price: 495,
      currency: 'EUR',
      description: 'Strategic Job Search Intelligence for Senior Leaders with Job Landing Plan',
      features: [
        'One 60-minute strategy session',
        'Comprehensive written report delivered within 10-15 business days',
        '10 Target Companies',
        'Carefully selected organizations aligned with your experience, salary expectations, and career goals',
        '30 Key Headhunters',
        'Curated list of executive recruiters specializing in your industry and function',
        'CV & LinkedIn Feedback',
        'Professional analysis and optimization recommendations',
        'Strategic Roadmap',
        'Step-by-step execution plan with timelines, next actions, and proven message templates'
      ],
      process: [
        'One-hour strategic consultation meeting',
        'Comprehensive report delivery within 10-15 business days after meeting'
      ],
      popular: true
    }
  ];

  const handleSelectPackage = (packageId: string, price: number) => {
    router.push(`/checkout/form?package=${packageId}&price=${price}`); // Go to form first
  };

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
            <span className="gold-gradient">Choose Your Package</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Select the executive transformation package that best fits your career goals
          </p>
        </motion.div>

        {/* Package Selection */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                className={`glass-effect rounded-3xl p-8 relative ${
                  pkg.popular ? 'border-2 border-yellow-200/50' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-200 text-black px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">{pkg.name}</h2>
                  <p className="text-gray-400 text-sm mb-6">{pkg.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold gold-gradient">
                      {pkg.currency} {pkg.price}
                    </span>
                    <span className="text-gray-400 text-lg ml-2">/ One Time</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">What You Get:</h3>
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-200 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-8">
                  <h3 className="text-lg font-semibold text-white">Process:</h3>
                  {pkg.process.map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-yellow-200/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-yellow-200 text-xs font-bold">{idx + 1}</span>
                      </div>
                      <span className="text-gray-300 text-sm">{step}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  onClick={() => handleSelectPackage(pkg.id, pkg.price)}
                  className="w-full luxury-button text-black py-4 px-8 rounded-full font-bold text-lg"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Select {pkg.currency} {pkg.price} Package
                </motion.button>
                
                <div className="text-xs gold-gradient text-center font-small mt-2">Non-Refundable</div>
              </motion.div>
            ))}
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
