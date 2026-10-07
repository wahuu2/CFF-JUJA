export default function DepartmentsHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-[#061B3A] pt-28 md:min-h-[72vh] md:pt-32">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519491050282-cf00c82424b4?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* NAVY OVERLAY */}
      <div className="absolute inset-0 bg-[#061B3A]/80" />

      {/* SUBTLE BLUE GLOW */}
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#0B3D91]/30 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#123B63]/40 blur-3xl" />

      {/* RED BOTTOM ACCENT */}
      <div className="absolute bottom-0 left-0 h-1.5 w-full bg-[#D62828]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-28">

        <div className="max-w-4xl">

          {/* LABEL */}
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#D62828]" />

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
              Get Involved
            </p>
          </div>

          {/* TITLE */}
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Find Your
            <br />
            <span className="text-white/90">Place to Serve.</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            Discover the ministries, boards, committees and groups at
            CFF Juja where you can serve, connect with others and grow
            in your walk with Christ.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">

            <a
              href="#ministries"
              className="inline-flex items-center justify-center rounded-full bg-[#D62828] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-950/20 transition hover:bg-[#A61F1F]"
            >
              Explore Departments
              <span className="ml-2">↓</span>
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10"
            >
              Get Connected
              <span className="ml-2">→</span>
            </a>

          </div>
        </div>

        {/* BOTTOM INFO */}
        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.18em] text-white/40 md:mt-20">
          <span>Ministries</span>
          <span className="h-1 w-1 rounded-full bg-[#D62828]" />
          <span>Boards</span>
          <span className="h-1 w-1 rounded-full bg-[#D62828]" />
          <span>Committees</span>
          <span className="h-1 w-1 rounded-full bg-[#D62828]" />
          <span>Groups</span>
        </div>

      </div>
    </section>
  );
}