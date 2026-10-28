import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin, Clock, Briefcase, ArrowRight, ArrowLeft,
  CheckCircle2, Star,
} from "lucide-react";
import {getPublicJobs} from "@/lib/careers-catalog";
export const dynamic="force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/* ---------- Static generation ---------- */

/* ---------- Per-job metadata ---------- */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = (await getPublicJobs().catch(()=>[])).find(j=>j.slug===slug);
  if (!job) return { title: "Job Not Found" };

  return {
    title: `${job.title} | 4Biz Careers`,
    description: job.shortDescription,
    alternates: {
      canonical: `https://www.4bizinternational.com/careers/${job.slug}/`,
    },
    openGraph: {
      title: `${job.title} | 4Biz Careers`,
      description: job.shortDescription,
      url: `https://www.4bizinternational.com/careers/${job.slug}/`,
      type: "article",
    },
  };
}

/* ---------- Page ---------- */
export default async function JobDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const job = (await getPublicJobs().catch(()=>[])).find(j=>j.slug===slug);

  if (!job) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.about,
    datePosted: job.postedDate,
    employmentType: job.workType.toUpperCase().replace("-", "_"),
    hiringOrganization: {
      "@type": "Organization",
      name: "4Biz International LLC",
      sameAs: "https://www.4bizinternational.com",
      logo: "https://www.4bizinternational.com/4biz_logo-1.png",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location.split(",")[0],
        addressCountry: "IN",
      },
    },
    qualifications: job.qualifications.join("; "),
    responsibilities: job.responsibilities.join("; "),
    industry: "Information Technology",
    directApply: true,
    applicantLocationRequirements: { "@type": "Country", name: "India" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white text-slate-900 font-sans">

        {/* ═══════════ HERO ═══════════ */}
        <section className="relative bg-[#0b1f4e] overflow-hidden pt-24 sm:pt-28 pb-16 px-4">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
          </div>

          <div className="relative max-w-5xl mx-auto">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200 font-semibold mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all jobs
            </Link>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-cyan-300 bg-white/10 px-3 py-1.5 rounded-md border border-white/20 backdrop-blur-sm">
                {job.department}
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/80 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
                {job.workType}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              {job.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-200">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                {job.location}
              </span>
              {job.experience && <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                {job.experience}
              </span>}
              <span className="inline-flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-cyan-400" />
                {job.workType}
              </span>
            </div>
          </div>
        </section>

        {/* ═══════════ MAIN CONTENT ═══════════ */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left: details */}
            <div className="lg:col-span-2 space-y-10">

              {/* About */}
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-[#0b1f4e] mb-4 pb-3 border-b-2 border-slate-100">
                  About the Role
                </h2>
                <p className="text-slate-700 leading-relaxed text-base">{job.about}</p>
              </div>

              {/* Responsibilities */}
              {job.responsibilities.length > 0 && <div>
                <h2 className="text-xl sm:text-2xl font-black text-[#0b1f4e] mb-4 pb-3 border-b-2 border-slate-100">
                  Key Responsibilities
                </h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>}

              {/* Qualifications */}
              {job.qualifications.length > 0 && <div>
                <h2 className="text-xl sm:text-2xl font-black text-[#0b1f4e] mb-4 pb-3 border-b-2 border-slate-100">
                  Required Qualifications
                </h2>
                <ul className="space-y-3">
                  {job.qualifications.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>}

              {/* Nice to have */}
              {job.niceToHave && job.niceToHave.length > 0 && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0b1f4e] mb-4 pb-3 border-b-2 border-slate-100">
                    Nice to Have
                  </h2>
                  <ul className="space-y-3">
                    {job.niceToHave.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                        <Star className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right: sticky apply card */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">
                    Ready to apply?
                  </p>
                  <h3 className="text-lg font-extrabold text-[#0b1f4e] leading-snug">
                    Submit your application
                  </h3>
                </div>

                <Link
                  href={`/careers/apply?job=${job.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-black uppercase tracking-wider text-white bg-[#0b1f4e] hover:bg-[#152f6b] transition-all shadow-lg shadow-[#0b1f4e]/20"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="pt-4 border-t border-slate-200 space-y-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {job.location}
                  </div>
                  {job.experience && <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {job.experience}
                  </div>}
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                    {job.workType}
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </section>
      </div>
    </>
  );
}