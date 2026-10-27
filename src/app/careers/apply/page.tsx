"use client";

import React, { useState, useRef, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft, CheckCircle2, AlertCircle, Loader2,
  UploadCloud, FileText, X, ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { JOBS, getJobBySlug } from "@/lib/jobs";

const MAX_CV_MB = 5;
const ACCEPTED_EXT = [".pdf", ".doc", ".docx"];

/* ─── Wrapper (needed for useSearchParams in a client component) ─── */
export default function ApplyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0b1f4e] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
      </div>
    }>
      <ApplyPageInner />
    </Suspense>
  );
}

/* ─── Inner form (client) ─── */
function ApplyPageInner() {
  const searchParams = useSearchParams();
  const jobSlug = searchParams.get("job") || "";
  const selectedJob = getJobBySlug(jobSlug);

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [alerts, setAlerts] = useState({ fullName: false, email: false, phone: false, cv: false, job: false });
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    const ext = "." + file.name.split(".").pop()?.toLowerCase();
    if (!ACCEPTED_EXT.includes(ext)) return "Only PDF, DOC, or DOCX accepted.";
    if (file.size > MAX_CV_MB * 1024 * 1024) return `Max ${MAX_CV_MB}MB.`;
    return null;
  };

  const handleFileSelect = (file: File | null) => {
    if (!file) { setCvFile(null); return; }
    const err = validateFile(file);
    if (err) { setErrorMsg(err); setStatus("error"); return; }
    setCvFile(file);
    setAlerts((a) => ({ ...a, cv: false }));
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files?.[0];
    if (f) handleFileSelect(f);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    const errors = {
      fullName: !fd.get("fullName"),
      email: !fd.get("email"),
      phone: !fd.get("phone"),
      cv: !cvFile,
      job: !fd.get("job"),
    };
    setAlerts(errors);
    if (Object.values(errors).some(Boolean)) return;

    setStatus("sending");
    setErrorMsg("");

    const payload = new FormData();
    payload.append("fullName", (fd.get("fullName") as string).trim());
    payload.append("email", (fd.get("email") as string).trim());
    payload.append("phone", (fd.get("phone") as string).trim());
    payload.append("job", (fd.get("job") as string).trim());
    payload.append("currentLocation", (fd.get("currentLocation") as string) || "");
    payload.append("experience", (fd.get("experience") as string) || "");
    payload.append("message", (fd.get("message") as string) || "");
    payload.append("cv", cvFile!);

    try {
      const res = await fetch("/api/apply", { method: "POST", body: payload });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.status === "success") {
        setStatus("success");
        formRef.current?.reset();
        setCvFile(null);
      } else {
        throw new Error(data.error || "Submission failed.");
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Network error.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      
      {/* ═══════════════ DARK BLUE HERO SECTION ═══════════════ */}
      {/* Fixes the transparent header issue by providing a dark background for white text */}
      <section className="relative w-full bg-[#0b1f4e] overflow-hidden pt-32 sm:pt-40 pb-32 px-4">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-4xl mx-auto w-full">
          {/* Back link */}
          <Link
            href={selectedJob ? `/careers/${selectedJob.slug}` : "/careers"}
            className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200 font-bold uppercase tracking-wider mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {selectedJob ? "Back to job details" : "Back to all jobs"}
          </Link>

          {/* Header Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-black uppercase tracking-widest mb-5 backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              Application Form
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
              Apply for the role
            </h1>
            {selectedJob && (
              <p className="text-base sm:text-lg text-slate-300">
                You are applying for:{" "}
                <span className="font-bold text-white">{selectedJob.title}</span>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════ FORM SECTION ═══════════════ */}
      {/* Pulled up with negative margin to overlap the dark hero */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-20 w-full flex-1">
        
        <div className="w-full rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-10">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-10">
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-black text-[#0b1f4e] mb-3">Application Submitted!</h2>
                <p className="text-slate-600 max-w-md mx-auto mb-8">
                  Thank you. Our hiring team will review your application and reach out within 5 business days.
                </p>
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0b1f4e] hover:bg-[#152f6b] text-white font-bold text-sm transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to all jobs
                </Link>
              </motion.div>
            ) : (
              <motion.form key="form" ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>

                {/* Job selector */}
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">
                    Position Applying For *
                  </label>
                  <select
                    name="job"
                    defaultValue={jobSlug}
                    className={`w-full px-4 py-3 rounded-xl border-2 bg-white text-slate-900 text-sm font-medium focus:outline-none transition-colors ${
                      alerts.job ? "border-rose-400" : "border-slate-200 focus:border-[#0b1f4e]"
                    }`}
                  >
                    <option value="">Select a position</option>
                    {JOBS.map((j) => (
                      <option key={j.slug} value={j.slug}>{j.title}</option>
                    ))}
                  </select>
                </div>

                {/* Personal info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field name="fullName" label="Full Name *" type="text" placeholder="Your full name" error={alerts.fullName} />
                  <Field name="email" label="Email Address *" type="email" placeholder="you@email.com" error={alerts.email} />
                  <Field name="phone" label="Phone Number *" type="tel" placeholder="+971 50 123 4567" error={alerts.phone} />
                  <Field name="currentLocation" label="Current Location" type="text" placeholder="e.g. Kozhikode, Kerala" />
                  <SelectField
                    name="experience"
                    label="Total Experience"
                    options={[
                      { label: "Select experience", value: "" },
                      { label: "Fresher", value: "fresher" },
                      { label: "1–2 years", value: "1-2" },
                      { label: "3–5 years", value: "3-5" },
                      { label: "5+ years", value: "5+" },
                    ]}
                  />
                </div>

                {/* CV Upload */}
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">
                    Upload CV * <span className="text-slate-400 font-normal normal-case">(PDF, DOC, DOCX — max {MAX_CV_MB}MB)</span>
                  </label>

                  {alerts.cv && !cvFile && (
                    <div className="mb-2 p-2 bg-rose-50 border border-rose-200 rounded-lg flex items-center gap-2 text-xs font-bold text-rose-600">
                      <AlertCircle className="w-4 h-4" /> Please attach your CV
                    </div>
                  )}

                  {!cvFile ? (
                    <div
                      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={onDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`cursor-pointer rounded-xl border-2 border-dashed p-6 sm:p-8 text-center transition-colors ${
                        dragOver ? "border-[#0b1f4e] bg-blue-50" : "border-slate-300 bg-slate-50 hover:border-[#0b1f4e] hover:bg-blue-50/40"
                      }`}
                    >
                      <UploadCloud className="w-10 h-10 text-[#0b1f4e] mx-auto mb-3" />
                      <p className="text-sm font-bold text-slate-700 mb-1">Click to upload or drag & drop</p>
                      <p className="text-xs text-slate-500">PDF, DOC, DOCX · max {MAX_CV_MB}MB</p>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => handleFileSelect(e.target.files?.[0] || null)}
                        className="hidden"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 p-4 rounded-xl border-2 border-emerald-300 bg-emerald-50">
                      <div className="w-11 h-11 rounded-lg bg-emerald-600 flex items-center justify-center text-white shrink-0">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-slate-900 truncate">{cvFile.name}</p>
                        <p className="text-xs text-slate-500">{(cvFile.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setCvFile(null)}
                        className="p-2 rounded-lg text-slate-600 hover:bg-rose-100 hover:text-rose-600 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">
                    Cover Note (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us why you're a great fit…"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-slate-900 text-sm font-medium focus:outline-none focus:border-[#0b1f4e] transition-colors resize-none"
                  />
                </div>

                {/* Error */}
                {status === "error" && errorMsg && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2 text-sm text-rose-700 font-medium">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full h-14 rounded-xl bg-[#0b1f4e] hover:bg-[#152f6b] text-white font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-60"
                  >
                    {status === "sending" ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Submitting…</>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                  <p className="text-xs text-slate-500 text-center mt-4">
                    By submitting, you agree to our{" "}
                    <Link href="/privacy-policy" className="text-[#0b1f4e] underline font-semibold">Privacy Policy</Link>.
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Autofill fix */}
      <style jsx global>{`
        input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 1000px #ffffff inset !important;
          -webkit-text-fill-color: #0f172a !important;
        }
      `}</style>
    </div>
  );
}

/* ─── Field helpers ─── */
function Field({ name, label, type, placeholder, error }: {
  name: string; label: string; type: string; placeholder: string; error?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl border-2 bg-white text-slate-900 text-sm font-medium focus:outline-none transition-colors ${
          error ? "border-rose-400 bg-rose-50" : "border-slate-200 focus:border-[#0b1f4e]"
        }`}
      />
    </div>
  );
}

function SelectField({ name, label, options }: {
  name: string; label: string; options: { label: string; value: string }[];
}) {
  return (
    <div>
      <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">{label}</label>
      <select
        name={name}
        defaultValue=""
        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-slate-900 text-sm font-medium focus:outline-none focus:border-[#0b1f4e] transition-colors"
      >
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}