export default function PrivacyPolicyPage() {
  return (
    <div className="flex-1 w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-slate-800 dark:text-slate-200">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="space-y-6">
        <p>Last Updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
          <p>
            Welcome to Future Progress Bar. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. Data We Collect</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you, including:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Usage Data: Information about how you use our website.</li>
            <li>Technical Data: Internet protocol (IP) address, browser type and version, time zone setting and location.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. Use of Cookies and Third-Party Advertising</h2>
          <p>
            We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
            Third party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to our website or other websites.
          </p>
          <p className="mt-2">
            Google&apos;s use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.
            Users may opt out of personalized advertising by visiting <a href="https://myadcenter.google.com/" className="text-blue-600 hover:underline dark:text-blue-400" target="_blank" rel="noopener noreferrer">Ads Settings</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. Your Rights</h2>
          <p>
            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, or erasure of your personal data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us via our Contact page.
          </p>
        </section>
      </div>
    </div>
  );
}
