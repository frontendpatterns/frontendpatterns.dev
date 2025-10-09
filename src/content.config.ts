import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import remarkDirective from "remark-directive";
import remarkDirectiveContainers from "./plugins/remark-directives.js";

const markdownOptions = {
	remarkPlugins: [remarkDirective, remarkDirectiveContainers],
};

const patterns = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/patterns" }),
	markdown: markdownOptions,
	schema: () =>
		z.object({
			id: z.number(),
      title: z.string(),
			category: z.string().optional(),
			added: z.date(),
			difficulty: z.enum(["Beginner", "Intermediate", "Advanced"]).optional(),
			framework: z.array(z.enum(["React", "Vue", "Svelte"])).optional(),
			metaDescription: z.string().optional(),
			draft: z.boolean().optional(),
		}),
});

const categories = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/categories" }),
	markdown: markdownOptions,
	schema: () =>
		z.object({
			id: z.number(),
      title: z.string(),
			description: z.string().optional(),
			draft: z.boolean().optional(),
		}),
});

export const collections = { patterns, categories };
