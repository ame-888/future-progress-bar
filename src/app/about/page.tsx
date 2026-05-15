export default function AboutPage() {
  return (
    <div className="flex-1 w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-slate-800 dark:text-slate-200">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
          <p>
            Welcome to Future Progress Bar! Our mission is to track humanity&apos;s technological and scientific progress across various domains, providing a visual and engaging way to understand how far we have come and where we might be heading.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">What We Do</h2>
          <p>
            We curate and aggregate milestones from a variety of fields—including Artificial Intelligence, Space Exploration, Biotechnology, and more. By presenting these milestones on an interactive timeline, we hope to inspire curiosity and optimism about the future.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Who We Are</h2>
          <p>
            We are a group of technology enthusiasts and futurists who believe that keeping track of our collective progress is essential for navigating the challenges of tomorrow.
          </p>
        </section>
      </div>
    </div>
  );
}
