'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to submit message');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setErrorMessage('Could not send message. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-14 border-b-4 border-[#f25c05]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f25c05]">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-2">
            Contact CEVA - IIT Ropar
          </h1>
          <p className="text-gray-300 mt-4 max-w-3xl text-base sm:text-lg leading-relaxed">
            Reach out for research collaborations, master artisan workshops, structural testing consultancies, or project inquiries.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                  Centre of Excellence on Sustainable Vernacular Architecture
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We welcome academic researchers, architects, indigenous artisans, civil engineering students, and governmental agencies to collaborate with us.
                </p>
              </div>

              <div className="space-y-5 border-t border-gray-100 pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 text-[#f25c05] flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Location &amp; Address</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                      Department of Civil Engineering, Indian Institute of Technology Ropar, Rupnagar, Punjab - 140001, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#0066cc] flex items-center justify-center shrink-0 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Email Address</h3>
                    <a
                      href="mailto:ceva@iitrpr.ac.in"
                      className="text-xs sm:text-sm text-blue-700 hover:underline font-semibold block mt-1"
                    >
                      ceva@iitrpr.ac.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Working Hours</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      Monday to Friday: 8:00 AM – 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Sponsoring Note */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-xs text-amber-900 leading-relaxed">
                <strong>Project Sponsorship:</strong> CEVA is established at IIT Ropar under the prestigious National Mission on Himalayan Studies (NMHS), Ministry of Environment, Forest &amp; Climate Change (MoEF&amp;CC).
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 sm:p-10 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Send us an Inquiry / Feedback
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-6">
                  Fill out the form below to connect with the CEVA IIT Ropar team.
                </p>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-lg font-bold text-emerald-900">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-700">
                      Thank you for contacting the Centre of Excellence on Sustainable Vernacular Architecture. Our research team will review your inquiry shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-5 py-2 bg-emerald-700 text-white rounded-lg text-xs font-bold hover:bg-emerald-800 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {errorMessage && (
                      <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Dr. Rajesh Kumar"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#f25c05]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rajesh@institution.ac.in"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#f25c05]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Research Collaboration / Shake Table Testing"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#f25c05]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your message, collaboration proposal, or technical question here..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#f25c05]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#f25c05] hover:bg-[#d94e00] text-white px-8 py-3.5 rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition-all disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
