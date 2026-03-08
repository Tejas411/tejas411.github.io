---
title: "Building Accessible UIs: A Practical Guide"
date: 2024-07-08
tags: [Accessibility, Web Dev, Design]
summary: "Accessibility isn't a feature — it's a baseline. Here's how to build inclusive interfaces without slowing down."
reading_time: "8 min"
---

Accessibility (a11y) is often treated as an afterthought — something you "add" before launch. But the best time to think about accessibility is at the beginning, when architectural decisions are still cheap to change.

## The Business Case

Before diving into techniques, let's be clear: accessibility isn't just the right thing to do. It's also smart business.

- ~15% of the world's population has some form of disability
- Accessible sites rank better (semantic HTML = better SEO)
- Many a11y improvements benefit *all* users (keyboard navigation, focus management, clear labels)
- Legal requirements are real (ADA, EAA, WCAG compliance)

## The Low-Hanging Fruit

These changes take minutes and have outsized impact:

### 1. Semantic HTML

```html
<!-- Bad -->
<div class="button" onclick="submit()">Submit</div>

<!-- Good -->
<button type="submit">Submit</button>
```

Native HTML elements come with keyboard support, focus management, and screen reader compatibility for free.

### 2. Alt Text

Every `<img>` needs an `alt` attribute. If the image is decorative, use `alt=""`. If it conveys information, describe what it shows.

### 3. Color Contrast

Text should have at least a **4.5:1** contrast ratio against its background (WCAG AA). Use tools like the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to verify.

### 4. Focus Indicators

Never remove focus outlines without providing an alternative:

```css
/* Bad */
button:focus { outline: none; }

/* Good */
button:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

## Form Accessibility

Forms are where accessibility failures hit hardest. Key rules:

- Every input needs a visible `<label>` element (not just placeholder text)
- Group related fields with `<fieldset>` and `<legend>`
- Announce errors to screen readers with `aria-live="polite"` regions
- Don't rely on color alone to indicate errors (add text + icons)

## Testing

The best a11y testing is a combination of:

1. **Automated tools** — axe DevTools, Lighthouse a11y audit
2. **Keyboard testing** — Tab through your entire page. Can you reach and activate everything?
3. **Screen reader testing** — Try NVDA (Windows) or VoiceOver (Mac) for 10 minutes

You'll be surprised how much you catch with just keyboard testing alone.

## It's a Journey

You won't get everything right on the first pass. That's okay. Accessibility is a practice, not a checkbox. Start with semantic HTML, add ARIA where needed, and test regularly. Your future users will thank you.
