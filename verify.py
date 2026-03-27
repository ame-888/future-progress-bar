from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Wait for the app to start
    page.goto("http://localhost:3000/?tab=vr")
    page.wait_for_timeout(2000)

    # 1. Verify the disclaimer banner X is gone
    # It shouldn't have a button with aria-label="Dismiss" anymore

    # Take screenshot of the initial state (should show VR tab)
    page.screenshot(path="/home/jules/verification/screenshots/verification.png")
    page.wait_for_timeout(1000)

    # 2. Verify "Weight" measurement (lower is better, base 150, current 140)
    # The title should have a "Current Level: 0" badge next to it, since Level 1 is 130

    # We can interact with the slider to see the progress bar
    # Find the right arrow button for the first measurement to go to level 1
    buttons = page.locator("button:has(svg.w-6.h-6)").all()
    if len(buttons) >= 2:
        # The second button in a measurement card is usually the right arrow
        buttons[1].click()
        page.wait_for_timeout(1000)

    page.screenshot(path="/home/jules/verification/screenshots/verification_weight.png")

if __name__ == "__main__":
    import os
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
