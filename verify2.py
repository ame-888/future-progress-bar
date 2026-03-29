from playwright.sync_api import sync_playwright

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 3000}) # Tall viewport to capture all content
        page = context.new_page()

        print("Navigating to Quantum Computing tab...")
        page.goto("http://localhost:3000/?tab=quantum-computing")

        # Wait for "Quantum Volume" text to appear
        page.wait_for_selector("text=Quantum Volume")

        # Give it a second for transitions
        page.wait_for_timeout(2000)

        page.screenshot(path="full-quantum.png")
        print("Screenshot saved to full-quantum.png")

        print("Navigating to VR tab...")
        page.goto("http://localhost:3000/?tab=vr")

        # Wait for "Maximum Horizontal Field of View" text to appear
        page.wait_for_selector("text=Maximum Horizontal Field of View")

        # Give it a second for transitions
        page.wait_for_timeout(2000)

        page.screenshot(path="full-vr.png")
        print("Screenshot saved to full-vr.png")

        browser.close()

if __name__ == "__main__":
    verify()