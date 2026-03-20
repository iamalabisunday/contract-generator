export default function FinalCtaSection() {
    // #region agent log
    fetch('http://127.0.0.1:7840/ingest/783476b0-ecb3-43f0-b6aa-bc82e28b0e4a', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': 'b717b5' }, body: JSON.stringify({ sessionId: 'b717b5', runId: 'pre-debug', hypothesisId: 'H_finalcta_Link', location: 'src/pages/Home/components/FinalCtaSection.jsx', message: 'FinalCtaSection function invoked (before JSX)', data: {}, timestamp: Date.now() }) }).catch(() => {});
    // #endregion
    return (
      <section className="relative overflow-hidden bg-[#6733ff] py-16 sm:py-24">
        <div className="absolute right-[-120px] top-[-160px] h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute left-[-140px] bottom-[-180px] h-[520px] w-[520px] rounded-full bg-[#814EFF]/30 blur-3xl" />
  
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white">
                READY TO DRAFT?
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to generate your next contract?
              </h2>
              <p className="mt-3 text-white/80">
                Start free and build a draft you can refine. Move faster with
                structured contract language.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#6733ff] hover:bg-[#F7F5FF]"
                >
                  Try Free Contract
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Create Account
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="rounded-3xl bg-white/10 p-6">
                <div className="text-white font-semibold">What you get</div>
                <ul className="mt-4 space-y-3 text-sm text-white/80">
                  <li className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                    Drafted sections you can edit
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                    Faster contract reviews
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                    Export-ready outline
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }