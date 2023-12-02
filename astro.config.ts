import { defineConfig } from "astro/config";
import type { AstroUserConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const config: AstroUserConfig = defineConfig({
	site: "http://www.example.com",
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
	],
});

// https://astro.build/config
export default defineConfig(config);
