# Astro blog

A Markdown blog with tag pages, an RSS feed and a sitemap, built by Astro into static files.

[![Deploy on Naijacloud](https://img.shields.io/badge/Deploy%20on-Naijacloud-008751)](https://naijacloud.com/new?template=astro-blog&ref=template-astro-blog)

## Deploy

Click **Deploy** above, or open <https://naijacloud.com/new?template=astro-blog&ref=template-astro-blog>. Naijacloud builds it from this public repo and gives you a live HTTPS address. No GitHub connection needed; you can switch the service to your own fork later.

## What's inside

- Astro 5, with posts as Markdown files in `src/content/posts`
- Tag pages, an RSS feed at `/rss.xml` and a sitemap at `/sitemap-index.xml`
- Builds to `dist/`; Naijacloud detects Astro and serves `dist/` with nginx

## Writing a post

Add a Markdown file to `src/content/posts` with a `title`, `description`, `date` and `tags`, commit it and redeploy.

## Environment variables

| Name | What it's for | Default |
| --- | --- | --- |
| `SITE_URL` | The address the blog is served from, used in the RSS feed, sitemap and canonical links | `https://example.naijacloud.app` |

## Run it locally

```sh
git clone https://github.com/naijacloud/template-astro-blog
cd template-astro-blog
npm install
npm run dev
```

## License

MIT
