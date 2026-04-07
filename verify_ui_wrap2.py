from playwright.sync_api import sync_playwright
import time

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 800})
        page.goto("http://localhost:3000/?tab=superconductor")

        # Wait for hydration
        time.sleep(3)

        # Scroll to bottom
        page.mouse.wheel(0, 4000)
        time.sleep(1)

        page.screenshot(path="superconductor_wrapping_full.png", full_page=True)
        browser.close()
        print("Screenshot saved to superconductor_wrapping_full.png")

if __name__ == "__main__":
    verify()
