# Astro blog

A Markdown blog with tag pages, an RSS feed and a sitemap, built by Astro into static files.

[![Deploy on Naijacloud](https://img.shields.io/badge/Deploy%20on-Naijacloud-008751)](https://naijacloud.com/new?template=astro-blog&ref=template-astro-blog)

## Deploy

Click **Deploy** above, or open <https://naijacloud.com/new?template=astro-blog&ref=template-astro-blog>. Naijacloud builds it from this public repo and gives you a live HTTPS address. No GitHub connection needed; you can switch the service to your own fork later.

## What's inside

- Astro 5, with posts as Markdown files in `src/content/posts`
- Tag pages, an RSS feed at `/rss.xml` and a sitemap at `/sitemap-index.xml`
- Builds to `dist/`, one HTML file per page; Naijacloud detects Astro and serves `dist/` with nginx

## Making it yours

- Set `site` in `astro.config.mjs` to your blog's address; the feed and sitemap use it for absolute links.
- Add a Markdown file to `src/content/posts` with a `title`, `description`, `date` and `tags`, commit it and redeploy.

## Run it locally

```sh
git clone https://github.com/naijacloud/template-astro-blog
cd template-astro-blog
npm install
npm run dev
```

## License

MIT
