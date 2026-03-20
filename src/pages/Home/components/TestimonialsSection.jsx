
export default function TestimonialsSection() {
    // #region agent log
    fetch('http://127.0.0.1:7840/ingest/783476b0-ecb3-43f0-b6aa-bc82e28b0e4a', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': 'b717b5' }, body: JSON.stringify({ sessionId: 'b717b5', runId: 'pre-debug', hypothesisId: 'H_testimonials_SectionHeading', location: 'src/pages/Home/components/TestimonialsSection.jsx', message: 'TestimonialsSection function invoked (before JSX)', data: {}, timestamp: Date.now() }) }).catch(() => {});
    // #endregion
    const items = [
      {
        name: "Ava R.",
        role: "Freelance Designer",
        quote:
          "Contract Generator helped me draft a clean scope and payment section in minutes. It’s easy to revise before I send it to clients.",
      },
      {
        name: "Noah S.",
        role: "Startup Founder",
        quote:
          "The structured clauses make it faster to review agreements. I can reuse wording across deals and stay consistent.",
      },
      {
        name: "Mia K.",
        role: "Product Manager",
        quote:
          "I like that it generates an outline I can actually edit. The language reads clearly and keeps negotiations on track.",
      },
      {
        name: "Ethan T.",
        role: "Operations Lead",
        quote:
          "Quick drafts, predictable sections, and the ability to customize. This replaced a big chunk of my manual contract work.",
      },
    ];
  
    return (
      <section className="bg-[#F7F5FF] py-16 sm:py-24">
        <SectionHeading
          kicker="TESTIMONIALS"
          title="Loved by teams that move fast"
          subtitle="Real feedback from people using Contract Generator to draft, review, and export."
        />
  
        <div className="mx-auto mt-10 grid max-w-6xl gap-4 px-4 md:grid-cols-2">
          {items.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-black/5 bg-white p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-[#16181D]">{t.name}</div>
                  <div className="mt-1 text-xs font-semibold text-[#7D7F81]">
                    {t.role}
                  </div>
                </div>
                <div className="h-10 w-10 rounded-xl bg-[#6733ff]/10" />
              </div>
              <p className="mt-4 text-[#323334]">{t.quote}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }