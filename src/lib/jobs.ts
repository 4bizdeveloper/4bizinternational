export interface Job {
  slug: string;
  country?: string;
  seoTitle?: string;
  seoDescription?: string;
  title: string;
  department: string;
  location: string;
  workType: string;      // "Full-Time" | "Part-Time" | "Contract"
  experience: string;    // "0–1 Year", "3+ Years" etc.
  postedDate: string;    // ISO date
  shortDescription: string;
  about: string;
  responsibilities: string[];
  qualifications: string[];
  niceToHave?: string[];
}

export const JOBS: Job[] = [
  {
    slug: "digital-marketer",
    title: "Digital Marketer (Fresher / 0–1 Year Experience)",
    department: "Digital Marketing",
    location: "Kozhikode, Kerala, India",
    workType: "Full-Time",
    experience: "0–1 Year",
    postedDate: "2026-10-01",
    shortDescription:
      "Join 4Biz International as a Digital Marketer. Hands-on experience in SEO, Google Ads, Meta Ads, and content marketing.",
    about:
      "4Biz International is hiring a Digital Marketer who is enthusiastic, creative, and eager to build a career in digital marketing. This role is ideal for fresh graduates or early-career professionals looking for hands-on experience across SEO, AEO, content marketing, paid advertising, and social media platforms.",
    responsibilities: [
      "Assist in planning and executing SEO & AEO strategies.",
      "Create engaging content for blogs, ads, and social media platforms.",
      "Support and manage Google Ads & Meta Ads campaigns.",
      "Handle social media accounts, posting schedules, and audience engagement.",
      "Conduct keyword research and basic performance analysis.",
      "Monitor campaign results and prepare basic reports.",
      "Stay updated with digital marketing trends and best practices.",
      "Collaborate with design, development, and marketing teams.",
    ],
    qualifications: [
      "Fresher or 0–1 year experience in Digital Marketing.",
      "Knowledge of SEO & AEO fundamentals.",
      "Good understanding of content writing and copywriting.",
      "Basic knowledge of Google Ads & Meta Ads.",
      "Familiarity with social media platforms.",
      "Strong communication skills (written & verbal).",
      "Creative mindset with analytical thinking.",
      "Educational background in Marketing, Business, or related field.",
    ],
    niceToHave: [
      "Internship or certification in Digital Marketing.",
      "Hands-on experience through projects or freelancing.",
      "Basic knowledge of Google Analytics, Search Console.",
    ],
  },
  {
    slug: "graphic-designer",
    title: "Graphic Designer",
    department: "Creative & Design",
    location: "Kozhikode, Kerala, India",
    workType: "Full-Time",
    experience: "1–3 Years",
    postedDate: "2026-10-15",
    shortDescription:
      "Design compelling visual assets for digital campaigns, social media, and web platforms. Bring brands to life with modern aesthetics.",
    about:
      "We are looking for a creative and detail-oriented Graphic Designer to join our team. You will be responsible for creating engaging visual content that aligns with our clients' brand identities across various digital channels. Ideal for candidates with a strong portfolio and a passion for modern design trends.",
    responsibilities: [
      "Create visually appealing graphics for social media, web, and marketing campaigns.",
      "Collaborate with the marketing team to develop creative concepts and brand assets.",
      "Edit short-form video content and motion graphics for social platforms.",
      "Maintain brand consistency across all visual touchpoints.",
      "Stay up-to-date with the latest design software and trends.",
    ],
    qualifications: [
      "1–3 years of professional experience as a Graphic Designer.",
      "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign).",
      "Strong understanding of typography, color theory, and layout design.",
      "Experience designing for digital platforms (social media, web).",
      "A strong portfolio demonstrating a range of design styles.",
    ],
    niceToHave: [
      "Experience with video editing tools (Premiere Pro, After Effects, CapCut).",
      "Familiarity with Figma or UI/UX design principles.",
      "Basic understanding of web design constraints (HTML/CSS).",
    ],
  },
  {
    slug: "data-analyst",
    title: "Data Analyst",
    department: "Data & Analytics",
    location: "Kozhikode, Kerala, India (Hybrid)",
    workType: "Full-Time",
    experience: "2–4 Years",
    postedDate: "2026-10-20",
    shortDescription:
      "Transform complex data into actionable business insights. Build dashboards, write SQL queries, and drive data-driven decisions.",
    about:
      "We are seeking a detail-oriented Data Analyst to join our growing analytics team. You will be responsible for collecting, cleaning, and interpreting large datasets to provide actionable insights that drive strategic business decisions for our global clients.",
    responsibilities: [
      "Extract, clean, and analyze large datasets using SQL and Python.",
      "Develop and maintain interactive dashboards using Power BI or Tableau.",
      "Translate business requirements into technical data specifications.",
      "Identify trends, patterns, and anomalies in complex data sets.",
      "Collaborate with cross-functional teams to present data-driven recommendations.",
    ],
    qualifications: [
      "2–4 years of professional experience as a Data Analyst.",
      "Strong proficiency in SQL (PostgreSQL, MySQL, or similar).",
      "Experience with data visualization tools (Power BI, Tableau, or Looker).",
      "Proficient in Python (Pandas, NumPy) for data manipulation.",
      "Excellent analytical and problem-solving skills.",
    ],
    niceToHave: [
      "Experience with cloud data warehouses (BigQuery, Snowflake).",
      "Knowledge of machine learning algorithms.",
      "Google Data Analytics or Microsoft Certified: Data Analyst Associate certification.",
    ],
  },
];

/** Get all job slugs for static generation */
export function getAllJobSlugs(): string[] {
  return JOBS.map((j) => j.slug);
}

/** Get job by slug */
export function getJobBySlug(slug: string): Job | undefined {
  return JOBS.find((j) => j.slug === slug);
}