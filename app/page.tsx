"use client";
import { motion } from "framer-motion";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Isabellita - Elite Executive Consultation | Executive Power</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
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
        
        .font-luxury {
            font-family: 'Playfair Display', serif;
        }
        
        .gold-gradient {
            background: linear-gradient(135deg, #D4AF37, #F4E4C1, #D4AF37);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .gold-gradient-bg {
            background: linear-gradient(135deg, #D4AF37, #F4E4C1, #D4AF37);
        }
        
        .luxury-border {
            background: linear-gradient(135deg, #D4AF37, #F4E4C1, #D4AF37);
            padding: 1px;
        }
        
        .glass-effect {
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(212, 175, 55, 0.2);
        }
        
        .floating {
            animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        
        .shine-effect {
            position: relative;
            overflow: hidden;
        }
        
        .shine-effect::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(212, 175, 55, 0.1), transparent);
            transform: rotate(45deg);
            animation: shine 3s infinite;
        }
        
        @keyframes shine {
            0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
            100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
        
        .fade-in-up {
            animation: fadeInUp 1s ease-out;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .parallax-bg {
            background-image: 
                radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(212, 175, 55, 0.08) 0%, transparent 50%);
        }
        
        .text-shadow-gold {
            text-shadow: 0 0 30px rgba(212, 175, 55, 0.5);
        }
        
        .hover-lift {
            transition: all 0.3s ease;
        }
        
        .hover-lift:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 40px rgba(212, 175, 55, 0.3);
        }

        .video-container {
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
        }

        .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 20px;
        }

        .program-card {
            background: linear-gradient(135deg, rgba(212, 175, 55, 0.05), rgba(212, 175, 55, 0.02));
            border: 1px solid rgba(212, 175, 55, 0.2);
            position: relative;
            overflow: hidden;
        }

        .program-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, #D4AF37, transparent);
            animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
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

        .luxury-button::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
        }

        .luxury-button:hover::after {
            width: 300px;
            height: 300px;
        }

        @keyframes infinite-scroll {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-50%);
            }
        }

        .animate-infinite-scroll {
            animation: infinite-scroll 40s linear infinite;
        }

        .animate-infinite-scroll:hover {
            animation-play-state: paused;
        }
    `
        }}
      />
      {/* Luxury Navigation */}
      <nav className="fixed w-full top-0 z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img 
                src="/executivepower.avif" 
                alt="Executive Power Logo" 
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#program"
                className="text-gray-300 hover:text-yellow-200 transition"
              >
                Elite Premium
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-yellow-200 transition"
              >
                About
              </a>
              <a
                href="#testimonials"
                className="text-gray-300 hover:text-yellow-200 transition"
              >
                Success Stories
              </a>
              <Link href="/checkout" className="luxury-button text-black px-8 py-3 rounded-full font-semibold inline-block text-center relative z-10">
                Reserve Your Seat
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Enhanced Hero Section with Framer Motion */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-0 relative overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(212, 175, 55, 0.1)" strokeWidth="1"/>
              </pattern>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(212, 175, 55, 0.3)"/>
                <stop offset="50%" stopColor="rgba(244, 228, 193, 0.2)"/>
                <stop offset="100%" stopColor="rgba(212, 175, 55, 0.1)"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Animated Geometric Lines */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
        >
          {/* Diagonal animated lines */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(212, 175, 55, 0.1)" strokeWidth="1" strokeDasharray="5,10"/>
              <line x1="100%" y1="0" x2="0" y2="100%" stroke="rgba(212, 175, 55, 0.1)" strokeWidth="1" strokeDasharray="5,10"/>
            </svg>
          </motion.div>

          {/* Floating geometric shapes */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 border border-yellow-200/20 rotate-45"
            animate={{ 
              rotate: [45, 225, 45],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-3/4 right-1/4 w-24 h-24 border border-yellow-200/20 rounded-full"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-16 h-16 border border-yellow-200/20"
            animate={{ 
              rotate: [0, 180, 360],
              y: [0, -20, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />

          {/* Original gradient blobs */}
          <motion.div 
            className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-yellow-600/20 to-transparent rounded-full filter blur-3xl" 
            animate={{ 
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-yellow-600/10 to-transparent rounded-full filter blur-3xl"
            animate={{ 
              y: [0, 20, 0],
              scale: [1, 0.9, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 3
            }}
          />
        </motion.div>

        {/* Animated connecting lines */}
        <motion.div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M0,50 Q50,0 100,50 T200,50"
              stroke="rgba(212, 175, 55, 0.3)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10,5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 3, delay: 1 }}
            />
            <motion.circle
              cx="20%"
              cy="30%"
              r="2"
              fill="rgba(212, 175, 55, 0.5)"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            />
            <motion.circle
              cx="80%"
              cy="70%"
              r="2"
              fill="rgba(212, 175, 55, 0.5)"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 4 }}
            />
          </svg>
        </motion.div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:items-center">
            {/* Left Content with Staggered Animations */}
            <motion.div
              className="order-1 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="inline-flex items-center space-x-3 glass-effect px-6 py-3 rounded-full mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div 
                  className="w-2 h-2 gold-gradient-bg rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                <span className="text-sm font-medium text-yellow-200 tracking-wide">
                  Exclusive Access • Only 3 Executive Seats Available
                </span>
              </motion.div>

              <motion.h1 
                className="font-luxury text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.span 
                  className="gold-gradient text-shadow-gold block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                 Elevate Your<br />Job Search Game
                </motion.span>
                <motion.span 
                  className="text-white/90 block text-4xl md:text-5xl lg:text-6xl font-medium mb-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  with Executive Power & Isabelita Castilho
                </motion.span>
              </motion.h1>

              {/* Mobile Image - appears here on mobile */}
              <motion.div 
                className="lg:hidden relative flex items-center justify-center mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <div className="relative">
                  {/* Mobile Background Gradient */}
                  <motion.div 
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-3/4 gold-gradient-bg opacity-15 blur-3xl rounded-full"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.15, 0.25, 0.15]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                  <img
                    src="/isa.png"
                    alt="Isabellita - CEO of Executive Power"
                    className="w-full h-auto scale-[1.5] mx-auto relative z-10 max-w-sm"
                    style={{ transformOrigin: 'bottom center' }}
                  />
                </div>
              </motion.div>

              <motion.p 
                className="text-xl text-gray-300/90 mb-10 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                Navigate the Unpublished Executive <span className="text-yellow-200 font-semibold">Job Market</span> with Isabelita Castilho,
                istinguished Executive <span className="text-yellow-200 font-semibold">Career Transition</span> Mentor and a <span className="text-yellow-200 font-semibold">Forbes Member</span>
                Council, Award Winner of Best Career Coach of 2025.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <motion.a
                  href="/checkout"
                  className="luxury-button text-black px-12 py-5 rounded-full font-bold text-lg inline-block text-center shadow-2xl relative z-10"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Reserve Your Executive Session
                </motion.a>
                <motion.a
                  href="#testimonials"
                  className="glass-effect text-yellow-200 px-10 py-5 rounded-full font-medium border border-yellow-200/30 inline-block text-center"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(212, 175, 55, 0.05)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  View Client Transformations
                </motion.a>
              </motion.div>

              <motion.div 
                className="flex flex-wrap gap-8 text-sm items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <motion.div 
                  className="flex items-center space-x-3 glass-effect px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-200" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-300 font-medium">Exceptional • 500+ Executives</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 glass-effect px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <svg className="w-5 h-5 text-yellow-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300 font-medium">Guaranteed Excellence</span>
                </motion.div>
              </motion.div>

              {/* Forbes Badge */}
              <motion.div 
                className="flex items-center justify-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                <motion.div 
                  className="glass-effect p-3 rounded-xl border-2 border-yellow-200/30 hover:border-yellow-200/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <img 
                    src="/FCC-Badge-Square-Black copy.avif" 
                    alt="Forbes Coaches Council Official Member" 
                    className="h-12 w-12 object-contain"
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Image Section with Advanced Animations - Desktop Only */}
            <motion.div 
              className="hidden lg:flex relative items-end justify-center order-2 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              <div className="relative max-w-full mx-auto">
                {/* Animated Background Gradients */}
                <motion.div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-3/4 gold-gradient-bg opacity-15 blur-3xl rounded-full"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                    opacity: [0.15, 0.25, 0.15]
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                <motion.div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1/2 gold-gradient-bg opacity-20 blur-2xl rounded-full"
                  animate={{ 
                    scale: [1, 0.9, 1],
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                <motion.div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1/3 gold-gradient-bg opacity-25 blur-xl rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.25, 0.4, 0.25]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                
                {/* Main Image - Responsive */}
                <motion.div 
                  className="relative mb-0 lg:-mb-96"
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                >
                  <img
                    src="/isa.png"
                    alt="Isabellita - CEO of Executive Power"
                    className="w-full h-auto scale-[1.2] sm:scale-[1.5] lg:scale-[2] mx-auto relative z-10 max-w-xs sm:max-w-sm lg:max-w-none"
                    style={{ transformOrigin: 'bottom center' }}
                  />
                </motion.div>
                
                {/* Animated Floating Badges */}
                <motion.div
                  className="absolute -left-4 top-32 glass-effect px-4 py-2 rounded-full"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    y: [0, 8, 0]
                  }}
                  transition={{ 
                    opacity: { duration: 0.6, delay: 1.7 },
                    x: { duration: 0.6, delay: 1.7 },
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }
                  }}
                  whileHover={{ scale: 1.05, y: 5 }}
                >
                  <span className="text-sm font-semibold text-yellow-200">
                    10+ Years Experience
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* A Little About Us Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 parallax-bg"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full mb-8">
              <motion.div 
                className="w-2 h-2 gold-gradient-bg rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-yellow-200 tracking-wide">
                MEET YOUR EXECUTIVE TRANSFORMATION EXPERT
              </span>
            </div>
            <h2 className="font-luxury text-4xl md:text-6xl font-bold mb-6">
              <span className="gold-gradient">A Little About Her</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover why Fortune 500 executives and industry leaders trust Isabelita
Castilho to accelerate their career transformations and unlock unprecedented
opportunities.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-6 gap-8 max-w-7xl mx-auto">
            {/* Expert Career Transition Advisor */}
            <motion.div
              className="glass-effect p-8 rounded-2xl hover-lift lg:col-span-1 xl:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <h3 className="font-luxury text-2xl font-bold text-white mb-4">Career Transition Advisor</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Isabelita Castilho is a distinguished executive career transition advisor with over a decade of expertise in guiding senior leaders through successful career transitions. She helps professionals navigate today&apos;s competitive job market with unshakeable confidence and strategic precision.
              </p>
            </motion.div>

            {/* Award-Winning Recognition */}
            <motion.div
              className="glass-effect p-8 rounded-2xl hover-lift lg:col-span-1 xl:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <h3 className="font-luxury text-2xl font-bold text-white mb-4">Award-Winning Recognition</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                A prestigious Forbes Coaches Council Member, Winner of the Best Career Coach Award 2025, Isabelita&apos;s exceptional accolades underscore her unparalleled leadership and transformative impact in the executive coaching industry.
              </p>
            </motion.div>

            {/* Global Impact & Proven Results */}
            <motion.div
              className="glass-effect p-8 rounded-2xl hover-lift lg:col-span-2 xl:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <h3 className="font-luxury text-2xl font-bold text-white mb-4">Global Impact & Proven Results</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Isabelita has empowered executives from 40+ countries and 18+ nationalities, creating a global network of success. Her exceptional ability to deliver transformative results is showcased through 85+ published testimonials on LinkedIn, reflecting her unmatched track record of mentorship excellence.
              </p>
            </motion.div>

            {/* Comprehensive & Innovative Approach */}
            <motion.div
              className="glass-effect p-8 rounded-2xl hover-lift lg:col-span-1 xl:col-span-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <h3 className="font-luxury text-2xl font-bold text-white mb-4">Comprehensive & Innovative Approach</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Her cutting-edge strategy covers personal branding, strategic networking conversations, interview mastery, and exclusive market and executive headhunters&apos; insights. Isabelita combines insider knowledge of executive recruitment with innovative methodologies to help leaders secure their next milestone role with unprecedented speed and precision.
              </p>
            </motion.div>

            {/* Published Author & Speaker */}
            <motion.div
              className="glass-effect p-8 rounded-2xl hover-lift lg:col-span-1 xl:col-span-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <h3 className="font-luxury text-2xl font-bold text-white mb-4">Published Author & Speaker</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                As a published author, international speaker, and host of the acclaimed &quot;Happy Monday Executives&quot; podcast and YouTube channel with thousands of followers, Isabelita consistently shares game-changing insights that make a lasting impact on executive careers worldwide, reaching thousands of leaders monthly. She is from Brazil and Lives in Dubai since 2011.
              </p>
            </motion.div>
          </div>
          
          {/* CTA after About Us cards */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="/checkout" 
              className="luxury-button text-black px-10 py-5 rounded-full font-bold text-xl transform hover:scale-105 transition inline-block text-center relative z-10"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Experience Executive Excellence • Start Today
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-luxury text-4xl md:text-5xl font-bold mb-4">
              <span className="gold-gradient">Experience The Transformation</span>
            </h2>
            <p className="text-xl text-gray-400">
              Watch how executives revolutionized their careers
            </p>
          </div>
          <div className="luxury-border rounded-3xl p-1">
            <div className="bg-[#1B1C1D] rounded-3xl p-8">
              <div className="video-container">
                <iframe
                  src="https://player.vimeo.com/video/1120938621?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  title="Executive Power Success Stories"
                  frameBorder={0}
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          
          {/* CTA after Video */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="/checkout" 
              className="luxury-button text-black px-12 py-5 rounded-full font-bold text-xl transform hover:scale-105 transition inline-block text-center relative z-10"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Join The Success Stories • Reserve Your Seat
            </motion.a>
          </motion.div>
        </div>
      </section>




      {/* Testimonials Luxury Section */}
      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-luxury text-4xl md:text-5xl font-bold mb-6">
              <span className="gold-gradient">Success Stories That Inspire</span>
            </h2>
            <p className="text-xl text-gray-400">
              From our exclusive alumni network
            </p>
          </div>
          
          {/* Infinite Moving Testimonials */}
          <div className="relative overflow-hidden">
            <div className="flex animate-infinite-scroll gap-8">
              {/* First set of testimonials */}
              <div className="flex gap-8 flex-shrink-0">
                {/* C.M - Dubai to Dublin */}
                <div className="glass-effect rounded-2xl p-8 hover-lift flex-shrink-0 w-80">
                  <div className="flex mb-4">
                    <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    &quot;I had the pleasure of working with Isabelita through the TBG program and what a life changer her guidance was! The ease with which she combines her expertise with genuine care is amazing.&quot;
                  </p>
                  <div className="text-center">
                    <div className="font-semibold text-white">C.M.</div>
                    <div className="text-sm text-yellow-200">Dubai to Dublin Transition</div>
                  </div>
                </div>

                {/* L.Q - France to Argentina */}
                <div className="glass-effect rounded-2xl p-8 hover-lift flex-shrink-0 w-80">
                  <div className="flex mb-4">
                    <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    &quot;For the past 3 months, Isabelita has been my rock, guiding me through what turned out to be a game-changing professional transition. She helped me discover what I really wanted in my career journey.&quot;
                  </p>
                  <div className="text-center">
                    <div className="font-semibold text-white">L.Q.</div>
                    <div className="text-sm text-yellow-200">France to Argentina Transition</div>
                  </div>
                </div>

                {/* H.R - Dubai */}
                <div className="glass-effect rounded-2xl p-8 hover-lift flex-shrink-0 w-80">
                  <div className="flex mb-4">
                    <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    &quot;I was lucky enough to be mentored by Isabelita. An incredible person with an enviable knowledge of how a senior executive can achieve success in their next professional move.&quot;
                  </p>
                  <div className="text-center">
                    <div className="font-semibold text-white">H.R.</div>
                    <div className="text-sm text-yellow-200">Dubai</div>
                  </div>
                </div>

                {/* O.K - Netherlands */}
                <div className="glass-effect rounded-2xl p-8 hover-lift flex-shrink-0 w-80">
                  <div className="flex mb-4">
                    <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    &quot;Isabelita supported me on a bi-weekly basis to find my next assignment. Her way of working is professional and structured with a personal flavour which makes the interaction efficient and fun.&quot;
                  </p>
                  <div className="text-center">
                    <div className="font-semibold text-white">O.K.</div>
                    <div className="text-sm text-yellow-200">Netherlands</div>
                  </div>
                </div>

                {/* S.M - Germany */}
                <div className="glass-effect rounded-2xl p-8 hover-lift flex-shrink-0 w-80">
                  <div className="flex mb-4">
                    <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    &quot;I had the pleasure of working with Isabelita, a dedicated and success-oriented professional. Her extensive professional network and remarkable ability to connect people make her an invaluable asset.&quot;
                  </p>
                  <div className="text-center">
                    <div className="font-semibold text-white">S.M.</div>
                    <div className="text-sm text-yellow-200">Germany</div>
                  </div>
                </div>

                {/* P.C - United States */}
                <div className="glass-effect rounded-2xl p-8 hover-lift flex-shrink-0 w-80">
                  <div className="flex mb-4">
                    <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    &quot;I have learned so much from Isabelita! She taught me the immense value of Visibility and Networking. Most importantly, Isabelita empowered me to drive myself forward, realizing that the sky is my only limit.&quot;
                  </p>
                  <div className="text-center">
                    <div className="font-semibold text-white">P.C.</div>
                    <div className="text-sm text-yellow-200">United States</div>
                  </div>
                </div>
              </div>

              {/* Duplicate set for infinite scroll */}
              <div className="flex gap-8 flex-shrink-0">
                {/* C.M - Dubai to Dublin */}
                <div className="glass-effect rounded-2xl p-8 hover-lift flex-shrink-0 w-80">
                  <div className="flex mb-4">
                    <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    &quot;I had the pleasure of working with Isabelita through the TBG program and what a life changer her guidance was! The ease with which she combines her expertise with genuine care is amazing.&quot;
                  </p>
                  <div className="text-center">
                    <div className="font-semibold text-white">C.M.</div>
                    <div className="text-sm text-yellow-200">Dubai to Dublin Transition</div>
                  </div>
                </div>

                {/* L.Q - France to Argentina */}
                <div className="glass-effect rounded-2xl p-8 hover-lift flex-shrink-0 w-80">
                  <div className="flex mb-4">
                    <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    &quot;For the past 3 months, Isabelita has been my rock, guiding me through what turned out to be a game-changing professional transition. She helped me discover what I really wanted in my career journey.&quot;
                  </p>
                  <div className="text-center">
                    <div className="font-semibold text-white">L.Q.</div>
                    <div className="text-sm text-yellow-200">France to Argentina Transition</div>
                  </div>
                </div>

                {/* H.R - Dubai */}
                <div className="glass-effect rounded-2xl p-8 hover-lift flex-shrink-0 w-80">
                  <div className="flex mb-4">
                    <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    &quot;I was lucky enough to be mentored by Isabelita. An incredible person with an enviable knowledge of how a senior executive can achieve success in their next professional move.&quot;
                  </p>
                  <div className="text-center">
                    <div className="font-semibold text-white">H.R.</div>
                    <div className="text-sm text-yellow-200">Dubai</div>
                  </div>
                </div>

                {/* O.K - Netherlands */}
                <div className="glass-effect rounded-2xl p-8 hover-lift flex-shrink-0 w-80">
                  <div className="flex mb-4">
                    <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    &quot;Isabelita supported me on a bi-weekly basis to find my next assignment. Her way of working is professional and structured with a personal flavour which makes the interaction efficient and fun.&quot;
                  </p>
                  <div className="text-center">
                    <div className="font-semibold text-white">O.K.</div>
                    <div className="text-sm text-yellow-200">Netherlands</div>
                  </div>
                </div>

                {/* S.M - Germany */}
                <div className="glass-effect rounded-2xl p-8 hover-lift flex-shrink-0 w-80">
                  <div className="flex mb-4">
                    <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    &quot;I had the pleasure of working with Isabelita, a dedicated and success-oriented professional. Her extensive professional network and remarkable ability to connect people make her an invaluable asset.&quot;
                  </p>
                  <div className="text-center">
                    <div className="font-semibold text-white">S.M.</div>
                    <div className="text-sm text-yellow-200">Germany</div>
                  </div>
                </div>

                {/* P.C - United States */}
                <div className="glass-effect rounded-2xl p-8 hover-lift flex-shrink-0 w-80">
                  <div className="flex mb-4">
                    <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    &quot;I have learned so much from Isabelita! She taught me the immense value of Visibility and Networking. Most importantly, Isabelita empowered me to drive myself forward, realizing that the sky is my only limit.&quot;
                  </p>
                  <div className="text-center">
                    <div className="font-semibold text-white">P.C.</div>
                    <div className="text-sm text-yellow-200">United States</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Pricing Plans Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black/20 to-transparent relative overflow-hidden">
        <div className="absolute inset-0 parallax-bg"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full mb-8">
              <motion.div 
                className="w-2 h-2 gold-gradient-bg rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-yellow-200 tracking-wide">
                EXECUTIVE CAREER TRANSFORMATION PLANS
              </span>
            </div>
            <h2 className="font-luxury text-4xl md:text-6xl font-bold mb-6">
              <span className="gold-gradient">Choose Your Success Path</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Invest in your executive future with our proven career acceleration programs designed for senior leaders ready to unlock their next milestone role.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Comprehensive Executive Career Roadmap - Now First */}
            <motion.div 
              className="glass-effect p-10 rounded-3xl hover-lift border-2 border-yellow-200/40 bg-gradient-to-br from-yellow-600/5 to-yellow-800/5 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 gold-gradient-bg text-black text-sm font-bold uppercase rounded-full shadow-xl">
                Most Comprehensive
              </div>
              
              <div className="text-center mb-8">
                <h3 className="font-luxury text-3xl font-bold text-white mb-4">
                  Customized Comprehensive Executive Career Roadmap
                </h3>
                <p className="text-lg text-gray-300 mb-6">
                  Strategic Job Search Intelligence with Job Landing Plan
                </p>
                <div className="mb-6">
                  <div className="inline-flex items-center space-x-4">
                    <span className="font-luxury text-5xl font-bold gold-gradient">
                      EUR 500
                    </span>
                    <div className="text-left">
                      <div className="text-yellow-200 font-semibold">One Time</div>
                      <div className="text-sm text-gray-400">Complete Package</div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">
                  Get your comprehensive career strategy report with CV/LinkedIn feedback, target companies, executive recruiter network, and proven outreach templates.
                </p>
                <div className="flex items-center justify-center mb-6 glass-effect px-4 py-3 rounded-full">
                  <svg className="w-5 h-5 text-yellow-200 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold text-white">One 60-minute strategy session + comprehensive written report delivered within 10-15 business days</span>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-luxury text-xl font-bold text-white mb-4">What You Get:</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-200 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <span className="font-semibold text-white">10 Target Companies</span>
                        <p className="text-gray-400 text-sm mt-1">Carefully selected organizations aligned with your experience, salary expectations, and career goals. Each company profiled with key decision makers and current opportunities.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-200 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <span className="font-semibold text-white">30 Key Headhunters</span>
                        <p className="text-gray-400 text-sm mt-1">Curated list of executive recruiters specializing in your industry and function, with contact details and relationship-building strategies.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-200 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <span className="font-semibold text-white">CV & LinkedIn Feedback</span>
                        <p className="text-gray-400 text-sm mt-1">Professional analysis and optimization recommendations for maximum executive appeal and ATS compatibility.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-200 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <span className="font-semibold text-white">Strategic Roadmap</span>
                        <p className="text-gray-400 text-sm mt-1">Step-by-step execution plan with timelines, next actions, and proven message templates for reaching out to decision makers and headhunters.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-luxury text-xl font-bold text-white mb-4">Process:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-6 h-6 gold-gradient-bg rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-black text-sm font-bold">1</span>
                      </div>
                      <span className="text-gray-300">One-hour strategic consultation meeting</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 gold-gradient-bg rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-black text-sm font-bold">2</span>
                      </div>
                      <span className="text-gray-300">Comprehensive report delivery within 10-15 business days after meeting</span>
                    </div>
                  </div>
                </div>
              </div>

              <motion.a
                href="/checkout/form?package=comprehensive&price=500"
                className="luxury-button text-black w-full py-4 rounded-full font-bold text-lg inline-block text-center relative z-10 shadow-2xl"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Get Your Complete Career Roadmap
              </motion.a>
            </motion.div>

            {/* Strategic Roadmap Light Plan - Now Second */}
            <motion.div 
              className="glass-effect p-10 rounded-3xl hover-lift border border-yellow-600/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <h3 className="font-luxury text-3xl font-bold text-white mb-4">
                  Strategic Job Search Intelligence
                </h3>
                <p className="text-lg text-gray-300 mb-6">
                  For Senior Leaders with Job Landing Recommendations Actions
                </p>
                <div className="mb-6">
                  <div className="inline-flex items-center space-x-4">
                    <span className="font-luxury text-5xl font-bold gold-gradient">
                      EUR 150
                    </span>
                    <div className="text-left">
                      <div className="text-yellow-200 font-semibold">One Time</div>
                      <div className="text-sm text-gray-400">Single Payment</div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">
                  Get your comprehensive career strategy report with your CV/LinkedIn feedback.
                </p>
                <div className="flex items-center justify-center mb-6 glass-effect px-4 py-3 rounded-full">
                  <svg className="w-5 h-5 text-yellow-200 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold text-white">One 60-minute strategy session + comprehensive written report delivered within 10-15 business days</span>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-luxury text-xl font-bold text-white mb-4">What You Get:</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-200 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <span className="font-semibold text-white">CV & LinkedIn Feedback</span>
                        <p className="text-gray-400 text-sm mt-1">Professional analysis and optimization recommendations for maximum executive appeal and ATS compatibility.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-200 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <span className="font-semibold text-white">Strategic Roadmap</span>
                        <p className="text-gray-400 text-sm mt-1">Recommendations for your next steps with a comprehensive customized report, including market trends.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-luxury text-xl font-bold text-white mb-4">Process:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-6 h-6 gold-gradient-bg rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-black text-sm font-bold">1</span>
                      </div>
                      <span className="text-gray-300">One-hour strategic consultation meeting</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 gold-gradient-bg rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-black text-sm font-bold">2</span>
                      </div>
                      <span className="text-gray-300">Comprehensive report delivery within 7-10 business days after meeting</span>
                    </div>
                  </div>
                </div>
              </div>

              <motion.a
                href="/checkout/form?package=basic&price=150"
                className="luxury-button text-black w-full py-4 rounded-full font-bold text-lg inline-block text-center relative z-10"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Get Your Strategic Roadmap
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Program Section */}
      <section id="program" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full mb-6">
              <span className="text-sm text-yellow-200 tracking-widest">
                The Executive Power Job Landing System™ Signature Program
              </span>
            </div>
            <h2 className="font-luxury text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Secure your next role by following our</span>
              <span className="gold-gradient"> successful formula</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Tested and proven by niche senior professionals over the last decade.
            </p>
          </div>
          
          {/* Program Phases */}
          <div className="space-y-12">
            
            {/* Phase 1 */}
            <div className="program-card rounded-2xl p-8 hover-lift">
              <h3 className="font-luxury text-2xl font-bold mb-4 text-white">
                Phase 1: Foundation: Executive Branding Trinity Foundation ™
              </h3>
              <p className="text-yellow-200 font-semibold mb-6">Full Execution Done for You</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-yellow-200 mr-3">✓</span>
                  <span>Professional CV enhancement and optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-200 mr-3">✓</span>
                  <span>LinkedIn profile transformation for executive positioning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-200 mr-3">✓</span>
                  <span>Executive bio development for maximum impact</span>
                </li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="program-card rounded-2xl p-8 hover-lift">
              <h3 className="font-luxury text-2xl font-bold mb-4 text-white">
                Phase 2: Published Market - &apos;The Shark&apos; Move&apos; Job Search Strategy ™
              </h3>
              <p className="text-yellow-200 font-semibold mb-6">Strategy and Execution Support</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-yellow-200 mr-3">✓</span>
                  <span>360° Published Market Approach - Strategic job search and application methodology with psychology of influence to nail interviews with hiring managers and decision makers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-200 mr-3">✓</span>
                  <span>CV Customization for each job application - up to 5 versions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-200 mr-3">✓</span>
                  <span>Executive Brand Positioning - Practical and Live application with real-time feedback for diverse cultural markets</span>
                </li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="program-card rounded-2xl p-8 hover-lift">
              <h3 className="font-luxury text-2xl font-bold mb-4 text-white">
                Phase 3: Elite Headhunters Outreach: Become a Magnet for Headhunters &amp; Recruiters
              </h3>
              <p className="text-yellow-200 font-semibold mb-6">Strategy and Execution Support</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-yellow-200 mr-3">✓</span>
                  <span>Mapping - Customized List of Executive Headhunters in real-time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-200 mr-3">✓</span>
                  <span>Winner Mindset - You&apos;ll learn all the secrets of headhunters&apos;s game, gaining faster rapport and passing interviews</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-200 mr-3">✓</span>
                  <span>Mock Interview Preparation with headhunters and recruiters - unlimited</span>
                </li>
              </ul>
            </div>

            {/* Phase 4 */}
            <div className="program-card rounded-2xl p-8 hover-lift">
              <h3 className="font-luxury text-2xl font-bold mb-4 text-white">
                Phase 4: Hidden Job Market Mastery - Unpublished Executive Job Market
              </h3>
              <p className="text-yellow-200 font-semibold mb-6">Strategy and Execution Support</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-yellow-200 mr-3">✓</span>
                  <span>Unpublished Market Access - Exclusive mindset and methodology to access the hidden Jobs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-200 mr-3">✓</span>
                  <span>LinkedIn Networking Mastery - Gain Traction and re-active your LinkedIn network with a successful mindset other than a &quot;needy&quot; mindset. Transform virtual talk into actionable next steps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-200 mr-3">✓</span>
                  <span>Strategic Relationship Building - Access new connections and gain direct introductions to who matters (decision makers and executives of influence)</span>
                </li>
              </ul>
            </div>

            {/* Phase 5 */}
            <div className="program-card rounded-2xl p-8 hover-lift">
              <h3 className="font-luxury text-2xl font-bold mb-4 text-white">
                Phase 5: Conversion &amp; Opportunity Creation - Match Making
              </h3>
              <p className="text-yellow-200 font-semibold mb-6">Strategy and Execution Support</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-yellow-200 mr-3">✓</span>
                  <span>&quot;Funneling &amp; Squeezing the Lemon&quot; Technique ™ - Converting casual conversations into actionable opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-200 mr-3">✓</span>
                  <span>Advanced Communication Mastery - Proprietary techniques for creating opportunities where none existed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-200 mr-3">✓</span>
                  <span>Referral &amp; Introduction to Executive Power&apos;s Networking - Direct Access and Introductions to Executive Power&apos;s high caliber network</span>
                </li>
              </ul>
            </div>

            {/* Throughout the Program */}
            <div className="program-card rounded-2xl p-8 hover-lift border-2 border-yellow-200/30">
              <h3 className="font-luxury text-2xl font-bold mb-4 text-yellow-200">
                Throughout the Program: Interview Excellence &amp; Negotiation Mastery
              </h3>
              <p className="text-white font-semibold mb-6">Customized Job Interviews for Each Job - Mock Interviews - Unlimited (24 hours notice)</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-yellow-200 mr-3">✓</span>
                  <span>Interview Preparation Mastery - Comprehensive preparation strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-200 mr-3">✓</span>
                  <span>Offer Negotiation - Maximize your compensation package</span>
                </li>
              </ul>
            </div>

            {/* Success Integration */}
            <div className="program-card rounded-2xl p-8 hover-lift bg-gradient-to-r from-yellow-200/10 to-yellow-200/5">
              <h3 className="font-luxury text-2xl font-bold mb-4 text-yellow-200">
                Success Integration &amp; Career Acceleration - Sold Separately
              </h3>
              <p className="text-gray-300 mb-6">Strategic Onboarding - First 30/60/90 days</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-yellow-200 mr-3">✓</span>
                  <span>Foundation Building - Road Map for rapid career ladder progression</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-200 mr-3">✓</span>
                  <span>Organizational Success Strategies - Fast-track advancement within your new role</span>
                </li>
              </ul>
            </div>

            {/* Application Form CTA */}
            <div className="text-center mt-16">
              <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="font-luxury text-2xl font-bold mb-4 text-white">
                  Exclusive Program - Limited Availability
                </h3>
                <p className="text-gray-300 mb-6">
                  Only Available for specific profiles, fill up this form now and if you are approved someone of our team will be in touch. If you don&apos;t hear back within 7 days we regret that you didn&apos;t qualify.
                </p>
                <motion.a 
                  href="/checkout/form?package=comprehensive&price=500" 
                  className="luxury-button text-black px-12 py-5 rounded-full font-bold text-xl transform hover:scale-105 transition inline-block text-center relative z-10"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Apply Now • Exclusive Access
                </motion.a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Luxury Footer */}
      <footer className="border-t border-yellow-600/20 py-12 px-6 mt-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/executivepower.avif" 
                  alt="Executive Power Logo" 
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-400 text-sm">
                Transforming leaders into legends since 2009.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-200 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#program" className="hover:text-yellow-200 transition">
                    Elite Premium Details
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="hover:text-yellow-200 transition"
                  >
                    Success Stories
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.executivespower.com"
                    className="hover:text-yellow-200 transition"
                  >
                    Main Website
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-200 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-yellow-200 transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-200 transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-200 transition">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-200 mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-white/10 transition"
                >
                  <span className="text-yellow-200">in</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-white/10 transition"
                >
                  <span className="text-yellow-200">X</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-white/10 transition"
                >
                  <span className="text-yellow-200">@</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-yellow-600/10 pt-8 text-center text-sm text-gray-500">
            <p>
              © 2025 Executive Power Company. All rights reserved. | Crafted with
              excellence for exceptional leaders.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}