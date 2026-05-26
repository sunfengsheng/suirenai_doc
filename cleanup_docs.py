import os
import re

DOCS_DIR = r"D:\code\test\api_doc\docs"
BASE_URL = "https://docs.packyapi.com"

def clean_file(path):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # Remove the "# Source: ..." first line
    content = re.sub(r'^# Source: https?://[^\n]+\n\n', '', content)

    # Fix image paths: /assets/ -> https://docs.packyapi.com/assets/
    content = re.sub(r'\]\(/assets/', f']({BASE_URL}/assets/', content)

    # Fix internal doc links: /docs/xxx/yyy.html -> /xxx/yyy
    content = re.sub(r'\]\(/docs/([^)]+)\.html\)', r']/\1)', content)
    content = re.sub(r'\(https://docs\.packyapi\.com/docs/([^)]+)\.html\)', r'(/\1)', content)

    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

count = 0
for root, dirs, files in os.walk(DOCS_DIR):
    for fname in files:
        if fname.endswith(".md"):
            clean_file(os.path.join(root, fname))
            count += 1

print(f"Cleaned {count} files.")
