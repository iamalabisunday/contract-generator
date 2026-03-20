import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function FinalCtaSection() {
  return (
    <section className="bg-primary py-24 px-4 sm:px-6 lg:px-8 w-full">
      <div className="mx-auto max-w-4xl flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-light text-white mb-6 tracking-tight leading-tight">
          Ready to Create Your First Contract?
        </h2>
        <p className="text-lg md:text-xl text-white/90 font-light mb-10 max-w-2xl">
          Join 50,000+ businesses who trust QuickDraft for their contract needs
        </p>
        <Link to="/dashboard" className="bg-white text-primary px-8 py-3.5 rounded-lg font-medium text-[15px] flex items-center justify-center gap-2 hover:bg-primaryLighter transition-colors shadow-md cursor-pointer">
          Get Started
          <IoArrowForwardOutline className="text-xl ml-1 -space-x-1" />
        </Link>
      </div>
    </section>
  );
}