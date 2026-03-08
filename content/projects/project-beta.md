---
title: "Palette"
date: 2024-08-15
tags: [Design, CSS, Open Source]
thumbnail: assets/projects/project-beta.png
summary: "An open-source design token generator that creates consistent color palettes from a single base color."
demo_url: "https://palette.tools"
repo_url: "https://github.com/alexmorgan/palette"
featured: true
---

## Overview

Palette is a developer tool that generates accessible, harmonious color scales from a single input color. It outputs design tokens in CSS custom properties, Tailwind config, and JSON formats — making it easy to integrate into any design system.

## Key Features

- **One color in, full palette out** — Generates 10-step color scales with proper contrast ratios
- **WCAG contrast checking** — Automatically validates AA/AAA compliance for text and background combinations
- **Multiple export formats** — CSS variables, Tailwind config, JSON tokens, Figma plugin
- **Live preview** — See your palette applied to a sample UI in real time
- **Permalink sharing** — Every palette gets a unique URL for sharing with teammates

## How It Works

The algorithm starts with the user's base color in HSL space, then generates lighter and darker variants by adjusting lightness while subtly shifting hue to maintain visual warmth. Each step is validated against WCAG 2.1 contrast requirements.

```javascript
function generateScale(baseHSL, steps = 10) {
  return Array.from({ length: steps }, (_, i) => {
    const lightness = 95 - (i * (90 / (steps - 1)));
    const hueShift = (i - steps / 2) * 0.5;
    return {
      h: baseHSL.h + hueShift,
      s: baseHSL.s,
      l: lightness
    };
  });
}
```

## Impact

Palette has been starred 1.2k+ times on GitHub and is used by several design systems including two Y Combinator startups. I maintain it actively and ship updates every few weeks.
