export default function PricingSection() {
    // #region agent log
    fetch('http://127.0.0.1:7840/ingest/783476b0-ecb3-43f0-b6aa-bc82e28b0e4a', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': 'b717b5' }, body: JSON.stringify({ sessionId: 'b717b5', runId: 'pre-debug', hypothesisId: 'H_pricing_Link_SectionHeading', location: 'src/pages/Home/components/PricingSection.jsx', message: 'PricingSection function invoked (before JSX)', data: {}, timestamp: Date.now() }) }).catch(() => {});
    // #endregion
    const plans = [
      {
        name: "Starter",
        price: "$0",
        meta: "For exploring",
        cta: "Start free",
        highlight: false,
        bullets: [
          "Draft basic contract outlines",
          "Edit generated sections",
          "Export as outline",
        ],
      },
      {
        name: "Pro",
        price: "$12",
        meta: "For serious drafting",
        cta: "Go Pro",
        highlight: true,
        bullets: [
          "More structured clause options",
          "Faster draft iterations",
          "Priority template library",
        ],
      },
      {
        name: "Team",
        price: "$29",
        meta: "For organizations",
        cta: "Contact sales",
        highlight: false,
        bullets: [
          "Shared reusable templates",
          "Standardized contract sections",
          "Team onboarding",
        ],
      },
    ];
  
    return (
      <section className="bg-white py-16 sm:py-24">
        <SectionHeading
          kicker="PRICING"
          title="Plans that scale with you"
          subtitle="Choose a plan that matches your drafting pace. Upgrade any time."
        />
  
        <div className="mx-auto mt-10 grid max-w-6xl gap-4 px-4 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border bg-white p-6 shadow-sm ${
                p.highlight ? "border-[#6733ff]/40" : "border-black/5"
              }`}
            >
              {p.highlight ? (
                <div className="inline-flex rounded-full bg-[#6733ff] px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              ) : null}
              <div className="mt-4 text-xl font-bold text-[#16181D]">
                {p.name}
              </div>
              <div className="mt-2 flex items-end gap-2">
                <div className="text-4xl font-bold text-[#16181D]">{p.price}</div>
                <div className="pb-1 text-sm font-semibold text-[#7D7F81]">
                  / mo
                </div>
              </div>
              <div className="mt-1 text-sm font-semibold text-[#7D7F81]">
                {p.meta}
              </div>
  
              <ul className="mt-5 space-y-3">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-[#323334]">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#6733ff]" />
                    {b}
                  </li>
                ))}
              </ul>
  
              <Link
                to={p.highlight ? "/dashboard" : "/login"}
                className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold ${
                  p.highlight
                    ? "bg-[#6733ff] text-white hover:bg-[#3400cc]"
                    : "border border-black/10 bg-white text-[#16181D] hover:bg-[#F7F5FF]"
                }`}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
  }