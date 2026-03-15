---
title: "Newsletter Generator — CrewAI Multi-Agent System"
date: 2026-03-15
tags: [AI Agents, Crew-AI, Tools]
thumbnail: assets/projects/newsletter-crew-thumbnail.png
summary: "A newsletter agent using crew AI"
demo_url: "https://github.com/Tejas411/newsletter-crew"
repo_url: "https://github.com/Tejas411/newsletter-crew"
featured: true
---

## Overview

An automated newsletter generation system built with **CrewAI**, designed to simulate a real-world research workflow. Given a set of topics, the system autonomously researches, analyzes, and synthesizes a professionally structured intelligence report — with no human intervention between steps.

This project explores the practical potential of **multi-agent AI orchestration**, where specialized agents hand off work to one another much like a team of human analysts would.

## How It Works

The pipeline is powered by three specialized AI agents operating in sequence:

| Agent | Role |
|---|---|
| **Senior Research Analyst** | Searches the web for the latest developments on given topics (defaulting to AI-related subjects) |
| **Strategic Intelligence Analyst** | Processes raw research to surface key insights, risks, opportunities, and cross-topic connections |
| **Intelligence Report Writer** | Synthesizes everything into a clean, professionally structured Markdown report |

Each agent is given a focused responsibility, keeping outputs modular and the overall system easy to extend or debug.

The final report is saved as a timestamped Markdown file (e.g., `catchup_March 15, 2026.md`).

---

## Project Structure

```
├── main.py       # Entry point — initializes and runs the Crew
├── agents.py     # Agent definitions and configurations
├── tasks.py      # Task definitions assigned to each agent
└── .env          # API keys (not committed to version control)
```

---

## What I Learned

- **Multi-agent orchestration with CrewAI** — How to design agents with distinct roles and chain them together so each agent's output becomes the next one's input, reducing hallucination and improving output quality.

- **Prompt engineering for specialized roles** — Writing effective system prompts that constrain each agent to its specific job (researcher vs. analyst vs. writer) without being too rigid.

- **Tool use in agentic systems** — Integrating web search tools into agents and understanding when and how an agent decides to invoke them.

- **Managing LLM context across agents** — Passing structured outputs between agents while keeping context windows manageable and responses focused.

- **Environment & secret management** — Properly handling API keys with `.env` files and keeping credentials out of version control.

---

## Potential Improvements

- **Configurable topic input** — Add a CLI interface or simple web UI to let users specify topics at runtime without editing source code.

- **Source citation tracking** — Have the Research Analyst log URLs and references so the final report includes verifiable citations.

- **Report formats** — Support exporting to PDF or HTML in addition to Markdown, making reports easier to share non-technically.

- **Parallel research agents** — Run multiple Research Analysts concurrently across different topics to reduce total generation time.

- **Feedback loop** — Add a reviewer agent that critiques the draft report and sends it back for revision before finalizing.

- **Scheduled runs** — Wrap the pipeline in a cron job or task scheduler to auto-generate daily/weekly briefings.
