# Open Source Website Template

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

If you are interested in hydrological models and agentic AI, you can visit my repository [agentic-swmm-workflow](https://github.com/Zhonghao1995/agentic-swmm-workflow) and read my related paper [here](https://eartharxiv.org/repository/view/12219/).

This repository contains the source code for the Agentic SWMM Workflow project website, as well as a reusable AI Skill to help others generate their own academic or open-source websites.

**Live Website:** [https://aiswmm.com](https://aiswmm.com)

## Website Previews
![Preview 1](assets/preview1.png)
![Preview 2](assets/preview2.png)

## The Story Behind This Project
This template originated from my personal academic homepage, zhonghaoz.ca. When I needed a professional project documentation website for my new open-source project, Agentic SWMM Workflow, I used Gemini 3.1 Pro (High) to extract, generalize, and rebuild the core layout into a reusable template in just 20 minutes.

To help other researchers and developers save time, I am fully open-sourcing this template under the MIT License. 

## Reusable AI Skill (Project Website Builder)
The `project-website-builder` folder contains an AI Skill that allows LLMs to automatically generate a custom website for you based on this layout.

To use the skill:
1. Download the `project-website-builder` folder.
2. Upload or provide this folder to Gemini 3 (or Claude) as a reference.
3. The AI will read the `SKILL.md` instructions and use the `assets/template/` files to instantly generate your personalized 6-page responsive website.

## Directory Structure
- `index.html`, `vision.html`, `styles.css`, etc. - The live Agentic SWMM website source code.
- `project-website-builder/` - The generic AI Skill and template folder for generating new websites.

## License
This project is licensed under the MIT License. You are free to use it for any purpose, including commercial projects.
