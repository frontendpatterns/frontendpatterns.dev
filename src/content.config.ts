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
			title: z.string(),
			description: z.string(),
			tags: z.string().optional(),
			added: z.date(),
			difficulty: z.enum(["Beginner", "Intermediate", "Advanced"]).optional(),
			framework: z.array(z.enum(["React", "Vue", "Svelte"])).optional(),
			metaDescription: z.string().optional(),
			draft: z.boolean().optional(),
		}),
});

const guides = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/guides" }),
	markdown: markdownOptions,
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			tags: z.string().optional(),
			publishedAt: z.date(),
			relatedPatterns: z.array(z.string()).optional(),
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
			title: z.string(),
			description: z.string().optional(),
			draft: z.boolean().optional(),
		}),
});

export const collections = { patterns, guides, categories };
