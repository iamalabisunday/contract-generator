import {
  IoBusinessOutline,
  IoShieldCheckmarkOutline,
  IoBriefcaseOutline,
  IoHomeOutline,
  IoPeopleOutline,
  IoStorefrontOutline
} from "react-icons/io5";

const templates = [
  {
    icon: IoBriefcaseOutline,
    title: "Employment Contract",
    description: "Full-time, part-time, and contractor agreements",
    badge: "Most Popular"
  },
  {
    icon: IoShieldCheckmarkOutline,
    title: "Non-Disclosure Agreement",
    description: "Protect your confidential business information",
    badge: "Most Popular"
  },
  {
    icon: IoBusinessOutline,
    title: "Service Agreement",
    description: "Define scope, deliverables and payment terms",
    badge: "Most Popular"
  },
  {
    icon: IoHomeOutline,
    title: "Rental Agreement",
    description: "Residential and commercial lease contract",
    badge: "Most Popular"
  },
  {
    icon: IoPeopleOutline,
    title: "Partnership Agreement",
    description: "Establish terms for business partnerships",
    badge: "Most Popular"
  },
  {
    icon: IoStorefrontOutline,
    title: "Commercial Lease",
    description: "Office and retail space agreement",
    badge: "Most Popular"
  }
];

export default function TemplateSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 w-full">
      <div className="mx-auto max-w-7xl flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl flex flex-col items-center">
          <span className="bg-[#f7f5ff] text-primary text-xs tracking-wide font-medium px-4 py-1.5 rounded-full mb-6">
            Templates
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-medium text-textHeader mb-4 tracking-tight">
            Contract Templates for Every Need
          </h2>
          <p className="text-lg text-textBody font-light">
            Professionally crafted templates covering all common business scenarios
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {templates.map((template, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 border border-borderLighter hover:border-primaryLight shadow-sm"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#ebf0ff] flex items-center justify-center">
                    <template.icon className="text-primary text-2xl" />
                  </div>
                  {template.badge && (
                    <span className="bg-[#fff9e6] text-[#b38a00] text-[11px] font-medium px-3 py-1.5 rounded-md">
                      {template.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-medium text-textHeader mb-3">
                  {template.title}
                </h3>
                <p className="text-textBody font-light leading-relaxed">
                  {template.description}
                </p>
              </div>
              <button className="w-full mt-8 py-2.5 bg-transparent border border-primaryLight text-primary text-sm font-medium rounded-xl hover:bg-primaryLighter transition-colors">
                Use Template
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}