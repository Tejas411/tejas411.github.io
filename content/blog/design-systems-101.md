---
title: "Design Systems 101: Why Every Team Needs One"
date: 2024-09-22
tags: [Design, CSS, React]
summary: "What a design system actually is, why it matters, and how to start building one without overengineering it."
reading_time: "7 min"
---

After building and maintaining a design system used by 25+ engineers, here are the lessons I wish I'd known from the start.

## What Is a Design System, Really?

A design system isn't a component library. It's not a Figma file. It's the **shared language** between designers and developers — a set of constraints that make consistent UI the path of least resistance.

It typically includes:

1. **Design tokens** — Colors, spacing, typography, shadows (as CSS variables or JSON)
2. **Components** — Reusable UI primitives (Button, Input, Card, Modal)
3. **Patterns** — Compositions of components (Form layout, Navigation, Data tables)
4. **Documentation** — Usage guidelines, dos/don'ts, accessibility notes

## Why Bother?

Without a design system, every new feature becomes a design decision. Engineers make ad-hoc choices about spacing, colors, and component structure. Over time, this creates:

- Visual inconsistency across pages
- Duplicated CSS and components
- Slower development (reinventing the wheel each sprint)
- Accessibility gaps (each implementation handles ARIA differently)

A design system eliminates these problems by making the right choice the easy choice.

## Start Small

You don't need a comprehensive system on day one. Start with:

```css
:root {
  --color-primary: #4A6FA5;
  --color-text: #111111;
  --color-text-secondary: #555555;
  --color-border: #E5E5E5;
  
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.25rem;
}
```

These 12 tokens will cover 80% of your styling decisions. Add more only when you feel the pain of not having them.

## The Hard Part: Adoption

The technical implementation is the easy part. The hard part is getting people to actually use it. My advice:

- **Make it the default** — Pre-install it in your project template
- **Document with examples** — Show, don't tell
- **Accept contributions** — A system nobody can extend is a system nobody will use
- **Audit regularly** — Scan the codebase for one-off styles that should be tokens

A design system is a product. Treat it like one.
