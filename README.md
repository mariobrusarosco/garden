# 🪴 My Digital Garden

This is my personal digital garden, a space where I cultivate my thoughts, learnings, and explorations on various topics related to technology and software development. It's built with Next.js and MDX, allowing for a collection of interconnected and ever-evolving notes.

![image](https://github.com/mariobrusarosco/digital-garden/assets/12510938/8df86aea-2a1f-4963-9c0d-aa3226be26cb)

## ✨ Features

- **Content as Code**: Articles are written in MDX, blending Markdown with custom React components.
- **Topic & Series Organization**: Notes are organized into both broad `topics` and structured `series`.
- **Dynamic Metadata**: A custom script generates metadata from the content, making the site fast and efficient.
- **Styled with Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Content**: [MDX](https://mdxjs.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Syntax Highlighting**: [Bright](https://bright.codehike.org/)

## 🚀 Getting Started

First, install the dependencies:

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

The project is organized with a clear separation of concerns:

- `app/`: Contains all the Next.js routes and pages.
- `domains/`: Houses the core logic and content of the garden.
  - `garden-content/`: All MDX files for topics and series.
  - `garden-components/`: Reusable React components for the UI.
  - `garden-dmx-components/`: Special components used within MDX files.
  - `helper-and-utils/`: Shared utility functions.
- `scripts/`: Contains the `create-metadata.js` script that processes MDX frontmatter before the build.

## 🌱 How to Add New Content

1.  Create a new `.mdx` file inside `domains/garden-content/topics` or `domains/garden-content/series`.
2.  Add frontmatter to the top of the file (e.g., `title`, `summary`).
3.  Write your content using Markdown and custom MDX components.
4.  Run `yarn dev` to see your new note. The metadata will be updated automatically.
