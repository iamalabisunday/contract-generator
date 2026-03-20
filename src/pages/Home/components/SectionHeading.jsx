export default function SectionHeading({ kicker, title, subtitle }) {
    return (
      <div className="mx-auto max-w-2xl text-center">
        {kicker ? (
          <div className="inline-flex items-center rounded-full border border-black/5 bg-white/70 px-4 py-1 text-xs font-semibold text-[#6733ff]">
            {kicker}
          </div>
        ) : null}
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#16181D] sm:text-4xl">
          {title}
        </h2>
        {subtitle ? <p className="mt-3 text-[#7D7F81]">{subtitle}</p> : null}
      </div>
    );
  }