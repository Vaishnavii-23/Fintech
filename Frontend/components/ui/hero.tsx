import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#2E2F3E] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/Hero.png" // must be inside /public
        alt="Wealth background"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 bg-[#2E2F3E]/75" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-[calc(5rem+64px)] sm:pt-[calc(6rem+80px)]">

        <h1 className="font-playfair-display text-4xl sm:text-5xl md:text-6xl font-medium leading-tight max-w-3xl">
          <span className="bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent">
            Elite Wealth Management,
          </span>
          <br />
          <span className="text-white/70">
            Simplified.
          </span>
        </h1>

        <p className="mt-6 font-playfair-display max-w-xl text-sm sm:text-base text-white/70">
          Exclusive tools and expert guidance to help high net-worth investors
          grow and protect their wealth seamlessly.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-8 flex flex-wrap gap-4">
            <button
                type="button"
                className="rounded-md bg-[#333440] px-6 py-3 text-sm font-medium text-white
                        border-[3px] border-[#45464D]
                        shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
                        transition hover:brightness-110"
            >
                Start Investing
            </button>

            <button
                type="button"
                className="rounded-md bg-[#333440] px-6 py-3 text-sm font-medium text-white
                        border-[3px] border-[#45464D]
                        shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
                        transition hover:brightness-110"
            >
                Talk To An Advisor
            </button>
        </div>


      </div>
    </section>
  );
}
