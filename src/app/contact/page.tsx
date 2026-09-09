'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  Building2, 
  Sparkles, 
  User, 
  Linkedin
} from 'lucide-react';
import { SITE_CONTACT } from '@/lib/siteData';

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
      setErrorMessage(`Could not send message. Please try again or email ${SITE_CONTACT.email} directly.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#fbfcfa] min-h-screen">
      {/* ── HERO BANNER ──────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#071e2e] via-[#0f3b4c] to-[#1a5b66] text-white overflow-hidden border-b border-white/10">
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
              We welcome central and state road agencies (MoRTH, BRO, NHAI, PMGSY, State PWDs), research sponsors, international academic collaborators, industry partners, and prospective researchers.
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
                      {SITE_CONTACT.location}
                    </p>
                  </div>
                </div>

                {/* Coordinator */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#e6f2ef] text-[#258b82] flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#102b3c] text-xs uppercase tracking-wider">Centre Lead</h3>
                    <p className="text-xs sm:text-sm text-[#102b3c] font-bold mt-0.5">
                      Dr. Surya Kant Sahdeo
                    </p>
                    <p className="text-xs text-slate-500">
                      Assistant Professor, Department of Civil Engineering, IIT Ropar
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
                      href={`mailto:${SITE_CONTACT.email}`}
                      className="text-xs sm:text-sm text-[#258b82] hover:underline font-bold block mt-0.5"
                    >
                      {SITE_CONTACT.email}
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#e6f2ef] text-[#258b82] flex items-center justify-center shrink-0 mt-0.5">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#102b3c] text-xs uppercase tracking-wider">LinkedIn</h3>
                    <a
                      href={SITE_CONTACT.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-[#258b82] hover:underline font-bold block mt-0.5"
                    >
                      linkedin/{SITE_CONTACT.linkedinHandle}
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
                    Thank you for reaching out to HiMPaTH, Department of Civil Engineering, IIT Ropar. The project team will review your inquiry and respond promptly.
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
                        placeholder="name@agency.gov.in"
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
                        placeholder="e.g. BRO / NHIDCL / PWD"
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
                        <option value="Research Collaboration">Agency / Research Collaboration</option>
                        <option value="Testing Services">Laboratory Testing Services</option>
                        <option value="Field Demonstration">Field Demonstration &amp; Pilots</option>
                        <option value="Doctoral Admissions">PhD &amp; Research Scholar Inquiries</option>
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
                      placeholder="e.g. In-situ testing of cold recycling binders"
                      className="w-full px-4 py-3 rounded-xl border border-[#dbe5e4] text-xs sm:text-sm text-[#102b3c] focus:outline-none focus:ring-2 focus:ring-[#258b82] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black text-[#102b3c] uppercase tracking-wider mb-2">
                      Message Details *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your specific inquiry, proposed partnership scope, or experimental testing requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-[#dbe5e4] text-xs sm:text-sm text-[#102b3c] focus:outline-none focus:ring-2 focus:ring-[#258b82] focus:border-transparent transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-[#258b82] hover:bg-[#102b3c] text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry</span>
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
