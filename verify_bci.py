from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Navigate to the BCI tab directly
    page.goto("http://localhost:3000/?tab=bci")
    page.wait_for_timeout(2000)

    # 1. Look for bci-3 "Number of Countries Allowing Next-Gen BCI for Medical Use"
    # We'll scroll down a bit
    page.evaluate("window.scrollBy(0, 500)")
    page.wait_for_timeout(1000)

    # Let's take a screenshot specifically showing the predictions
    page.screenshot(path="/home/jules/verification/screenshots/bci_predictions.png", full_page=True)
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
