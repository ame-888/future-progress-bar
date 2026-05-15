export default function ContactPage() {
  return (
    <div className="flex-1 w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-slate-800 dark:text-slate-200">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="space-y-6">
        <p>
          We would love to hear from you! Whether you have feedback, questions about our data, or suggestions for new milestones, please feel free to reach out.
        </p>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-3">Get in Touch</h2>
          <p className="mb-2"><strong>Email:</strong> contact@futureprogressbar.example.com</p>
          <p className="mb-2"><strong>Twitter:</strong> @FutureProgressBar</p>
        </div>

        <div className="mt-8 bg-slate-100 dark:bg-slate-900 p-6 rounded-lg">
          <p className="text-sm">
            Please note that it may take up to 48 hours for us to respond to inquiries. We appreciate your patience and interest in our project.
          </p>
        </div>
      </div>
    </div>
  );
}
