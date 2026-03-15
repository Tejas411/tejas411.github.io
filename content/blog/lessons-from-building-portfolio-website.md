---
title: "Lessons from building Portfolio Website"
date: 2026-03-15
tags: [Portfolio, Open Source, Git]
summary: "How I Built My Portfolio Website from Scratch."
reading_time: "3 min"
---


*A product manager's approach to owning your corner of the internet*

---

## Why I Built It Myself

As a Product Manager, having a portfolio online feels almost mandatory. But every time I looked at existing themes and templates, something felt off.

I started by exploring static site generators — **Hugo** and **Jekyll** both have large theme libraries. But the themes I found fell into one of two camps: either very designer-heavy with bold visuals and animations that felt like a creative's portfolio, or very academician-oriented — dense, text-first, the kind of thing that works great for researchers but not for a PM trying to showcase product work.

I wanted something in the middle. Clean, professional, easy to navigate — but not sterile. Since nothing quite fit, I decided to build it from scratch.

---

## Starting with a Prompt

The first step wasn't writing code — it was writing a prompt.

I sat down and thought through what I actually needed: the pages, the layout, the tone, the structure. Then I crafted a detailed prompt in **Claude** and refined it until the output matched my vision. Once I had a prompt I was happy with, I used **Antigravity** to generate the site — which lets me leverage Claude's premium models for the coding work.

What came out was a clean, functional base that I could build on.

---

## The Structure I Landed On

The site is intentionally minimal:

- **Home** — a quick introduction: who I am, what I do, and links to my work
- **About** — more context on my background across Info Edge, Zomato, and Ola
- **Projects** — work I'm most proud of, from AI-powered consumer products to multi-agent systems
- **Blog** — where posts like this one live, written in markdown
- **Resume** — a live view plus a downloadable PDF

The whole thing is hosted on **GitHub Pages**. Updates are just a git push away.

---

## Why Markdown for Everything

This was a deliberate choice. Markdown keeps content separate from presentation. When I want to add a new blog post or update a project, I don't touch any HTML or CSS — I just edit a `.md` file and push.

For a PM who's context-switching constantly, this matters. The lower the friction to update, the more likely the portfolio actually stays current.

---

## Challenges Along the Way

Building with AI coding agents was fast — but not frictionless. Here's where I hit walls:

**1. Navbar duplicated across every page**

The initial generated code had the top and bottom navbar hardcoded into each individual HTML file. Any change to the nav meant updating every page. I had to ask the coding agent to refactor it into a shared component — a small but important structural fix that made future changes much cleaner.

**2. The .html URL problem (and how it went sideways)**

The site URLs had `.html` extensions — `tejas411.github.io/about.html` instead of `tejas411.github.io/about`. I wanted clean URLs. I asked the coding agent to remove them, but the fix it applied completely restructured the file system in a way that broke other things. I had to revert the changes entirely and find a different approach — eventually solving it through a small **Python script** that handled the URL rewriting without touching the folder structure.

**3. Running out of Claude tokens mid-build**

This one caught me off guard. Partway through development, I hit my Claude token limit. The work I continued with other models after that was noticeably less consistent — the output didn't blend as smoothly with what Claude had already built. It was a good reminder that model continuity matters more than I'd assumed when working on a coherent codebase.

---

## What I Learned

A few things this mini-project made clear:

- **Prompting is a first-class skill.** The quality of what you get out is directly tied to how clearly you define what you want going in. Writing and refining the prompt was as valuable as anything that came after.
- **AI agents are fast but need guidance.** They'll solve the problem you describe — not necessarily the problem you meant. Being precise about constraints (don't change the file structure, don't touch X) saves a lot of reverting.
- **Token limits are a real constraint to plan around.** Switching models mid-project has a cost. Next time I'd think more carefully about scope before starting a session.
- **Markdown-first was the right call.** The friction to update is low enough that I actually do it.

---

## What's Still on the List

A few things I'm yet to figure out:

- Building **reusable skills** for routine tasks — adding a blog post, adding a project — so I don't have to re-explain the structure each time
- Moving the site to a **custom domain**
- Getting better at **optimizing token usage** when working with coding agents on longer sessions

---

*I'm Tejas — Senior PM at Info Edge, ex-Zomato and Ola, building AI-powered products at scale. More on the [about page](https://tejas411.github.io/about).*

