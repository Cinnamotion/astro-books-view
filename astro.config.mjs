// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",

  vite: {
      plugins: [tailwindcss()],
	},

  env: {
      schema: {
          SCORE_API: envField.string({ context: "server", access: "public" }),
      },
	},

  adapter: vercel(),
});