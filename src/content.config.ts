import { defineCollection, z } from 'astro:content';

// Define schema for wiki content
const wikiCollection = defineCollection({
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