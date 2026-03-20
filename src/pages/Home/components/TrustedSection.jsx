
function TrustedCompany({ name }) {
  return (
    <span className="text-xl md:text-lg font-light text-textBody">
      {name}
    </span>
  );
}

export default function TrustedSection() {
  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <p className="text-sm font-neutral text-textHeader uppercase tracking-[0.125rem] text-center mb-10">
          Trusted by leading companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16 md:gap-24 lg:gap-50 w-full">
          <TrustedCompany name="TechCorp" />
          <TrustedCompany name="Innovate Inc" />
          <TrustedCompany name="Growth Co" />
          <TrustedCompany name="StartupHub" />
        </div>
      </div>
    </section>
  );
}

