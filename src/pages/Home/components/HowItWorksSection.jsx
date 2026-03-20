export default function HowItWorksSection() {
    // #region agent log
    fetch('http://127.0.0.1:7840/ingest/783476b0-ecb3-43f0-b6aa-bc82e28b0e4a', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': 'b717b5' }, body: JSON.stringify({ sessionId: 'b717b5', runId: 'pre-debug', hypothesisId: 'H_howitworks_SectionHeading', location: 'src/pages/Home/components/HowItWorksSection.jsx', message: 'HowItWorksSection function invoked (before JSX)', data: {}, timestamp: Date.now() }) }).catch(() => {});
    // #endregion
    const steps = [
      {
        n: "01",
        title: "Choose a contract type",
        body: "Pick what you’re drafting: agreement, NDA, freelance contract, or more.",
      },
      {
        n: "02",
        title: "Tell us the details",
        body: "Add parties, scope, timeline, and any special clauses you want included.",
      },
      {
        n: "03",
        title: "Review and export",
        body: "Edit sections as needed, then export your draft for finalization.",
      },
    ];
  
    return (
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-[#F7F5FF]" />
        <div className="relative mx-auto max-w-6xl px-4">
          <SectionHeading
            kicker="HOW IT WORKS"
            title="Draft in a few simple steps"
            subtitle="You stay in control. Generate a strong first draft, then refine the language."
          />
  
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-black/5 bg-white p-6"
              >
                <div className="text-xs font-bold tracking-widest text-[#6733ff]">
                  {s.n}
                </div>
                <div className="mt-2 text-lg font-semibold text-[#16181D]">
                  {s.title}
                </div>
                <p className="mt-2 text-[#7D7F81]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }