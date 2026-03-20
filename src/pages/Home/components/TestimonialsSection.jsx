
import { IoStar } from "react-icons/io5";

const testimonials = [
  {
    rating: 5,
    text: "QuickDraft saved me thousands in legal fees. The templates are comprehensive and easy to customize.",
    name: "Sunday Alabi",
    role: "Software Engineer"
  },
  {
    rating: 5,
    text: "We use this for all our employment contracts. It's fast, reliable, and our legal team approved it.",
    name: "Fajimi Orinoluwa",
    role: "UI/UX Designer"
  },
  {
    rating: 5,
    text: "The NDA and service agreement templates are perfect for my consulting business. Highly recommend!",
    name: "Bieme Thomas",
    role: "Frontend Engineer"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="bg-primaryLight py-24 px-4 sm:px-6 lg:px-8 w-full">
      <div className="mx-auto max-w-7xl flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl flex flex-col items-center">
          <span className="bg-primaryDark text-white text-[13px] tracking-wide font-medium px-4 py-1.5 rounded-lg mb-6 shadow-sm">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-textHeader mb-4 tracking-tight">
            Loved by Thousands of Users
          </h2>
          <p className="text-lg text-textParagraph font-light">
            See what our customers have to say about ContractGen
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <div className="flex text-[#ffc107] mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <IoStar key={i} className="text-2xl mr-1" />
                  ))}
                </div>
                <p className="text-textParagraph text-lg font-light leading-relaxed mb-8">
                  "{t.text}"
                </p>
              </div>
              <div>
                <h4 className="font-medium text-textHeader text-xl mb-0.5">{t.name}</h4>
                <p className="text-textBody font-light">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}