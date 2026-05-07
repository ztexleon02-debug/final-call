import "dotenv/config";
import { createClient } from "@sanity/client";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  throw new Error("Missing SANITY_STUDIO_PROJECT_ID or SANITY_API_WRITE_TOKEN in your environment.");
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2026-05-07",
  useCdn: false,
});

const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",
  name: "Your Name",
  role: "Marketing Engineer",
  tagline: "Future of Marketing Expert",
  heroTitleLead: "I engineer",
  heroTitleAccent: "modern growth",
  heroTitleTail: "for the AI era.",
  heroDescription:
    "Rebranding from marketing manager to marketing engineer: blending strategy, automation, storytelling, data, and product thinking into marketing systems that feel elevated and actually compound.",
  storyHeading: "From managing campaigns to engineering momentum.",
  storyCards: [
    {
      _key: "then",
      label: "Then",
      title: "Marketing Manager",
      description:
        "I learned how to shape campaigns, read audiences, lead execution, and translate attention into growth.",
      featured: false,
    },
    {
      _key: "now",
      label: "Now",
      title: "Marketing Engineer",
      description:
        "I design the machines behind the message: AI-assisted workflows, systems thinking, automation, data clarity, and high-leverage customer journeys.",
      featured: true,
    },
    {
      _key: "next",
      label: "Next",
      title: "Future-Ready Builder",
      description:
        "My edge is not just keeping up with technology, but turning it into human-centered, brand-safe, performance-driven execution.",
      featured: false,
    },
  ],
  capabilitiesHeading: "Where marketing taste meets technical leverage.",
  capabilities: [
    {
      _key: "cap1",
      index: "01",
      title: "AI-Native Marketing",
      description:
        "Designing prompt systems, research workflows, and content engines that increase output without lowering quality.",
    },
    {
      _key: "cap2",
      index: "02",
      title: "Automation Architecture",
      description:
        "Connecting tools, triggers, and repeatable operating systems so campaigns scale with less friction.",
    },
    {
      _key: "cap3",
      index: "03",
      title: "Creative Systems Design",
      description:
        "Building assets, experiences, and motion that feel premium, modern, and aligned with a sharper brand narrative.",
    },
    {
      _key: "cap4",
      index: "04",
      title: "Growth With Elegance",
      description:
        "Performance matters, but so does feel. I create journeys that convert while still feeling thoughtful and human.",
    },
  ],
  corePerspectiveTitle:
    "The future of marketing belongs to people who can think in both narratives and systems.",
  corePerspectiveBody:
    "I work at that intersection: brand instinct, analytical clarity, product logic, and AI fluency.",
  visionHeading: "A personal brand built like a living product.",
  visionCards: [
    {
      _key: "v1",
      label: "Positioning",
      title: "Marketing engineer for the next wave of business.",
      description:
        "Not just someone who uses AI, but someone who understands how to integrate it into strategy, workflows, and growth models.",
    },
    {
      _key: "v2",
      label: "Aesthetic",
      title: "Clean, cozy, cinematic, quietly futuristic.",
      description:
        "Soft gradients, tactile surfaces, bold modern type, and motion that feels satisfying rather than loud.",
    },
    {
      _key: "v3",
      label: "Promise",
      title: "I help brands modernize without losing their soul.",
      description:
        "Tech-forward execution, but with emotional intelligence, narrative discipline, and customer empathy at the center.",
    },
  ],
  blogHeading: "Thinking at the edge of marketing, systems, and AI.",
  blogIntro:
    "Short essays on what the next generation of marketing should feel like, build like, and optimize for.",
  quote:
    "The best marketing in the future won't feel like more noise. It will feel like better systems, better timing, better taste, and better understanding.",
  contactHeading: "Ready to build the future-facing version of your brand?",
  contactEmail: "hello@example.com",
  linkedinUrl: "https://www.linkedin.com",
  instagramUrl: "https://www.instagram.com",
  marqueeItems: [
    "Brand Strategy",
    "AI Workflows",
    "Lifecycle Marketing",
    "Creative Direction",
    "Product-Led Growth",
    "Automation Systems",
    "Marketing Ops",
  ],
};

const posts = [
  {
    _id: "best-marketers-think-like-engineers",
    _type: "post",
    title: "Why the Best Marketers Will Start Thinking Like Engineers",
    slug: { _type: "slug", current: "best-marketers-think-like-engineers" },
    category: "Perspective",
    excerpt:
      "The next generation of marketing advantage won't come from doing more. It will come from building smarter systems behind the scenes.",
    readTime: "3 min read",
    publishedAt: "2026-05-07T10:00:00Z",
    body: [
      {
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            marks: [],
            text: "For a long time, great marketers were defined by instinct, communication, and execution speed. Those things still matter. But now there is a second layer becoming just as valuable: systems thinking.",
          },
        ],
      },
      {
        _type: "block",
        style: "h3",
        markDefs: [],
        children: [{ _type: "span", marks: [], text: "Taste is still the front end" }],
      },
      {
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            marks: [],
            text: "A brand still needs story, emotional intelligence, and timing. The difference is that the strongest marketers are no longer stopping at the idea. They are designing the workflow behind the idea too.",
          },
        ],
      },
    ],
  },
  {
    _id: "ai-is-your-amplifier",
    _type: "post",
    title: "AI Is Not Your Brand. It Is Your Amplifier.",
    slug: { _type: "slug", current: "ai-is-your-amplifier" },
    category: "AI Strategy",
    excerpt:
      "Brands that win with AI won't be the ones that sound the most automated. They'll be the ones that use AI to become clearer, faster, and more intentional.",
    readTime: "2 min read",
    publishedAt: "2026-05-07T12:00:00Z",
    body: [
      {
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            marks: [],
            text: "There is a temptation right now to confuse AI output with brand value. They are not the same thing. AI can help us move faster, explore more directions, and compress production cycles, but it cannot replace the point of view behind a brand.",
          },
        ],
      },
      {
        _type: "block",
        style: "blockquote",
        markDefs: [],
        children: [
          {
            _type: "span",
            marks: [],
            text: "AI should make a brand more itself, not less human.",
          },
        ],
      },
    ],
  },
];

await client.createOrReplace(siteSettings);
for (const post of posts) {
  await client.createOrReplace(post);
}

console.log("Sanity seed complete.");
