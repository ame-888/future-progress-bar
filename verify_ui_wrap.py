from playwright.sync_api import sync_playwright
import time

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("http://localhost:3000/?tab=superconductor")

        # Wait for hydration
        time.sleep(3)

        page.screenshot(path="superconductor_wrapping.png")
        browser.close()
        print("Screenshot saved to superconductor_wrapping.png")

if __name__ == "__main__":
    verify()
