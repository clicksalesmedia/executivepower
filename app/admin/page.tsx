"use client";
import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface Lead {
  id: string;
  name: string;
  email: string;
  linkedinUrl: string | null;
  currentEmployer: string | null;
  jobTitles: string | null;
  jobSearchDuration: string | null;
  freelanceConsulting: string | null;
  cvFileName?: string | null;
  cvUrl?: string | null;
  cvPublicId?: string | null;
  cvFileSize?: number | null;
  cvFormat?: string | null;
  packageId: string;
  packageName: string;
  price: number;
  currency: string;
  status: 'PENDING' | 'PAID' | 'CANCELLED' | 'REFUNDED';
  paymentIntentId?: string | null;
  createdAt: string;
  updatedAt: string;
  notes?: string | null;
}

export default function AdminPortal() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [filter, setFilter] = useState<'all' | 'PENDING' | 'PAID' | 'CANCELLED' | 'REFUNDED'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Redirect to sign-in if not authenticated
  useEffect(() => {
    if (status === 'loading') return; // Still loading
    if (!session) {
      router.push('/auth/signin');
      return;
    }
  }, [session, status, router]);

  // Fetch leads
  const fetchLeads = async () => {
    try {
      const response = await fetch('/api/leads');
      const data = await response.json();
      setLeads(data.leads || []);
    } catch (error) {
      console.error('Error fetching leads:', error);
    } finally {
      setLoading(false);
    }
  };

  // Update lead status
  const updateLeadStatus = async (leadId: string, status: 'PENDING' | 'PAID' | 'CANCELLED' | 'REFUNDED', notes?: string) => {
    try {
      const response = await fetch('/api/leads', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: leadId, status, notes }),
      });

      if (response.ok) {
        fetchLeads(); // Refresh leads
        if (selectedLead && selectedLead.id === leadId) {
          const updatedLead = { ...selectedLead, status, notes, updatedAt: new Date().toISOString() };
          setSelectedLead(updatedLead);
        }
      }
    } catch (error) {
      console.error('Error updating lead:', error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // Filter leads
  const filteredLeads = leads.filter(lead => {
    const matchesFilter = filter === 'all' || lead.status === filter;
    const matchesSearch = searchTerm === '' || 
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (lead.currentEmployer && lead.currentEmployer.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PAID': return 'text-green-400 bg-green-400/10';
      case 'PENDING': return 'text-yellow-400 bg-yellow-400/10';
      case 'CANCELLED': return 'text-red-400 bg-red-400/10';
      case 'REFUNDED': return 'text-orange-400 bg-orange-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  // Get stats
  const stats = {
    total: leads.length,
    pending: leads.filter(l => l.status === 'PENDING').length,
    paid: leads.filter(l => l.status === 'PAID').length,
    cancelled: leads.filter(l => l.status === 'CANCELLED').length,
    refunded: leads.filter(l => l.status === 'REFUNDED').length,
    totalRevenue: leads.filter(l => l.status === 'PAID').reduce((sum, l) => sum + l.price, 0)
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-[#1B1C1D] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-200/30 border-t-yellow-200 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-yellow-200 text-lg">
            {status === 'loading' ? 'Authenticating...' : 'Loading leads...'}
          </p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null; // Will redirect to sign-in
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

            .scrollbar-thin {
              scrollbar-width: thin;
              scrollbar-color: rgba(212, 175, 55, 0.3) transparent;
            }

            .scrollbar-thin::-webkit-scrollbar {
              width: 6px;
            }

            .scrollbar-thin::-webkit-scrollbar-track {
              background: transparent;
            }

            .scrollbar-thin::-webkit-scrollbar-thumb {
              background-color: rgba(212, 175, 55, 0.3);
              border-radius: 3px;
            }

            .scrollbar-thin::-webkit-scrollbar-thumb:hover {
              background-color: rgba(212, 175, 55, 0.5);
            }
          `
        }}
      />
      
      <div className="min-h-screen bg-[#1B1C1D] p-6">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                <span className="gold-gradient">Lead Management Portal</span>
              </h1>
              <p className="text-gray-400">Manage and track your executive coaching leads</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">
                Welcome, {session?.user?.name || session?.user?.email}
              </span>
              <button
                onClick={fetchLeads}
                className="glass-effect px-4 py-2 rounded-lg text-yellow-200 hover:bg-yellow-200/10 transition"
              >
                Refresh
              </button>
              <button
                onClick={() => signOut()}
                className="glass-effect px-4 py-2 rounded-lg text-red-400 hover:bg-red-400/10 transition"
              >
                Sign Out
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            <div className="glass-effect p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-white">{stats.total}</div>
              <div className="text-sm text-gray-400">Total Leads</div>
            </div>
            <div className="glass-effect p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-yellow-400">{stats.pending}</div>
              <div className="text-sm text-gray-400">Pending</div>
            </div>
            <div className="glass-effect p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-green-400">{stats.paid}</div>
              <div className="text-sm text-gray-400">Paid</div>
            </div>
            <div className="glass-effect p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-red-400">{stats.cancelled}</div>
              <div className="text-sm text-gray-400">Cancelled</div>
            </div>
            <div className="glass-effect p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-orange-400">{stats.refunded}</div>
              <div className="text-sm text-gray-400">Refunded</div>
            </div>
            <div className="glass-effect p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-yellow-200">€{stats.totalRevenue}</div>
              <div className="text-sm text-gray-400">Revenue</div>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex space-x-2">
              {(['all', 'PENDING', 'PAID', 'CANCELLED', 'REFUNDED'] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    filter === status
                      ? 'bg-yellow-200/20 text-yellow-200'
                      : 'glass-effect text-gray-400 hover:text-white'
                  }`}
                >
                  {status === 'all' ? 'All' : status.charAt(0) + status.slice(1).toLowerCase()}
                </button>
              ))}
            </div>
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 rounded-lg glass-effect text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-200/50"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Leads List */}
          <div className="lg:col-span-2">
            <motion.div
              className="glass-effect rounded-2xl p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-xl font-bold text-white mb-4">
                Leads ({filteredLeads.length})
              </h2>
              
              <div className="space-y-3 max-h-[600px] overflow-y-auto scrollbar-thin">
                {filteredLeads.map((lead) => (
                  <motion.div
                    key={lead.id}
                    className={`p-4 rounded-xl cursor-pointer transition ${
                      selectedLead?.id === lead.id
                        ? 'bg-yellow-200/10 border border-yellow-200/30'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                    onClick={() => setSelectedLead(lead)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-white">{lead.name}</h3>
                        <p className="text-sm text-gray-400">{lead.email}</p>
                      </div>
                      <div className="text-right">
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                          {lead.status.toUpperCase()}
                        </div>
                        <p className="text-sm text-yellow-200 mt-1">€{lead.price}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-2">
                        <span>{lead.packageName}</span>
                        {lead.cvUrl && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-600/20 text-green-400 border border-green-600/30">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            CV
                          </span>
                        )}
                      </div>
                      <span>{new Date(lead.createdAt).toLocaleDateString()}</span>
                    </div>
                  </motion.div>
                ))}
                
                {filteredLeads.length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-gray-400 mb-2">No leads found</div>
                    <div className="text-sm text-gray-500">Try adjusting your filters or search term</div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Lead Details */}
          <div className="lg:col-span-1">
            <AnimatePresence mode="wait">
              {selectedLead ? (
                <motion.div
                  key={selectedLead.id}
                  className="glass-effect rounded-2xl p-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-white">Lead Details</h2>
                    <button
                      onClick={() => setSelectedLead(null)}
                      className="text-gray-400 hover:text-white transition"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="space-y-4">
                    {/* Basic Info */}
                    <div>
                      <h3 className="font-semibold text-yellow-200 mb-2">Contact Information</h3>
                      <div className="space-y-2 text-sm">
                        <div><span className="text-gray-400">Name:</span> <span className="text-white">{selectedLead.name}</span></div>
                        <div><span className="text-gray-400">Email:</span> <span className="text-white">{selectedLead.email}</span></div>
                        <div>
                          <span className="text-gray-400">LinkedIn:</span> 
                          <a href={selectedLead.linkedinUrl || '#'} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">
                            View Profile
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Professional Info */}
                    <div>
                      <h3 className="font-semibold text-yellow-200 mb-2">Professional Details</h3>
                      <div className="space-y-2 text-sm">
                        <div><span className="text-gray-400">Current Employer:</span> <span className="text-white">{selectedLead.currentEmployer}</span></div>
                        <div><span className="text-gray-400">Job Titles:</span> <span className="text-white">{selectedLead.jobTitles}</span></div>
                        <div><span className="text-gray-400">Job Search Duration:</span> <span className="text-white">{selectedLead.jobSearchDuration}</span></div>
                        <div><span className="text-gray-400">Freelance/Consulting:</span> <span className="text-white">{selectedLead.freelanceConsulting}</span></div>
                        {selectedLead.cvFileName && (
                          <div><span className="text-gray-400">CV File:</span> <span className="text-white">{selectedLead.cvFileName}</span></div>
                        )}
                        {selectedLead.cvUrl && (
                          <div>
                            <span className="text-gray-400">CV Document:</span> 
                            <div className="mt-2">
                              <a 
                                href={selectedLead.cvUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm transition"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span>Download CV</span>
                              </a>
                              {selectedLead.cvFileSize && (
                                <div className="text-xs text-gray-500 mt-1">
                                  Size: {(selectedLead.cvFileSize / 1024 / 1024).toFixed(2)} MB
                                  {selectedLead.cvFormat && ` • Format: ${selectedLead.cvFormat.toUpperCase()}`}
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Package Info */}
                    <div>
                      <h3 className="font-semibold text-yellow-200 mb-2">Package Details</h3>
                      <div className="space-y-2 text-sm">
                        <div><span className="text-gray-400">Package:</span> <span className="text-white">{selectedLead.packageName}</span></div>
                        <div><span className="text-gray-400">Price:</span> <span className="text-white">{selectedLead.currency} {selectedLead.price}</span></div>
                        <div>
                          <span className="text-gray-400">Status:</span> 
                          <span className={`ml-2 px-2 py-1 rounded text-xs ${getStatusColor(selectedLead.status)}`}>
                            {selectedLead.status.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Timestamps */}
                    <div>
                      <h3 className="font-semibold text-yellow-200 mb-2">Timeline</h3>
                      <div className="space-y-2 text-sm">
                        <div><span className="text-gray-400">Created:</span> <span className="text-white">{new Date(selectedLead.createdAt).toLocaleString()}</span></div>
                        <div><span className="text-gray-400">Updated:</span> <span className="text-white">{new Date(selectedLead.updatedAt).toLocaleString()}</span></div>
                      </div>
                    </div>

                    {/* Status Update */}
                    <div>
                      <h3 className="font-semibold text-yellow-200 mb-2">Update Status</h3>
                      <div className="flex flex-wrap gap-2">
                        {['PENDING', 'PAID', 'CANCELLED', 'REFUNDED'].map((status) => (
                          <button
                            key={status}
                            onClick={() => updateLeadStatus(selectedLead.id, status as 'PENDING' | 'PAID' | 'CANCELLED' | 'REFUNDED')}
                            disabled={selectedLead.status === status}
                            className={`px-3 py-1 rounded text-xs font-medium transition ${
                              selectedLead.status === status
                                ? 'opacity-50 cursor-not-allowed'
                                : 'hover:scale-105'
                            } ${getStatusColor(status)}`}
                          >
                            {status.charAt(0) + status.slice(1).toLowerCase()}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <h3 className="font-semibold text-yellow-200 mb-2">Notes</h3>
                      <textarea
                        value={selectedLead.notes || ''}
                        onChange={(e) => {
                          const updatedLead = { ...selectedLead, notes: e.target.value };
                          setSelectedLead(updatedLead);
                        }}
                        onBlur={() => updateLeadStatus(selectedLead.id, selectedLead.status, selectedLead.notes || undefined)}
                        placeholder="Add notes about this lead..."
                        className="w-full px-3 py-2 rounded-lg bg-white/5 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-200/50"
                        rows={3}
                      />
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  className="glass-effect rounded-2xl p-6 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-gray-400 mb-2">Select a lead</div>
                  <div className="text-sm text-gray-500">Click on a lead from the list to view details</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
