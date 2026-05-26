import requests
import html2text
from bs4 import BeautifulSoup
import os
import time

BASE_URL = "https://docs.packyapi.com"
OUTPUT_DIR = r"D:\code\test\api_doc\docs"

PAGES = [
    ("/docs/register/1-register.html", "register/1-register.md"),
    ("/docs/register/2-login.html", "register/2-login.md"),
    ("/docs/register/3-quota.html", "register/3-quota.md"),
    ("/docs/register/4-token.html", "register/4-token.md"),
    ("/docs/register/5-env.html", "register/5-env.md"),
    ("/docs/register/6-cli.html", "register/6-cli.md"),
    ("/docs/token/1-intro.html", "token/1-intro.md"),
    ("/docs/token/2-group.html", "token/2-group.md"),
    ("/docs/ccswitch/1-common.html", "ccswitch/1-common.md"),
    ("/docs/ccswitch/2-claude.html", "ccswitch/2-claude.md"),
    ("/docs/ccswitch/3-codex.html", "ccswitch/3-codex.md"),
    ("/docs/ccswitch/4-gemini.html", "ccswitch/4-gemini.md"),
    ("/docs/ccswitch/5-ccs_cli.html", "ccswitch/5-ccs_cli.md"),
    ("/docs/cli/1-env.html", "cli/1-env.md"),
    ("/docs/cli/2-claude.html", "cli/2-claude.md"),
    ("/docs/cli/3-codex.html", "cli/3-codex.md"),
    ("/docs/cli/4-gemini.html", "cli/4-gemini.md"),
    ("/docs/cli/5-cache-fix.html", "cli/5-cache-fix.md"),
    ("/docs/paint/Banana.html", "paint/Banana.md"),
    ("/docs/paint/GPTImage.html", "paint/GPTImage.md"),
    ("/docs/advanced/ClaudeDesktop.html", "advanced/ClaudeDesktop.md"),
    ("/docs/advanced/AionUI.html", "advanced/AionUI.md"),
    ("/docs/advanced/OpenCode.html", "advanced/OpenCode.md"),
    ("/docs/advanced/OpenClaw.html", "advanced/OpenClaw.md"),
    ("/docs/advanced/DeepSeekClaudeCode.html", "advanced/DeepSeekClaudeCode.md"),
    ("/docs/advanced/ChatGPTClaudeCode.html", "advanced/ChatGPTClaudeCode.md"),
    ("/docs/faq/CC.html", "faq/CC.md"),
    ("/docs/faq/Codex.html", "faq/Codex.md"),
    ("/docs/faq/Gemini.html", "faq/Gemini.md"),
    ("/docs/tos/aup.html", "tos/aup.md"),
    ("/docs/tos/TOS.html", "tos/TOS.md"),
    ("/docs/tos/service-specific-terms.html", "tos/service-specific-terms.md"),
    ("/docs/tos/use.html", "tos/use.md"),
]

h = html2text.HTML2Text()
h.ignore_links = False
h.ignore_images = False
h.body_width = 0

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
}

ok = 0
fail = 0

for url_path, out_rel in PAGES:
    url = BASE_URL + url_path
    out_path = os.path.join(OUTPUT_DIR, out_rel)
    os.makedirs(os.path.dirname(out_path), exist_ok=True)

    try:
        resp = requests.get(url, headers=headers, timeout=15)
        resp.raise_for_status()
        resp.encoding = "utf-8"

        soup = BeautifulSoup(resp.text, "html.parser")
        main = soup.find("main") or soup.find("article") or soup.find("div", class_="theme-doc-markdown")
        if not main:
            main = soup.body

        md = h.handle(str(main))

        with open(out_path, "w", encoding="utf-8") as f:
            f.write(f"# Source: {url}\n\n")
            f.write(md)

        print(f"[OK] {out_rel}")
        ok += 1
    except Exception as e:
        print(f"[FAIL] {url_path}: {e}")
        fail += 1

    time.sleep(0.3)

print(f"\nDone: {ok} OK, {fail} failed")
