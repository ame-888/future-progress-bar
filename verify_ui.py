from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Wait for the app to start locally
    page.goto("http://localhost:3000")
    page.wait_for_timeout(2000)

    # Click on the Automation domain tab to verify the new order
    page.get_by_role("button", name="AUTOMATION").click()
    page.wait_for_timeout(1000)

    # Click on Quantum Computing domain to verify title and x-axis
    page.get_by_role("button", name="HARDWARE").click()
    page.wait_for_timeout(1000)
    page.get_by_role("button", name="QUANTUM COMPUTING").click()
    page.wait_for_timeout(1000)

    # Ensure the chart container is visible
    page.locator(".recharts-responsive-container").wait_for(state="visible")

    # Scroll slightly if needed to see the full UI and background icons
    page.evaluate("window.scrollBy(0, 150)")
    page.wait_for_timeout(500)

    page.screenshot(path="/home/jules/verification/screenshots/verification.png")
    page.wait_for_timeout(1000)

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
        except Exception as e:
            print(f"Error: {e}")
        finally:
            context.close()
            browser.close()
