from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("http://localhost:3000/?tab=quantum-computing")
    page.wait_for_timeout(2000)

    # Scroll down slightly to make sure the "fictional future" is well in view
    page.evaluate("window.scrollBy(0, 500)")
    page.wait_for_timeout(1000)

    # Screenshot of Quantum Computing fictional future
    page.screenshot(path="/home/jules/verification/screenshots/verification2.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
