'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  Building2, 
  Globe, 
  Sparkles, 
  User, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    category: 'Research Collaboration',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `[${formData.category}] ${formData.subject || 'HiMPaTH Inquiry'} - ${formData.organization || 'General'}`,
          message: formData.message,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit message');
      }

      setSubmitted(true);
      setFormData({ 
        name: '', 
        email: '', 
        organization: '', 
        category: 'Research Collaboration', 
        subject: '', 
        message: '' 
      });
    } catch (err: any) {
      setErrorMessage('Could not send message. Please try again or email himpath@iitrpr.ac.in directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#fbfcfa] min-h-screen">
      {/* ── HERO BANNER ──────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#071e2e] via-[#0f3b4c] to-[#1a5b66] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg viewBox="0 0 1000 400" preserveAspectRatio="none" className="w-full h-full">
            <polygon points="0,400 200,100 400,300 600,80 800,280 1000,150 1000,400 0,400" fill="white" />
          </svg>
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#e4c982] uppercase tracking-widest mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span>›</span>
            <span>Connect &amp; Contact</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#e4c982] text-xs font-black uppercase tracking-wider mb-4 border border-white/15">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Centre of Excellence · IIT Ropar</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Connect with HiMPaTH
            </h1>

            <p className="text-[#d2e4e8] text-base sm:text-lg mt-6 leading-relaxed">
              We welcome central and state road agencies (BRO, NHIDCL, MoRTH, State PWDs), research sponsors, international academic collaborators, industry partners, and prospective PhD scholars.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTACT SECTION ─────────────────────────────── */}
      <section className="py-20 lg:py-24 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl border border-[#dbe5e4] p-8 shadow-card space-y-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#e6f2ef] text-[#258b82] text-[10px] font-black tracking-widest uppercase mb-3 inline-block">
                  Centre of Excellence
                </span>
                <h2 className="text-2xl font-extrabold text-[#102b3c] leading-tight">
                  HiMPaTH — Himalayan Pathways for Transport and Highways
                </h2>
                <p className="text-xs sm:text-sm text-[#5a6f79] mt-2 leading-relaxed">
                  Dedicated to climate-resilient pavement technologies, circular waste repurposing, geotechnical slope engineering, and data-driven infrastructure.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#f0f5f4]">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#e6f2ef] text-[#258b82] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#102b3c] text-xs uppercase tracking-wider">Host Department &amp; Campus</h3>
                    <p className="text-xs sm:text-sm text-[#4e636d] mt-0.5 leading-relaxed">
                      Department of Civil Engineering, Indian Institute of Technology Ropar, Rupnagar, Punjab – 140001, India
                    </p>
                  </div>
                </div>

                {/* Coordinator */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#e6f2ef] text-[#258b82] flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#102b3c] text-xs uppercase tracking-wider">Project Coordinator</h3>
                    <p className="text-xs sm:text-sm text-[#102b3c] font-bold mt-0.5">
                      Dr. Surya Kant Sahdeo
                    </p>
                    <p className="text-xs text-slate-500">
                      Assistant Professor, Civil Engineering, IIT Ropar
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#e6f2ef] text-[#258b82] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#102b3c] text-xs uppercase tracking-wider">Official Email</h3>
                    <a
                      href="mailto:himpath@iitrpr.ac.in"
                      className="text-xs sm:text-sm text-[#258b82] hover:underline font-bold block mt-0.5"
                    >
                      himpath@iitrpr.ac.in
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#e6f2ef] text-[#258b82] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#102b3c] text-xs uppercase tracking-wider">Office &amp; Laboratory Hours</h3>
                    <p className="text-xs sm:text-sm text-[#4e636d] mt-0.5">
                      Monday to Friday: 9:00 AM – 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Sanskrit Motto Badge */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#102b3c] to-[#174e61] text-white text-center">
                <span className="text-[10px] font-bold text-[#e4c982] uppercase tracking-widest block mb-0.5">
                  Centre Motto
                </span>
                <p className="font-serif text-sm text-[#e4c982]">
                  “आ नो भद्राः क्रतवो यन्तु विश्वतः”
                </p>
                <p className="text-[11px] text-slate-300 italic mt-0.5">
                  Let noble thoughts come from everywhere
                </p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#dbe5e4] p-8 sm:p-12 shadow-card">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102b3c] mb-2">
                Send an Inquiry or Collaboration Request
              </h3>
              <p className="text-xs sm:text-sm text-[#66767d] mb-8">
                Please provide details regarding your technical inquiry, testing service requirement, or research collaboration.
              </p>

              {submitted ? (
                <div className="bg-[#e6f2ef] border border-[#258b82]/30 rounded-2xl p-8 text-center space-y-4">
                  <CheckCircle2 className="w-14 h-14 text-[#258b82] mx-auto" />
                  <h4 className="text-xl font-extrabold text-[#102b3c]">
                    Inquiry Submitted Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#3b545f] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to HiMPaTH, Department of Civil Engineering, IIT Ropar. The project team will review your inquiry and respond shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-[#258b82] text-white rounded-xl text-xs font-black uppercase tracking-wider hover:bg-[#102b3c] transition-all shadow"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-semibold">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-black text-[#102b3c] uppercase tracking-wider mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Rajesh Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-[#dbe5e4] text-xs sm:text-sm text-[#102b3c] focus:outline-none focus:ring-2 focus:ring-[#258b82] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black text-[#102b3c] uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rajesh@agency.gov.in"
                        className="w-full px-4 py-3 rounded-xl border border-[#dbe5e4] text-xs sm:text-sm text-[#102b3c] focus:outline-none focus:ring-2 focus:ring-[#258b82] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-black text-[#102b3c] uppercase tracking-wider mb-2">
                        Organization / Agency
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. BRO / NHIDCL / State PWD / University"
                        className="w-full px-4 py-3 rounded-xl border border-[#dbe5e4] text-xs sm:text-sm text-[#102b3c] focus:outline-none focus:ring-2 focus:ring-[#258b82] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black text-[#102b3c] uppercase tracking-wider mb-2">
                        Inquiry Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#dbe5e4] text-xs sm:text-sm text-[#102b3c] focus:outline-none focus:ring-2 focus:ring-[#258b82] focus:border-transparent transition-all bg-white"
                      >
                        <option value="Research Collaboration">Research Collaboration / Joint Grant</option>
                        <option value="Laboratory Testing Services">Laboratory Testing (DSR, UTM, Freeze-Thaw)</option>
                        <option value="Pilot Track Demonstration">Field Pilot Track Demonstration</option>
                        <option value="DPR Consultancy">Climate-Resilient DPR Technical Review</option>
                        <option value="PhD / Scholar Opportunity">PhD / Research Scholar Application</option>
                        <option value="General Inquiry">General Technical Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-[#102b3c] uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. In-Situ Full-Depth Reclamation Pilot Proposal"
                      className="w-full px-4 py-3 rounded-xl border border-[#dbe5e4] text-xs sm:text-sm text-[#102b3c] focus:outline-none focus:ring-2 focus:ring-[#258b82] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black text-[#102b3c] uppercase tracking-wider mb-2">
                      Message &amp; Scope *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your proposal, technical question, or requirement in detail..."
                      className="w-full px-4 py-3 rounded-xl border border-[#dbe5e4] text-xs sm:text-sm text-[#102b3c] focus:outline-none focus:ring-2 focus:ring-[#258b82] focus:border-transparent transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#258b82] hover:bg-[#102b3c] text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry to HiMPaTH</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
