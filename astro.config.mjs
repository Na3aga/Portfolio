// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://na3aga.com",
  // Static output: deploys to Cloudflare Pages with no adapter.
  output: "static",
  integrations: [mdx(), sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
