"use client";
import { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function ElitePremiumFormContent() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedinUrl: '',
    currentEmployer: '',
    jobTitles: '',
    jobSearchDuration: '',
    freelanceConsulting: '',
    cvFile: null as File | null
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.linkedinUrl.trim()) {
      newErrors.linkedinUrl = 'LinkedIn profile URL is required';
    } else if (!formData.linkedinUrl.includes('linkedin.com')) {
      newErrors.linkedinUrl = 'Please enter a valid LinkedIn URL';
    }

    if (!formData.currentEmployer.trim()) {
      newErrors.currentEmployer = 'Current/last employer is required';
    }

    if (!formData.jobTitles.trim()) {
      newErrors.jobTitles = 'Job titles are required';
    }

    if (!formData.jobSearchDuration) {
      newErrors.jobSearchDuration = 'Please select job search duration';
    }

    if (!formData.freelanceConsulting) {
      newErrors.freelanceConsulting = 'Please answer the freelance/consulting question';
    }

    if (!formData.cvFile) {
      newErrors.cvFile = 'Please upload your CV';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type (DOC, DOCX, PDF - prioritize Word formats)
      const allowedTypes = ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf'];
      if (!allowedTypes.includes(file.type)) {
        setErrors(prev => ({ ...prev, cvFile: 'Please upload a DOC, DOCX, or PDF file (Word format preferred)' }));
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, cvFile: 'File size must be less than 5MB' }));
        return;
      }

      setFormData(prev => ({ ...prev, cvFile: file }));
      setErrors(prev => ({ ...prev, cvFile: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Save Elite Premium lead to API
      const leadData = {
        name: formData.name,
        email: formData.email,
        linkedinUrl: formData.linkedinUrl,
        currentEmployer: formData.currentEmployer,
        jobTitles: formData.jobTitles,
        jobSearchDuration: formData.jobSearchDuration,
        freelanceConsulting: formData.freelanceConsulting,
        cvFileName: formData.cvFile?.name,
        packageId: 'elite-premium',
        packageName: 'Elite Premium Program',
        price: 0, // No price for Elite Premium application
        currency: 'USD',
        isElitePremium: true // Flag to identify Elite Premium leads
      };

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      });

      if (!response.ok) {
        throw new Error('Failed to save lead');
      }

      const { lead } = await response.json();

      // Upload CV to Cloudinary if file exists
      if (formData.cvFile) {
        const cvFormData = new FormData();
        cvFormData.append('file', formData.cvFile);
        cvFormData.append('leadId', lead.id);

        const cvResponse = await fetch('/api/upload-cv', {
          method: 'POST',
          body: cvFormData,
        });

        if (cvResponse.ok) {
          const cvUploadResult = await cvResponse.json();
          
          // Update lead with CV information
          await fetch('/api/leads', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: lead.id,
              cvUrl: cvUploadResult.url,
              cvPublicId: cvUploadResult.publicId,
              cvFileSize: cvUploadResult.size,
              cvFormat: cvUploadResult.format,
            }),
          });
        } else {
          console.warn('CV upload failed, but continuing with form submission');
        }
      }

      // Redirect to success page
      router.push('/elite-premium/success');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Show error to user
      setErrors({ submit: 'Failed to submit form. Please try again.' });
    } finally {
      setIsSubmitting(false);
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

            .file-upload-area {
              border: 2px dashed rgba(212, 175, 55, 0.3);
              transition: all 0.3s ease;
            }

            .file-upload-area:hover {
              border-color: rgba(212, 175, 55, 0.5);
              background: rgba(212, 175, 55, 0.05);
            }

            .file-upload-area.dragover {
              border-color: #D4AF37;
              background: rgba(212, 175, 55, 0.1);
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
            <span className="gold-gradient">Elite Premium Application</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Apply for exclusive access to our Elite Premium <br /> Executive Career Transformation Program
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Program Summary */}
            <motion.div
              className="glass-effect rounded-3xl p-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Elite Premium Program</h2>
              
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Comprehensive Executive Career Transformation</h3>
                  <p className="text-gray-400 text-sm">
                    Our most exclusive program designed for senior executives ready to unlock their next milestone role with unprecedented speed and precision.
                  </p>
                </div>
              </div>

              <div className="border-t border-yellow-200/20 pt-6">
                <div className="flex items-center space-x-2 mb-4">
                  <svg className="w-5 h-5 text-yellow-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-yellow-200 font-semibold text-sm">Exclusive & Confidential</span>
                </div>
                <p className="text-xs text-gray-400">
                  Your application is encrypted and processed securely. We never share your data with third parties.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              className="glass-effect rounded-3xl p-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Application Information</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. Full Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-yellow-200 mb-2">
                    1. What&apos;s Your Full Name? *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400 ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* 2. Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-yellow-200 mb-2">
                    2. What&apos;s your Email Address? *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400 ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* 3. LinkedIn Profile URL */}
                <div>
                  <label htmlFor="linkedinUrl" className="block text-sm font-medium text-yellow-200 mb-2">
                    3. What&apos;s your LinkedIn Profile URL? *
                  </label>
                  <input
                    type="url"
                    id="linkedinUrl"
                    name="linkedinUrl"
                    value={formData.linkedinUrl}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400 ${errors.linkedinUrl ? 'border-red-500' : ''}`}
                    placeholder="https://www.linkedin.com/in/your-profile"
                  />
                  {errors.linkedinUrl && <p className="text-red-400 text-sm mt-1">{errors.linkedinUrl}</p>}
                </div>

                {/* 4. Current/Last Employer */}
                <div>
                  <label htmlFor="currentEmployer" className="block text-sm font-medium text-yellow-200 mb-2">
                    4. What&apos;s the Name of Your Current (or Last) Employer? *
                  </label>
                  <input
                    type="text"
                    id="currentEmployer"
                    name="currentEmployer"
                    value={formData.currentEmployer}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400 ${errors.currentEmployer ? 'border-red-500' : ''}`}
                    placeholder="Enter your current or last employer's name"
                  />
                  {errors.currentEmployer && <p className="text-red-400 text-sm mt-1">{errors.currentEmployer}</p>}
                </div>

                {/* 5. Job Titles */}
                <div>
                  <label htmlFor="jobTitles" className="block text-sm font-medium text-yellow-200 mb-2">
                    5. What&apos;s Your Current AND Previous Job Title? *
                  </label>
                  <textarea
                    id="jobTitles"
                    name="jobTitles"
                    value={formData.jobTitles}
                    onChange={(e) => {
                      const { name, value } = e.target;
                      setFormData(prev => ({ ...prev, [name]: value }));
                      if (errors[name]) {
                        setErrors(prev => ({ ...prev, [name]: '' }));
                      }
                    }}
                    rows={3}
                    className={`w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400 ${errors.jobTitles ? 'border-red-500' : ''}`}
                    placeholder="e.g.: Current: SVP, Previous: Head of Ops"
                  />
                  {errors.jobTitles && <p className="text-red-400 text-sm mt-1">{errors.jobTitles}</p>}
                </div>

                {/* 6. Job Search Duration */}
                <div>
                  <label htmlFor="jobSearchDuration" className="block text-sm font-medium text-yellow-200 mb-2">
                    6. How Long Have You been Looking for a Job? *
                  </label>
                  <select
                    id="jobSearchDuration"
                    name="jobSearchDuration"
                    value={formData.jobSearchDuration}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg form-input text-white ${errors.jobSearchDuration ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select duration</option>
                    <option value="not-started">I haven&apos;t started looking yet</option>
                    <option value="less-than-month">Just Started - Less than One Month</option>
                    <option value="1-3-months">1-3 Months</option>
                    <option value="3-6-months">3-6 Months</option>
                    <option value="more-than-6-months">More than 6 Months</option>
                  </select>
                  {errors.jobSearchDuration && <p className="text-red-400 text-sm mt-1">{errors.jobSearchDuration}</p>}
                </div>

                {/* 7. Freelance/Consulting */}
                <div>
                  <label htmlFor="freelanceConsulting" className="block text-sm font-medium text-yellow-200 mb-2">
                    7. Are You Currently doing Freelance or Consulting Work? *
                  </label>
                  <select
                    id="freelanceConsulting"
                    name="freelanceConsulting"
                    value={formData.freelanceConsulting}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg form-input text-white ${errors.freelanceConsulting ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select answer</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  {errors.freelanceConsulting && <p className="text-red-400 text-sm mt-1">{errors.freelanceConsulting}</p>}
                </div>

                {/* CV Upload */}
                <div>
                  <label htmlFor="cvFile" className="block text-sm font-medium text-yellow-200 mb-2">
                    Please upload your CV (preferable in word.doc) *
                  </label>
                  <div className={`file-upload-area rounded-lg p-6 text-center ${errors.cvFile ? 'border-red-500' : ''}`}>
                    <input
                      type="file"
                      id="cvFile"
                      name="cvFile"
                      onChange={handleFileChange}
                      accept=".doc,.docx,.pdf"
                      className="hidden"
                    />
                    <label htmlFor="cvFile" className="cursor-pointer">
                      <div className="flex flex-col items-center">
                        <svg className="w-12 h-12 text-yellow-200 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="text-white font-medium mb-2">
                          {formData.cvFile ? formData.cvFile.name : 'Click to upload your CV'}
                        </p>
                        <p className="text-gray-400 text-sm">
                          DOC, DOCX, or PDF (Max 5MB) - Word format preferred
                        </p>
                      </div>
                    </label>
                  </div>
                  {errors.cvFile && <p className="text-red-400 text-sm mt-1">{errors.cvFile}</p>}
                </div>

                {/* Submit Error */}
                {errors.submit && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-red-400 text-sm">{errors.submit}</p>
                  </div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full luxury-button text-black py-4 px-8 rounded-full font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: !isSubmitting ? 1.02 : 1 }}
                  whileTap={{ scale: !isSubmitting ? 0.98 : 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                      <span>Submitting Application...</span>
                    </div>
                  ) : (
                    'Submit Elite Premium Application'
                  )}
                </motion.button>
              </form>
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
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Data Protection</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <span>Confidential Process</span>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default function ElitePremiumPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#1B1C1D] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-200 mx-auto mb-4"></div>
          <p className="text-white">Loading Elite Premium application...</p>
        </div>
      </div>
    }>
      <ElitePremiumFormContent />
    </Suspense>
  );
}
