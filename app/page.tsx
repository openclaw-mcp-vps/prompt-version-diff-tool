export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Prompt Management
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Git-style diffs for<br />
          <span className="text-[#58a6ff]">AI prompt iterations</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Version control, A/B testing, and team collaboration for your GPT and Claude prompts.
          Stop losing track of what changed and why.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start for $29/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn more
          </a>
        </div>
        {/* Diff preview */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left font-mono text-sm max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
            <span className="ml-2 text-[#8b949e] text-xs">prompt.v3.diff</span>
          </div>
          <div className="space-y-1">
            <div className="text-[#8b949e]">@@ -1,4 +1,4 @@</div>
            <div className="bg-[#3d1f1f] text-[#ff7b72] px-2 py-0.5 rounded">- You are a helpful assistant. Answer concisely.</div>
            <div className="bg-[#1a3a1a] text-[#56d364] px-2 py-0.5 rounded">+ You are an expert assistant. Answer concisely and cite sources.</div>
            <div className="text-[#c9d1d9] px-2 py-0.5">  Context: {'{context}'}</div>
            <div className="bg-[#3d1f1f] text-[#ff7b72] px-2 py-0.5 rounded">- Question: {'{question}'}</div>
            <div className="bg-[#1a3a1a] text-[#56d364] px-2 py-0.5 rounded">+ User question: {'{question}'}</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Simple pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] mb-8">/month per workspace</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited prompt versions',
              'Git-style diff visualization',
              'A/B test result tracking',
              'Team collaboration (up to 10)',
              'GPT-4 & Claude API integration',
              'Export version history'
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#56d364] font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does prompt versioning work?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">Every time you save a prompt, we store a new version with a full diff against the previous one — just like Git commits. You can browse history, compare any two versions, and roll back instantly.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Which AI providers are supported?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">We support OpenAI (GPT-3.5, GPT-4, GPT-4o) and Anthropic (Claude 3 family) out of the box. You bring your own API keys — we never store them beyond your session.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">Yes. Cancel anytime from your billing dashboard. You keep access until the end of your billing period and can export all your prompt history before leaving.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} PromptDiff. All rights reserved.
      </footer>
    </main>
  )
}
