---
title: Tags, a feed and a sitemap
description: The three things every blog needs, built in.
date: 2026-09-28
tags: [astro, meta]
---

Tags come from each post's frontmatter. `/tags/` lists them with a count, and every tag has its own page.

The RSS feed lives at `/rss.xml`, and the sitemap at `/sitemap-index.xml`. Both use `SITE_URL` to build absolute links, so set it to the address you serve the blog from.
