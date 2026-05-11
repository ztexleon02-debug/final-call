import { SANITY_CONFIG } from "./site-config.js";

const fallbackContent = {
  settings: {
    name: "Muhammad bin Tariq",
    role: "Marketing Engineer",
    tagline: "A seriously good",
    heroTitleLead: "Marketing",
    heroTitleAccent: "Engineer",
    heroTitleTail: "Final Call",
    heroDescription:
      "Building the brand systems, AI workflows, and growth experiences that make modern marketing feel sharper, calmer, and more inevitable.",
    storyHeading: "From campaign execution to systems-led brand building.",
    storyCards: [
      {
        label: "Then",
        title: "Marketing Operator",
        description:
          "I learned how to plan campaigns, read audiences, shape positioning, and move from concept to launch without losing clarity.",
      },
      {
        label: "Now",
        title: "Marketing Engineer",
        description:
          "I build the operating layer underneath the message: AI-assisted workflows, repeatable systems, elegant automations, and clearer decision loops.",
        featured: true,
      },
      {
        label: "Next",
        title: "Modern Brand Builder",
        description:
          "The goal is not more content. The goal is a brand that moves with more precision, more taste, and more leverage.",
      },
    ],
    capabilitiesHeading: "Designed for brands that need both taste and throughput.",
    capabilities: [
      {
        index: "01",
        title: "AI Workflow Design",
        description:
          "Research loops, drafting systems, prompt structures, and review layers that increase speed without flattening quality.",
      },
      {
        index: "02",
        title: "Marketing Systems",
        description:
          "Campaign architecture, lifecycle thinking, and operating logic that turns one-off execution into repeatable momentum.",
      },
      {
        index: "03",
        title: "Creative Direction",
        description:
          "Visual taste, messaging structure, and interaction details that make the work feel intentional instead of assembled.",
      },
      {
        index: "04",
        title: "Growth With Restraint",
        description:
          "Performance-minded decisions shaped by brand discipline, customer empathy, and a long-term point of view.",
      },
    ],
    corePerspectiveTitle:
      "The strongest marketers of the next era will think like builders, not just communicators.",
    corePerspectiveBody:
      "That means understanding story and systems at the same time: what the brand says, how the machine runs, and where leverage compounds.",
    visionHeading: "A personal practice built like a product with a point of view.",
    visionCards: [
      {
        label: "Positioning",
        title: "A marketing engineer for modern businesses.",
        description:
          "Not someone using AI for spectacle, but someone integrating it into strategy, workflows, execution, and better decision-making.",
      },
      {
        label: "Aesthetic",
        title: "Editorial, minimal, cinematic, quietly premium.",
        description:
          "Large typography, measured motion, strong spacing, and surfaces that feel polished without becoming loud.",
      },
      {
        label: "Promise",
        title: "Build sharper systems without losing brand soul.",
        description:
          "The work should feel more modern and more human at the same time, with clarity doing the heavy lifting.",
      },
    ],
    blogHeading: "Notes on modern marketing, systems, AI, and brand taste.",
    blogIntro:
      "A small journal for ideas, operating principles, and observations about what great next-generation marketing should actually feel like.",
    quote:
      "The real edge is not publishing faster. It is designing better systems for clearer thinking, better timing, and stronger brand decisions.",
    contactHeading: "If your brand is evolving, the operating system behind it should evolve too.",
    contactEmail: "hello@example.com",
    linkedinUrl: "https://www.linkedin.com",
    instagramUrl: "https://www.instagram.com",
    marqueeItems: [
      "Brand Systems",
      "AI Workflows",
      "Lifecycle Thinking",
      "Creative Direction",
      "Automation Design",
      "Editorial Taste",
    ],
  },
  posts: [
    {
      _id: "post-1",
      title: "Why the Best Marketers Will Start Thinking Like Engineers",
      slug: { current: "best-marketers-think-like-engineers" },
      category: "Perspective",
      excerpt:
        "The next generation of marketing advantage will come from designing better systems behind the scenes, not just producing more visible output.",
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
      ],
    },
    {
      _id: "post-2",
      title: "AI Is Not Your Brand. It Is Your Amplifier.",
      slug: { current: "ai-is-your-amplifier" },
      category: "AI Strategy",
      excerpt:
        "AI should strengthen a brand's clarity and operating leverage, not replace its point of view.",
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
      ],
    },
  ],
};

const config = SANITY_CONFIG || {};
const dialog = document.querySelector("[data-blog-dialog]");
const closeDialogButton = document.querySelector("[data-close-dialog]");
const heroSequenceSection = document.querySelector("[data-hero-sequence]");
const sequenceCanvas = document.querySelector("[data-sequence-canvas]");
const heroSequenceConfig = {
  frameCount: 76,
  framePath(index) {
    return `/final-call-sequence-1/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`;
  },
};

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
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

function storyCardMarkup(card) {
  return `
    <article class="story-card${card.featured ? " story-card-feature" : ""} reveal">
      <p class="card-label">${escapeHtml(card.label)}</p>
      <h3>${escapeHtml(card.title)}</h3>
      <p>${escapeHtml(card.description)}</p>
    </article>
  `;
}

function capabilityMarkup(item) {
  return `
    <article class="capability-card reveal">
      <span class="capability-index">${escapeHtml(item.index)}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.description)}</p>
    </article>
  `;
}

function visionCardMarkup(card) {
  return `
    <article class="vision-card reveal">
      <p class="card-label">${escapeHtml(card.label)}</p>
      <h3>${escapeHtml(card.title)}</h3>
      <p>${escapeHtml(card.description)}</p>
    </article>
  `;
}

function blogCardMarkup(post, index) {
  const summary = post.excerpt || `${textFromBlocks(post.body).slice(0, 190)}...`;
  return `
    <button class="blog-card reveal" type="button" data-post-index="${index}">
      <div class="blog-meta">
        <span>${escapeHtml(post.category || "Journal")}</span>
        <span>${escapeHtml(post.readTime || "Short read")}</span>
        <span>${escapeHtml(formatDate(post.publishedAt) || "New article")}</span>
      </div>
      <h3>${escapeHtml(post.title)}</h3>
      <p>${escapeHtml(summary)}</p>
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
  applyText("[data-tagline]", settings.tagline);
  applyText("[data-hero-line-one]", settings.heroTitleLead);
  applyText("[data-hero-line-two]", settings.heroTitleAccent);
  applyText("[data-story-heading]", settings.storyHeading);
  applyText("[data-capabilities-heading]", settings.capabilitiesHeading);
  applyText("[data-core-perspective-title]", settings.corePerspectiveTitle);
  applyText("[data-core-perspective-body]", settings.corePerspectiveBody);
  applyText("[data-vision-heading]", settings.visionHeading);
  applyText("[data-blog-heading]", settings.blogHeading);
  applyText("[data-blog-intro]", settings.blogIntro);
  applyText("[data-quote]", settings.quote);
  applyText("[data-contact-heading]", settings.contactHeading);

  applyLink("[data-contact-email]", `mailto:${settings.contactEmail}`, settings.contactEmail);
  applyLink("[data-contact-linkedin]", settings.linkedinUrl, "LinkedIn");
  applyLink("[data-contact-instagram]", settings.instagramUrl, "Instagram");

  const marquee = document.querySelector("[data-marquee-track]");
  if (marquee) marquee.innerHTML = renderRepeatingText(settings.marqueeItems || []);

  const storyGrid = document.querySelector("[data-story-grid]");
  if (storyGrid) {
    storyGrid.innerHTML = (settings.storyCards || []).map(storyCardMarkup).join("");
  }

  const capabilityStack = document.querySelector("[data-capability-stack]");
  if (capabilityStack) {
    capabilityStack.innerHTML = (settings.capabilities || []).map(capabilityMarkup).join("");
  }

  const visionGrid = document.querySelector("[data-vision-grid]");
  if (visionGrid) {
    visionGrid.innerHTML = (settings.visionCards || []).map(visionCardMarkup).join("");
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
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 55, 360)}ms`;
    observer.observe(item);
  });
}

function setupHeroSequence() {
  if (!heroSequenceSection || !sequenceCanvas) return;

  const context = sequenceCanvas.getContext("2d", { alpha: false });
  if (!context) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const frames = new Array(heroSequenceConfig.frameCount);
  let currentFrame = 0;
  let desiredFrame = 0;
  let resizeFrame = null;
  let scrollFrame = null;

  const drawFrame = (image) => {
    if (!image?.complete) return;

    const bounds = sequenceCanvas.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 3);
    const targetWidth = Math.round(bounds.width * dpr);
    const targetHeight = Math.round(bounds.height * dpr);

    if (sequenceCanvas.width !== targetWidth || sequenceCanvas.height !== targetHeight) {
      sequenceCanvas.width = targetWidth;
      sequenceCanvas.height = targetHeight;
    }

    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.clearRect(0, 0, bounds.width, bounds.height);

    const scale = Math.max(bounds.width / image.naturalWidth, bounds.height / image.naturalHeight);
    const width = image.naturalWidth * scale;
    const height = image.naturalHeight * scale;
    const x = (bounds.width - width) / 2;
    const y = (bounds.height - height) / 2;

    context.fillStyle = "#ead9c9";
    context.fillRect(0, 0, bounds.width, bounds.height);
    context.drawImage(image, x, y, width, height);
  };

  const renderFrameAt = (index) => {
    const safeIndex = clamp(index, 0, heroSequenceConfig.frameCount - 1);
    desiredFrame = safeIndex;

    let image = frames[safeIndex];
    if (!image) {
      for (let cursor = safeIndex - 1; cursor >= 0; cursor -= 1) {
        if (frames[cursor]) {
          image = frames[cursor];
          break;
        }
      }
    }

    if (!image) return;
    currentFrame = safeIndex;
    drawFrame(image);
  };

  const updateProgress = () => {
    const start = heroSequenceSection.offsetTop;
    const end = start + heroSequenceSection.offsetHeight - window.innerHeight;
    const progress = end <= start ? 0 : clamp((window.scrollY - start) / (end - start), 0, 1);
    const fadeProgress = clamp(progress * 1.1, 0, 1);

    heroSequenceSection.style.setProperty("--hero-progress", progress.toFixed(4));
    heroSequenceSection.style.setProperty("--hero-fade-progress", fadeProgress.toFixed(4));

    if (!prefersReducedMotion) {
      renderFrameAt(Math.round(progress * (heroSequenceConfig.frameCount - 1)));
    }
  };

  const queueProgressUpdate = () => {
    if (scrollFrame) return;
    scrollFrame = requestAnimationFrame(() => {
      scrollFrame = null;
      updateProgress();
    });
  };

  const queueResize = () => {
    if (resizeFrame) cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => {
      renderFrameAt(currentFrame);
      updateProgress();
    });
  };

  for (let index = 0; index < heroSequenceConfig.frameCount; index += 1) {
    const image = new Image();
    image.decoding = "async";
    image.src = heroSequenceConfig.framePath(index);
    image.addEventListener("load", () => {
      frames[index] = image;
      if (index === 0 || index === desiredFrame || index === currentFrame) {
        drawFrame(image);
      }
    });
  }

  window.addEventListener("scroll", queueProgressUpdate, { passive: true });
  window.addEventListener("resize", queueResize, { passive: true });

  renderFrameAt(0);
  updateProgress();
}

function setupChrome() {
  const header = document.querySelector(".site-header");

  window.addEventListener(
    "scroll",
    () => {
      if (!header) return;
      if (window.scrollY > 32) {
        header.style.background =
          "linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.18)), rgba(235, 224, 212, 0.28)";
        header.style.boxShadow = "0 22px 50px rgba(46, 28, 19, 0.1)";
      } else {
        header.style.background =
          "linear-gradient(180deg, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0.16)), rgba(235, 224, 212, 0.24)";
        header.style.boxShadow = "0 20px 46px rgba(46, 28, 19, 0.08)";
      }
    },
    { passive: true }
  );

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
setupHeroSequence();
loadContent().then(renderContent);
