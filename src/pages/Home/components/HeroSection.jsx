
import HeroImage from "../../../assets/images/Hero-Image.svg";
import { Button, ButtonOutline } from "../../../components/Button";
import { IoDocumentOutline } from "react-icons/io5";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-primaryLighter sm:py-24 md:py-16 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">

          {/* Left Column */}
          <div className="max-w-2xl pt-4 lg:pr-8">
            <h1 className="text-4xl font-medium tracking-tight sm:text-5xl lg:text-5xl lg:leading-[1.25]">
              Generate professional
              <br className="hidden sm:block" /> Contracts in Minutes
            </h1>
            <p className="mt-6 max-w-lg text-lg text-textBody leading-relaxed font-light">
              Create legally vetted contracts without expensive lawyers. Choose from 24+ templates, customize in minutes, and download instantly.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button btn="Generate Contract" to="/overview" />
              <ButtonOutline btn="View Templates" to="/overview" />
            </div>
          </div>

          {/* Right Column */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none lg:pl-8">
            {/* Main image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[6/5]">
              <img
                src={HeroImage}
                alt="Two people shaking hands over a contract"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating stats card */}
            <div className="w-[13rem] flex justify-between absolute -bottom-6 -left-4 z-10 flex items-center rounded-xl bg-white p-4 lg:-bottom-10 lg:-left-12 border-1 border-borderLight">
              <div className="flex flex-col">
                <span className="text-2xl font-light text-textParagraph">24+</span>
                <span className="mt-0.5 text-sm font-light text-textParagraph">Template</span>
              </div>
              <div className="flex h-[42px] w-[42px] items-center justify-center rounded-md bg-primary">
                <IoDocumentOutline className="text-white text-3xl" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section >
  );
}