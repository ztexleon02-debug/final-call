import { defineArrayMember, defineField, defineType } from "sanity";

const insightCard = defineArrayMember({
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
  ],
});

const capabilityCard = defineArrayMember({
  type: "object",
  fields: [
    defineField({ name: "index", title: "Index", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
  ],
});

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "role", title: "Role", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "heroTitleLead", title: "Hero Title Lead", type: "string" }),
    defineField({ name: "heroTitleAccent", title: "Hero Title Accent", type: "string" }),
    defineField({ name: "heroTitleTail", title: "Hero Title Tail", type: "string" }),
    defineField({ name: "heroDescription", title: "Hero Description", type: "text", rows: 4 }),
    defineField({ name: "storyHeading", title: "Story Heading", type: "string" }),
    defineField({
      name: "storyCards",
      title: "Story Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
            defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false }),
          ],
        }),
      ],
    }),
    defineField({ name: "capabilitiesHeading", title: "Capabilities Heading", type: "string" }),
    defineField({
      name: "capabilities",
      title: "Capabilities",
      type: "array",
      of: [capabilityCard],
    }),
    defineField({ name: "corePerspectiveTitle", title: "Core Perspective Title", type: "string" }),
    defineField({ name: "corePerspectiveBody", title: "Core Perspective Body", type: "text", rows: 4 }),
    defineField({ name: "visionHeading", title: "Vision Heading", type: "string" }),
    defineField({
      name: "visionCards",
      title: "Vision Cards",
      type: "array",
      of: [insightCard],
    }),
    defineField({ name: "blogHeading", title: "Blog Heading", type: "string" }),
    defineField({ name: "blogIntro", title: "Blog Intro", type: "text", rows: 3 }),
    defineField({ name: "quote", title: "Quote", type: "text", rows: 4 }),
    defineField({ name: "contactHeading", title: "Contact Heading", type: "string" }),
    defineField({ name: "contactEmail", title: "Contact Email", type: "string" }),
    defineField({ name: "linkedinUrl", title: "LinkedIn URL", type: "url" }),
    defineField({ name: "instagramUrl", title: "Instagram URL", type: "url" }),
    defineField({
      name: "marqueeItems",
      title: "Marquee Items",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Site Settings",
        subtitle: "Portfolio content and brand voice",
      };
    },
  },
});
