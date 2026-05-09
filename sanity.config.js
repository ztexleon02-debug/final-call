import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./studio/schemaTypes/index.js";
import { structure } from "./studio/structure.js";

export default defineConfig({
  name: "default",
  title: "Marketing Engineer Portfolio",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "",
  dataset: process.env.SANITY_STUDIO_DATASET || "production",
  basePath: "/",
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaTypes,
  },
});
