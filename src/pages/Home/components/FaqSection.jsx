import { useState } from "react";
import { IoAddOutline, IoCloseOutline } from "react-icons/io5";

const faqs = [
  {
    question: "Are the contracts legally binding?",
    answer: "Yes! All our templates are reviewed by legal professionals and designed to be legally binding when properly executed. However, we recommend consulting with a lawyer for complex situations or high-value agreements."
  },
  {
    question: "Can I customize the contracts?",
    answer: "Absolutely. Our editor allows you to modify any clause, add custom terms, and tailor the agreement specifically to your needs."
  },
  {
    question: "What formats can I download?",
    answer: "You can download your finalized contracts in both PDF and Word (.docx) formats for easy sharing and further offline editing."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 14-day money-back guarantee if you're not fully satisfied with your contract generation experience."
  },
  {
    question: "Can I use this for my business?",
    answer: "ContractGen is specifically designed for freelancers, startups, and small to medium businesses to fulfill all their common contracting needs."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 w-full">
      <div className="mx-auto max-w-3xl flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="bg-[#f7f5ff] text-primary text-[12px] tracking-wide font-medium px-3 py-1 rounded mb-5 shadow-sm">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-light text-textHeader mb-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-textBody font-light">
            Got questions? We've got answers
          </p>
        </div>

        {/* Accordion */}
        <div className="w-full flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`overflow-hidden transition-colors duration-300 ${isOpen ? "bg-[#f4f4f5]" : "bg-white border-b border-borderLighter"
                  } ${index === faqs.length - 1 && !isOpen ? "border-b-0" : ""}`}
              >
                <button
                  className="w-full px-6 py-6 flex justify-between items-center text-left focus:outline-none cursor-pointer"
                  onClick={() => toggleOpen(index)}
                >
                  <span className="text-xl font-light text-textHeader pr-4">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <IoCloseOutline className="text-textHeader text-2xl flex-shrink-0" />
                  ) : (
                    <IoAddOutline className="text-textHeader text-2xl flex-shrink-0" />
                  )}
                </button>

                {/* Content */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-8 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="text-textBody font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}