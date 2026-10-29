import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Email Security Solutions in UAE: Stop Phishing & Spoofing | 4Biz International",
  description: "How do you stop phishing, spoofing, and hacked email accounts? 4Biz International explains business email security, SPF, DKIM, DMARC, and what to do if you click a bad link.",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.4bizinternational.com/blog/email-security-solutions-uae/",
  },
};

export default function EmailSecurityBlogPost() {
  const publishedDate = "2026-10-29";
  const authorName = "4Biz International LLC";
  const authorUrl = "https://www.4bizinternational.com/";
  const pageUrl = "https://www.4bizinternational.com/blog/email-security-solutions-uae/";
  const pageTitle = "Email Security Solutions in UAE: Stop Phishing & Spoofing";

  // JSON-LD Schemas
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "How Do I Protect My Business Email From Phishing and Hackers?",
    "description": "How do you stop phishing, spoofing, and hacked email accounts? 4Biz International explains business email security, SPF, DKIM, DMARC, and what to do if you click a bad link.",
    "author": {
      "@type": "Organization",
      "name": authorName,
      "url": authorUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": authorName,
      "url": authorUrl,
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.4bizinternational.com/logo.png"
      }
    },
    "datePublished": publishedDate,
    "dateModified": publishedDate,
    "mainEntityOfPage": pageUrl,
    "image": "/blog/email-security-solution-1.webp"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best email security for a small business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A layered setup works best: multi-factor authentication, SPF, DKIM, and DMARC, advanced phishing filtering, and regular staff training. The right level depends on how sensitive your data is and how much a successful attack would cost you."
        }
      },
      {
        "@type": "Question",
        "name": "How do I stop phishing emails from reaching my inbox?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use advanced filtering that checks links, attachments, and impersonation, and keep authentication records enforced. No filter catches everything, so staff awareness is still needed."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between phishing and spoofing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phishing is a message that tricks you into giving up information or clicking something harmful. Spoofing is forging the sender address so the message looks trusted. Phishing emails often use spoofing."
        }
      },
      {
        "@type": "Question",
        "name": "Can my email be hacked without me knowing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Attackers often hide by creating forwarding rules or reading mail quietly. Regular checks of login activity and forwarding rules help catch this."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need DMARC for my business domain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if you send business email. DMARC helps stop others using your domain name for fraud and supports reliable delivery of your genuine email."
        }
      },
      {
        "@type": "Question",
        "name": "What is the first thing to do after a phishing attack?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Change the affected password from a clean device, sign out other sessions, report it to your IT provider, and check for forwarding rules and unusual activity."
        }
      },
      {
        "@type": "Question",
        "name": "How can 4Biz International help with email security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "4Biz International can review your current email setup, configure authentication and protection, and provide monitoring and support. Contact us to discuss your platform and needs."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.4bizinternational.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.4bizinternational.com/blog/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": pageTitle,
        "item": pageUrl
      }
    ]
  };

  return (
    <div 
      className="min-h-screen text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-white"
      style={{ background: 'linear-gradient(135deg, #06112c 0%, #0c1b40 45%, #08306b 100%)' }}
    >
      {/* Injecting JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* FULL WIDTH HERO SECTION */}
      <section className="relative w-full overflow-hidden pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-24 border-b border-cyan-900/40">
        {/* Background Image */}
        <Image
          src="/blog/email-security-solution-1.webp"
          alt="Email Security and Cyber Protection"
          fill
          priority
          className="object-cover opacity-65"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06112c]/90 via-[#0c1b40]/80 to-[#08306b]/70 z-0" />

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="mb-6 flex flex-wrap break-words leading-relaxed text-xs sm:text-sm text-slate-300 gap-2 items-center">
            <Link href="https://www.4bizinternational.com/" className="hover:text-cyan-300 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="https://www.4bizinternational.com/blog/" className="hover:text-cyan-300 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-cyan-300 font-medium">{pageTitle}</span>
          </nav>

          {/* Main H1 Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            How Do I Protect My Business Email From Phishing and Hackers?
          </h1>

          {/* Author Bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 bg-slate-900/60 backdrop-blur-md p-3.5 rounded-xl border border-slate-700/50 max-w-fit">
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 font-semibold">Author:</span>
              <a 
                href={authorUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-cyan-300 hover:underline font-medium"
              >
                {authorName}
              </a>
            </div>
            <span className="hidden sm:inline text-slate-500">•</span>
            <div>
              <span className="text-cyan-400 font-semibold">Published:</span> {publishedDate}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">

        {/* QUICK ANSWER BOX */}
        <section className="bg-cyan-950/40 border-l-4 border-cyan-400 p-6 md:p-8 rounded-r-2xl backdrop-blur-sm border-t border-b border-r border-cyan-500/20 shadow-xl">
          <h2 className="text-xl md:text-2xl font-bold text-cyan-300 mb-3 flex items-center gap-2">
            <svg className="w-6 h-6 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Quick Answer
          </h2>
          <p className="text-slate-200 text-base md:text-lg leading-relaxed">
            To protect business email, turn on multi-factor authentication for every mailbox, set up SPF, DKIM, and DMARC so no one can fake your domain, add advanced phishing and malware filtering, train staff to spot suspicious messages, and verify any payment or bank-detail change by phone. Built-in Microsoft 365 or Google Workspace protection helps, but only when it is configured properly.
          </p>
        </section>

        {/* SECTION 1: INTRO & WHAT IS EMAIL SECURITY */}
        <section className="space-y-6">
          <p className="text-slate-200 text-base md:text-lg leading-relaxed">
            If you are searching for email security, you have probably had a suspicious email, a hacked account, or a scare involving a fake invoice. You are not alone. Email is the most common way attackers reach a business, because one reply can reveal a password or trigger a payment. At 4Biz International, we answer these same questions for businesses across UAE, so this guide covers them in the order people usually ask.
          </p>

          <div className="space-y-4 pt-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-700/60 pb-3">
              What Is Email Security, and Why Does My Business Need It?
            </h2>
            <p className="text-slate-200 leading-relaxed">
              Email security is the set of tools and habits that protect your mailboxes, messages, and staff from phishing, fraud, malware, and account takeover.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">Isn&apos;t Spam Filtering Enough?</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  No. Spam filters remove bulk junk. They often miss targeted phishing, fake supplier requests, and messages sent from a real account that has been hacked.
                </p>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">Why Do Hackers Target Email?</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Almost every employee has an inbox, people trust what lands in it, and email holds invoices, contracts, and password resets. An attacker needs just one person to act.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ROW 1: TEXT LEFT, IMAGE RIGHT */}
        <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              What Are the Most Common Email Scams and Attacks?
            </h2>
            
            <div className="space-y-4 text-slate-200">
              <div>
                <h3 className="text-lg font-semibold text-cyan-300">What Is Phishing?</h3>
                <p className="text-sm md:text-base leading-relaxed text-slate-300">
                  A fake message pretending to be a bank, supplier, or service, designed to steal a password or make you click a harmful link.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cyan-300">What Is Business Email Compromise (BEC)?</h3>
                <p className="text-sm md:text-base leading-relaxed text-slate-300">
                  An attacker poses as a manager or supplier and asks for a payment or new bank details. There is often no link or attachment, so basic tools miss it.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cyan-300">What Is Email Spoofing?</h3>
                <p className="text-sm md:text-base leading-relaxed text-slate-300">
                  Forging the sender address so a message appears to come from your company or someone you trust.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cyan-300">What Is Email Account Takeover?</h3>
                <p className="text-sm md:text-base leading-relaxed text-slate-300">
                  A criminal logs into a real mailbox with a stolen password and uses it to send fraud or quietly read and forward your mail.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cyan-300">Can Attachments and Links Really Infect My Computer?</h3>
                <p className="text-sm md:text-base leading-relaxed text-slate-300">
                  Yes. Documents, archives, and links can install malware or lead to fake login pages that copy your password.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative h-[280px] md:h-[340px] w-full rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl">
              <Image
                src="/blog/email-security-solution-1.webp"
                alt="Cyber Threat and Email Scams Protection"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/20" />
            </div>
          </div>
        </section>

        {/* SECTION 2: HACKED SIGNALS & IMMEDIATE ACTIONS */}
        <section className="space-y-6 bg-slate-900/40 p-6 md:p-8 rounded-2xl border border-slate-800">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            How Do I Know If My Email Has Been Hacked?
          </h2>

          <p className="text-slate-300">Watch out for these critical red flags indicating a potential mailbox compromise:</p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-200">
            <li className="flex items-start gap-2.5 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
              <span className="text-cyan-400 font-bold">✓</span>
              <span>Colleagues or customers receive strange emails from you</span>
            </li>
            <li className="flex items-start gap-2.5 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
              <span className="text-cyan-400 font-bold">✓</span>
              <span>You see replies to messages you never sent</span>
            </li>
            <li className="flex items-start gap-2.5 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
              <span className="text-cyan-400 font-bold">✓</span>
              <span>New forwarding or inbox rules appear that you did not create</span>
            </li>
            <li className="flex items-start gap-2.5 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
              <span className="text-cyan-400 font-bold">✓</span>
              <span>Login alerts show unfamiliar places or devices</span>
            </li>
            <li className="flex items-start gap-2.5 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
              <span className="text-cyan-400 font-bold">✓</span>
              <span>Emails go missing or move to deleted items</span>
            </li>
            <li className="flex items-start gap-2.5 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
              <span className="text-cyan-400 font-bold">✓</span>
              <span>You receive password reset emails you did not request</span>
            </li>
          </ul>

          <div className="mt-6 pt-4 border-t border-slate-800">
            <h3 className="text-xl font-bold text-cyan-300 mb-2">
              What Should I Do Straight Away If My Email Is Hacked?
            </h3>
            <p className="text-slate-200 leading-relaxed">
              From a clean device, change the password, sign out all other sessions, remove unknown forwarding rules, turn on multi-factor authentication, and tell your IT provider so the damage can be checked.
            </p>
          </div>
        </section>

        {/* ROW 2: IMAGE LEFT, TEXT RIGHT (flex-col md:flex-row-reverse) */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              What Should I Do If I Clicked a Phishing Link?
            </h2>

            <div className="space-y-4">
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <h3 className="text-lg font-semibold text-cyan-300">1. Disconnect and Stop</h3>
                <p className="text-slate-300 text-sm mt-1">
                  Close the page without entering anything further. If you entered a password, treat it as stolen.
                </p>
              </div>

              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <h3 className="text-lg font-semibold text-cyan-300">2. Change Your Password</h3>
                <p className="text-slate-300 text-sm mt-1">
                  Change it from a different, trusted device, and change it anywhere else you reused it.
                </p>
              </div>

              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <h3 className="text-lg font-semibold text-cyan-300">3. Report It Immediately</h3>
                <p className="text-slate-300 text-sm mt-1">
                  Tell your IT team or provider. Speed matters, because early action often prevents the attacker from using the access.
                </p>
              </div>

              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <h3 className="text-lg font-semibold text-cyan-300">4. Check for Damage</h3>
                <p className="text-slate-300 text-sm mt-1">
                  Review recent logins, forwarding rules, and sent messages, and scan the device for malware.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative h-[280px] md:h-[340px] w-full rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl">
              <Image
                src="/blog/email-security-solution-2.webp"
                alt="Phishing Incident Response"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/20" />
            </div>
          </div>
        </section>

        {/* SECTION 3: DOMAIN AUTHENTICATION (SPF, DKIM, DMARC) & RESPONSIVE TABLE */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            How Do I Stop Someone Spoofing My Company Email Address?
          </h2>
          <p className="text-slate-200 leading-relaxed">
            Set up three email authentication records for your domain, and make sure they are enforced.
          </p>

          <h3 className="text-xl font-bold text-cyan-300">What Are SPF, DKIM, and DMARC?</h3>

          {/* Responsive Table Wrapper */}
          <div className="overflow-x-auto rounded-xl border border-slate-700 bg-slate-900/80 shadow-xl">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-800/90 text-cyan-300 border-b border-slate-700">
                  <th className="p-4 font-semibold text-base">Record</th>
                  <th className="p-4 font-semibold text-base">What It Does</th>
                  <th className="p-4 font-semibold text-base">In Plain English</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-200 text-sm md:text-base">
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-4 font-bold text-cyan-400">SPF</td>
                  <td className="p-4">Lists the servers allowed to send email for your domain</td>
                  <td className="p-4 italic text-slate-300">&quot;Only these senders may use our name&quot;</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-4 font-bold text-cyan-400">DKIM</td>
                  <td className="p-4">Adds a digital signature showing the message is genuine and unchanged</td>
                  <td className="p-4 italic text-slate-300">&quot;This really came from us&quot;</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-4 font-bold text-cyan-400">DMARC</td>
                  <td className="p-4">Tells receivers what to do with messages that fail, and sends you reports</td>
                  <td className="p-4 italic text-slate-300">&quot;Reject fakes, and tell us about them&quot;</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">Is DMARC Set to &quot;None&quot; Good Enough?</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                No. A DMARC policy set to monitor only gives you reports but does not block fake emails. Once your legitimate senders are confirmed, the policy should move to quarantine or reject.
              </p>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">Why Do Some of My Real Emails Go to Spam?</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Often because SPF, DKIM, or DMARC is missing or misconfigured, or because a third-party service, such as a marketing or invoicing tool, sends mail for you without being authorized. Fixing authentication usually improves delivery too.
              </p>
            </div>
          </div>
        </section>

        {/* ROW 3: TEXT LEFT, IMAGE RIGHT */}
        <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              What Does a Business Email Security Solution Include?
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-base font-semibold text-cyan-300">Advanced Phishing and Malware Filtering</h3>
                <p className="text-slate-300 text-sm">Scans every message for malicious links, attachments, and impersonation before it reaches the inbox.</p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-cyan-300">Link and Attachment Protection</h3>
                <p className="text-slate-300 text-sm">Checks links when you click them and opens suspicious files in a safe environment.</p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-cyan-300">Multi-Factor Authentication</h3>
                <p className="text-slate-300 text-sm">A second verification step on every mailbox, which stops most takeovers that use stolen passwords.</p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-cyan-300">Impersonation and BEC Protection</h3>
                <p className="text-slate-300 text-sm">Flags lookalike domains, display-name tricks, and unusual payment requests.</p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-cyan-300">Email Encryption and Data Loss Prevention</h3>
                <p className="text-slate-300 text-sm">Protects sensitive messages and warns or blocks when confidential data is sent to the wrong place.</p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-cyan-300">Email Backup and Archiving</h3>
                <p className="text-slate-300 text-sm">Keeps a recoverable copy of mail after deletion, attack, or a legal request.</p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-cyan-300">Monitoring and Alerts</h3>
                <p className="text-slate-300 text-sm">Watches for unusual logins, new forwarding rules, and sudden bulk sending.</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative h-[280px] md:h-[340px] w-full rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl">
              <Image
                src="/blog/email-security-solution-3.webp"
                alt="Enterprise Email Protection Infrastructure"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/20" />
            </div>
          </div>
        </section>

        {/* SECTION 4: PLATFORMS & BEC PREVENTION */}
        <section className="space-y-8">
          <div className="bg-slate-900/50 p-6 md:p-8 rounded-2xl border border-slate-800 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Is Microsoft 365 or Google Workspace Email Secure Enough?
            </h2>
            <p className="text-slate-200 leading-relaxed">
              Both are secure platforms, and higher plans add stronger protection. For many small businesses, properly configured built-in tools are a good start. Businesses that handle payments, client contracts, or regulated data often add a dedicated layer for stronger impersonation detection and reporting. The key point is that built-in protection only works as well as its settings, and many accounts still run on defaults.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              How Can I Stop Business Email Compromise and Fake Invoice Fraud?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800">
                <h3 className="text-lg font-semibold text-cyan-300 mb-1">Verify Payment Changes by Phone</h3>
                <p className="text-slate-300 text-sm">
                  Any request to change bank details or make an urgent payment should be confirmed by calling a known number, never one from the email.
                </p>
              </div>

              <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800">
                <h3 className="text-lg font-semibold text-cyan-300 mb-1">Require Two People for Large Payments</h3>
                <p className="text-slate-300 text-sm">
                  A second approver catches many fake requests.
                </p>
              </div>

              <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800">
                <h3 className="text-lg font-semibold text-cyan-300 mb-1">Watch for Lookalike Domains</h3>
                <p className="text-slate-300 text-sm">
                  A single changed letter in a sender&apos;s address is a common trick.
                </p>
              </div>

              <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800">
                <h3 className="text-lg font-semibold text-cyan-300 mb-1">Slow Down on Urgent Requests</h3>
                <p className="text-slate-300 text-sm">
                  Pressure and secrecy are classic signs of fraud.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: STAFF TRAINING & STEP-BY-STEP SETUP */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              How Do I Train My Staff to Spot Phishing Emails?
            </h2>

            <div>
              <h3 className="text-base font-semibold text-cyan-300">What Should Staff Look For?</h3>
              <p className="text-slate-300 text-sm">
                Unexpected requests, urgent or threatening language, mismatched sender addresses, odd links, and requests for passwords or payments.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-cyan-300">How Often Should Training Happen?</h3>
              <p className="text-slate-300 text-sm">
                Regularly, in short sessions, with occasional simulated phishing tests. One-off training fades quickly.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-cyan-300">Make Reporting Easy</h3>
              <p className="text-slate-300 text-sm">
                A simple &quot;report suspicious email&quot; button or contact means staff speak up instead of ignoring or deleting.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              How Do I Set Up Email Security, Step by Step?
            </h2>

            <ol className="space-y-3 text-slate-300 text-sm list-decimal list-inside">
              <li className="leading-relaxed">
                <strong className="text-cyan-300">Secure Accounts First:</strong> Turn on multi-factor authentication, remove old accounts, and review admin permissions and forwarding rules.
              </li>
              <li className="leading-relaxed">
                <strong className="text-cyan-300">Set Up SPF, DKIM, and DMARC:</strong> Identify every service that sends mail for you, configure the records, and move DMARC toward enforcement.
              </li>
              <li className="leading-relaxed">
                <strong className="text-cyan-300">Add Advanced Filtering:</strong> Enable stronger phishing, malware, and impersonation protection.
              </li>
              <li className="leading-relaxed">
                <strong className="text-cyan-300">Train Staff:</strong> Run awareness sessions and give a clear reporting route.
              </li>
              <li className="leading-relaxed">
                <strong className="text-cyan-300">Monitor and Review:</strong> Check alerts, investigate reports quickly, and review settings regularly.
              </li>
            </ol>
          </div>
        </section>

        {/* SECTION 6: COMMON MISTAKES & 4BIZ HELP */}
        <section className="space-y-8">
          <div className="bg-red-950/20 border border-red-500/30 p-6 md:p-8 rounded-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              What Mistakes Do Businesses Make With Email Security?
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-200">
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">•</span>
                <span>Relying on default spam filtering and assuming it is enough</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">•</span>
                <span>Leaving multi-factor authentication off for shared or executive mailboxes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">•</span>
                <span>Setting up SPF but not DKIM or DMARC</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">•</span>
                <span>Leaving DMARC on monitor-only for years</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">•</span>
                <span>Forgetting third-party services that send email on the company&apos;s behalf</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">•</span>
                <span>Accepting payment-change requests by email without a phone check</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">•</span>
                <span>Never reviewing forwarding rules</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">•</span>
                <span>Training staff once and never again</span>
              </li>
              <li className="flex items-start gap-2 md:col-span-2">
                <span className="text-red-400 font-bold">•</span>
                <span>Giving employees no simple way to report suspicious messages</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-900/60 p-6 md:p-8 rounded-2xl border border-slate-700/60 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              How Can 4Biz International Help Secure My Business Email?
            </h2>
            <p className="text-slate-200 leading-relaxed">
              4Biz International provides email security solutions, including phishing and malware filtering, SPF, DKIM, and DMARC setup, multi-factor authentication, mailbox monitoring, and staff awareness support, alongside cybersecurity. Microsoft 365. and Google Workspace <Link href="https://www.4bizinternational.com/services/" className="text-cyan-300 hover:underline">services</Link> so protection fits the email platform you already use. We work with businesses across Dubai, Abu Dhabi, and the wider UAE, from our offices in Dubai and Kerala.
            </p>
            <p className="text-slate-300 italic font-medium pt-2">
              Most email attacks succeed through a gap, not genius: a missing second step, an unchecked payment request, a spoofable domain. Closing those gaps is where email security starts.
            </p>
            <div className="pt-2">
              <Link 
                href="https://www.4bizinternational.com/services/" 
                className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 font-semibold underline"
              >
                Explore 4Biz IT & Cybersecurity Services &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* INTERACTIVE FAQS ACCORDION SECTION */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-700/60 pb-3">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="group bg-slate-900/60 p-5 rounded-xl border border-slate-800 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg text-white group-open:text-cyan-300">
                <span>1. What is the best email security for a small business?</span>
                <span className="ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180 text-cyan-400">▼</span>
              </summary>
              <p className="mt-3 text-slate-300 text-base leading-relaxed border-t border-slate-800/80 pt-3">
                A layered setup works best: multi-factor authentication, SPF, DKIM, and DMARC, advanced phishing filtering, and regular staff training. The right level depends on how sensitive your data is and how much a successful attack would cost you.
              </p>
            </details>

            <details className="group bg-slate-900/60 p-5 rounded-xl border border-slate-800 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg text-white group-open:text-cyan-300">
                <span>2. How do I stop phishing emails from reaching my inbox?</span>
                <span className="ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180 text-cyan-400">▼</span>
              </summary>
              <p className="mt-3 text-slate-300 text-base leading-relaxed border-t border-slate-800/80 pt-3">
                Use advanced filtering that checks links, attachments, and impersonation, and keep authentication records enforced. No filter catches everything, so staff awareness is still needed.
              </p>
            </details>

            <details className="group bg-slate-900/60 p-5 rounded-xl border border-slate-800 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg text-white group-open:text-cyan-300">
                <span>3. What is the difference between phishing and spoofing?</span>
                <span className="ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180 text-cyan-400">▼</span>
              </summary>
              <p className="mt-3 text-slate-300 text-base leading-relaxed border-t border-slate-800/80 pt-3">
                Phishing is a message that tricks you into giving up information or clicking something harmful. Spoofing is forging the sender address so the message looks trusted. Phishing emails often use spoofing.
              </p>
            </details>

            <details className="group bg-slate-900/60 p-5 rounded-xl border border-slate-800 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg text-white group-open:text-cyan-300">
                <span>4. Can my email be hacked without me knowing?</span>
                <span className="ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180 text-cyan-400">▼</span>
              </summary>
              <p className="mt-3 text-slate-300 text-base leading-relaxed border-t border-slate-800/80 pt-3">
                Yes. Attackers often hide by creating forwarding rules or reading mail quietly. Regular checks of login activity and forwarding rules help catch this.
              </p>
            </details>

            <details className="group bg-slate-900/60 p-5 rounded-xl border border-slate-800 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg text-white group-open:text-cyan-300">
                <span>5. Do I need DMARC for my business domain?</span>
                <span className="ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180 text-cyan-400">▼</span>
              </summary>
              <p className="mt-3 text-slate-300 text-base leading-relaxed border-t border-slate-800/80 pt-3">
                Yes, if you send business email. DMARC helps stop others using your domain name for fraud and supports reliable delivery of your genuine email.
              </p>
            </details>

            <details className="group bg-slate-900/60 p-5 rounded-xl border border-slate-800 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg text-white group-open:text-cyan-300">
                <span>6. What is the first thing to do after a phishing attack?</span>
                <span className="ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180 text-cyan-400">▼</span>
              </summary>
              <p className="mt-3 text-slate-300 text-base leading-relaxed border-t border-slate-800/80 pt-3">
                Change the affected password from a clean device, sign out other sessions, report it to your IT provider, and check for forwarding rules and unusual activity.
              </p>
            </details>

            <details className="group bg-slate-900/60 p-5 rounded-xl border border-slate-800 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg text-white group-open:text-cyan-300">
                <span>7. How can 4Biz International help with email security?</span>
                <span className="ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180 text-cyan-400">▼</span>
              </summary>
              <p className="mt-3 text-slate-300 text-base leading-relaxed border-t border-slate-800/80 pt-3">
                4Biz International can review your current email setup, configure authentication and protection, and provide monitoring and support. Contact us to discuss your platform and needs.
              </p>
            </details>
          </div>
        </section>

        {/* CALL TO ACTION CTA FOOTER BOX */}
        <section className="bg-gradient-to-r from-cyan-900/60 via-slate-900 to-blue-900/60 border border-cyan-500/40 p-8 rounded-2xl text-center space-y-4 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Talk to 4Biz International About Email Security
          </h2>
          <p className="text-slate-200 max-w-2xl mx-auto text-base md:text-lg">
            Stop phishing and spoofing before they reach your team.
          </p>
          <div className="pt-2 text-slate-200 text-sm md:text-base font-medium space-y-1">
            <p>
              <strong className="text-cyan-300">Phone:</strong> +971 52 792 5100
            </p>
            <p>
              <strong className="text-cyan-300">Coverage:</strong> Dubai, Abu Dhabi, and all UAE Emirates, plus India (Kerala)
            </p>
          </div>
          <div className="pt-4">
            <a 
              href="tel:+971527925100" 
              className="inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-cyan-500/25"
            >
              Call Us Now
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}