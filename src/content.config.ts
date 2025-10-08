import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const patterns = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content" }),
	schema: () =>
		z.object({
			id: z.string(),
      title: z.string(),
		}),
});

export const collections = { patterns };
