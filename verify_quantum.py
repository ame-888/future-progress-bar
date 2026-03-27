from playwright.sync_api import sync_playwright
import time
import os

def run_cuj(page):
    page.goto("http://localhost:3000")
    page.wait_for_timeout(1000)

    # Click the Quantum Computing tab
    page.get_by_role("button", name="Quantum Computing").click()
    page.wait_for_timeout(2000)

    # Scroll down to graph
    page.evaluate("window.scrollBy(0, 500)")
    page.wait_for_timeout(1000)

    # Take screenshot at the key moment
    page.screenshot(path="/home/jules/verification/screenshots/verification.png")
    page.wait_for_timeout(1000)

    # Log Scale button
    page.locator("button[aria-label='Toggle Logarithmic Scale']").click()
    page.wait_for_timeout(1000)

    page.screenshot(path="/home/jules/verification/screenshots/verification-log.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    os.makedirs("/home/jules/verification/videos", exist_ok=True)
    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos",
            viewport={"width": 1280, "height": 800}
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
