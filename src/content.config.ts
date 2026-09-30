import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    /** Path under /public, e.g. "/projects/vaultswap.jpg" */
    cover: z.string().optional(),
    year: z.string(),
    role: z.string(),
    stack: z.array(z.string()),
    /** Longer description, shown in the hover panel and on mobile cards */
    highlights: z.array(z.string()).default([]),
    /** Which tile in the projects Spline scene this project sits on (Block 1–6) */
    node: z.number().int().min(1).max(6).optional(),
    repo: z.url().optional(),
    demo: z.url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
