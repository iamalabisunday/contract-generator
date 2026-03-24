import { IoCheckmarkOutline, IoCloseCircleOutline } from "react-icons/io5";

const plans = [
  {
    name: "Pay Per Contract",
    meta: "Perfect for one-time needs",
    price: "$29",
    period: "/contract",
    subprice: "per contract",
    highlight: false,
    buttonText: "Subscribe",
    features: [
      { text: "Single contract generation", included: true },
      { text: "All template access", included: true },
      { text: "PDF & Word download", included: true },
      { text: "Email support", included: true },
      { text: "Contract history", included: false },
      { text: "Team collaboration", included: false },
      { text: "API access", included: false }
    ]
  },
  {
    name: "Monthly Plan",
    meta: "Perfect for ongoing needs",
    price: "$49",
    period: "/month",
    subprice: "per month",
    highlight: true,
    buttonText: "Subscribe",
    features: [
      { text: "Single contract generation", included: true },
      { text: "All template access", included: true },
      { text: "PDF & Word download", included: true },
      { text: "Email support", included: true },
      { text: "Contract history", included: true },
      { text: "Priority support", included: true },
      { text: "Team collaboration", included: true },
      { text: "API access", included: false }
    ]
  },
  {
    name: "Enterprise",
    meta: "For large organizations",
    price: "Custom",
    period: "",
    subprice: "",
    highlight: false,
    buttonText: "Subscribe",
    features: [
      { text: "Single contract generation", included: true },
      { text: "All template access", included: true },
      { text: "PDF & Word download", included: true },
      { text: "Email support", included: true },
      { text: "Contract history", included: true },
      { text: "Priority support", included: true },
      { text: "Team collaboration", included: true },
      { text: "API access", included: true }
    ]
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-backgroundSecondary py-24 px-4 sm:px-6 lg:px-8 w-full">
      <div className="mx-auto max-w-7xl flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl flex flex-col items-center">
          <span className="text-primary text-[13px] tracking-wide font-medium px-4 py-1.5 rounded-lg mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-light text-textHeader mb-3 tracking-tight">
            Transparent Pricing, No Hidden Fees
          </h2>
          <p className="text-lg text-textBody font-light">
            Choose the plan that fits your needs
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
          {plans.map((p, index) => (
            <div
              key={index}
              className={`bg-white rounded-md p-10 flex flex-col shadow-sm ${p.highlight ? "border border-primary scale-[1.02] shadow-md z-10" : "border border-borderLight"
                }`}
            >
              <div>
                <h3 className="text-2xl font-light text-textHeader">{p.name}</h3>
                <p className="text-textBody font-light mt-1">{p.meta}</p>

                {p.price === "Custom" ? (
                  <div className="text-[2.75rem] font-serif text-textHeader my-8">
                    {p.price}
                  </div>
                ) : (
                  <div className="my-8">
                    <div className="flex items-baseline">
                      <span className="text-[2.75rem] font-serif text-textHeader mr-1">{p.price}</span>
                      <span className="text-2xl font-serif text-textHeader">{p.period}</span>
                    </div>
                    <div className="text-textBody font-light mt-1">{p.subprice}</div>
                  </div>
                )}
              </div>

              <ul className="mt-2 space-y-4 mb-10 flex-grow">
                {p.features.map((f, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-3 ${f.included ? "text-textParagraph" : "text-textBody opacity-60"
                      }`}
                  >
                    {f.included ? (
                      <IoCheckmarkOutline className="text-primary text-xl flex-shrink-0" />
                    ) : (
                      <IoCloseCircleOutline className="text-textBody text-[1.125rem] flex-shrink-0" />
                    )}
                    <span className="font-light text-[1.05rem]">{f.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex justify-center">
                <button
                  className={`cursor-pointer px-10 py-3 rounded-lg text-sm font-medium transition-colors w-10/12 md:w-full lg:w-3/4 ${p.highlight
                    ? "bg-primary text-white hover:bg-primaryDark"
                    : "bg-[#2b2b2b] text-white hover:bg-black"
                    }`}
                >
                  {p.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}