import os
import json
import shutil
import argparse

def main():
    parser = argparse.ArgumentParser(description="Generate Project Website from Template")
    parser.add_argument("--config", default="config.json", help="Path to config.json")
    parser.add_argument("--output", default="output_site", help="Output directory")
    args = parser.parse_args()

    # Determine paths
    script_dir = os.path.dirname(os.path.abspath(__file__))
    skill_dir = os.path.dirname(script_dir)
    template_dir = os.path.join(skill_dir, "assets", "template")

    if not os.path.exists(args.config):
        print(f"Error: Config file '{args.config}' not found.")
        return

    with open(args.config, "r", encoding="utf-8") as f:
        config = json.load(f)

    # Clean and create output dir
    if os.path.exists(args.output):
        shutil.rmtree(args.output)
    shutil.copytree(template_dir, args.output)

    # Process HTML files
    for root, _, files in os.walk(args.output):
        for file in files:
            if file.endswith(".html"):
                filepath = os.path.join(root, file)
                with open(filepath, "r", encoding="utf-8") as f:
                    content = f.read()

                # Replace placeholders
                for key, value in config.items():
                    placeholder = f"{{{{{key}}}}}"
                    content = content.replace(placeholder, str(value))

                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(content)

    print(f"Successfully generated website in '{args.output}'!")

if __name__ == "__main__":
    main()
