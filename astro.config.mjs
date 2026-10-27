// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://squirescomic.com',
  output: 'static',                                     // every page is a file unless it opts out
  build: { format: 'file' },                            // /comic/chapter-1-page-2 with no trailing-slash redirect
  adapter: cloudflare({ imageService: 'passthrough' }), // Sanity's CDN resizes images
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  redirects: {
    '/comic': '/',                                      // the old router treated /comic as home
    '/comic/chapter-1-page-0': '/comic/chapter-1',      // duplicate covers, see the Content model tab
    '/comic/chapter-2-page-0': '/comic/chapter-2',
  },
});