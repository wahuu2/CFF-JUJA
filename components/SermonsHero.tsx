export default function SermonsHero() {
  return (
    <section className="relative flex min-h-[65vh] items-center overflow-hidden bg-[#061B3A] pt-28 md:min-h-[68vh] md:pt-32">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#061B3A]/80" />

      {/* BLUE GLOW */}
      <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#0B3D91]/30 blur-3xl" />

      {/* RED BOTTOM LINE */}
      <div className="absolute bottom-0 left-0 h-1.5 w-full bg-[#D62828]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-28">

        <div className="max-w-4xl">

          {/* LABEL */}
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#D62828]" />

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
              CFF Juja Sermons
            </p>
          </div>

          {/* TITLE */}
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Grow in Faith.
            <br />
            <span className="text-white/80">
              Grow in the Word.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            Listen to biblical teaching, encouragement and messages from
            CFF Juja that help you know God, grow in faith and live out
            His Word every day.
          </p>

          {/* BUTTONS */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">

            <a
              href="#sermon-library"
              className="inline-flex items-center justify-center rounded-full bg-[#D62828] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-950/20 transition hover:bg-[#A61F1F]"
            >
              Explore Sermons
              <span className="ml-2">↓</span>
            </a>

            <a
              href="#latest"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10"
            >
              Latest Message
              <span className="ml-2">→</span>
            </a>

          </div>

        </div>

        {/* BOTTOM LABELS */}
        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.18em] text-white/40 md:mt-20">
          <span>Sunday Services</span>

          <span className="h-1 w-1 rounded-full bg-[#D62828]" />

          <span>Bible Study</span>

          <span className="h-1 w-1 rounded-full bg-[#D62828]" />

          <span>Special Messages</span>
        </div>

      </div>
    </section>
  );
}