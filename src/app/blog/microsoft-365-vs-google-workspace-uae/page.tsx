import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Microsoft 365 vs Google Workspace in UAE: Which Is Better? | 4Biz International',
  description:
    'Microsoft 365 or Google Workspace for your business in UAE? 4Biz International compares features, pricing, security, and migration so you can choose with confidence.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.4bizinternational.com/blog/microsoft-365-vs-google-workspace-uae/',
  },
};

export default function BlogPostPage() {
  const jsonLdSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Microsoft 365 vs Google Workspace: Which Is Better for Businesses in UAE?',
      description:
        'Microsoft 365 or Google Workspace for your business in UAE? 4Biz International compares features, pricing, security, and migration so you can choose with confidence.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
      datePublished: '2026-10-19',
      author: {
        '@type': 'Organization',
        name: '4Biz International LLC',
        url: 'https://www.4bizinternational.com/',
      },
      publisher: {
        '@type': 'Organization',
        name: '4Biz International LLC',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.4bizinternational.com/logo.png',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.4bizinternational.com/blog/microsoft-365-vs-google-workspace-uae/',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is Microsoft 365 or Google Workspace better for a small business in UAE?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Neither is better for every business. Microsoft 365 suits teams that depend on desktop Office apps and complex Excel files. Google Workspace suits teams that work in the browser and want simple live collaboration. Compare using your real daily workflow.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Microsoft 365 more expensive than Google Workspace?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It depends on the plan and features. Entry plans are often close in price, while costs diverge when you add advanced security, desktop apps, or extra storage. Compare equivalent plans and verify current pricing with the provider or a licensing partner.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I switch from Google Workspace to Microsoft 365, or the other way around?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Email, calendars, contacts, and files can be migrated. Planning the cutover and testing the transfer limits downtime and avoids lost data.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which is more secure, Microsoft 365 or Google Workspace?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both offer strong security, including encryption and two-factor authentication. Security depends heavily on configuration and the plan chosen, so correct setup and administration matter more than the brand.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do Microsoft 365 and Google Workspace work with Arabic?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both support Arabic, including right-to-left text in their main apps. Confirm that the specific features and languages your team needs are supported on your plan.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can 4Biz International manage Microsoft 365 or Google Workspace for us?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. 4Biz International can help with licensing, setup, migration, and day-to-day administration for either platform. Contact us to discuss your team size and current setup.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.4bizinternational.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://www.4bizinternational.com/blog/',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Microsoft 365 vs Google Workspace',
          item: 'https://www.4bizinternational.com/blog/microsoft-365-vs-google-workspace-uae/',
        },
      ],
    },
  ];

  return (
    <div
      className="min-h-screen text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950"
      style={{
        background: 'linear-gradient(135deg, #06112c 0%, #0c1b40 45%, #08306b 100%)',
      }}
    >
      {/* JSON-LD Schemas Injection */}
      {jsonLdSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-700/50">
        <div className="absolute inset-0 z-0">
          <Image
            src="/blog/microsoft-365-vs-google-workspace-3.webp"
            alt="Office workspace with enterprise technology"
            fill
            priority
            className="object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06112c]/80 via-[#0c1b40]/85 to-[#08306b]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-cyan-300 font-medium">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li>
                <Link href="/blog/" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li className="text-slate-200 truncate max-w-xs sm:max-w-md">
                Microsoft 365 vs Google Workspace
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Microsoft 365 vs Google Workspace: <br className="hidden sm:inline" />
            Which Is Better for Businesses in UAE?
          </h1>

          {/* Author & Date Bar */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300 pb-8 border-b border-slate-700/60">
            <div className="flex items-center space-x-2">
              <span>Published by</span>
              <Link
                href="https://www.4bizinternational.com/"
                className="text-cyan-300 font-semibold hover:underline"
              >
                4Biz International LLC
              </Link>
            </div>
            <span className="text-slate-500">•</span>
            <time dateTime="2026-10-19">October 19, 2026</time>
          </div>

          {/* Quick Answer Box */}
          <div className="mt-8 p-6 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-cyan-500/30 shadow-xl">
            <h2 className="text-lg font-semibold text-cyan-300 mb-2 uppercase tracking-wide">
              Quick Answer
            </h2>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              Choose Microsoft 365 if your team relies on desktop Word, Excel, and PowerPoint, works with complex spreadsheets, or needs strong device and compliance controls. Choose Google Workspace if your team works mostly in the browser, collaborates live on shared documents, and wants a simpler, lighter setup. Both are secure and reliable. The right choice depends on how your team actually works, not on which brand is bigger.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER (NO SIDEBAR) */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Intro paragraph */}
        <div className="space-y-6 text-base sm:text-lg text-slate-200 leading-relaxed">
          <p>
            Microsoft 365 and Google Workspace are the two leading cloud productivity suites. Each gives a business professional email, file storage, video meetings, and shared documents under one subscription, managed from a central admin console. Choosing between them is one of the first technology decisions a growing business makes, and at <Link href="https://www.4bizinternational.com/services/" className="text-cyan-300 underline hover:text-cyan-200">4Biz International</Link> it is a question we answer often for companies across UAE. This guide gives a direct comparison, then explains how to decide.
          </p>
        </div>

        {/* CONTENT ROW 1: Text Left, Image Right (Landscape Aspect Ratio Container) */}
        <div className="flex flex-col md:flex-row items-stretch gap-8 bg-slate-900/40 p-6 sm:p-8 rounded-3xl border border-slate-700/50">
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              What Are Microsoft 365 and Google Workspace?
            </h2>
            <p className="text-slate-300 leading-relaxed">
              <strong>Microsoft 365</strong> is Microsoft&apos;s subscription suite. It includes Outlook email, Word, Excel, PowerPoint, Teams, OneDrive, and SharePoint, with desktop apps, web apps, and mobile apps depending on the plan.
            </p>
            <p className="text-slate-300 leading-relaxed">
              <strong>Google Workspace</strong> is Google&apos;s subscription suite. It includes Gmail, Docs, Sheets, Slides, Meet, Chat, and Drive, built mainly around web browsers and real-time collaboration.
            </p>
            <div className="pt-2">
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">What Both Platforms Provide</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span> Business email on your own company domain
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span> Cloud file storage and sharing
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span> Video meetings and team chat
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span> Shared calendars and contacts
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span> Admin controls for users, devices, and security
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center">
            <div className="w-full relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-slate-700/60">
              <Image
                src="/blog/microsoft-365-vs-google-workspace-1.webp"
                alt="Team collaboration in modern office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* SIDE-BY-SIDE COMPARISON TABLE SECTION */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Microsoft 365 vs Google Workspace: Side-by-Side Comparison
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-700/60 shadow-xl bg-slate-900/60">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-slate-800/90 text-cyan-300 border-b border-slate-700">
                  <th className="p-4 font-semibold">Factor</th>
                  <th className="p-4 font-semibold">Microsoft 365</th>
                  <th className="p-4 font-semibold">Google Workspace</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50 text-slate-200">
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-medium text-white">Email</td>
                  <td className="p-4">Outlook / Exchange</td>
                  <td className="p-4">Gmail</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-medium text-white">Documents and spreadsheets</td>
                  <td className="p-4">Word, Excel, PowerPoint (desktop and web)</td>
                  <td className="p-4">Docs, Sheets, Slides (browser-first)</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-medium text-white">Meetings and chat</td>
                  <td className="p-4">Microsoft Teams</td>
                  <td className="p-4">Google Meet and Chat</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-medium text-white">File storage</td>
                  <td className="p-4">OneDrive and SharePoint</td>
                  <td className="p-4">Google Drive</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-medium text-white">Real-time co-editing & Advanced Excel</td>
                  <td className="p-4">Strong, best in web and updated desktop apps (Strongest option)</td>
                  <td className="p-4">Excellent, core strength (Lighter, browser-based)</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-medium text-white">Ease of setup and use</td>
                  <td className="p-4">More features, more to configure</td>
                  <td className="p-4">Simpler, quicker to learn</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-medium text-white">Device and security management</td>
                  <td className="p-4">Deep controls, especially on higher plans</td>
                  <td className="p-4">Solid controls, simpler to manage</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-medium text-white">Best fit</td>
                  <td className="p-4">Businesses using Windows, desktop Office, and complex files</td>
                  <td className="p-4">Businesses that are browser-first and collaboration-heavy</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CONTENT ROW 2: Image Left, Text Right (flex-row-reverse, Landscape Aspect Ratio Container) */}
        <div className="flex flex-col md:flex-row-reverse items-stretch gap-8 bg-slate-900/40 p-6 sm:p-8 rounded-3xl border border-slate-700/50">
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              How Do the Two Compare on Key Points?
            </h2>
            <div className="space-y-4 text-slate-300">
              <div>
                <h3 className="text-lg font-semibold text-cyan-300 mb-1">Email and Calendar</h3>
                <p className="leading-relaxed">
                  Outlook suits users who want advanced rules, shared mailboxes, and desktop features. Gmail suits users who prefer a clean, search-led inbox. Both support custom company domains, shared calendars, and mobile access.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-300 mb-1">Documents and Spreadsheets</h3>
                <p className="leading-relaxed">
                  Microsoft 365 is stronger for heavy Excel models, formatted reports, and files that must open exactly the same way for clients. Google Workspace is stronger for quick shared documents where several people edit at once. If your team lives in complex spreadsheets, this point often decides the choice.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center">
            <div className="w-full relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-slate-700/60">
              <Image
                src="/blog/microsoft-365-vs-google-workspace-2.webp"
                alt="Data analytics and spreadsheet management"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* MORE KEY POINTS SECTIONS */}
        <section className="space-y-8 bg-slate-900/30 p-6 sm:p-8 rounded-3xl border border-slate-700/40">
          <div className="space-y-6 text-slate-300">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Meetings and Collaboration</h3>
              <p className="leading-relaxed">
                Teams combines chat, meetings, calls, and file sharing in one workspace and suits structured, project-based teamwork. Google Meet and Chat are lighter and easier to start with. Check that the plan you choose includes the meeting size and features you need.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">File Storage and Sharing</h3>
              <p className="leading-relaxed">
                Both offer cloud storage with granular sharing permissions. SharePoint adds document libraries and intranet-style sites, which suit larger organizations. Google Drive is simple to use, with shared drives for team files.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Security and Compliance</h3>
              <p className="leading-relaxed">
                Both platforms offer two-factor authentication, encryption, and admin controls. Microsoft 365&apos;s higher plans add advanced device management, data loss prevention, and compliance tools. Google Workspace offers comparable protections in its own tiers. Features vary by plan, so confirm what is included in the specific plan you are considering.
              </p>
            </div>
          </div>
        </section>

        {/* PRICING SECTION & TABLE */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            How Does Pricing Work?
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Both suites are charged per user per month, with plans from basic to advanced. Prices, plan names, and features change, so verify current pricing directly with the provider or a licensing partner before budgeting.
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-700/60 shadow-xl bg-slate-900/60">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-slate-800/90 text-cyan-300 border-b border-slate-700">
                  <th className="p-4 font-semibold">Cost Factor</th>
                  <th className="p-4 font-semibold">What to Check</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50 text-slate-200">
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-medium text-white">Plan level</td>
                  <td className="p-4">Basic plans may exclude desktop apps, advanced security, or larger meetings</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-medium text-white">Billing term</td>
                  <td className="p-4">Annual commitments are often cheaper than monthly billing</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-medium text-white">Storage</td>
                  <td className="p-4">Check included storage and the cost of extra</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-medium text-white">Add-ons</td>
                  <td className="p-4">Advanced security, compliance, and AI assistants are often separate</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-medium text-white">Migration and setup</td>
                  <td className="p-4">A one-time cost that many budgets leave out</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-medium text-white">Support</td>
                  <td className="p-4">Provider support, or a partner managing the platform for you</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CONTENT ROW 3: Text Left, Image Right (Landscape Aspect Ratio Container) */}
        <div className="flex flex-col md:flex-row items-stretch gap-8 bg-slate-900/40 p-6 sm:p-8 rounded-3xl border border-slate-700/50">
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              How Do You Choose Between Microsoft 365 and Google Workspace?
            </h2>
            <div className="space-y-3 text-slate-300 text-sm sm:text-base">
              <p><strong>1. Look at How Your Team Works Today:</strong> If staff already use desktop Word and Excel daily, Microsoft 365 means less retraining. If they work mostly in the browser, Google Workspace may feel natural.</p>
              <p><strong>2. Check Your Spreadsheet and Document Needs:</strong> Complex Excel files, macros, and strict formatting favor Microsoft 365. Light, collaborative documents favor Google Workspace.</p>
              <p><strong>3. Consider Your Existing Systems:</strong> Businesses on Windows devices and Microsoft business tools usually integrate more smoothly with Microsoft 365. Businesses using many web apps may find Google Workspace easier to connect.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center">
            <div className="w-full relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-slate-700/60">
              <Image
                src="/blog/microsoft-365-vs-google-workspace-3.webp"
                alt="Professional business strategy meeting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* REST OF DECISION POINTS */}
        <section className="space-y-6 text-slate-300 bg-slate-900/30 p-6 sm:p-8 rounded-3xl border border-slate-700/40">
          <div className="space-y-4">
            <p><strong>4. Review Security and Compliance Needs:</strong> Regulated sectors should check which plan provides the controls required, and where data is stored.</p>
            <p><strong>5. Think About Clients and Partners:</strong> If your clients and partners send and expect Microsoft Office files, compatibility matters.</p>
            <p><strong>6. Plan the Migration:</strong> Moving email, files, and calendars needs planning to avoid downtime and lost data, whichever platform you pick.</p>
          </div>
        </section>

        {/* WHAT GETS MISSED SECTION */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            What Gets Missed When Businesses Choose a Productivity Suite
          </h2>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">•</span> Choosing the cheapest plan, then discovering it lacks desktop apps, security tools, or meeting features
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">•</span> Not testing the platform with real files, especially complex spreadsheets
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">•</span> Underestimating migration effort for email, shared files, and calendars
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">•</span> Forgetting to set up two-factor authentication, backups, and access controls after purchase
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">•</span> Leaving former employees&apos; accounts active, which creates a security risk
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">•</span> Buying licenses directly without a plan for who administers and supports them
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">•</span> Overlooking data location and compliance requirements for regulated information
            </li>
          </ul>
        </section>

        {/* WHICH BUSINESSES SUIT TABLE */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Which Businesses Suit Microsoft 365 and Which Suit Google Workspace?
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-700/60 shadow-xl bg-slate-900/60">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-slate-800/90 text-cyan-300 border-b border-slate-700">
                  <th className="p-4 font-semibold">Business Situation</th>
                  <th className="p-4 font-semibold">Often a Good Fit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50 text-slate-200">
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4">Finance, engineering, or operations teams with advanced Excel models</td>
                  <td className="p-4 font-semibold text-cyan-300">Microsoft 365</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4">Businesses needing structured teamwork, document libraries, and compliance tools</td>
                  <td className="p-4 font-semibold text-cyan-300">Microsoft 365</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4">Start-ups and agencies working mostly in the browser</td>
                  <td className="p-4 font-semibold text-cyan-300">Google Workspace</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4">Teams that co-edit documents live and want a simple setup</td>
                  <td className="p-4 font-semibold text-cyan-300">Google Workspace</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4">Organizations with Windows devices and on-site Microsoft servers</td>
                  <td className="p-4 font-semibold text-cyan-300">Microsoft 365</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4">Mixed environments with different team preferences</td>
                  <td className="p-4 font-semibold text-cyan-300">Either, with a planned approach</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-400 italic text-sm">
            This is a guide, not a rule. A short assessment of how your team actually works gives a more reliable answer than any general table.
          </p>
        </section>

        {/* HOW DOES MIGRATION WORK */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            How Does Migration Work?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-700/50">
              <span className="text-cyan-400 font-bold text-lg mb-2 block">01</span>
              <h3 className="text-white font-semibold mb-2">Audit Current Email, Files, and Users</h3>
              <p className="text-slate-300 text-sm">List mailboxes, shared folders, domains, and integrations that will move.</p>
            </div>
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-700/50">
              <span className="text-cyan-400 font-bold text-lg mb-2 block">02</span>
              <h3 className="text-white font-semibold mb-2">Plan the Cutover</h3>
              <p className="text-slate-300 text-sm">Decide timing, any phased groups, and how email will keep flowing during the change.</p>
            </div>
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-700/50">
              <span className="text-cyan-400 font-bold text-lg mb-2 block">03</span>
              <h3 className="text-white font-semibold mb-2">Migrate Email, Calendars, and Files</h3>
              <p className="text-slate-300 text-sm">Data is moved in stages, with checks that nothing is lost or duplicated.</p>
            </div>
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-700/50">
              <span className="text-cyan-400 font-bold text-lg mb-2 block">04</span>
              <h3 className="text-white font-semibold mb-2">Configure Security and Access</h3>
              <p className="text-slate-300 text-sm">Set two-factor authentication, permissions, device policies, and backups.</p>
            </div>
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-700/50 sm:col-span-2 lg:col-span-1">
              <span className="text-cyan-400 font-bold text-lg mb-2 block">05</span>
              <h3 className="text-white font-semibold mb-2">Train and Support Staff</h3>
              <p className="text-slate-300 text-sm">Short training and a support period reduce disruption in the first weeks.</p>
            </div>
          </div>
        </section>

        {/* HOW 4BIZ INTERNATIONAL HELPS */}
        <section className="space-y-6 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-cyan-500/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            How 4Biz International Helps With Microsoft 365 and Google Workspace
          </h2>
          <p className="text-slate-300 leading-relaxed">
            4Biz International provides setup, licensing, migration, and ongoing administration for both platforms as part of its digital workplace and cloud services, alongside managed IT support and cybersecurity so accounts, devices, and data are protected from day one. We work with businesses across Dubai, Abu Dhabi, and the wider UAE, from our offices in Dubai and Kerala.
          </p>
          <p className="text-slate-300 leading-relaxed font-medium text-cyan-200">
            The best suite is the one your team uses properly and your business administers securely. A well-configured platform of either kind beats a better platform left on default settings.
          </p>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS (ACCORDION WITH DETAILS/SUMMARY) */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="group bg-slate-900/60 rounded-2xl border border-slate-700/60 overflow-hidden transition-all duration-300">
              <summary className="flex justify-between items-center cursor-pointer p-5 font-semibold text-white hover:text-cyan-300 transition-colors">
                <span>1. Is Microsoft 365 or Google Workspace better for a small business in UAE?</span>
                <span className="transform group-open:rotate-180 transition-transform duration-300 text-cyan-400 ml-2">▼</span>
              </summary>
              <div className="p-5 pt-0 text-slate-300 text-sm sm:text-base border-t border-slate-800/80 mt-2">
                Neither is better for every business. Microsoft 365 suits teams that depend on desktop Office apps and complex Excel files. Google Workspace suits teams that work in the browser and want simple live collaboration. Compare using your real daily workflow.
              </div>
            </details>

            <details className="group bg-slate-900/60 rounded-2xl border border-slate-700/60 overflow-hidden transition-all duration-300">
              <summary className="flex justify-between items-center cursor-pointer p-5 font-semibold text-white hover:text-cyan-300 transition-colors">
                <span>2. Is Microsoft 365 more expensive than Google Workspace?</span>
                <span className="transform group-open:rotate-180 transition-transform duration-300 text-cyan-400 ml-2">▼</span>
              </summary>
              <div className="p-5 pt-0 text-slate-300 text-sm sm:text-base border-t border-slate-800/80 mt-2">
                It depends on the plan and features. Entry plans are often close in price, while costs diverge when you add advanced security, desktop apps, or extra storage. Compare equivalent plans and verify current pricing with the provider or a licensing partner.
              </div>
            </details>

            <details className="group bg-slate-900/60 rounded-2xl border border-slate-700/60 overflow-hidden transition-all duration-300">
              <summary className="flex justify-between items-center cursor-pointer p-5 font-semibold text-white hover:text-cyan-300 transition-colors">
                <span>3. Can I switch from Google Workspace to Microsoft 365, or the other way around?</span>
                <span className="transform group-open:rotate-180 transition-transform duration-300 text-cyan-400 ml-2">▼</span>
              </summary>
              <div className="p-5 pt-0 text-slate-300 text-sm sm:text-base border-t border-slate-800/80 mt-2">
                Yes. Email, calendars, contacts, and files can be migrated. Planning the cutover and testing the transfer limits downtime and avoids lost data.
              </div>
            </details>

            <details className="group bg-slate-900/60 rounded-2xl border border-slate-700/60 overflow-hidden transition-all duration-300">
              <summary className="flex justify-between items-center cursor-pointer p-5 font-semibold text-white hover:text-cyan-300 transition-colors">
                <span>4. Which is more secure, Microsoft 365 or Google Workspace?</span>
                <span className="transform group-open:rotate-180 transition-transform duration-300 text-cyan-400 ml-2">▼</span>
              </summary>
              <div className="p-5 pt-0 text-slate-300 text-sm sm:text-base border-t border-slate-800/80 mt-2">
                Both offer strong security, including encryption and two-factor authentication. Security depends heavily on configuration and the plan chosen, so correct setup and administration matter more than the brand.
              </div>
            </details>

            <details className="group bg-slate-900/60 rounded-2xl border border-slate-700/60 overflow-hidden transition-all duration-300">
              <summary className="flex justify-between items-center cursor-pointer p-5 font-semibold text-white hover:text-cyan-300 transition-colors">
                <span>5. Do Microsoft 365 and Google Workspace work with Arabic?</span>
                <span className="transform group-open:rotate-180 transition-transform duration-300 text-cyan-400 ml-2">▼</span>
              </summary>
              <div className="p-5 pt-0 text-slate-300 text-sm sm:text-base border-t border-slate-800/80 mt-2">
                Both support Arabic, including right-to-left text in their main apps. Confirm that the specific features and languages your team needs are supported on your plan.
              </div>
            </details>

            <details className="group bg-slate-900/60 rounded-2xl border border-slate-700/60 overflow-hidden transition-all duration-300">
              <summary className="flex justify-between items-center cursor-pointer p-5 font-semibold text-white hover:text-cyan-300 transition-colors">
                <span>6. Can 4Biz International manage Microsoft 365 or Google Workspace for us?</span>
                <span className="transform group-open:rotate-180 transition-transform duration-300 text-cyan-400 ml-2">▼</span>
              </summary>
              <div className="p-5 pt-0 text-slate-300 text-sm sm:text-base border-t border-slate-800/80 mt-2">
                Yes. 4Biz International can help with licensing, setup, migration, and day-to-day administration for either platform. Contact us to discuss your team size and current setup.
              </div>
            </details>
          </div>
        </section>

        {/* CALL TO ACTION SECTION */}
        <section className="bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 p-8 sm:p-12 rounded-3xl border border-cyan-500/30 text-center space-y-6 shadow-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Talk to 4Biz International About Microsoft 365 or Google Workspace
          </h2>
          <p className="text-slate-200 max-w-2xl mx-auto text-base sm:text-lg">
            Choose the right platform, move without downtime, and keep it secure.
          </p>
          <div className="pt-2 text-slate-300 text-sm sm:text-base font-medium">
            <p>
              Phone: <a href="tel:+971527925100" className="text-cyan-300 hover:underline">+971 52 792 5100</a>
            </p>
            <p className="mt-1">
              Coverage: Dubai, Abu Dhabi, and all UAE Emirates, plus India (Kerala)
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}