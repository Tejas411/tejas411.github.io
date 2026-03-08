---
title: "FormKit"
date: 2024-02-10
tags: [React, TypeScript, Open Source]
thumbnail: assets/projects/project-delta.png
summary: "A headless React form library with built-in validation, accessibility, and zero styling opinions."
demo_url: "https://formkit-react.dev"
repo_url: "https://github.com/alexmorgan/formkit-react"
featured: false
---

## Overview

FormKit is a headless React library for building accessible, validated forms without fighting against opinionated CSS. It provides the logic — validation, state management, error handling, and ARIA attributes — while you bring your own design.

## Why I Built This

Most form libraries either impose their own styling or require verbose configuration for basic validation. I wanted something that felt as simple as native HTML forms but handled the hard parts (async validation, dependent fields, accessible error announcements) automatically.

## Key Features

- **Zero CSS included** — Fully headless, works with any styling approach
- **Schema-driven validation** — Define rules declaratively, supports async validators
- **Accessible by default** — Proper ARIA attributes, live error regions, focus management
- **TypeScript-first** — Full type inference for form values and validation rules
- **Tiny bundle** — Under 4KB gzipped, no dependencies

## Example

```tsx
import { useForm, Field } from '@alexmorgan/formkit';

function SignupForm() {
  const form = useForm({
    onSubmit: async (values) => {
      await api.signup(values);
    }
  });

  return (
    <form {...form.formProps}>
      <Field name="email" validate={[required(), email()]} />
      <Field name="password" validate={[required(), minLength(8)]} />
      <button type="submit">Sign Up</button>
    </form>
  );
}
```

## Status

FormKit is currently in beta (v0.9). I'm gathering feedback from early adopters before a 1.0 release. Contributions welcome!
