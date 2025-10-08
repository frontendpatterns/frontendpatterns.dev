import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const patterns = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/patterns" }),
	schema: () =>
		z.object({
			id: z.number(),
      title: z.string(),
			category: z.string().optional(),
			added: z.date(),
			draft: z.boolean().optional(),
		}),
});

const categories = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/categories" }),
	schema: () =>
		z.object({
			id: z.number(),
      title: z.string(),
			description: z.string().optional(),
			draft: z.boolean().optional(),
		}),
});

export const collections = { patterns, categories };
