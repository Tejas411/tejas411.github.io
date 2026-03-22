---
title: "Local RAG - Chat with your documents"
date: 2026-03-22
tags: [AI, RAG, Langchain]
thumbnail: assets/projects/doc-chat.png
summary: "Talk to your documents locally and privately."
demo_url: "https://github.com/Tejas411/doc-chat-rag"
repo_url: "https://github.com/Tejas411/doc-chat-rag"
featured: true
---

I wanted to be able to *talk* to my documents. Not Ctrl+F. Not skimming. Actually ask questions and get answers — like "what does section 4 say about liability?" or "summarize the key findings." The result is **DocChat**, a local app that lets you upload a PDF and have a real conversation with it.

This is a local replica of legendary product NotebookLM by Google. I wanted to learn how it is built and how RAG works. Best way to learn the internals is to build one yourself.

---

## What Even Is RAG?

Before getting into the build, let's quickly demystify the acronym.

**RAG = Retrieval-Augmented Generation.** It's a pattern where instead of asking an AI to answer from memory (which may lead to hallucinations), you:

1. **Retrieve** the relevant parts of your document
2. **Augment** the AI's prompt with those parts as context
3. **Generate** an answer grounded in the actual source material

Think of it like giving an open-book exam instead of a closed-book one. The AI doesn't need to memorize your PDF — it just needs to read the right page at the right time.

---

## The Stack at a Glance

| Layer | Tool | Why |
|---|---|---|
| UI | Streamlit | Fast to build, zero frontend hassle |
| Embeddings | Google Gemini | High quality, free tier available |
| Vector Store | FAISS (local) | No cloud, no cost, runs on your machine |
| AI Model | Gemini 2.5 Flash | Fast, smart, great for document Q&A |
| Orchestration | LangChain | Composable pipeline, modern approach |

---

## Getting Started

All you need is Python installed on your machine and a free Google Gemini API key, which you can grab at [aistudio.google.com](https://aistudio.google.com). Once those are in place, you install a handful of open-source libraries, drop your API key into a env config file, and launch the app. It opens right in your browser — no complicated setup, no accounts to create beyond the API key.

From there, upload a PDF from the sidebar, wait a few seconds for it to process, and start chatting.

![DocChat UI — upload a PDF on the left, chat with it on the right](https://raw.githubusercontent.com/Tejas411/tejas411.github.io/refs/heads/main/assets/projects/doc-chat.png)

---

## How the Pieces Fit Together

### Step 1: Ingestion — Turning a PDF Into Something Searchable

When you upload a PDF, the app runs it through a quick pipeline before you can start asking questions:

- The document is **read and broken into small chunks** — think of it as cutting a book into index cards, each one holding a paragraph or two
- Each chunk is then **converted into a set of numbers** (called an embedding) that mathematically represents what that chunk *means*
- All those number-sets are **stored locally** on your machine in a searchable index

This local index is the magic ingredient. It means the app doesn't re-read the entire PDF every time you ask a question — it just searches the index, which is near-instant.

### Step 2: Retrieval — Finding the Right Context

When you ask a question, your words go through the same conversion process — turned into numbers that represent their meaning. The app then searches the index for the chunks of your document that are *most similar in meaning* to what you asked.

This is surprisingly powerful. If you ask "what are the payment terms?", it will find the relevant paragraphs even if they use words like "invoice schedule" or "billing cycle" — because those phrases *mean* the same thing, even if they don't look the same.

### Step 3: Generation — Getting the Answer

The relevant document chunks, along with your question, are handed off to Google's Gemini AI model. Gemini reads both and writes a coherent answer. The app also shows you the exact source passages it pulled from, so you can double-check the answer for yourself rather than just trusting it blindly.

---

## Key Design Decisions

### Why Keep Everything Local?

There are managed cloud services that handle the "searchable index" part of this app. They're powerful, but they mean your documents leave your machine and go to a third-party server — plus they often cost money at scale.

For a personal document chatbot, keeping everything local is clearly the better call. Nothing is uploaded anywhere. There are no ongoing costs. It works offline. The trade-off is that it doesn't scale to thousands of users, but that was never the goal.

### Why Use a Modern AI Pipeline?

The AI tooling space moves fast, and older approaches to building RAG apps were rigid and hard to customize. DocChat uses a more modern way of wiring AI components together — one where each step (retrieve → format → generate → output) is explicit and easy to swap out or debug.

The analogy: older approaches were like a pre-packaged meal kit where you had to take the whole thing. The newer approach is more like cooking from scratch — more control, more transparency, and much easier to modify if something isn't working.

---

## Lessons Learned

**How you slice the document matters.** The app breaks PDFs into chunks of roughly 2,000 characters. Too large and the AI gets too much irrelevant context. Too small and answers lose coherence. Finding the right chunk size is one of those things you tune based on the type of document you're working with.

**Keep your AI tools from the same family.** DocChat uses Google's Gemini for both the "meaning conversion" step and the "answer generation" step. Mixing tools from different providers can introduce subtle inconsistencies. Consistency here pays off in answer quality.

**Showing your sources builds trust.** The decision to display the exact document passages used to generate each answer was one of the best choices in the app. It lets you catch mistakes immediately and builds real confidence when the answers are correct.

**Your index is tied to your settings.** If you change how the document is chunked or which AI model handles the embedding step, your old index becomes incompatible and you'd need to re-process your PDFs. Worth knowing upfront before you process something large.

---

## Three Ways to Use It

The app was built with a bit of flexibility in mind:

- **The browser UI** — The main experience. Upload a PDF, chat with it, see your sources. Most people will only ever need this.
- **Command-line ingestion** — For anyone who prefers working in a terminal or wants to process documents in bulk without opening the UI.
- **Command-line query mode** — Useful for developers who want to test the AI pipeline directly, without the graphical interface getting in the way.

---

## What Could Come Next

A few natural extensions if you wanted to take this further:

- **Chat across multiple documents** — Right now it's one PDF at a time. Indexing several documents together and querying across all of them would make this far more powerful.
- **Conversation memory** — Each question is currently treated independently. Adding memory so the AI can reference earlier parts of your conversation would allow real back-and-forth dialogue.
- **Fully offline mode** — Replace Gemini with an open-source AI model that runs entirely on your own machine, no internet connection required.

---

DocChat is a good reminder of how far AI tooling has come. A weekend project can now produce something genuinely useful — not just a demo. The hardest part isn't wiring the pieces together. It's understanding *why* each piece exists, so you can fix things when they break and build on top of them when you're ready for more.

Hope this was useful. Happy building. 🛠️
