import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// SITE_URL is the address the blog is served from. It is used for the RSS feed,
// the sitemap and canonical links. Set it to your custom domain once you add one.
const site = process.env.SITE_URL || 'https://example.naijacloud.app';

export default defineConfig({
  site,
  integrations: [sitemap()],
  // One HTML file per page (posts/hello-world.html), so the build has a single
  // index.html at its root and any static file server serves it as-is.
  build: { format: 'file' },
  trailingSlash: 'never',
});
