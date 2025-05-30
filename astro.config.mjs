// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://krzysztoffpl.github.io',
  base: 'lab-astro-template',
  integrations: [preact()]
});