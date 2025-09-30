"use client";
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError('Invalid credentials');
      } else {
        router.push('/admin');
      }
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
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

            .form-input {
              background: rgba(255, 255, 255, 0.05);
              border: 1px solid rgba(212, 175, 55, 0.2);
              backdrop-filter: blur(10px);
            }

            .form-input:focus {
              border-color: #D4AF37;
              box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.2);
              outline: none;
            }
          `
        }}
      />
      
      <div className="min-h-screen bg-[#1B1C1D] flex items-center justify-center px-6 py-12">
        <motion.div
          className="max-w-md w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <Image 
                src="/executivepower.avif" 
                alt="Executive Power Logo" 
                className="h-12 w-auto"
                width={48}
                height={48}
              />
            </div>
            <h1 className="text-3xl font-bold mb-2">
              <span className="gold-gradient">Admin Portal</span>
            </h1>
            <p className="text-gray-400">Sign in to access the lead management system</p>
          </div>

          {/* Sign In Form */}
          <motion.div
            className="glass-effect rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-yellow-200 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-yellow-200 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-red-400 text-sm">{error}</p>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full luxury-button text-black py-3 px-6 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: !isLoading ? 1.02 : 1 }}
                whileTap={{ scale: !isLoading ? 0.98 : 1 }}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    <span>Signing In...</span>
                  </div>
                ) : (
                  'Sign In'
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm">
              Executive Power Lead Management System
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
