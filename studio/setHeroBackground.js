import { getCliClient } from "sanity/cli";
import { createReadStream } from "node:fs";

const client = getCliClient({ apiVersion: "2026-05-07" });
const imagePath = "./assets/hero-emotes.jpg";

const asset = await client.assets.upload("image", createReadStream(imagePath), {
  filename: "hero-emotes.jpg",
});

await client.createIfNotExists({
  _id: "siteSettings",
  _type: "siteSettings",
  name: "Your Name",
  role: "Marketing Engineer",
});

await client
  .patch("siteSettings")
  .set({
    heroBackgroundImage: {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: asset._id,
      },
    },
  })
  .commit();

console.log(`Hero background image set to ${asset._id}`);
