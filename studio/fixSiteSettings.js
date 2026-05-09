import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2026-05-07" });

await client
  .patch("siteSettings")
  .set({
    role: "Marketing Engineer",
  })
  .commit();

console.log("Site settings role updated.");
