"use client";
import { motion } from "framer-motion";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <meta charSet=&quot;UTF-8&quot; />
      <meta name="viewport&quot; content="width=device-width, initial-scale=1.0&quot; />
      <title>Isabellita - Elite Executive Consultation | Executive Power</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500;600;700&display=swap&quot;
        rel=&quot;stylesheet&quot;
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            &quot;\n        :root {\n            --gold-primary: #D4AF37;\n            --gold-light: #F4E4C1;\n            --gold-dark: #B8941F;\n        }\n        \n        body {\n            font-family: 'Inter', sans-serif;\n            background-color: #1B1C1D;\n            overflow-x: hidden;\n        }\n        \n        .font-luxury {\n            font-family: 'Playfair Display', serif;\n        }\n        \n        .gold-gradient {\n            background: linear-gradient(135deg, #D4AF37, #F4E4C1, #D4AF37);\n            -webkit-background-clip: text;\n            -webkit-text-fill-color: transparent;\n            background-clip: text;\n        }\n        \n        .gold-gradient-bg {\n            background: linear-gradient(135deg, #D4AF37, #F4E4C1, #D4AF37);\n        }\n        \n        .luxury-border {\n            background: linear-gradient(135deg, #D4AF37, #F4E4C1, #D4AF37);\n            padding: 1px;\n        }\n        \n        .glass-effect {\n            background: rgba(255, 255, 255, 0.02);\n            backdrop-filter: blur(10px);\n            border: 1px solid rgba(212, 175, 55, 0.2);\n        }\n        \n        .floating {\n            animation: float 6s ease-in-out infinite;\n        }\n        \n        @keyframes float {\n            0%, 100% { transform: translateY(0px); }\n            50% { transform: translateY(-20px); }\n        }\n        \n        .shine-effect {\n            position: relative;\n            overflow: hidden;\n        }\n        \n        .shine-effect::before {\n            content: '';\n            position: absolute;\n            top: -50%;\n            left: -50%;\n            width: 200%;\n            height: 200%;\n            background: linear-gradient(45deg, transparent, rgba(212, 175, 55, 0.1), transparent);\n            transform: rotate(45deg);\n            animation: shine 3s infinite;\n        }\n        \n        @keyframes shine {\n            0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }\n            100% { transform: translateX(100%) translateY(100%) rotate(45deg); }\n        }\n        \n        .fade-in-up {\n            animation: fadeInUp 1s ease-out;\n        }\n        \n        @keyframes fadeInUp {\n            from {\n                opacity: 0;\n                transform: translateY(30px);\n            }\n            to {\n                opacity: 1;\n                transform: translateY(0);\n            }\n        }\n        \n        .parallax-bg {\n            background-image: \n                radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),\n                radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),\n                radial-gradient(circle at 40% 80%, rgba(212, 175, 55, 0.08) 0%, transparent 50%);\n        }\n        \n        .text-shadow-gold {\n            text-shadow: 0 0 30px rgba(212, 175, 55, 0.5);\n        }\n        \n        .hover-lift {\n            transition: all 0.3s ease;\n        }\n        \n        .hover-lift:hover {\n            transform: translateY(-5px);\n            box-shadow: 0 10px 40px rgba(212, 175, 55, 0.3);\n        }\n\n        .video-container {\n            position: relative;\n            padding-bottom: 56.25%;\n            height: 0;\n            overflow: hidden;\n        }\n\n        .video-container iframe {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            border-radius: 20px;\n        }\n\n        .program-card {\n            background: linear-gradient(135deg, rgba(212, 175, 55, 0.05), rgba(212, 175, 55, 0.02));\n            border: 1px solid rgba(212, 175, 55, 0.2);\n            position: relative;\n            overflow: hidden;\n        }\n\n        .program-card::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            height: 2px;\n            background: linear-gradient(90deg, transparent, #D4AF37, transparent);\n            animation: shimmer 2s infinite;\n        }\n\n        @keyframes shimmer {\n            0% { transform: translateX(-100%); }\n            100% { transform: translateX(100%); }\n        }\n\n        .luxury-button {\n            background: linear-gradient(135deg, #D4AF37, #F4E4C1, #D4AF37);\n            background-size: 200% 200%;\n            animation: goldShift 3s ease infinite;\n            position: relative;\n            overflow: hidden;\n        }\n\n        @keyframes goldShift {\n            0% { background-position: 0% 50%; }\n            50% { background-position: 100% 50%; }\n            100% { background-position: 0% 50%; }\n        }\n\n        .luxury-button::after {\n            content: '';\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            width: 0;\n            height: 0;\n            border-radius: 50%;\n            background: rgba(255, 255, 255, 0.5);\n            transform: translate(-50%, -50%);\n            transition: width 0.6s, height 0.6s;\n        }\n\n        .luxury-button:hover::after {\n            width: 300px;\n            height: 300px;\n        }\n\n        @keyframes infinite-scroll {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(-50%);\n            }\n        }\n\n        .animate-infinite-scroll {\n            animation: infinite-scroll 40s linear infinite;\n        }\n\n        .animate-infinite-scroll:hover {\n            animation-play-state: paused;\n        }\n    &quot;
        }}
      />
      {/* Luxury Navigation */}
      <nav className="fixed w-full top-0 z-50 glass-effect&quot;>
        <div className="container mx-auto px-6 py-4&quot;>
          <div className="flex justify-between items-center&quot;>
            <div className="flex items-center space-x-2&quot;>
              <img 
                src="/executivepower.avif&quot; 
                alt="Executive Power Logo&quot; 
                className="h-12 w-auto&quot;
              />
            </div>
            <div className="hidden md:flex items-center space-x-8&quot;>
              <a
                href="#program&quot;
                className="text-gray-300 hover:text-yellow-200 transition&quot;
              >
                Program
              </a>
              <a
                href="#about&quot;
                className="text-gray-300 hover:text-yellow-200 transition&quot;
              >
                About
          </a>
          <a
                href="#testimonials&quot;
                className="text-gray-300 hover:text-yellow-200 transition&quot;
              >
                Success Stories
              </a>
          <Link href="/checkout&quot; className="luxury-button text-black px-8 py-3 rounded-full font-semibold inline-block text-center relative z-10&quot;>
            Reserve Your Seat
          </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Enhanced Hero Section with Framer Motion */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-0 relative overflow-hidden&quot;>
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-30&quot;>
          <svg className="w-full h-full&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;>
            <defs>
              <pattern id="grid&quot; width=&quot;60&quot; height=&quot;60&quot; patternUnits=&quot;userSpaceOnUse&quot;>
                <path d=&quot;M 60 0 L 0 0 0 60&quot; fill=&quot;none&quot; stroke=&quot;rgba(212, 175, 55, 0.1)&quot; strokeWidth=&quot;1&quot;/>
              </pattern>
              <linearGradient id="goldGradient&quot; x1=&quot;0%&quot; y1=&quot;0%&quot; x2=&quot;100%&quot; y2=&quot;100%&quot;>
                <stop offset=&quot;0%&quot; stopColor=&quot;rgba(212, 175, 55, 0.3)&quot;/>
                <stop offset=&quot;50%&quot; stopColor=&quot;rgba(244, 228, 193, 0.2)&quot;/>
                <stop offset=&quot;100%&quot; stopColor=&quot;rgba(212, 175, 55, 0.1)&quot;/>
              </linearGradient>
            </defs>
            <rect width=&quot;100%&quot; height=&quot;100%&quot; fill=&quot;url(#grid)&quot; />
          </svg>
        </div>

        {/* Animated Geometric Lines */}
        <motion.div 
          className="absolute inset-0 opacity-20&quot;
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
        >
          {/* Diagonal animated lines */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full&quot;
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 60, repeat: Infinity, ease: &quot;linear&quot; }}
          >
            <svg className="w-full h-full&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;>
              <line x1=&quot;0&quot; y1=&quot;0&quot; x2=&quot;100%&quot; y2=&quot;100%&quot; stroke=&quot;rgba(212, 175, 55, 0.1)&quot; strokeWidth=&quot;1&quot; strokeDasharray=&quot;5,10&quot;/>
              <line x1=&quot;100%&quot; y1=&quot;0&quot; x2=&quot;0&quot; y2=&quot;100%&quot; stroke=&quot;rgba(212, 175, 55, 0.1)&quot; strokeWidth=&quot;1&quot; strokeDasharray=&quot;5,10&quot;/>
            </svg>
          </motion.div>

          {/* Floating geometric shapes */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 border border-yellow-200/20 rotate-45&quot;
            animate={{ 
              rotate: [45, 225, 45],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: &quot;easeInOut&quot; }}
          />
          <motion.div
            className="absolute top-3/4 right-1/4 w-24 h-24 border border-yellow-200/20 rounded-full&quot;
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: &quot;easeInOut&quot;, delay: 2 }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-16 h-16 border border-yellow-200/20&quot;
            animate={{ 
              rotate: [0, 180, 360],
              y: [0, -20, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: &quot;easeInOut&quot;, delay: 4 }}
          />

          {/* Original gradient blobs */}
          <motion.div 
            className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-yellow-600/20 to-transparent rounded-full filter blur-3xl&quot; 
            animate={{ 
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: &quot;easeInOut&quot; 
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-yellow-600/10 to-transparent rounded-full filter blur-3xl&quot;
            animate={{ 
              y: [0, 20, 0],
              scale: [1, 0.9, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: &quot;easeInOut&quot;,
              delay: 3
            }}
          />
        </motion.div>

        {/* Animated connecting lines */}
        <motion.div className="absolute inset-0 opacity-10&quot;>
          <svg className="w-full h-full&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;>
            <motion.path
              d=&quot;M0,50 Q50,0 100,50 T200,50&quot;
              stroke=&quot;rgba(212, 175, 55, 0.3)&quot;
              strokeWidth=&quot;2&quot;
              fill=&quot;none&quot;
              strokeDasharray=&quot;10,5&quot;
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 3, delay: 1 }}
            />
            <motion.circle
              cx=&quot;20%&quot;
              cy=&quot;30%&quot;
              r=&quot;2&quot;
              fill=&quot;rgba(212, 175, 55, 0.5)&quot;
              animate={{
                scale: [1, 2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            />
            <motion.circle
              cx=&quot;80%&quot;
              cy=&quot;70%&quot;
              r=&quot;2&quot;
              fill=&quot;rgba(212, 175, 55, 0.5)&quot;
              animate={{
                scale: [1, 2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 4 }}
            />
          </svg>
        </motion.div>

        <div className="container mx-auto max-w-7xl relative z-10&quot;>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:items-center&quot;>
            {/* Left Content with Staggered Animations */}
            <motion.div
              className="order-1 lg:order-1&quot;
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: &quot;easeOut&quot; }}
            >
              <motion.div 
                className="inline-flex items-center space-x-3 glass-effect px-6 py-3 rounded-full mb-8&quot;
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div 
                  className="w-2 h-2 gold-gradient-bg rounded-full&quot;
                  animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                <span className="text-sm font-medium text-yellow-200 tracking-wide&quot;>
                  Exclusive Access • Only 3 Executive Seats Available
                </span>
              </motion.div>

              <motion.h1 
                className="font-luxury text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1]&quot;
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.span 
                  className="gold-gradient text-shadow-gold block&quot;
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                 Elevating Your<br />Job Search Game
                </motion.span>
                <motion.span 
                  className="text-white/90 block text-4xl md:text-5xl lg:text-6xl font-medium mb-2&quot;
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  with Executive Power & Isabelita Castilho
                </motion.span>
              </motion.h1>

              {/* Mobile Image - appears here on mobile */}
              <motion.div 
                className="lg:hidden relative flex items-center justify-center mb-8&quot;
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <div className="relative&quot;>
                  {/* Mobile Background Gradient */}
                  <motion.div 
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-3/4 gold-gradient-bg opacity-15 blur-3xl rounded-full&quot;
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.15, 0.25, 0.15]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: &quot;easeInOut&quot; 
                    }}
                  />
                  <img
                    src="/isa.png&quot;
                    alt="Isabellita - CEO of Executive Power&quot;
                    className="w-full h-auto scale-[1.5] mx-auto relative z-10 max-w-sm&quot;
                    style={{ transformOrigin: 'bottom center' }}
                  />
                </div>
              </motion.div>

              <motion.p 
                className="text-xl text-gray-300/90 mb-10 leading-relaxed max-w-2xl&quot;
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                Experience a bespoke executive transformation with
                <span className="text-yellow-200 font-semibold&quot;> Isabellita</span>, 
                distinguished CEO and architect of Fortune 500 leadership excellence.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-8&quot;
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <motion.a
                  href="/checkout&quot;
                  className="luxury-button text-black px-12 py-5 rounded-full font-bold text-lg inline-block text-center shadow-2xl relative z-10&quot;
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: &quot;spring&quot;, stiffness: 400, damping: 17 }}
                >
                  Reserve Your Executive Session • $150
                </motion.a>
                <motion.a
                  href="#testimonials&quot;
                  className="glass-effect text-yellow-200 px-10 py-5 rounded-full font-medium border border-yellow-200/30 inline-block text-center&quot;
                  whileHover={{ scale: 1.02, backgroundColor: &quot;rgba(212, 175, 55, 0.05)&quot; }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: &quot;spring&quot;, stiffness: 400, damping: 17 }}
                >
                  View Client Transformations
                </motion.a>
              </motion.div>

              <motion.div 
                className="flex flex-wrap gap-8 text-sm items-center&quot;
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <motion.div 
                  className="flex items-center space-x-3 glass-effect px-4 py-2 rounded-full&quot;
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex space-x-1&quot;>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-200&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 20 20&quot;>
                        <path d=&quot;M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z&quot; />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-300 font-medium&quot;>Exceptional • 500+ Executives</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 glass-effect px-4 py-2 rounded-full&quot;
                  whileHover={{ scale: 1.05 }}
                >
                  <svg className="w-5 h-5 text-yellow-200&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 20 20&quot;>
                    <path fillRule=&quot;evenodd&quot; d=&quot;M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z&quot; clipRule=&quot;evenodd&quot; />
                  </svg>
                  <span className="text-gray-300 font-medium&quot;>Guaranteed Excellence</span>
                </motion.div>
              </motion.div>

              {/* Forbes Badge */}
              <motion.div 
                className="flex items-center justify-center mt-8&quot;
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                <motion.div 
                  className="glass-effect p-3 rounded-xl border-2 border-yellow-200/30 hover:border-yellow-200/50 transition-all duration-300&quot;
                  whileHover={{ scale: 1.1, y: -3 }}
                  transition={{ type: &quot;spring&quot;, stiffness: 400, damping: 17 }}
                >
                  <img 
                    src="/FCC-Badge-Square-Black copy.avif&quot; 
                    alt="Forbes Coaches Council Official Member&quot; 
                    className="h-12 w-12 object-contain&quot;
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Image Section with Advanced Animations - Desktop Only */}
            <motion.div 
              className="hidden lg:flex relative items-end justify-center order-2 lg:order-2&quot;
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: &quot;easeOut&quot; }}
            >
              <div className="relative max-w-full mx-auto&quot;>
                {/* Animated Background Gradients */}
                <motion.div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-3/4 gold-gradient-bg opacity-15 blur-3xl rounded-full&quot;
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                    opacity: [0.15, 0.25, 0.15]
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity, 
                    ease: &quot;easeInOut&quot; 
                  }}
                />
                <motion.div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1/2 gold-gradient-bg opacity-20 blur-2xl rounded-full&quot;
                  animate={{ 
                    scale: [1, 0.9, 1],
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: &quot;easeInOut&quot; 
                  }}
                />
                <motion.div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1/3 gold-gradient-bg opacity-25 blur-xl rounded-full&quot;
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.25, 0.4, 0.25]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: &quot;easeInOut&quot; 
                  }}
                />
                
                {/* Main Image - Responsive */}
                <motion.div 
                  className="relative mb-0 lg:-mb-96&quot;
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.6, ease: &quot;easeOut&quot; }}
                >
                  <img
                    src="/isa.png&quot;
                    alt="Isabellita - CEO of Executive Power&quot;
                    className="w-full h-auto scale-[1.2] sm:scale-[1.5] lg:scale-[2] mx-auto relative z-10 max-w-xs sm:max-w-sm lg:max-w-none&quot;
                    style={{ transformOrigin: 'bottom center' }}
                  />
                </motion.div>
                
                {/* Animated Floating Badges */}
                <motion.div 
                  className="absolute -right-4 top-20 glass-effect px-4 py-2 rounded-full&quot;
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    opacity: { duration: 0.6, delay: 1.5 },
                    x: { duration: 0.6, delay: 1.5 },
                    y: { duration: 4, repeat: Infinity, ease: &quot;easeInOut&quot; }
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <span className="text-sm font-semibold text-yellow-200&quot;>
                    Fortune 500 Advisor
                  </span>
                </motion.div>
                <motion.div
                  className="absolute -left-4 top-32 glass-effect px-4 py-2 rounded-full&quot;
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    y: [0, 8, 0]
                  }}
                  transition={{ 
                    opacity: { duration: 0.6, delay: 1.7 },
                    x: { duration: 0.6, delay: 1.7 },
                    y: { duration: 5, repeat: Infinity, ease: &quot;easeInOut&quot;, delay: 2 }
                  }}
                  whileHover={{ scale: 1.05, y: 5 }}
                >
                  <span className="text-sm font-semibold text-yellow-200&quot;>
                    15+ Years Experience
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* A Little About Us Section */}
      <section className="py-20 relative overflow-hidden&quot;>
        <div className="absolute inset-0 parallax-bg&quot;></div>
        <div className="container mx-auto px-6 relative z-10&quot;>
          <motion.div
            className="text-center mb-20&quot;
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full mb-8&quot;>
              <motion.div 
                className="w-2 h-2 gold-gradient-bg rounded-full&quot;
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-yellow-200 tracking-wide&quot;>
                MEET YOUR EXECUTIVE TRANSFORMATION EXPERT
              </span>
            </div>
            <h2 className="font-luxury text-4xl md:text-6xl font-bold mb-6&quot;>
              <span className="gold-gradient&quot;>A Little About Us</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed&quot;>
              Discover why Fortune 500 executives and industry leaders trust Isabelita Castilho to accelerate their career transformations and unlock unprecedented opportunities.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-6 gap-8 max-w-7xl mx-auto&quot;>
            {/* Expert Career Transition Advisor */}
            <motion.div
              className="glass-effect p-8 rounded-2xl hover-lift lg:col-span-1 xl:col-span-2&quot;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6&quot;>
                <h3 className="font-luxury text-2xl font-bold text-white mb-4&quot;>Expert Career Transition Advisor</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg&quot;>
                Isabelita Castilho is a distinguished executive career transition advisor with over a decade of expertise in guiding senior leaders through successful career transitions. She helps professionals navigate today's competitive job market with unshakeable confidence and strategic precision.
              </p>
            </motion.div>

            {/* Award-Winning Recognition */}
            <motion.div
              className="glass-effect p-8 rounded-2xl hover-lift lg:col-span-1 xl:col-span-2&quot;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6&quot;>
                <h3 className="font-luxury text-2xl font-bold text-white mb-4&quot;>Award-Winning Recognition</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg&quot;>
                A prestigious Forbes Coaches Council Member and winner of the coveted Best Career Coach Award 2025, Isabelita's exceptional accolades underscore her unparalleled leadership and transformative impact in the executive coaching industry.
              </p>
            </motion.div>

            {/* Global Impact & Proven Results */}
            <motion.div
              className="glass-effect p-8 rounded-2xl hover-lift lg:col-span-2 xl:col-span-2&quot;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6&quot;>
                <h3 className="font-luxury text-2xl font-bold text-white mb-4&quot;>Global Impact & Proven Results</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg&quot;>
                Isabelita has empowered executives from 40+ countries and 18+ nationalities, creating a global network of success. Her exceptional ability to deliver transformative results is showcased through 86 published testimonials on LinkedIn, reflecting her unmatched track record of executive excellence.
              </p>
            </motion.div>

            {/* Comprehensive & Innovative Approach */}
            <motion.div
              className="glass-effect p-8 rounded-2xl hover-lift lg:col-span-1 xl:col-span-3&quot;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6&quot;>
                <h3 className="font-luxury text-2xl font-bold text-white mb-4&quot;>Comprehensive & Innovative Approach</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg&quot;>
                Her cutting-edge strategy covers personal branding, strategic networking, interview mastery, and exclusive market insights. Isabelita combines insider knowledge of executive recruitment with innovative methodologies to help leaders secure their next milestone role with unprecedented speed and precision.
              </p>
            </motion.div>

            {/* Published Author & Speaker */}
            <motion.div
              className="glass-effect p-8 rounded-2xl hover-lift lg:col-span-1 xl:col-span-3&quot;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6&quot;>
                <h3 className="font-luxury text-2xl font-bold text-white mb-4&quot;>Published Author & Speaker</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg&quot;>
                As a published author, international speaker, and host of the acclaimed &quot;Happy Monday Executives&quot; podcast and YouTube channel, Isabelita consistently shares game-changing insights that make a lasting impact on executive careers worldwide, reaching thousands of leaders monthly.
              </p>
            </motion.div>
          </div>
          
          {/* CTA after About Us cards */}
          <motion.div
            className="text-center mt-16&quot;
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="/checkout&quot; 
              className="luxury-button text-black px-10 py-5 rounded-full font-bold text-xl transform hover:scale-105 transition inline-block text-center relative z-10&quot;
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: &quot;spring&quot;, stiffness: 400, damping: 17 }}
            >
              Experience Executive Excellence • Start Today
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-6&quot;>
        <div className="container mx-auto max-w-6xl&quot;>
          <div className="text-center mb-12&quot;>
            <h2 className="font-luxury text-4xl md:text-5xl font-bold mb-4&quot;>
              <span className="gold-gradient&quot;>Experience The Transformation</span>
            </h2>
            <p className="text-xl text-gray-400&quot;>
              Watch how executives revolutionized their careers
            </p>
          </div>
          <div className="luxury-border rounded-3xl p-1&quot;>
            <div className="bg-[#1B1C1D] rounded-3xl p-8&quot;>
              <div className="video-container&quot;>
                <iframe
                  src="https://player.vimeo.com/video/1120938621?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&quot;
                  title=&quot;Executive Power Success Stories&quot;
                  frameBorder={0}
                  allow=&quot;autoplay; fullscreen; picture-in-picture; clipboard-write&quot;
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          
          {/* CTA after Video */}
          <motion.div
            className="text-center mt-16&quot;
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="/checkout&quot; 
              className="luxury-button text-black px-12 py-5 rounded-full font-bold text-xl transform hover:scale-105 transition inline-block text-center relative z-10&quot;
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: &quot;spring&quot;, stiffness: 400, damping: 17 }}
            >
              Join The Success Stories • Reserve Your Seat
            </motion.a>
          </motion.div>
        </div>
      </section>




      {/* Testimonials Luxury Section */}
      <section id="testimonials&quot; className="py-20 px-6&quot;>
        <div className="container mx-auto max-w-7xl&quot;>
          <div className="text-center mb-16&quot;>
            <h2 className="font-luxury text-4xl md:text-5xl font-bold mb-6&quot;>
              <span className="gold-gradient&quot;>Success Stories That Inspire</span>
            </h2>
            <p className="text-xl text-gray-400&quot;>
              From our exclusive alumni network
            </p>
          </div>
          
          {/* Infinite Moving Testimonials */}
          <div className="relative overflow-hidden&quot;>
            <div className="flex animate-infinite-scroll gap-8&quot;>
              {/* First set of testimonials */}
              <div className="flex gap-8 flex-shrink-0&quot;>
                {/* C.M - Dubai to Dublin */}
                <div className="glass-effect rounded-2xl p-8 hover-lift flex-shrink-0 w-80&quot;>
                  <div className="flex mb-4&quot;>
                    <span className="text-2xl&quot;>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-300 mb-6 italic&quot;>
                    &quot;I had the pleasure of working with Isabelita through the TBG program and what a life changer her guidance was! The ease with which she combines her expertise with genuine care is amazing.&quot;
                  </p>
                  <div className="text-center&quot;>
                    <div className="font-semibold text-white&quot;>C.M.</div>
                    <div className="text-sm text-yellow-200&quot;>Dubai to Dublin Transition</div>
                  </div>
                </div>

                {/* L.Q - France to Argentina */}
                <div className="glass-effect rounded-2xl p-8 hover-lift flex-shrink-0 w-80&quot;>
                  <div className="flex mb-4&quot;>
                    <span className="text-2xl&quot;>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-300 mb-6 italic&quot;>
                    &quot;For the past 3 months, Isabelita has been my rock, guiding me through what turned out to be a game-changing professional transition. She helped me discover what I really wanted in my career journey.&quot;
                  </p>
                  <div className="text-center&quot;>
                    <div className="font-semibold text-white&quot;>L.Q.</div>
                    <div className="text-sm text-yellow-200&quot;>France to Argentina Transition</div>
                  </div>
                </div>

                {/* H.R - Dubai */}
                <div className="glass-effect rounded-2xl p-8 hover-lift flex-shrink-0 w-80&quot;>
                  <div className="flex mb-4&quot;>
                    <span className="text-2xl&quot;>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-300 mb-6 italic&quot;>
                    &quot;I was lucky enough to be mentored by Isabelita. An incredible person with an enviable knowledge of how a senior executive can achieve success in their next professional move.&quot;
                  </p>
                  <div className="text-center&quot;>
                    <div className="font-semibold text-white&quot;>H.R.</div>
                    <div className="text-sm text-yellow-200&quot;>Dubai</div>
                  </div>
                </div>

                {/* O.K - Netherlands */}
                <div className="glass-effect rounded-2xl p-8 hover-lift flex-shrink-0 w-80&quot;>
                  <div className="flex mb-4&quot;>
                    <span className="text-2xl&quot;>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-300 mb-6 italic&quot;>
                    &quot;Isabelita supported me on a bi-weekly basis to find my next assignment. Her way of working is professional and structured with a personal flavour which makes the interaction efficient and fun.&quot;
                  </p>
                  <div className="text-center&quot;>
                    <div className="font-semibold text-white&quot;>O.K.</div>
                    <div className="text-sm text-yellow-200&quot;>Netherlands</div>
                  </div>
                </div>

                {/* S.M - Germany */}
                <div className="glass-effect rounded-2xl p-8 hover-lift flex-shrink-0 w-80&quot;>
                  <div className="flex mb-4&quot;>
                    <span className="text-2xl&quot;>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-300 mb-6 italic&quot;>
                    &quot;I had the pleasure of working with Isabelita, a dedicated and success-oriented professional. Her extensive professional network and remarkable ability to connect people make her an invaluable asset.&quot;
                  </p>
                  <div className="text-center&quot;>
                    <div className="font-semibold text-white&quot;>S.M.</div>
                    <div className="text-sm text-yellow-200&quot;>Germany</div>
                  </div>
                </div>

                {/* P.C - United States */}
                <div className="glass-effect rounded-2xl p-8 hover-lift flex-shrink-0 w-80&quot;>
                  <div className="flex mb-4&quot;>
                    <span className="text-2xl&quot;>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-300 mb-6 italic&quot;>
                    &quot;I have learned so much from Isabelita! She taught me the immense value of Visibility and Networking. Most importantly, Isabelita empowered me to drive myself forward, realizing that the sky is my only limit.&quot;
                  </p>
                  <div className="text-center&quot;>
                    <div className="font-semibold text-white&quot;>P.C.</div>
                    <div className="text-sm text-yellow-200&quot;>United States</div>
                  </div>
                </div>
              </div>

              {/* Duplicate set for infinite scroll */}
              <div className="flex gap-8 flex-shrink-0&quot;>
                {/* C.M - Dubai to Dublin */}
                <div className="glass-effect rounded-2xl p-8 hover-lift flex-shrink-0 w-80&quot;>
                  <div className="flex mb-4&quot;>
                    <span className="text-2xl&quot;>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-300 mb-6 italic&quot;>
                    &quot;I had the pleasure of working with Isabelita through the TBG program and what a life changer her guidance was! The ease with which she combines her expertise with genuine care is amazing.&quot;
                  </p>
                  <div className="text-center&quot;>
                    <div className="font-semibold text-white&quot;>C.M.</div>
                    <div className="text-sm text-yellow-200&quot;>Dubai to Dublin Transition</div>
                  </div>
                </div>

                {/* L.Q - France to Argentina */}
                <div className="glass-effect rounded-2xl p-8 hover-lift flex-shrink-0 w-80&quot;>
                  <div className="flex mb-4&quot;>
                    <span className="text-2xl&quot;>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-300 mb-6 italic&quot;>
                    &quot;For the past 3 months, Isabelita has been my rock, guiding me through what turned out to be a game-changing professional transition. She helped me discover what I really wanted in my career journey.&quot;
                  </p>
                  <div className="text-center&quot;>
                    <div className="font-semibold text-white&quot;>L.Q.</div>
                    <div className="text-sm text-yellow-200&quot;>France to Argentina Transition</div>
                  </div>
                </div>

                {/* H.R - Dubai */}
                <div className="glass-effect rounded-2xl p-8 hover-lift flex-shrink-0 w-80&quot;>
                  <div className="flex mb-4&quot;>
                    <span className="text-2xl&quot;>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-300 mb-6 italic&quot;>
                    &quot;I was lucky enough to be mentored by Isabelita. An incredible person with an enviable knowledge of how a senior executive can achieve success in their next professional move.&quot;
                  </p>
                  <div className="text-center&quot;>
                    <div className="font-semibold text-white&quot;>H.R.</div>
                    <div className="text-sm text-yellow-200&quot;>Dubai</div>
                  </div>
                </div>

                {/* O.K - Netherlands */}
                <div className="glass-effect rounded-2xl p-8 hover-lift flex-shrink-0 w-80&quot;>
                  <div className="flex mb-4&quot;>
                    <span className="text-2xl&quot;>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-300 mb-6 italic&quot;>
                    &quot;Isabelita supported me on a bi-weekly basis to find my next assignment. Her way of working is professional and structured with a personal flavour which makes the interaction efficient and fun.&quot;
                  </p>
                  <div className="text-center&quot;>
                    <div className="font-semibold text-white&quot;>O.K.</div>
                    <div className="text-sm text-yellow-200&quot;>Netherlands</div>
                  </div>
                </div>

                {/* S.M - Germany */}
                <div className="glass-effect rounded-2xl p-8 hover-lift flex-shrink-0 w-80&quot;>
                  <div className="flex mb-4&quot;>
                    <span className="text-2xl&quot;>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-300 mb-6 italic&quot;>
                    &quot;I had the pleasure of working with Isabelita, a dedicated and success-oriented professional. Her extensive professional network and remarkable ability to connect people make her an invaluable asset.&quot;
                  </p>
                  <div className="text-center&quot;>
                    <div className="font-semibold text-white&quot;>S.M.</div>
                    <div className="text-sm text-yellow-200&quot;>Germany</div>
                  </div>
                </div>

                {/* P.C - United States */}
                <div className="glass-effect rounded-2xl p-8 hover-lift flex-shrink-0 w-80&quot;>
                  <div className="flex mb-4&quot;>
                    <span className="text-2xl&quot;>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-300 mb-6 italic&quot;>
                    &quot;I have learned so much from Isabelita! She taught me the immense value of Visibility and Networking. Most importantly, Isabelita empowered me to drive myself forward, realizing that the sky is my only limit.&quot;
                  </p>
                  <div className="text-center&quot;>
                    <div className="font-semibold text-white&quot;>P.C.</div>
                    <div className="text-sm text-yellow-200&quot;>United States</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Pricing Plans Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black/20 to-transparent relative overflow-hidden&quot;>
        <div className="absolute inset-0 parallax-bg&quot;></div>
        <div className="container mx-auto max-w-7xl relative z-10&quot;>
          <motion.div
            className="text-center mb-20&quot;
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full mb-8&quot;>
              <motion.div 
                className="w-2 h-2 gold-gradient-bg rounded-full&quot;
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-yellow-200 tracking-wide&quot;>
                EXECUTIVE CAREER TRANSFORMATION PLANS
              </span>
            </div>
            <h2 className="font-luxury text-4xl md:text-6xl font-bold mb-6&quot;>
              <span className="gold-gradient&quot;>Choose Your Success Path</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed&quot;>
              Invest in your executive future with our proven career acceleration programs designed for senior leaders ready to unlock their next milestone role.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto&quot;>
            {/* Comprehensive Executive Career Roadmap - Now First */}
            <motion.div 
              className="glass-effect p-10 rounded-3xl hover-lift border-2 border-yellow-200/40 bg-gradient-to-br from-yellow-600/5 to-yellow-800/5 relative&quot;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 gold-gradient-bg text-black text-sm font-bold uppercase rounded-full shadow-xl&quot;>
                Most Comprehensive
              </div>
              
              <div className="text-center mb-8&quot;>
                <h3 className="font-luxury text-3xl font-bold text-white mb-4&quot;>
                  Customized Comprehensive Executive Career Roadmap
                </h3>
                <p className="text-lg text-gray-300 mb-6&quot;>
                  Strategic Job Search Intelligence with Job Landing Plan
                </p>
                <div className="mb-6&quot;>
                  <div className="inline-flex items-center space-x-4&quot;>
                    <span className="font-luxury text-5xl font-bold gold-gradient&quot;>
                      EUR 500
                    </span>
                    <div className="text-left&quot;>
                      <div className="text-yellow-200 font-semibold&quot;>One Time</div>
                      <div className="text-sm text-gray-400&quot;>Complete Package</div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6&quot;>
                  Get your comprehensive career strategy report with CV/LinkedIn feedback, target companies, executive recruiter network, and proven outreach templates.
                </p>
                <div className="flex items-center justify-center mb-6 glass-effect px-4 py-3 rounded-full&quot;>
                  <svg className="w-5 h-5 text-yellow-200 mr-3&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 20 20&quot;>
                    <path fillRule=&quot;evenodd&quot; d=&quot;M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z&quot; clipRule=&quot;evenodd&quot; />
                  </svg>
                  <span className="text-sm font-semibold text-white&quot;>One 60-minute strategy session + comprehensive written report delivered within 10-15 business days</span>
                </div>
              </div>

              <div className="space-y-6 mb-8&quot;>
                <div>
                  <h4 className="font-luxury text-xl font-bold text-white mb-4&quot;>What You Get:</h4>
                  <div className="space-y-4&quot;>
                    <div className="flex items-start&quot;>
                      <svg className="w-5 h-5 text-yellow-200 mr-3 mt-1 flex-shrink-0&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 20 20&quot;>
                        <path fillRule=&quot;evenodd&quot; d=&quot;M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z&quot; clipRule=&quot;evenodd&quot; />
                      </svg>
                      <div>
                        <span className="font-semibold text-white&quot;>10 Target Companies</span>
                        <p className="text-gray-400 text-sm mt-1&quot;>Carefully selected organizations aligned with your experience, salary expectations, and career goals. Each company profiled with key decision makers and current opportunities.</p>
                      </div>
                    </div>
                    <div className="flex items-start&quot;>
                      <svg className="w-5 h-5 text-yellow-200 mr-3 mt-1 flex-shrink-0&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 20 20&quot;>
                        <path fillRule=&quot;evenodd&quot; d=&quot;M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z&quot; clipRule=&quot;evenodd&quot; />
                      </svg>
                      <div>
                        <span className="font-semibold text-white&quot;>30 Key Headhunters</span>
                        <p className="text-gray-400 text-sm mt-1&quot;>Curated list of executive recruiters specializing in your industry and function, with contact details and relationship-building strategies.</p>
                      </div>
                    </div>
                    <div className="flex items-start&quot;>
                      <svg className="w-5 h-5 text-yellow-200 mr-3 mt-1 flex-shrink-0&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 20 20&quot;>
                        <path fillRule=&quot;evenodd&quot; d=&quot;M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z&quot; clipRule=&quot;evenodd&quot; />
                      </svg>
                      <div>
                        <span className="font-semibold text-white&quot;>CV & LinkedIn Feedback</span>
                        <p className="text-gray-400 text-sm mt-1&quot;>Professional analysis and optimization recommendations for maximum executive appeal and ATS compatibility.</p>
                      </div>
                    </div>
                    <div className="flex items-start&quot;>
                      <svg className="w-5 h-5 text-yellow-200 mr-3 mt-1 flex-shrink-0&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 20 20&quot;>
                        <path fillRule=&quot;evenodd&quot; d=&quot;M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z&quot; clipRule=&quot;evenodd&quot; />
                      </svg>
                      <div>
                        <span className="font-semibold text-white&quot;>Strategic Roadmap</span>
                        <p className="text-gray-400 text-sm mt-1&quot;>Step-by-step execution plan with timelines, next actions, and proven message templates for reaching out to decision makers and headhunters.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-luxury text-xl font-bold text-white mb-4&quot;>Process:</h4>
                  <div className="space-y-3&quot;>
                    <div className="flex items-start&quot;>
                      <div className="w-6 h-6 gold-gradient-bg rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0&quot;>
                        <span className="text-black text-sm font-bold&quot;>1</span>
                      </div>
                      <span className="text-gray-300&quot;>One-hour strategic consultation meeting</span>
                    </div>
                    <div className="flex items-start&quot;>
                      <div className="w-6 h-6 gold-gradient-bg rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0&quot;>
                        <span className="text-black text-sm font-bold&quot;>2</span>
                      </div>
                      <span className="text-gray-300&quot;>Comprehensive report delivery within 10-15 business days after meeting</span>
                    </div>
                  </div>
                </div>
              </div>

              <motion.a
                href="/checkout/form?package=comprehensive&price=500&quot;
                className="luxury-button text-black w-full py-4 rounded-full font-bold text-lg inline-block text-center relative z-10 shadow-2xl&quot;
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: &quot;spring&quot;, stiffness: 400, damping: 17 }}
              >
                Get Your Complete Career Roadmap
              </motion.a>
            </motion.div>

            {/* Strategic Roadmap Light Plan - Now Second */}
            <motion.div 
              className="glass-effect p-10 rounded-3xl hover-lift border border-yellow-600/20&quot;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8&quot;>
                <h3 className="font-luxury text-3xl font-bold text-white mb-4&quot;>
                  Strategic Job Search Intelligence
                </h3>
                <p className="text-lg text-gray-300 mb-6&quot;>
                  For Senior Leaders with Job Landing Recommendations Actions
                </p>
                <div className="mb-6&quot;>
                  <div className="inline-flex items-center space-x-4&quot;>
                    <span className="font-luxury text-5xl font-bold gold-gradient&quot;>
                      EUR 150
                    </span>
                    <div className="text-left&quot;>
                      <div className="text-yellow-200 font-semibold&quot;>One Time</div>
                      <div className="text-sm text-gray-400&quot;>Single Payment</div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6&quot;>
                  Get your comprehensive career strategy report with your CV/LinkedIn feedback.
                </p>
                <div className="flex items-center justify-center mb-6 glass-effect px-4 py-3 rounded-full&quot;>
                  <svg className="w-5 h-5 text-yellow-200 mr-3&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 20 20&quot;>
                    <path fillRule=&quot;evenodd&quot; d=&quot;M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z&quot; clipRule=&quot;evenodd&quot; />
                  </svg>
                  <span className="text-sm font-semibold text-white&quot;>One 60-minute strategy session + comprehensive written report delivered within 10-15 business days</span>
                </div>
              </div>

              <div className="space-y-6 mb-8&quot;>
                <div>
                  <h4 className="font-luxury text-xl font-bold text-white mb-4&quot;>What You Get:</h4>
                  <div className="space-y-4&quot;>
                    <div className="flex items-start&quot;>
                      <svg className="w-5 h-5 text-yellow-200 mr-3 mt-1 flex-shrink-0&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 20 20&quot;>
                        <path fillRule=&quot;evenodd&quot; d=&quot;M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z&quot; clipRule=&quot;evenodd&quot; />
                      </svg>
                      <div>
                        <span className="font-semibold text-white&quot;>CV & LinkedIn Feedback</span>
                        <p className="text-gray-400 text-sm mt-1&quot;>Professional analysis and optimization recommendations for maximum executive appeal and ATS compatibility.</p>
                      </div>
                    </div>
                    <div className="flex items-start&quot;>
                      <svg className="w-5 h-5 text-yellow-200 mr-3 mt-1 flex-shrink-0&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 20 20&quot;>
                        <path fillRule=&quot;evenodd&quot; d=&quot;M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z&quot; clipRule=&quot;evenodd&quot; />
                      </svg>
                      <div>
                        <span className="font-semibold text-white&quot;>Strategic Roadmap</span>
                        <p className="text-gray-400 text-sm mt-1&quot;>Recommendations for your next steps with a comprehensive customized report, including market trends.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-luxury text-xl font-bold text-white mb-4&quot;>Process:</h4>
                  <div className="space-y-3&quot;>
                    <div className="flex items-start&quot;>
                      <div className="w-6 h-6 gold-gradient-bg rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0&quot;>
                        <span className="text-black text-sm font-bold&quot;>1</span>
                      </div>
                      <span className="text-gray-300&quot;>One-hour strategic consultation meeting</span>
                    </div>
                    <div className="flex items-start&quot;>
                      <div className="w-6 h-6 gold-gradient-bg rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0&quot;>
                        <span className="text-black text-sm font-bold&quot;>2</span>
                      </div>
                      <span className="text-gray-300&quot;>Comprehensive report delivery within 7-10 business days after meeting</span>
                    </div>
                  </div>
                </div>
              </div>

              <motion.a
                href="/checkout/form?package=basic&price=150&quot;
                className="luxury-button text-black w-full py-4 rounded-full font-bold text-lg inline-block text-center relative z-10&quot;
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: &quot;spring&quot;, stiffness: 400, damping: 17 }}
              >
                Get Your Strategic Roadmap
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Program Section */}
      <section id="program&quot; className="py-20 px-6&quot;>
        <div className="container mx-auto max-w-7xl&quot;>
          <div className="text-center mb-16&quot;>
            <div className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full mb-6&quot;>
              <span className="text-sm text-yellow-200 tracking-widest&quot;>
                The Executive Power Job Landing System™ Signature Program
              </span>
            </div>
            <h2 className="font-luxury text-4xl md:text-5xl font-bold mb-6&quot;>
              <span className="text-white&quot;>Your</span>
              <span className="gold-gradient&quot;> Elite Transformation Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed&quot;>
              Our comprehensive executive career acceleration program takes you from initial branding through successful job placement and onboarding. With our proven methodology, you&apos;ll access both published and hidden job markets while building an executive brand that commands attention.
            </p>
          </div>
          
          {/* Program Phases - 2 cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16&quot;>
            
            {/* Phase 1 */}
            <div className="program-card rounded-2xl p-8 hover-lift&quot;>
              <h3 className="font-luxury text-2xl font-bold mb-4 text-white&quot;>
                Foundation &amp; Assessment
              </h3>
              <p className="text-gray-300 mb-6&quot;>
                Establish your executive baseline and create a powerful personal brand architecture that resonates with decision-makers.
              </p>
              <ul className="space-y-3 text-gray-400 mb-8&quot;>
                <li className="flex items-start&quot;>
                  <span className="text-yellow-200 mr-2&quot;>•</span>
                  <span>Executive presence audit &amp; gap analysis</span>
                </li>
                <li className="flex items-start&quot;>
                  <span className="text-yellow-200 mr-2&quot;>•</span>
                  <span>Leadership style assessment</span>
                </li>
                <li className="flex items-start&quot;>
                  <span className="text-yellow-200 mr-2&quot;>•</span>
                  <span>Personal brand architecture</span>
                </li>
                <li className="flex items-start&quot;>
                  <span className="text-yellow-200 mr-2&quot;>•</span>
                  <span>Strategic goal setting framework</span>
                </li>
              </ul>

              {/* Signature Intensive Program Details */}
              <div className="border-t border-yellow-200/20 pt-6&quot;>
                <h4 className="font-luxury text-xl font-bold text-yellow-200 mb-3&quot;>
                  Signature Intensive 3 Months Program
                </h4>
                <p className="text-white font-semibold mb-2&quot;>3 Months Commitment</p>
                <p className="text-2xl font-bold gold-gradient mb-4&quot;>EUR 2,083 Monthly Subscription</p>
                
                <div className="space-y-4 text-sm&quot;>
                  <div>
                    <h5 className="font-semibold text-white mb-2&quot;>T&C:</h5>
                    <p className="text-gray-300&quot;>Up to 2 weekly Sessions (1h)</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-white mb-2&quot;>Payment Structure:</h5>
                    <ul className="text-gray-300 space-y-1&quot;>
                      <li>• Month 1 - Paid during enrollment before program starts</li>
                      <li>• Month 2 - 30 days after enrollment</li>
                      <li>• Month 3 - 30 days after Month 2</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-white mb-2&quot;>After 3 months if continuation is needed:</h5>
                    <p className="text-gray-300 mb-2&quot;>Free continuous support for another 3 months:</p>
                    <p className="text-gray-300&quot;>Once weekly Sessions (60 min each) with a success fee of 50% of first month&apos;s net salary due upon signing the job offer.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="program-card rounded-2xl p-8 hover-lift&quot;>
              <h3 className="font-luxury text-2xl font-bold mb-4 text-white&quot;>
                Strategy &amp; Implementation
              </h3>
              <p className="text-gray-300 mb-6&quot;>
                Deploy advanced executive strategies and master the art of high-level communication and negotiation.
              </p>
              <ul className="space-y-3 text-gray-400 mb-8&quot;>
                <li className="flex items-start&quot;>
                  <span className="text-yellow-200 mr-2&quot;>•</span>
                  <span>C-suite communication mastery</span>
                </li>
                <li className="flex items-start&quot;>
                  <span className="text-yellow-200 mr-2&quot;>•</span>
                  <span>Strategic decision-making frameworks</span>
                </li>
                <li className="flex items-start&quot;>
                  <span className="text-yellow-200 mr-2&quot;>•</span>
                  <span>High-stakes negotiation tactics</span>
                </li>
                <li className="flex items-start&quot;>
                  <span className="text-yellow-200 mr-2&quot;>•</span>
                  <span>Network expansion strategies</span>
                </li>
              </ul>

              {/* Focused Package Details */}
              <div className="border-t border-yellow-200/20 pt-6&quot;>
                <h4 className="font-luxury text-xl font-bold text-yellow-200 mb-3&quot;>
                  Focused Package
                </h4>
                <p className="text-white font-semibold mb-2&quot;>1 Month Commitment</p>
                <p className="text-white font-semibold mb-2&quot;>Pay as You Go</p>
                <p className="text-2xl font-bold gold-gradient mb-4&quot;>EUR 2,500/ Month - One Month</p>
                
                <div className="space-y-4 text-sm&quot;>
                  <div>
                    <h5 className="font-semibold text-white mb-2&quot;>T&C:</h5>
                    <p className="text-gray-300&quot;>Up to 2 weekly Sessions (1h)</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-white mb-2&quot;>Payment Structure:</h5>
                    <p className="text-gray-300&quot;>Paid during enrollment before program starts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Luxury Footer */}
      <footer className="border-t border-yellow-600/20 py-12 px-6 mt-20&quot;>
        <div className="container mx-auto max-w-7xl&quot;>
          <div className="grid md:grid-cols-4 gap-8 mb-8&quot;>
            <div>
              <div className="flex items-center space-x-2 mb-4&quot;>
                <img 
                  src="/executivepower.avif&quot; 
                  alt="Executive Power Logo&quot; 
                  className="h-10 w-auto&quot;
                />
              </div>
              <p className="text-gray-400 text-sm&quot;>
                Transforming leaders into legends since 2009.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-200 mb-4&quot;>Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400&quot;>
                <li>
                  <a href="#program&quot; className="hover:text-yellow-200 transition&quot;>
                    Program Details
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials&quot;
                    className="hover:text-yellow-200 transition&quot;
                  >
                    Success Stories
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.executivespower.com&quot;
                    className="hover:text-yellow-200 transition&quot;
                  >
                    Main Website
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-200 mb-4&quot;>Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400&quot;>
                <li>
                  <a href="#&quot; className="hover:text-yellow-200 transition&quot;>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#&quot; className="hover:text-yellow-200 transition&quot;>
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#&quot; className="hover:text-yellow-200 transition&quot;>
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-200 mb-4&quot;>Connect</h4>
              <div className="flex space-x-4&quot;>
                <a
                  href="#&quot;
                  className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-white/10 transition&quot;
                >
                  <span className="text-yellow-200&quot;>in</span>
        </a>
        <a
                  href="#&quot;
                  className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-white/10 transition&quot;
                >
                  <span className="text-yellow-200&quot;>X</span>
        </a>
        <a
                  href="#&quot;
                  className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-white/10 transition&quot;
                >
                  <span className="text-yellow-200&quot;>@</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-yellow-600/10 pt-8 text-center text-sm text-gray-500&quot;>
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
