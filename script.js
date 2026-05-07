import { SANITY_CONFIG } from "./site-config.js";

const fallbackContent = {
  settings: {
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
        label: "Then",
        title: "Marketing Manager",
        description:
          "I learned how to shape campaigns, read audiences, lead execution, and translate attention into growth.",
      },
      {
        label: "Now",
        title: "Marketing Engineer",
        description:
          "I design the machines behind the message: AI-assisted workflows, systems thinking, automation, data clarity, and high-leverage customer journeys.",
        featured: true,
      },
      {
        label: "Next",
        title: "Future-Ready Builder",
        description:
          "My edge is not just keeping up with technology, but turning it into human-centered, brand-safe, performance-driven execution.",
      },
    ],
    capabilitiesHeading: "Where marketing taste meets technical leverage.",
    capabilities: [
      {
        index: "01",
        title: "AI-Native Marketing",
        description:
          "Designing prompt systems, research workflows, and content engines that increase output without lowering quality.",
      },
      {
        index: "02",
        title: "Automation Architecture",
        description:
          "Connecting tools, triggers, and repeatable operating systems so campaigns scale with less friction.",
      },
      {
        index: "03",
        title: "Creative Systems Design",
        description:
          "Building assets, experiences, and motion that feel premium, modern, and aligned with a sharper brand narrative.",
      },
      {
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
        label: "Positioning",
        title: "Marketing engineer for the next wave of business.",
        description:
          "Not just someone who uses AI, but someone who understands how to integrate it into strategy, workflows, and growth models.",
      },
      {
        label: "Aesthetic",
        title: "Clean, cozy, cinematic, quietly futuristic.",
        description:
          "Soft gradients, tactile surfaces, bold modern type, and motion that feels satisfying rather than loud.",
      },
      {
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
  },
  posts: [
    {
      _id: "post-1",
      title: "Why the Best Marketers Will Start Thinking Like Engineers",
      slug: { current: "best-marketers-think-like-engineers" },
      category: "Perspective",
      excerpt:
        "The next generation of marketing advantage won't come from doing more. It will come from building smarter systems behind the scenes.",
      readTime: "3 min read",
      publishedAt: "2026-05-07",
      body: [
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "For a long time, great marketers were defined by instinct, communication, and execution speed. Those things still matter. But now there is a second layer becoming just as valuable: systems thinking.",
            },
          ],
        },
        {
          _type: "block",
          style: "h3",
          children: [{ _type: "span", text: "Taste is still the front end" }],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "A brand still needs story, emotional intelligence, and timing. The difference is that the strongest marketers are no longer stopping at the idea. They are designing the workflow behind the idea too.",
            },
          ],
        },
        {
          _type: "block",
          style: "blockquote",
          children: [
            {
              _type: "span",
              text: "The future marketer is part strategist, part operator, part systems designer.",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "That means knowing how to build repeatable research loops, content pipelines, AI-assisted briefs, approval flows, and measurement habits. Not because marketing should feel robotic, but because structure gives creativity room to breathe.",
            },
          ],
        },
        {
          _type: "block",
          listItem: "bullet",
          level: 1,
          style: "normal",
          children: [{ _type: "span", text: "Less chaos in execution" }],
        },
        {
          _type: "block",
          listItem: "bullet",
          level: 1,
          style: "normal",
          children: [{ _type: "span", text: "More consistency in quality" }],
        },
        {
          _type: "block",
          listItem: "bullet",
          level: 1,
          style: "normal",
          children: [{ _type: "span", text: "More leverage from the same creative energy" }],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "This is why I love the term marketing engineer. It signals a shift from only launching campaigns to building the infrastructure that makes great campaigns sustainable.",
            },
          ],
        },
      ],
    },
    {
      _id: "post-2",
      title: "AI Is Not Your Brand. It Is Your Amplifier.",
      slug: { current: "ai-is-your-amplifier" },
      category: "AI Strategy",
      excerpt:
        "Brands that win with AI won't be the ones that sound the most automated. They'll be the ones that use AI to become clearer, faster, and more intentional.",
      readTime: "2 min read",
      publishedAt: "2026-05-07",
      body: [
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "There is a temptation right now to confuse AI output with brand value. They are not the same thing. AI can help us move faster, explore more directions, and compress production cycles, but it cannot replace the point of view behind a brand.",
            },
          ],
        },
        {
          _type: "block",
          style: "h3",
          children: [{ _type: "span", text: "Velocity is only useful with vision" }],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "If your strategy is weak, AI can simply help you publish weak ideas faster. If your positioning is sharp, AI becomes something much more powerful: an amplifier for clarity.",
            },
          ],
        },
        {
          _type: "block",
          style: "blockquote",
          children: [
            {
              _type: "span",
              text: "AI should make a brand more itself, not less human.",
            },
          ],
        },
        {
          _type: "block",
          listItem: "bullet",
          level: 1,
          style: "normal",
          children: [{ _type: "span", text: "Use AI to speed up research." }],
        },
        {
          _type: "block",
          listItem: "bullet",
          level: 1,
          style: "normal",
          children: [{ _type: "span", text: "Use AI to draft first passes and spot patterns." }],
        },
        {
          _type: "block",
          listItem: "bullet",
          level: 1,
          style: "normal",
          children: [{ _type: "span", text: "Use human judgment to protect taste, nuance, and trust." }],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "That is the model I believe in. Fast systems, clear thinking, elegant execution. Not AI for spectacle. AI for better marketing.",
            },
          ],
        },
      ],
    },
  ],
};

const config = SANITY_CONFIG || {};
const dialog = document.querySelector("[data-blog-dialog]");
const closeDialogButton = document.querySelector("[data-close-dialog]");

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function initialsFromName(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");
}

function formatDate(dateValue) {
  if (!dateValue) return "";
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function textFromBlocks(blocks = []) {
  return blocks
    .filter((block) => block?._type === "block")
    .flatMap((block) => block.children || [])
    .map((child) => child.text || "")
    .join(" ")
    .trim();
}

function serializeChildren(children = []) {
  return children
    .map((child) => {
      const text = escapeHtml(child.text || "");
      if (!Array.isArray(child.marks) || child.marks.length === 0) return text;
      return child.marks.reduce((current, mark) => {
        if (mark === "strong") return `<strong>${current}</strong>`;
        if (mark === "em") return `<em>${current}</em>`;
        return current;
      }, text);
    })
    .join("");
}

function renderPortableText(blocks = []) {
  const fragments = [];
  let listBuffer = [];
  let currentListType = "";

  const flushList = () => {
    if (!listBuffer.length) return;
    const tag = currentListType === "number" ? "ol" : "ul";
    fragments.push(`<${tag}>${listBuffer.join("")}</${tag}>`);
    listBuffer = [];
    currentListType = "";
  };

  blocks.forEach((block) => {
    if (block?._type !== "block") return;
    const content = serializeChildren(block.children || []);

    if (block.listItem) {
      const nextType = block.listItem === "number" ? "number" : "bullet";
      if (currentListType && currentListType !== nextType) flushList();
      currentListType = nextType;
      listBuffer.push(`<li>${content}</li>`);
      return;
    }

    flushList();

    if (block.style === "h3") {
      fragments.push(`<h3>${content}</h3>`);
      return;
    }

    if (block.style === "blockquote") {
      fragments.push(`<blockquote>${content}</blockquote>`);
      return;
    }

    fragments.push(`<p>${content}</p>`);
  });

  flushList();
  return fragments.join("");
}

function renderRepeatingText(items = []) {
  return [...items, ...items].map((item) => `<span>${escapeHtml(item)}</span>`).join("");
}

function cardMarkup(card, extraClass = "") {
  return `
    <article class="${extraClass} glass reveal">
      <p class="card-label">${escapeHtml(card.label)}</p>
      <h3>${escapeHtml(card.title)}</h3>
      <p>${escapeHtml(card.description)}</p>
    </article>
  `;
}

function capabilityMarkup(item) {
  return `
    <article class="capability-card glass reveal">
      <span class="capability-index">${escapeHtml(item.index)}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.description)}</p>
    </article>
  `;
}

function blogCardMarkup(post, index) {
  const summary = post.excerpt || `${textFromBlocks(post.body).slice(0, 180)}...`;
  return `
    <button class="blog-card glass reveal" type="button" data-post-index="${index}">
      <div class="blog-card-top">
        <span class="blog-card-category">${escapeHtml(post.category || "Journal")}</span>
        <span>${escapeHtml(post.readTime || "Short read")}</span>
      </div>
      <div class="blog-card-meta">
        <span>${escapeHtml(formatDate(post.publishedAt) || "New article")}</span>
        <span>${escapeHtml(post.slug?.current || "featured-post")}</span>
      </div>
      <h3>${escapeHtml(post.title)}</h3>
      <p>${escapeHtml(summary)}</p>
      <div class="blog-card-footer">
        <span>Open article</span>
        <span>01.${String(index + 1).padStart(2, "0")}</span>
      </div>
    </button>
  `;
}

function applyText(selector, value) {
  const element = document.querySelector(selector);
  if (element && value) element.textContent = value;
}

function applyLink(selector, href, text) {
  const element = document.querySelector(selector);
  if (!element) return;
  if (href) element.href = href;
  if (text) element.textContent = text;
}

function renderContent(content) {
  const { settings, posts } = content;

  document.title = `${settings.name} | ${settings.role}`;
  applyText("[data-site-name]", settings.name);
  applyText("[data-site-role]", settings.role);
  applyText("[data-tagline]", settings.tagline);
  applyText("[data-hero-lead]", settings.heroTitleLead);
  applyText("[data-hero-accent]", settings.heroTitleAccent);
  applyText("[data-hero-tail]", settings.heroTitleTail);
  applyText("[data-hero-description]", settings.heroDescription);
  applyText("[data-story-heading]", settings.storyHeading);
  applyText("[data-capabilities-heading]", settings.capabilitiesHeading);
  applyText("[data-core-perspective-title]", settings.corePerspectiveTitle);
  applyText("[data-core-perspective-body]", settings.corePerspectiveBody);
  applyText("[data-vision-heading]", settings.visionHeading);
  applyText("[data-blog-heading]", settings.blogHeading);
  applyText("[data-blog-intro]", settings.blogIntro);
  applyText("[data-quote]", settings.quote);
  applyText("[data-contact-heading]", settings.contactHeading);

  const brandInitials = document.querySelector("[data-brand-initials]");
  if (brandInitials) brandInitials.textContent = initialsFromName(settings.name);

  applyLink("[data-contact-email]", `mailto:${settings.contactEmail}`, settings.contactEmail);
  applyLink("[data-contact-linkedin]", settings.linkedinUrl, "LinkedIn");
  applyLink("[data-contact-instagram]", settings.instagramUrl, "Instagram");

  const marquee = document.querySelector("[data-marquee-track]");
  if (marquee) marquee.innerHTML = renderRepeatingText(settings.marqueeItems || []);

  const storyGrid = document.querySelector("[data-story-grid]");
  if (storyGrid) {
    storyGrid.innerHTML = (settings.storyCards || [])
      .map((card) => cardMarkup(card, `story-card${card.featured ? " story-card-feature" : ""}`))
      .join("");
  }

  const capabilityLeft = document.querySelector("[data-capability-left]");
  const capabilityRight = document.querySelector("[data-capability-right]");
  if (capabilityLeft && capabilityRight) {
    const capabilities = settings.capabilities || [];
    capabilityLeft.innerHTML = capabilities.slice(0, 2).map(capabilityMarkup).join("");
    capabilityRight.innerHTML = capabilities.slice(2).map(capabilityMarkup).join("");
  }

  const signalGrid = document.querySelector("[data-signal-grid]");
  if (signalGrid) {
    signalGrid.innerHTML = (settings.capabilities || [])
      .slice(0, 3)
      .map(
        (item) => `
          <article>
            <span>${escapeHtml(item.index)}</span>
            <strong>${escapeHtml(item.title)}</strong>
            <p>${escapeHtml(item.description)}</p>
          </article>
        `
      )
      .join("");
  }

  const visionGrid = document.querySelector("[data-vision-grid]");
  if (visionGrid) {
    visionGrid.innerHTML = (settings.visionCards || [])
      .map((card) => cardMarkup(card, "vision-panel"))
      .join("");
  }

  const blogGrid = document.querySelector("[data-blog-grid]");
  if (blogGrid) {
    blogGrid.innerHTML = posts.map(blogCardMarkup).join("");
    blogGrid.querySelectorAll("[data-post-index]").forEach((button) => {
      button.addEventListener("click", () => openPost(posts[Number(button.dataset.postIndex)]));
    });
  }

  setupRevealAnimations();
}

function openPost(post) {
  if (!dialog || !post) return;
  applyText("[data-dialog-category]", post.category || "Journal");
  applyText("[data-dialog-date]", formatDate(post.publishedAt));
  applyText("[data-dialog-read-time]", post.readTime || "Short read");
  applyText("[data-dialog-title]", post.title);
  applyText("[data-dialog-excerpt]", post.excerpt || "");

  const dialogBody = document.querySelector("[data-dialog-body]");
  if (dialogBody) dialogBody.innerHTML = renderPortableText(post.body || []);

  dialog.showModal();
}

function normalizeSanityPayload(raw) {
  if (!raw?.settings) return fallbackContent;
  const settings = { ...fallbackContent.settings, ...raw.settings };
  const posts = Array.isArray(raw.posts) && raw.posts.length ? raw.posts : fallbackContent.posts;
  return { settings, posts };
}

function getSanityQueryUrl() {
  if (!config.projectId || !config.dataset) return null;

  const query = encodeURIComponent(`{
    "settings": *[_type == "siteSettings" && _id == "siteSettings"][0],
    "posts": *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      readTime,
      category,
      body
    }
  }`);

  return `https://${config.projectId}.api.sanity.io/v${config.apiVersion || "2026-05-07"}/data/query/${config.dataset}?query=${query}`;
}

async function loadContent() {
  const url = getSanityQueryUrl();
  if (!url) return fallbackContent;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Sanity query failed with ${response.status}`);
    const payload = await response.json();
    return normalizeSanityPayload(payload.result);
  } catch (error) {
    console.warn("Falling back to local portfolio content.", error);
    return fallbackContent;
  }
}

function setupRevealAnimations() {
  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 70, 420)}ms`;
    observer.observe(item);
  });
}

function setupChrome() {
  const header = document.querySelector(".site-header");

  window.addEventListener(
    "scroll",
    () => {
      if (!header) return;
      if (window.scrollY > 32) {
        header.style.background = "rgba(255, 250, 244, 0.84)";
        header.style.boxShadow = "0 18px 50px rgba(80, 56, 33, 0.12)";
      } else {
        header.style.background = "rgba(255, 250, 244, 0.74)";
        header.style.boxShadow = "0 16px 40px rgba(80, 56, 33, 0.08)";
      }
    },
    { passive: true }
  );

  document.addEventListener("pointermove", (event) => {
    const { clientX, clientY } = event;
    const x = (clientX / window.innerWidth - 0.5) * 18;
    const y = (clientY / window.innerHeight - 0.5) * 18;
    document.documentElement.style.setProperty("--pointer-x", `${x}px`);
    document.documentElement.style.setProperty("--pointer-y", `${y}px`);
  });

  closeDialogButton?.addEventListener("click", () => dialog?.close());
  dialog?.addEventListener("click", (event) => {
    const box = dialog.getBoundingClientRect();
    const isInside =
      event.clientX >= box.left &&
      event.clientX <= box.right &&
      event.clientY >= box.top &&
      event.clientY <= box.bottom;
    if (!isInside) dialog.close();
  });
}

setupChrome();
loadContent().then(renderContent);
