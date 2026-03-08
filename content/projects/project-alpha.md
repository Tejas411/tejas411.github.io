---
title: "Taskflow"
date: 2024-11-01
tags: [React, TypeScript, API]
thumbnail: assets/projects/project-alpha.png
summary: "A minimal project management app with drag-and-drop boards, real-time updates, and keyboard shortcuts."
demo_url: "https://taskflow-demo.vercel.app"
repo_url: "https://github.com/alexmorgan/taskflow"
featured: true
---

## Overview

Taskflow is a lightweight project management tool designed for small teams who want the power of Trello without the bloat. It features real-time collaboration, keyboard-first navigation, and a clean interface built with React and TypeScript.

## Key Features

- **Drag-and-drop Kanban boards** — Powered by `@dnd-kit`, with smooth animations and accessible keyboard controls
- **Real-time sync** — Changes propagate instantly across clients via WebSocket connections
- **Keyboard shortcuts** — Navigate, create, and move cards without touching the mouse
- **Dark mode** — Automatic detection with manual toggle override
- **API-first architecture** — RESTful backend with full OpenAPI documentation

## Technical Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, TypeScript, Zustand |
| Styling | CSS Modules, custom design tokens |
| Backend | Node.js, Express, PostgreSQL |
| Real-time | WebSockets via Socket.io |
| Deployment | Vercel (frontend), Railway (backend) |

## What I Learned

Building Taskflow taught me a lot about optimistic UI updates — showing changes immediately while syncing with the server in the background. Getting this right without creating inconsistent states was the biggest challenge, and it pushed me to design more robust state management patterns.
