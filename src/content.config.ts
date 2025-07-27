import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'

// Define schema for wiki content
const wikiCollection = defineCollection({
  loader: glob({pattern: "**/*.mdx", base: "src/content/"}),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    hidden: z.boolean().optional(),

  }),
});

// Export collections object for use in Astro
export const collections = {
  'wiki': wikiCollection,
};