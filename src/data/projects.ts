export type ProjectIcon = "netlify" | "github" | "lovable" | "figma" | "video" | "drive" | "external";

export type ProjectLink = {
  label: string;
  description?: string;
  url: string;
  icon: ProjectIcon;
};

export type ProjectSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: { title: string; body: string }[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  year?: string;
  sections?: ProjectSection[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "streamlined-budgeting",
    title: "Streamlined Budgeting",
    description:
      "AI-assisted budgeting workflow for grant managers at the University of Washington — smart autofill and validation that save users ~4 hours per day.",
    tech: ["Claude Code", "Lovable", "TypeScript", "Figma", "Netlify"],
    year: "current",
    sections: [
      {
        heading: "Context",
        paragraphs: [
          "The University of Washington receives a significant volume of research funding from sponsors like the NIH and NSF. Grant managers in the Office of Research actively shepherd 75+ awards at any given time — and budgeting is one of the most time-intensive parts of that work.",
        ],
      },
      {
        heading: "The friction",
        paragraphs: [
          "UW's existing platform, Sage, was built to centralize award management, but grant managers had quietly built a parallel workflow in Excel because the calculations were faster and more flexible there. They were also pulling reference data — tuition rates, fringe rates, faculty salaries — from a sprawl of UW websites.",
          "On top of that, communication between Principal Investigators (PIs) and grant managers was scattered across email and spreadsheets, slowing down every iteration of a budget.",
        ],
      },
      {
        heading: "The approach",
        paragraphs: [
          "Instead of forcing people off Excel, we brought Excel into Sage and added a third surface: a knowledge layer. The result is three connected layers inside one platform.",
        ],
        bullets: [
          { title: "Sage layer", body: "The system of record for the award." },
          { title: "Excel layer", body: "The calculation surface managers already trust, now embedded." },
          { title: "Knowledge layer", body: "A unified database of the reference data previously scattered across UW websites." },
        ],
      },
      {
        heading: "Before vs. after",
        paragraphs: [
          "What used to be three disconnected workflows — Sage, Excel, and hundreds of reference websites — is now one integrated experience where every layer is aware of the others. PI ↔ grant manager communication lives alongside the budget itself, so context never gets lost. Estimated time saved: ~4 hours per manager per day.",
        ],
      },
    ],
    links: [
      {
        label: "Live app",
        description: "Open the prototype on Netlify.",
        url: "https://hcdeorbit.netlify.app/",
        icon: "netlify",
      },
      {
        label: "Source code",
        description: "Browse the GitHub repository.",
        url: "https://github.com/NirmalKuttappa/sage-prototype",
        icon: "github",
      },
      {
        label: "Walkthrough video",
        description: "Short product walkthrough built with Lovable.",
        url: "https://drive.google.com/file/d/1rq_RWEoHdnwwTOXGI5Ob6eMCMSTon8Nn/view?usp=sharing",
        icon: "lovable",
      },
      {
        label: "User research & design",
        description: "FigJam board with user research synthesis, journey maps, and design ideation.",
        url: "https://www.figma.com/board/xM0Nngd7FT43mPrEc4AthR/HCDE-Capstone--UW-Research-?node-id=992-1594&p=f&t=PgXtdtkncoVDuyOd-0",
        icon: "figma",
      },
    ],
  },
  {
    slug: "trailsense",
    title: "TrailSense",
    description:
      "AI-powered hiking app that closes the \"subjectivity gap\" — moving past generic difficulty labels to deliver trail recommendations tuned to your fitness, pace, and experience.",
    tech: ["Lovable", "RAG", "Predictive ML", "Personalization"],
    year: "current",
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "A \"moderate\" trail feels completely different to a weekend walker than it does to a trail runner. Static difficulty labels and crowd-sourced reviews flatten that reality — they describe the trail in the abstract, not how it will feel to you. We call this the subjectivity gap.",
          "For new hikers especially, the gap is the difference between a confident first hike and a discouraging one. Existing tools like AllTrails, Komoot, and Gaia GPS surface trails; they don't model the hiker.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "TrailSense is a hybrid AI system. Two models work together so the app can both know you and know what's happening on the ground today.",
        ],
        bullets: [
          {
            title: "Predictive layer",
            body: "Learns your personal preferences, pace, and elevation tolerance from your hiking history.",
          },
          {
            title: "Generative (RAG) layer",
            body: "Pulls in real-time weather, park closures, and safety alerts so recommendations stay current.",
          },
          {
            title: "Safety intelligence",
            body: "Recommendations are wrapped in risk context — the AI suggests, but human judgment always overrides.",
          },
        ],
      },
      {
        heading: "Who it's for",
        paragraphs: [
          "Casual hikers, beginners, experienced hikers, tourists, and fitness enthusiasts. V1 is deliberately narrow — focused on helping beginners pick trails they'll feel confident starting. That focus is also where the personalization payoff is largest.",
        ],
      },
      {
        heading: "Business model",
        paragraphs: [
          "Freemium. Basic trail discovery is free; a premium tier ($6–10/month) unlocks weather risk analysis, offline maps, multi-day planning, and advanced analytics. Additional revenue comes from REI-style affiliate gear partnerships and sponsored tourism campaigns.",
          "At 10,000 monthly active users, projected revenue is ~$11,000/month against ~$4,375 in operating costs.",
        ],
      },
      {
        heading: "Why it's defensible",
        paragraphs: [
          "Personalization plus a proprietary data moat that compounds — every hike makes recommendations better for the next user. Competitors index trails; TrailSense indexes the relationship between hikers and trails.",
        ],
      },
      {
        heading: "The vision",
        paragraphs: [
          "Evolve from \"pick a trail\" to \"learn how I hike\" — a closed loop of recommend → support during the hike → learn after. Privacy-first by design: on-device processing, no raw GPS storage, and human judgment always overrides the AI.",
        ],
      },
    ],
    links: [
      {
        label: "Live app",
        description: "Try the prototype on Lovable.",
        url: "https://trail-sense-calm.lovable.app/",
        icon: "lovable",
      },
      {
        label: "Presentation",
        description: "Pitch deck walking through the product, market, and model.",
        url: "https://drive.google.com/file/d/1UNSMJ5jzJxBei8pc-hu51WwPoJPxZNyt/view?usp=sharing",
        icon: "drive",
      },
      {
        label: "AI product canvas",
        description: "One-page canvas: users, jobs, data, models, and risks.",
        url: "https://drive.google.com/file/d/1t6hXuxzA7EvQ_B0iayUYhyr1KLWutI3k/view?usp=sharing",
        icon: "drive",
      },
    ],
  },
  {
    slug: "proposals",
    title: "Business Proposals",
    description:
      "Generate polished client proposals with AI, share them as a web page, and collect a signature and payment — all in one flow.",
    tech: ["Next.js", "Supabase", "Claude API", "Stripe", "Resend"],
    year: "current",
    sections: [
      {
        heading: "What it does",
        paragraphs: [
          "Business Proposals turns a one-sentence project description into a polished, 12-section client proposal — then handles the rest of the deal cycle in the same flow: shareable public link, e-signature, and full Stripe payment. The freelancer never has to leave the dashboard, and the client never has to create an account.",
        ],
      },
      {
        heading: "The flow",
        bullets: [
          { title: "Sign in", body: "Email + password auth via Supabase." },
          {
            title: "Generate",
            body: "Describe the project in a sentence or two; Claude Opus 4.7 drafts a complete 12-section proposal.",
          },
          {
            title: "Edit & send",
            body: "Tweak any section, then share a public link with the client — no login required on their end.",
          },
          {
            title: "Sign & pay",
            body: "Client signs (typed or drawn) and pays the full amount via Stripe Checkout on the same page.",
          },
          {
            title: "Stay in the loop",
            body: "Email + dashboard updates at every step, with a celebratory animation once it's signed and paid.",
          },
        ],
      },
      {
        heading: "Under the hood",
        paragraphs: [
          "Built on Next.js App Router. Supabase handles Postgres + Auth, with Row Level Security keeping each user's proposals private. Anthropic's Claude API does the AI drafting. Stripe Checkout + webhooks handle payment, with a Stripe-confirmation fallback on the return page so a missed webhook never blocks a deal closing. Resend sends transactional email. Deployed on Netlify.",
        ],
      },
    ],
    links: [
      {
        label: "Live app",
        description: "Try the deployed app on Netlify.",
        url: "https://businessprop-test-a06c.netlify.app",
        icon: "netlify",
      },
      {
        label: "Source code",
        description: "Browse the GitHub repository.",
        url: "https://github.com/NirmalKuttappa/business-proposal-platform",
        icon: "github",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
