---
name: project-website-builder
description: Guide for generating a multi-page professional website for academic or open-source software projects. Use this skill when a user asks to "build a project website", "generate an academic website", or "create a project documentation site". It uses a generic 5-page template (Home, Vision, Features, Validation, Download).
---

# Project Website Builder

This skill provides a standardized, responsive, multi-page website template perfectly suited for open-source and academic software projects.

## Included Pages
1. **Home**: Hero section, key metrics, and call-to-actions.
2. **Vision**: Explaining the core pain points and the project's vision.
3. **Features**: Highlighting the main capabilities.
4. **Validation**: Benchmarks, case studies, or audit trails.
5. **Download**: Installation guides, Docker commands, and code repository links.
6. **Contact**: Author info, collaboration invites, and citations.

## Workflow

When the user triggers this skill, follow these exact steps:

### Step 1: Collect Configuration Parameters
Ask the user for the following required parameters (or infer from context if they already provided a link to their GitHub/Project):
- `PROJECT_NAME`: Full name of the project.
- `PROJECT_SHORT_NAME`: Short name (used in navbar).
- `AUTHORS_COPYRIGHT`: E.g., "John Doe & Jane Smith 2026".
- `AUTHOR_NAME`: Primary author.
- `COAUTHOR_NAME`: Secondary author.
- `LOGO_URL`: Direct link to the project logo (e.g., raw GitHub image).
- `GITHUB_URL`: Link to the GitHub repo.
- `PAPER_URL`: Link to the preprint/publication (if applicable).
- `FOOTER_DESCRIPTION`: Short 1-sentence description for the footer.

### Step 2: Create `config.json`
Generate a `config.json` file in the user's workspace with the collected parameters.

Example `config.json`:
```json
{
    "PROJECT_NAME": "My Awesome Library",
    "PROJECT_SHORT_NAME": "AwesomeLib",
    "AUTHORS_COPYRIGHT": "Jane Smith 2026",
    "AUTHOR_NAME": "Jane Smith",
    "COAUTHOR_NAME": "John Doe",
    "LOGO_URL": "https://example.com/logo.png",
    "GITHUB_URL": "https://github.com/janesmith/awesomelib",
    "PAPER_URL": "https://arxiv.org/abs/xxxx",
    "FOOTER_DESCRIPTION": "A fast, scalable library for data science."
}
```

### Step 3: Execute the Generation Script
Run the `generate_site.py` script provided by this skill to apply the template.
Use the `run_command` tool to execute:
```bash
python /path/to/skill/scripts/generate_site.py --config config.json --output ./my_new_website
```
*(Make sure to use the absolute path to `scripts/generate_site.py` inside the skill's directory)*

### Step 4: Verify and Present
Inform the user that the website has been successfully generated in the target directory. You can optionally start a local Python HTTP server (`python -m http.server 8000`) for them to preview the site.
