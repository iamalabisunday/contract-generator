export default function FaqSection() {
    // #region agent log
    fetch('http://127.0.0.1:7840/ingest/783476b0-ecb3-43f0-b6aa-bc82e28b0e4a', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': 'b717b5' }, body: JSON.stringify({ sessionId: 'b717b5', runId: 'pre-debug', hypothesisId: 'H_faq_useMemo_useState', location: 'src/pages/Home/components/FaqSection.jsx', message: 'FaqSection function invoked (before useMemo/useState usage)', data: {}, timestamp: Date.now() }) }).catch(() => {});
    // #endregion
    const faqs = useMemo(
      () => [
        {
          id: "what",
          q: "What does Contract Generator do?",
          a: "It drafts contract language and structured outlines based on your inputs, so you can review and customize faster.",
        },
        {
          id: "edit",
          q: "Can I edit the generated contract?",
          a: "Yes. The output is meant to be reviewed section-by-section so you can refine the wording and details.",
        },
        {
          id: "export",
          q: "How do I use the output?",
          a: "You can export the outline and then finalize it for your specific situation. Think of it as a starting draft.",
        },
        {
          id: "pricing",
          q: "Do I need a paid plan to start?",
          a: "No. You can try the Starter plan first and upgrade when you want more structured options.",
        },
        {
          id: "security",
          q: "Is my data secure?",
          a: "Your contract inputs should be handled securely. If you have specific compliance questions, contact us before using the tool.",
        },
      ],
      [],
    );
  
    const [openId, setOpenId] = useState(null);
  
    return (
      <section className="bg-white py-16 sm:py-24">
        <SectionHeading
          kicker="FAQ"
          title="Questions, answered"
          subtitle="Quick answers about how Contract Generator works."
        />
  
        <div className="mx-auto mt-10 max-w-3xl px-4">
          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-black/5 bg-white"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                  >
                    <span className="text-sm font-bold text-[#16181D]">
                      {faq.q}
                    </span>
                    <span className="text-[#6733ff] font-bold">
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>
                  {isOpen ? (
                    <div className="px-5 pb-4 text-sm text-[#7D7F81]">
                      {faq.a}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }