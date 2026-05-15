export default function TermsOfServicePage() {
  return (
    <div className="flex-1 w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-slate-800 dark:text-slate-200">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <div className="space-y-6">
        <p>Last Updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing and using Future Progress Bar, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. Use License</h2>
          <p>
            Permission is granted to temporarily view the materials (information or software) on Future Progress Bar for personal, non-commercial transitory viewing only.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. Disclaimer</h2>
          <p>
            The materials on Future Progress Bar are provided on an &apos;as is&apos; basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. Limitations</h2>
          <p>
            In no event shall Future Progress Bar or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. Accuracy of Materials</h2>
          <p>
            The materials appearing on Future Progress Bar could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete or current. We may make changes to the materials contained on its website at any time without notice.
          </p>
        </section>
      </div>
    </div>
  );
}
