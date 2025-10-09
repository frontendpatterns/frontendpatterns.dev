import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import remarkDirective from 'remark-directive';
import remarkDirectiveContainers from './src/plugins/remark-directives.js';

const remarkPlugins = [remarkDirective, remarkDirectiveContainers];

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
  ],
  markdown: {
    remarkPlugins,
  },
  content: {
    markdown: {
      remarkPlugins,
    },
  },
});
