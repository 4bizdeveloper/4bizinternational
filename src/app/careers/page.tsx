"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search, MapPin, Briefcase, Clock, ArrowRight, Filter,
} from "lucide-react";
import { JOBS } from "@/lib/jobs";

export default function CareersPage() {
  const [titleQuery, setTitleQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  const filteredJobs = useMemo(() => {
    return JOBS.filter((job) => {
      const matchesTitle =
        titleQuery.trim() === "" ||
        job.title.toLowerCase().includes(titleQuery.toLowerCase()) ||
        job.department.toLowerCase().includes(titleQuery.toLowerCase());

      const matchesLocation =
        locationQuery.trim() === "" ||
        job.location.toLowerCase().includes(locationQuery.toLowerCase());

      return matchesTitle && matchesLocation;
    });
  }, [titleQuery, locationQuery]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* ═══════════════ HERO WITH SEARCH ═══════════════ */}
      <section className="relative w-full bg-[#0b1f4e] overflow-hidden pt-28 sm:pt-32 pb-20 sm:pb-24 px-4">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px]" />
          <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            We're Hiring
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 leading-tight">
            Find more details on our <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
              open positions
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10">
            Join a team that's redefining enterprise technology across the globe.
          </p>

          {/* SEARCH BAR BOX */}
          <div className="bg-white rounded-2xl p-3 shadow-2xl max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-2">
              {/* Title Input */}
              <div className="flex-1 flex items-center gap-3 px-4 py-3 border border-slate-200 rounded-xl focus-within:border-[#0b1f4e] transition-colors">
                <Search className="w-5 h-5 text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Search job title or department"
                  value={titleQuery}
                  onChange={(e) => setTitleQuery(e.target.value)}
                  className="flex-1 outline-none text-slate-900 placeholder-slate-500 text-sm font-medium"
                />
              </div>

              {/* Location Input */}
              <div className="flex-1 flex items-center gap-3 px-4 py-3 border border-slate-200 rounded-xl focus-within:border-[#0b1f4e] transition-colors">
                <MapPin className="w-5 h-5 text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Search location"
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                  className="flex-1 outline-none text-slate-900 placeholder-slate-500 text-sm font-medium"
                />
              </div>

              {/* Search Button */}
              <button
                type="button"
                className="bg-[#0b1f4e] hover:bg-[#152f6b] text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm uppercase tracking-wider shrink-0"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ JOB LISTINGS ═══════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0b1f4e] tracking-tight">
              Available Positions
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Showing {filteredJobs.length} of {JOBS.length} open position
              {JOBS.length !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-4 py-2 rounded-full">
            <Filter className="w-3.5 h-3.5" />
            Filtered Results
          </div>
        </div>

        {/* Empty state */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-200">
            <Briefcase className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-700 mb-2">No matching jobs found</h3>
            <p className="text-slate-500 mb-6">
              Try different keywords or clear your filters.
            </p>
            <button
              onClick={() => { setTitleQuery(""); setLocationQuery(""); }}
              className="px-6 py-2.5 rounded-xl bg-[#0b1f4e] hover:bg-[#152f6b] text-white text-sm font-bold transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Job cards */}
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <article
              key={job.slug}
              className="group relative bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-[#0b1f4e] hover:shadow-[0_8px_40px_-12px_rgba(11,31,78,0.15)] transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">

                {/* Left: Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-cyan-600 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-200">
                      {job.department}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                      {job.workType}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0b1f4e] group-hover:text-blue-700 transition-colors mb-2 leading-snug">
                    <Link href={`/careers/${job.slug}`}>
                      <span className="absolute inset-0 z-10" aria-hidden="true" />
                      {job.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-3 line-clamp-2">
                    {job.shortDescription}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500 font-medium">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {job.experience}
                    </span>
                  </div>
                </div>

                {/* Right: CTA */}
                <div className="shrink-0 flex items-center gap-3 relative z-20">
                  <Link
                    href={`/careers/${job.slug}`}
                    className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-[#0b1f4e] border-2 border-[#0b1f4e]/20 hover:border-[#0b1f4e] hover:bg-[#0b1f4e]/5 transition-all"
                  >
                    View Details
                  </Link>
                  <Link
                    href={`/careers/apply?job=${job.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-black uppercase tracking-wider text-white bg-[#0b1f4e] hover:bg-[#152f6b] transition-all shadow-lg shadow-[#0b1f4e]/20 group-hover:shadow-[#0b1f4e]/40"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}