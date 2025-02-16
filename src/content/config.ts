import { defineCollection, z } from "astro:content";

const books = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z.string(),
		author: z.string(),
		description: z.string(),
		readtime: z.string(),
		img: z.string(),
		buy: z.object({
			usa: z.string().url(),
			spain: z.string().url(),
			mexico: z.string().url(),
		}),
		isbn: z.string(),
		genre: z.string(),
	}),
});

export const collections = { books };
