import { defineConfig } from "astro/config";
import type { AstroUserConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import images from "./src/assets/utils/markdown-plugins/images";

const config: AstroUserConfig = defineConfig({
	site: "http://www.example.com",
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
	],
	markdown: {
		remarkPlugins: [images],
	},
});

// https://astro.build/config
export default defineConfig(config);
