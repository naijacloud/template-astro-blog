---
title: Why a static blog is fast
description: Every page is built once, ahead of time, and served as a file.
date: 2026-09-24
tags: [performance, astro]
---

Astro renders every page to HTML at build time. There is no server code running when someone reads a post, so there is nothing to slow down and nothing to patch.

- Pages are plain HTML and CSS
- No JavaScript is shipped unless a component asks for it
- The whole site is a folder you can serve from anywhere
