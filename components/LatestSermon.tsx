export default function LatestSermon() {
  return (
    <section
      id="latest"
      className="bg-[#F7F9FC] px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid overflow-hidden rounded-[2rem] bg-[#123B63] lg:grid-cols-[1.15fr_0.85fr]">

          {/* IMAGE */}
          <div className="relative min-h-[320px] lg:min-h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1600&q=85"
              alt="Latest sermon"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#061B3A]/45" />

            {/* PLAY */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                aria-label="Play latest sermon"
                className="flex h-20 w-20 items-center justify-center rounded-full bg-[#D62828] text-white shadow-2xl transition hover:scale-105 hover:bg-[#A61F1F]"
              >
                <span className="ml-1 text-2xl">
                  ▶
                </span>
              </button>
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-center p-8 sm:p-10 md:p-14 lg:p-16">

            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#D62828]">
              Latest Message
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Hope in Christ
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              Be encouraged through biblical teaching that reminds us
              of the hope we have in Jesus Christ.
            </p>

            <div className="mt-7 flex flex-wrap gap-4 text-sm text-white/45">
              <span>CFF Juja</span>
              <span>•</span>
              <span>Sunday Service</span>
            </div>

            <a
              href="#"
              className="mt-9 inline-flex w-fit items-center rounded-full bg-[#D62828] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#A61F1F]"
            >
              Watch Latest Sermon
              <span className="ml-2">
                →
              </span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}