import {
  IoTimeOutline,
  IoShieldCheckmarkOutline,
  IoDocumentsOutline,
  IoLockClosedOutline,
  IoDocumentTextOutline,
  IoWalletOutline,
} from "react-icons/io5";

const features = [
  {
    icon: IoTimeOutline,
    title: "Generate in Minutes",
    description: "Create professional contracts in under 5 minutes with our intelligent templates"
  },
  {
    icon: IoShieldCheckmarkOutline,
    title: "Legally Vetted",
    description: "All templates reviewed by legal professionals to ensure compliance"
  },
  {
    icon: IoDocumentsOutline,
    title: "24+ Templates",
    description: "Comprehensive library covering employment, business, real estate, and more"
  },
  {
    icon: IoLockClosedOutline,
    title: "Secure & Private",
    description: "Bank-level encryption protects your sensitive contract information"
  },
  {
    icon: IoDocumentTextOutline,
    title: "Multiple Formats",
    description: "Download as PDF or Word document for easy editing and sharing"
  },
  {
    icon: IoWalletOutline,
    title: "Save Time & Money",
    description: "Skip expensive lawyers for standard contracts and get instant results"
  }
];

export default function FeaturesSection() {
  return (
    <section className="bg-primaryLighter py-20 px-4 sm:px-6 lg:px-8 w-full">
      <div className="mx-auto max-w-7xl flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl">
          <p className="text-primary text-sm tracking-wide font-medium mb-4">Features</p>
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-medium text-textHeader mb-4 tracking-tight">
            Everything You Need to Create Contracts
          </h2>
          <p className="text-lg text-textBody font-light">
            Professional-grade features without the complexity or cost
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 flex flex-col items-start hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-borderLight"
            >
              <div className="w-12 h-12 rounded-lg bg-[#ebf0ff] flex items-center justify-center mb-6">
                <feature.icon className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-medium text-textHeader mb-3">
                {feature.title}
              </h3>
              <p className="text-textBody font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}