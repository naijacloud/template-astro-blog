import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// The address the blog is served from, used by the RSS feed, the sitemap and
// canonical links. Change it to your app's address, or your custom domain.
// (It is read when the site is built, so it lives here, not in an env var.)
const site = 'https://example.naijacloud.app';

export default defineConfig({
  site,
  integrations: [sitemap()],
  // One HTML file per page (posts/hello-world.html), so the build has a single
  // index.html at its root and any static file server serves it as-is.
  build: { format: 'file' },
  trailingSlash: 'never',
});
