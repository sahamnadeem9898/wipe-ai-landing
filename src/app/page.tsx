export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500" />
            </span>
            Now Available
          </div>

          <h1 className="mb-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
            <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              Wipe AI
            </span>
            <br />
            <span className="text-neutral-200">
              Multiple Operations,
            </span>
            <br />
            <span className="text-neutral-300">
              One AI Assistant
            </span>
          </h1>

          <p className="mb-10 max-w-2xl text-xl text-neutral-400 sm:text-2xl">
            Stop juggling multiple tools. Wipe AI handles everything from scheduling to analysis,
            all in one intelligent platform.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-purple-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-purple-700 hover:scale-105">
              Get Started Free
            </button>
            <button className="rounded-full border border-neutral-700 bg-neutral-900/50 px-8 py-4 text-lg font-semibold text-neutral-200 backdrop-blur transition-all hover:border-neutral-600 hover:bg-neutral-800/50">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Problem vs Solution Section */}
      <section className="px-6 py-20 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Stop the <span className="text-purple-400">Chaos</span>
            </h2>
            <p className="text-xl text-neutral-400">
              There's a better way to work
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Problem */}
            <div className="rounded-3xl border border-red-900/30 bg-gradient-to-br from-red-950/20 to-neutral-900/20 p-8 backdrop-blur">
              <div className="mb-6 inline-flex rounded-full bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400">
                The Old Way
              </div>
              <h3 className="mb-6 text-2xl font-bold text-neutral-200">
                Scattered Tools, Wasted Time
              </h3>
              <ul className="space-y-4">
                {[
                  'Switching between 10+ different apps',
                  'Manual data entry and copy-pasting',
                  'Lost information across platforms',
                  'Inconsistent workflows and processes',
                  'Hours spent on repetitive tasks'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-950/30 to-neutral-900/20 p-8 backdrop-blur">
              <div className="mb-6 inline-flex rounded-full bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-400">
                The Wipe AI Way
              </div>
              <h3 className="mb-6 text-2xl font-bold text-neutral-200">
                Unified Intelligence, Effortless Work
              </h3>
              <ul className="space-y-4">
                {[
                  'One AI assistant for all operations',
                  'Automated workflows and smart actions',
                  'Centralized data and insights',
                  'Consistent, reliable processes',
                  'Hours saved every single day'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Everything You Need, <span className="text-purple-400">Nothing You Don't</span>
            </h2>
            <p className="text-xl text-neutral-400">
              Powerful features designed for modern teams
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Smart Automation',
                description: 'Let AI handle repetitive tasks while you focus on what matters most.',
                icon: '⚡'
              },
              {
                title: 'Multi-Platform Sync',
                description: 'Seamlessly connect and sync data across all your favorite tools.',
                icon: '🔄'
              },
              {
                title: 'Natural Language',
                description: 'Just tell Wipe AI what you need—no complex commands required.',
                icon: '💬'
              },
              {
                title: 'Advanced Analytics',
                description: 'Get instant insights and reports from all your data sources.',
                icon: '📊'
              },
              {
                title: 'Team Collaboration',
                description: 'Share workflows, insights, and AI assistants across your team.',
                icon: '👥'
              },
              {
                title: 'Enterprise Security',
                description: 'Bank-level encryption and compliance with SOC 2, GDPR, and more.',
                icon: '🔒'
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 backdrop-blur transition-all hover:border-purple-500/30 hover:bg-neutral-900/80"
              >
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-neutral-100">
                  {feature.title}
                </h3>
                <p className="text-neutral-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-950/30 via-neutral-900/50 to-neutral-900/30 p-12 backdrop-blur sm:p-16">
            <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Ready to <span className="text-purple-400">Wipe</span> Away the Chaos?
            </h2>
            <p className="mb-10 text-xl text-neutral-400">
              Join thousands of teams using Wipe AI to streamline their operations
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button className="rounded-full bg-purple-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-purple-700 hover:scale-105">
                Start Free Trial
              </button>
              <button className="rounded-full border border-neutral-700 bg-neutral-900/50 px-8 py-4 text-lg font-semibold text-neutral-200 backdrop-blur transition-all hover:border-neutral-600 hover:bg-neutral-800/50">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 px-6 py-12">
        <div className="mx-auto max-w-6xl text-center text-neutral-500">
          <p>© 2026 Wipe AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
