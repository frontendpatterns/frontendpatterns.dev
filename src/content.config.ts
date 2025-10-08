import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const patterns = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content" }),
	schema: () =>
		z.object({
			id: z.number(),
      title: z.string(),
			type: z.string().optional()
		}),
});

export const collections = { patterns };
