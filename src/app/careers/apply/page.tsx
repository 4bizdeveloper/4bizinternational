'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import {
  RiArrowLeftLine, RiCheckboxCircleLine, RiErrorWarningLine,
  RiLoader4Line, RiUploadCloud2Line, RiFileTextLine, RiCloseLine,
  RiShieldKeyholeLine
} from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';

const MAX_CV_SIZE_MB = 5;
const ACCEPTED_EXT = ['.pdf', '.doc', '.docx'];

export default function ApplyPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [validationAlerts, setValidationAlerts] = useState({
    fullName: false, email: false, phone: false, cv: false,
  });
  const formRef = useRef<HTMLFormElement>(null);

  /* ============== File handling ============== */
  const validateFile = (file: File): string | null => {
    const ext = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!ACCEPTED_EXT.includes(ext)) return 'Only PDF, DOC, or DOCX files are accepted.';
    if (file.size > MAX_CV_SIZE_MB * 1024 * 1024)
      return `File size must not exceed ${MAX_CV_SIZE_MB}MB.`;
    return null;
  };

  const handleFileSelect = (file: File | null) => {
    if (!file) { setCvFile(null); return; }
    const err = validateFile(file);
    if (err) {
      setErrorMsg(err);
      setStatus('error');
      setTimeout(() => { if (status === 'error') { setStatus('idle'); setErrorMsg(''); } }, 4000);
      return;
    }
    setCvFile(file);
    setValidationAlerts(p => ({ ...p, cv: false }));
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files?.[0];
    if (f) handleFileSelect(f);
  };

  /* ============== Submit ============== */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    const errors = {
      fullName: !fd.get('fullName'),
      email: !fd.get('email'),
      phone: !fd.get('phone'),
      cv: !cvFile,
    };
    setValidationAlerts(errors);
    if (Object.values(errors).some(Boolean)) return;
    if (!cvFile) return;

    setStatus('sending');
    setErrorMsg('');

    const payload = new FormData();
    payload.append('fullName', (fd.get('fullName') as string).trim());
    payload.append('email', (fd.get('email') as string).trim());
    payload.append('phone', (fd.get('phone') as string).trim());
    payload.append('nationality', (fd.get('nationality') as string) || '');
    payload.append('currentLocation', (fd.get('currentLocation') as string) || '');
    payload.append('visaStatus', (fd.get('visaStatus') as string) || '');
    payload.append('currentCompany', (fd.get('currentCompany') as string) || '');
    payload.append('experience', (fd.get('experience') as string) || '');
    payload.append('noticePeriod', (fd.get('noticePeriod') as string) || '');
    payload.append('linkedin', (fd.get('linkedin') as string) || '');
    payload.append('message', (fd.get('message') as string) || '');
    payload.append('cv', cvFile);

    try {
      const res = await fetch('/api/apply', { method: 'POST', body: payload });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.status === 'success') {
        setStatus('success');
        formRef.current?.reset();
        setCvFile(null);
      } else {
        throw new Error(data.error || 'Submission failed. Please try again.');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || 'Network error. Please try again.');
    }
  };

  /* ============== File input refs ============== */
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className="min-h-screen text-slate-100 font-sans antialiased overflow-x-hidden pt-24 sm:pt-28 md:pt-32 pb-16"
      style={{
        background:
          'radial-gradient(circle at 50% 30%, #0f2054 0%, #061033 45%, #020717 100%)',
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back link */}
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-sm text-[#00D3F2] hover:text-cyan-300 font-bold uppercase tracking-widest mb-8 transition-colors"
        >
          <RiArrowLeftLine /> Back to Job Details
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00D3F2]/10 border border-[#00D3F2]/40 text-[#00D3F2] text-xs font-bold uppercase tracking-widest mb-5">
            <RiShieldKeyholeLine /> Application Form
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
            Apply: Digital Marketer 
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Complete the form below and attach your CV. Our hiring team will
            review your application within 5 business days.
          </p>
        </div>

        {/* Form Container - Full Width, No Sidebar */}
        <div className="w-full rounded-2xl bg-white shadow-2xl p-6 sm:p-10">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                  <RiCheckboxCircleLine className="text-5xl text-emerald-600" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">Application Submitted!</h2>
                <p className="text-slate-600 mb-8 max-w-md mx-auto">
                  Thank you for applying. Our hiring team has received your CV and
                  will be in touch if your profile matches the role.
                </p>
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0c9d7d] hover:bg-[#0a8a6e] text-white font-bold transition-colors"
                >
                  <RiArrowLeftLine /> Back to Job
                </Link>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
                noValidate
              >
                
                {/* Personal Details Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field
                    name="fullName"
                    label="Full Name *"
                    type="text"
                    placeholder="Your full name"
                    error={validationAlerts.fullName}
                  />
                  <Field
                    name="email"
                    label="Email Address *"
                    type="email"
                    placeholder="you@email.com"
                    error={validationAlerts.email}
                  />
                  <Field
                    name="phone"
                    label="Phone Number *"
                    type="tel"
                    placeholder="+971 50 123 4567"
                    error={validationAlerts.phone}
                  />
                  <Field
                    name="nationality"
                    label="Nationality"
                    type="text"
                    placeholder="e.g. Indian, Filipino, Emirati"
                  />
                </div>

                {/* Location & Availability Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <Field
                    name="currentLocation"
                    label="Current Location"
                    type="text"
                    placeholder="e.g. Kozhikode, Kerala"
                  />
                  <Field
                    name="visaStatus"
                    label="Visa Status"
                    type="text"
                    placeholder="e.g. Visit Visa, Employment Visa"
                  />
                  <Field
                    name="currentCompany"
                    label="Current Company (Optional)"
                    type="text"
                    placeholder="e.g. Tech Solutions LLC"
                  />
                  <SelectField
                    name="experience"
                    label="Total Years of Experience"
                    options={[
                      { label: 'Select experience level', value: '' },
                      { label: 'Fresher', value: 'fresher' },
                      { label: '1–2 years', value: '1-2' },
                      { label: '3–5 years', value: '3-5' },
                      { label: '5+ years', value: '5+' },
                    ]}
                  />
                  <SelectField
                    name="noticePeriod"
                    label="Notice Period"
                    options={[
                      { label: 'Select notice period', value: '' },
                      { label: 'Immediate', value: 'immediate' },
                      { label: '15 Days', value: '15-days' },
                      { label: '30 Days', value: '30-days' },
                      { label: '60 Days+', value: '60-days' },
                    ]}
                  />
                  <Field
                    name="linkedin"
                    label="LinkedIn Profile (Optional)"
                    type="url"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                {/* CV Upload */}
                <div className="pt-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Upload CV * <span className="text-slate-400 font-normal normal-case">(PDF, DOC, DOCX — max 5MB)</span>
                  </label>

                  <AnimatePresence initial={false}>
                    {validationAlerts.cv && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-2 p-2 bg-rose-500/10 border border-rose-500/20 rounded-lg flex items-center gap-2 text-xs font-bold text-rose-600"
                      >
                        <RiErrorWarningLine /> Please attach your CV
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!cvFile ? (
                    <div
                      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={onDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`cursor-pointer rounded-xl border-2 border-dashed p-6 sm:p-8 text-center transition-colors ${
                        dragOver
                          ? 'border-[#0c9d7d] bg-emerald-50'
                          : 'border-slate-300 bg-slate-50 hover:border-[#0c9d7d] hover:bg-emerald-50/50'
                      }`}
                    >
                      <RiUploadCloud2Line className="text-4xl text-[#0c9d7d] mx-auto mb-3" />
                      <p className="text-sm font-bold text-slate-700 mb-1">
                        Click to upload or drag & drop
                      </p>
                      <p className="text-xs text-slate-500">
                        PDF, DOC, DOCX · max 5MB
                      </p>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        onChange={(e) => handleFileSelect(e.target.files?.[0] || null)}
                        className="hidden"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 p-4 rounded-xl border-2 border-emerald-300 bg-emerald-50">
                      <div className="w-11 h-11 rounded-lg bg-emerald-600 flex items-center justify-center text-white shrink-0">
                        <RiFileTextLine className="text-2xl" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-slate-900 truncate">{cvFile.name}</p>
                        <p className="text-xs text-slate-500">
                          {(cvFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setCvFile(null)}
                        className="p-2 rounded-lg text-slate-600 hover:bg-rose-100 hover:text-rose-600 transition-colors shrink-0"
                        aria-label="Remove CV"
                      >
                        <RiCloseLine className="text-xl" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Cover Note */}
                <div className="pt-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Cover Note (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us briefly why you're a strong fit for this role…"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-900 text-sm font-medium focus:outline-none focus:border-[#0c9d7d] focus:bg-white transition-colors resize-none"
                  />
                </div>

                {/* Error */}
                {status === 'error' && errorMsg && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2 text-sm text-rose-700 font-medium">
                    <RiErrorWarningLine className="text-lg shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Submit */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full h-14 rounded-xl bg-slate-950 hover:bg-[#0c9d7d] text-white font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <><RiLoader4Line className="animate-spin text-xl" /> Submitting…</>
                    ) : (
                      <>Submit Application</>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 text-center mt-4">
                    By submitting, you agree to our{' '}
                    <Link href="/privacy-policy" className="text-[#0c9d7d] underline font-semibold">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Reusable Form Fields
============================================================ */
function Field({
  name, label, type, placeholder, error,
}: {
  name: string; label: string; type: string; placeholder: string; error?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl border-2 bg-slate-50 text-slate-900 text-sm font-medium focus:outline-none focus:bg-white transition-colors ${
          error
            ? 'border-rose-400 bg-rose-50'
            : 'border-slate-200 focus:border-[#0c9d7d]'
        }`}
      />
    </div>
  );
}

function SelectField({
  name, label, options,
}: {
  name: string; label: string; options: { label: string; value: string }[];
}) {
  return (
    <div>
      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
        {label}
      </label>
      <select
        name={name}
        defaultValue=""
        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-900 text-sm font-medium focus:outline-none focus:border-[#0c9d7d] focus:bg-white transition-colors"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}