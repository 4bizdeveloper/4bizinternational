import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

// Optimized Meta Tags for 100/100 SEO Score
export const metadata: Metadata = {
  title: 'Customer Engagement & Communication Solutions | 4Biz',
  description: 'Connect with your audience through automated email, SMS, and WhatsApp messaging flows designed to improve engagement, retention, and lead conversion.',
  alternates: {
    canonical: 'https://www.4bizinternational.com/services/communication-customer-engagement-solutions/',
  },
  openGraph: {
    title: 'Customer Engagement & Communication Solutions | 4Biz',
    description: 'Connect with your audience through automated email, SMS, and WhatsApp messaging flows designed to improve engagement, retention, and lead conversion.',
    url: 'https://www.4bizinternational.com/services/communication-customer-engagement-solutions/',
    type: 'website',
    images: [
      {
        url: '/4biz_logo-1.png',
        width: 1200,
        height: 630,
        alt: '4Biz International LLC Dubai Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Customer Engagement & Communication Solutions | 4Biz',
    description: 'Connect with your audience through automated email, SMS, and WhatsApp messaging flows.',
    images: ['/4biz_logo-1.png'],
  },
};

export default function CommunicationEngagementPage() {
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.4bizinternational.com/services/communication-customer-engagement-solutions/#breadcrumb',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://www.4bizinternational.com/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Services',
            'item': 'https://www.4bizinternational.com/services/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Communication & Customer Engagement Solutions',
            'item': 'https://www.4bizinternational.com/services/communication-customer-engagement-solutions/'
          }
        ]
      },
      {
        '@type': 'WebPage',
        '@id': 'https://www.4bizinternational.com/services/communication-customer-engagement-solutions/#webpage',
        'url': 'https://www.4bizinternational.com/services/communication-customer-engagement-solutions/',
        'name': 'Customer Engagement & Communication Solutions | 4Biz',
        'description': 'Connect with your audience through automated email, SMS, and WhatsApp messaging flows designed to improve engagement, retention, and lead conversion.',
        'datePublished': '2025-01-15T08:00:00+00:00',
        'dateModified': '2026-08-21T08:00:00+00:00',
        'isPartOf': {
          '@type': 'WebSite',
          '@id': 'https://www.4bizinternational.com/#website',
          'url': 'https://www.4bizinternational.com/',
          'name': '4Biz International'
        },
        'publisher': {
          '@type': 'Organization',
          '@id': 'https://www.4bizinternational.com/#organization',
          'name': '4Biz International LLC',
          'url': 'https://www.4bizinternational.com/',
          'logo': 'https://www.4bizinternational.com/4biz_logo-1.png',
          'sameAs': [
            'https://www.linkedin.com/company/4bizinternational',
            'https://twitter.com/4bizintl'
          ]
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://www.4bizinternational.com/services/communication-customer-engagement-solutions/#service',
        'name': 'Communication & Customer Engagement Solutions',
        'provider': {
          '@type': 'Organization',
          'name': '4Biz International LLC'
        },
        'areaServed': 'Global',
        'audience': {
          '@type': 'Audience',
          'audienceType': 'B2B & B2C Enterprise Marketing & Sales Teams'
        },
        'serviceType': 'Omnichannel Customer Messaging & Marketing Automation'
      },
      {
        '@type': 'HowTo',
        '@id': 'https://www.4bizinternational.com/services/communication-customer-engagement-solutions/#howto',
        'name': 'How to Build an Automated Omnichannel Customer Engagement System',
        'description': 'A step-by-step roadmap to setting up integrated email, SMS, and WhatsApp messaging flows.',
        'step': [
          {
            '@type': 'HowToStep',
            'name': 'Map Customer Journey',
            'text': 'Analyze touchpoints and define automated triggers based on user actions.'
          },
          {
            '@type': 'HowToStep',
            'name': 'Integrate Multi-Channel APIs',
            'text': 'Connect WhatsApp API, SMS gateways, and email dispatchers to central CRM.'
          },
          {
            '@type': 'HowToStep',
            'name': 'Launch Automated Workflows',
            'text': 'Deploy lead nurture, abandoned quote, and customer onboarding sequences.'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.4bizinternational.com/services/communication-customer-engagement-solutions/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What is a customer engagement solution?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'A customer engagement solution is a system of integrated messaging tools and workflows across Email, SMS, and WhatsApp designed to automatically nurture leads, send updates, and retain clients based on real-time behavior.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How to automate customer messaging across channels?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'You can automate messaging by centralizing customer data, connecting Official Meta WhatsApp APIs and SMS platforms, and triggering personalized follow-ups when specific events occur (like abandoned carts or form submissions).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Should I use SMS, WhatsApp, or Email for client retention?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'An effective strategy uses all three: Email for detailed updates and newsletters, SMS for urgent time-sensitive alerts, and WhatsApp for direct, two-way conversational engagement.'
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen text-slate-100 selection:bg-blue-600 selection:text-white overflow-x-hidden antialiased scroll-smooth relative bg-[#040a21]">
      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      
      {/* Static Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#0f2054_0%,#061033_45%,#020717_100%)] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,37,97,0.65)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(13,27,77,0.8)_0%,transparent_50%)]" />
      </div>

      <main className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[75vh] flex flex-col justify-center pt-28 md:pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <div className="text-left flex flex-col items-start order-1">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-teal-300 uppercase mb-4 block backdrop-blur-sm bg-teal-950/40 px-4 py-1.5 rounded-full border border-teal-500/30">
                05 — Communication
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.15] pb-4 break-words bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-300">
                Customer Engagement &amp; Communication Solutions
              </h1>
              <p className="text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed font-normal">
                Connect with your audience through intelligent communication platforms that improve engagement, retention, and customer relationships. We set up and automate the email, SMS, and WhatsApp flows that keep customers moving from first contact to repeat business.
              </p>
            </div>

            <div className="w-full flex items-center justify-center order-2 lg:justify-end select-none pointer-events-none">
              <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center overflow-visible">
                <Image
                  src="/services/communication-customer-engagement-solutions.png"
                  alt="Intelligent multi-channel email marketing and SMS dashboard layout preview"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-contain mix-blend-screen transition-all duration-500 ease-out"
                />
              </div>
            </div>

          </div>
        </section>

        {/* TOP SUMMARY, DEFINITION & DIRECT ANSWER SECTION */}
        <section className="relative py-8 px-4 sm:px-6 lg:px-8 bg-white/[0.02] border-y border-slate-800/80">
          <div className="max-w-6xl mx-auto space-y-6">
            
            {/* DEFINITION BLOCK (AEO/GEO Requirement) */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-700/80 backdrop-blur-md">
              <h2 className="text-lg font-bold text-teal-300 mb-2">Definition</h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                <strong>Customer Engagement Solutions</strong> are integrated multi-channel messaging software systems and automated response workflows that allow businesses to send behavior-triggered communications—across Email, SMS, and WhatsApp—to nurture leads, drive retention, and boost conversion rates without manual effort.
              </p>
            </div>

            {/* KEY TAKEAWAY */}
            <div className="p-6 md:p-8 rounded-2xl bg-teal-950/30 border border-teal-500/30 backdrop-blur-md">
              <h2 className="text-xl sm:text-2xl font-bold text-teal-300 mb-3">
                Key Takeaway: Omnichannel Engagement Architecture
              </h2>
              <p className="text-slate-100 leading-relaxed text-sm sm:text-base mb-4">
                Our Communication &amp; Customer Engagement Solutions connect disparate customer channels into a unified, automated response system. Designed for growing business, marketing, and sales operations, this architecture reduces manual follow-up overhead by up to 80% while keeping contact delivery optimized for inbox placement.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200">
                  <span className="text-teal-400 font-bold">✓</span>
                  <span><strong>Target Audience:</strong> B2B &amp; B2C Teams</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200">
                  <span className="text-teal-400 font-bold">✓</span>
                  <span><strong>Core Channels:</strong> Email, SMS, WhatsApp</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200">
                  <span className="text-teal-400 font-bold">✓</span>
                  <span><strong>Primary Goal:</strong> Retention &amp; Conversion</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* AUDIENCE & USE CASES SECTION (AEO/GEO Requirement) */}
        <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-transparent border-b border-slate-800/60">
          <div className="max-w-6xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-teal-300 uppercase block mb-2">Audience &amp; Use Cases</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Who This Solution Is Built For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-slate-800/80">
                <h3 className="text-teal-300 font-bold mb-2">E-Commerce &amp; Retail</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>Use Case:</strong> Automate abandoned cart reminders via WhatsApp, delivery status notifications via SMS, and post-purchase loyalty updates via email.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white/[0.02] border border-slate-800/80">
                <h3 className="text-teal-300 font-bold mb-2">B2B &amp; Professional Services</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>Use Case:</strong> Nurture inbound leads after quote requests, automate consultation meeting reminders, and deliver targeted executive newsletters.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white/[0.02] border border-slate-800/80">
                <h3 className="text-teal-300 font-bold mb-2">SaaS &amp; Tech Companies</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>Use Case:</strong> Guide new signups through automated onboarding drip sequences, re-engage inactive accounts, and manage feature updates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION & STATS NARRATIVE */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest text-teal-300 uppercase block">Why this matters</span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                One conversation with each customer, across every channel
              </h2>
              <p className="text-slate-200 leading-relaxed text-base sm:text-lg">
                Most businesses send a newsletter from one tool, order updates from another, and reply to WhatsApp messages manually, one at a time. Leads go cold between the first reply and the second, and nobody can see the full conversation a customer has had with the business.
              </p>
              <p className="text-slate-200 leading-relaxed text-sm sm:text-base">
                We start by mapping how your customers actually want to hear from you — email for updates, SMS for time-sensitive alerts, WhatsApp for direct conversation. From that, we set up and automate the sequences that respond to what a customer does, whether that&apos;s signing up, abandoning a cart, or going quiet after a quote.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                The outcome is fewer leads slipping through the cracks, and a customer who feels followed up with, not forgotten. Learn more about our specialized <Link href="/services/" className="text-teal-300 underline underline-offset-4 hover:text-teal-200 font-medium">digital transformation services</Link> or <Link href="/contact/" className="text-teal-300 underline underline-offset-4 hover:text-teal-200 font-medium">contact our customer engagement team</Link> to get started.
              </p>
            </div>

            <div className="lg:col-span-5 space-y-4 w-full">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-700/60 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-400 font-mono">Multi-channel</div>
                <div className="text-sm text-slate-200 mt-1">Email, SMS, and WhatsApp working from one connected plan</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-700/60 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-400 font-mono">Automated</div>
                <div className="text-sm text-slate-200 mt-1">Follow-ups triggered by customer behavior, not manual reminders</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-700/60 backdrop-blur-md">
                <div className="text-3xl font-black text-teal-400 font-mono font-sans">99.8% Goal</div>
                <div className="text-sm text-slate-200 mt-1">Delivery monitoring so messages reach inboxes, avoiding spam filters</div>
              </div>
            </div>

          </div>
        </section>

        {/* COMPARISON TABLE / DECISION MATRIX (AEO/GEO Requirement) */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.01]">
          <div className="max-w-6xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-teal-300 uppercase block mb-2">Decision Matrix</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">
              Comparing Engagement Communication Channels
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-slate-800 rounded-xl overflow-hidden text-sm">
                <thead>
                  <tr className="bg-slate-900 text-teal-300 border-b border-slate-800">
                    <th className="p-4">Channel</th>
                    <th className="p-4">Best Use Case</th>
                    <th className="p-4">Average Open Rate</th>
                    <th className="p-4">Customer Experience</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-200">
                  <tr className="hover:bg-white/[0.02]">
                    <td className="p-4 font-semibold text-white">Email Marketing</td>
                    <td className="p-4">Detailed newsletters, educational content &amp; receipts</td>
                    <td className="p-4 font-mono text-teal-400">20% - 30%</td>
                    <td className="p-4">Asynchronous, formal</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="p-4 font-semibold text-white">SMS Messaging</td>
                    <td className="p-4">Urgent alerts, OTPs &amp; limited-time offers</td>
                    <td className="p-4 font-mono text-teal-400">95% - 98%</td>
                    <td className="p-4">Immediate, high priority</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="p-4 font-semibold text-white">WhatsApp Business</td>
                    <td className="p-4">Two-way support, product catalogs &amp; quick sales replies</td>
                    <td className="p-4 font-mono text-teal-400">90% - 95%</td>
                    <td className="p-4">Personal, conversational</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CORE CAPABILITIES */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className="text-xs font-bold tracking-widest text-teal-300 uppercase block mb-2">What&apos;s included</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
                Channels and workflows we set up and manage
              </h2>
              <p className="text-slate-200 max-w-2xl text-base">
                From a single newsletter to a full multi-channel nurture sequence, we scope the setup to your audience and budget.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-transparent rounded mt-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/80 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Email Marketing</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Campaigns, drip sequences, and newsletters sent to segmented lists, tracked against opens, clicks, and actual conversions.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/80 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M9 18h6"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">SMS Marketing</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Direct, high-open-rate messages for time-sensitive offers, reminders, and order updates that customers actually read.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/80 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M21 11.5a8.38 8.38 0 0 1-9 8.4A8.5 8.5 0 1 1 21 11.5z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">WhatsApp Business Solutions</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Verified business messaging using official <a href="https://developers.facebook.com/docs/whatsapp/" target="_blank" rel="noopener noreferrer" className="text-teal-300 underline hover:text-teal-200">Meta WhatsApp API</a> tools, automated replies, and catalog sharing.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/80 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4z"/><path d="M14.5 16.5h5.5M17 14v5"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Marketing Automation</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Triggered messages based on customer behavior — abandoned cart, signup, purchase — sent without manual work each time.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/80 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M3 7h13M3 12h18M3 17h13"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Bulk Messaging Solutions</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Reliable, compliant delivery of SMS, email, or WhatsApp messages at scale, without landing in spam or getting blocked.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/80 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/><path d="M9.5 13h5M9.5 16h5"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Newsletter Campaigns</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Regular, branded updates that keep your audience engaged between purchases, scheduled and designed for you.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/80 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M6 8v3a3 3 0 0 0 3 3h0M18 8v3a3 3 0 0 1-3 3h0"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Customer Engagement Workflows</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Multi-step journeys that respond to what a customer does — or doesn&apos;t do — across email, SMS, and chat.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-slate-800/80 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 transition-colors">
                  <svg className="w-5 h-5 stroke-teal-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M3 17l5-5 4 4 7-8"/><path d="M14 8h5v5"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-teal-300">Lead Nurturing Solutions</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Automated follow-up sequences that move new leads toward a decision instead of going cold after the first contact.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* STRATEGIC PILLARS */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl space-y-8 mb-12">
              <div>
                <span className="text-xs font-bold tracking-widest text-teal-300 uppercase block mb-2">How we work</span>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                  Built to follow up, so you don&apos;t have to
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-white/[0.02] border border-slate-800/60 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h3 className="text-white font-bold text-base mb-2">Mapped to your journey</h3>
                <p className="text-xs text-slate-300 leading-relaxed">Sequences are built around the actual steps a customer takes from first contact to repeat business.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.02] border border-slate-800/60 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h3 className="text-white font-bold text-base mb-2">Compliant by default</h3>
                <p className="text-xs text-slate-300 leading-relaxed">Opt-ins, unsubscribes, and sending limits configured to keep every channel in good standing.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.02] border border-slate-800/60 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h3 className="text-white font-bold text-base mb-2">Personalized at scale</h3>
                <p className="text-xs text-slate-300 leading-relaxed">Messages reference what each customer actually did, not a generic blast to the full list.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.02] border border-slate-800/60 backdrop-blur-sm pt-[18px] border-t-2 border-t-teal-400">
                <h3 className="text-white font-bold text-base mb-2">Ongoing optimization</h3>
                <p className="text-xs text-slate-300 leading-relaxed">Open rates, replies, and conversions reviewed regularly to improve what&apos;s sent next.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS WITH CONVERSATIONAL QUERIES (AEO & GEO EXTRACTION OPTIMIZED) */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-slate-800/60">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-teal-300 uppercase block mb-2">Common Questions</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800/80">
                <h3 className="text-lg font-semibold text-teal-300 mb-2">
                  What is a customer engagement solution?
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  A customer engagement solution is an integrated framework of software and automated messaging workflows across email, SMS, and WhatsApp. It enables companies to trigger timely, personalized communications based on real-time user behavior to increase sales and retention.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800/80">
                <h3 className="text-lg font-semibold text-teal-300 mb-2">
                  How to automate customer messaging across channels?
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  To automate cross-channel messaging, centralize client data into a single platform, connect verified API providers like Meta WhatsApp API, and build event-based triggers that automatically launch follow-ups when customers abandon carts or sign up.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800/80">
                <h3 className="text-lg font-semibold text-teal-300 mb-2">
                  Should I use SMS, WhatsApp, or Email for client retention?
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  You should combine all three for a multi-channel setup: Email works best for rich long-form content, SMS is ideal for time-critical alerts and security codes, and WhatsApp provides high-converting interactive customer dialogs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CREDIBLE CITATIONS SECTION (GEO Requirement) */}
        <section className="relative py-8 px-4 sm:px-6 lg:px-8 bg-white/[0.01] border-t border-slate-800/60 text-xs text-slate-400">
          <div className="max-w-6xl mx-auto space-y-2">
            <p className="font-semibold text-slate-300">Industry Citations &amp; Standards:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Verified Meta WhatsApp Business API Developer Standards (<a href="https://developers.facebook.com/docs/whatsapp/" target="_blank" rel="noopener noreferrer" className="underline text-teal-300">Meta Documentation</a>)</li>
              <li>Global Anti-Spam Compliance &amp; CAN-SPAM Act Guidance (<a href="https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" target="_blank" rel="noopener noreferrer" className="underline text-teal-300">FTC Official Guide</a>)</li>
            </ul>
          </div>
        </section>

        {/* CLOSING CALL TO ACTION */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center bg-transparent">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ready to stay top of mind with your customers?
            </h2>
            <p className="text-slate-200 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Tell us how you&apos;re communicating with customers today, and we&apos;ll build the channels and automation to keep them engaged.
            </p>
            <div className="pt-4">
              <Link href="/contact/" className="inline-block bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold px-8 py-3.5 rounded-full transition-colors">
                Get Started Today
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}