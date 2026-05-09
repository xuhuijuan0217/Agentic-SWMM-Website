# Project Website Builder 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A modern, responsive, and highly customizable website template and automated builder for open-source projects, academic research, personal portfolios, and commercial landing pages.

## 📖 The Story Behind This Project

This template originated from my personal academic homepage, [zhonghaoz.ca](https://zhonghaoz.ca). When I needed a professional project documentation website for my new open-source project, **Agentic SWMM Workflow**, I used **Gemini 3.1 Pro (High)** to extract, generalize, and rebuild the core layout into this reusable template. 

The entire migration and template extraction took only **20 minutes**!

To help other researchers, developers, and creators save time, I am fully open-sourcing this template and the automated builder script under the **MIT License**. You are free to use, modify, and share this for both personal and commercial purposes.

*(Note: If you need a domain name, I highly recommend using **Namecheap** for quick and affordable DNS management.)*

## ✨ Key Features

- **Core CSS Ready:** A polished, modern, and production-ready `styles.css` with a beautiful light theme, responsive grid layouts, and smooth animations.
- **6-Page Architecture:** Comes out of the box with the perfect structure for software/academic projects:
  - `Home` (Hero, badges, CTA)
  - `Vision` (Core pain points and narrative)
  - `Features` (Capabilities and workflows)
  - `Validation` (Benchmarks and audits)
  - `Download` (Installation and releases)
  - `Contact` (Citations and collaboration)
- **SEO & Social Ready:** Pre-configured Open Graph (OG) meta tags so your links look amazing on LinkedIn, Twitter, and other social media platforms.
- **Automated Generation:** Includes a Python script to instantly inject your project details into the templates.
- **AI Skill Integrated:** Includes a `SKILL.md` instruction file so AI Agents (like Claude or Gemini) can automatically read your repo and build your website for you.

## 📂 Directory Structure

```text
project-website-builder/
├── SKILL.md                  # AI prompt instructions for automated generation
├── README.md                 # This file
├── scripts/
│   └── generate_site.py      # Python script to compile the website
└── assets/
    └── template/             # The raw HTML/CSS templates with {{PLACEHOLDERS}}
        ├── index.html
        ├── vision.html
        ├── features.html
        ├── validation.html
        ├── download.html
        ├── contact.html
        ├── styles.css
        └── assets/           # Images, fonts, and icons
```

## 🚀 Quick Start

You can either manually edit the HTML files in `assets/template/` or use the included Python script to automatically generate your site.

### 1. Create a `config.json`
Create a JSON file in your workspace with your project's details:

```json
{
    "PROJECT_NAME": "Your Awesome Project",
    "PROJECT_SHORT_NAME": "AwesomeProj",
    "AUTHORS_COPYRIGHT": "John Doe 2026",
    "AUTHOR_NAME": "John Doe",
    "COAUTHOR_NAME": "Jane Smith",
    "LOGO_URL": "https://example.com/logo.png",
    "GITHUB_URL": "https://github.com/yourname/awesome-project",
    "PAPER_URL": "https://arxiv.org/abs/xxxx",
    "FOOTER_DESCRIPTION": "A fast, scalable library for the future.",
    "META_DESCRIPTION": "AwesomeProj is an open-source tool for doing amazing things."
}
```

### 2. Run the Generator
Run the Python script, pointing it to your config file and specifying an output directory.

```bash
python scripts/generate_site.py --config config.json --output ./my_new_website
```

### 3. Deploy
Your completely customized website is now ready in the `./my_new_website` folder! You can push this folder directly to **GitHub Pages**, Vercel, Netlify, or your own server.

## 🤝 Contributing
Welcome to test, use, and improve this template! If you find a bug or have a suggestion for a new feature (like a Dark Mode toggle or new page templates), feel free to open an issue or submit a pull request.

## 📄 License
This project is licensed under the **MIT License**. You are free to use it for any purpose, including commercial projects.
