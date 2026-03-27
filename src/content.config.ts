import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

export const EntrySchema = z.object({
  title: z.string().optional(),
  date: z.date().optional(),
  description: z.string().optional(),
  cover: z.string().optional(),
  images: z.array(z.string()).optional(),
  draft: z.boolean().optional()
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects/", pattern: "**/*.{md,mdx}" }),
  schema: EntrySchema
});

export const collections = {
  projects
};
export const CollectionKeys = Object.keys(collections) as (keyof typeof collections)[];