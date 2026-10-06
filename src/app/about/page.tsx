import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
 {/* NAVIGATION */}
<header className="absolute left-0 right-0 top-0 z-50 md:top-7">
  <nav className="mx-auto max-w-7xl px-5 py-5 md:px-8">
    <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-[#061B3A]/95 px-5 py-4 shadow-2xl backdrop-blur-md">

      {/* LOGO */}
      <a href="#" className="flex shrink-0 items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white">
          <span className="text-xl font-bold text-[#0B3D91]">
            ✝
          </span>
        </div>

        <div>
          <p className="text-sm font-bold tracking-[0.18em] text-white">
            CFF
          </p>

          <p className="text-[10px] uppercase tracking-[0.15em] text-white/60">
            Juja
          </p>
        </div>
      </a>


      {/* DESKTOP NAVIGATION */}
      <div className="hidden items-center gap-8 lg:flex">

        <a
          href="/"
          className="relative text-sm font-semibold text-white transition hover:text-red-400"
        >
          Home
          <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[#D62828]" />
        </a>

        <a
          href="/about"
          className="text-sm font-medium text-white/75 transition hover:text-white"
        >
          Discover
        </a>

        <a
          href="#ministries"
          className="text-sm font-medium text-white/75 transition hover:text-white"
        >
          Ministries
        </a>

        <a
          href="/departments"
          className="text-sm font-medium text-white/75 transition hover:text-white"
        >
          Departments
        </a>

        <a
          href="/contact"
          className="text-sm font-medium text-white/75 transition hover:text-white"
        >
          Contact
        </a>

      </div>


      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3">

        {/* SOCIAL ICONS */}
<div className="hidden items-center gap-2 md:flex">

  {/* FACEBOOK */}
  <a
    href="#"
    aria-label="Facebook"
    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2] text-sm font-bold text-white transition hover:scale-105"
  >
    f
  </a>

  {/* YOUTUBE */}
  <a
    href="#"
    aria-label="YouTube"
    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF0000] text-xs font-bold text-white transition hover:scale-105"
  >
    ▶
  </a>

</div>


        {/* SERMONS */}
        <a
          href="#sermons"
          className="hidden rounded-full bg-[#D62828] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-900/20 transition hover:bg-[#B91C1C] md:inline-flex"
        >
          Sermons
        </a>


        {/* MOBILE MENU */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-white/30 hover:bg-white/10 lg:hidden"
          aria-label="Open menu"
        >
          <span className="text-xl leading-none">
            ☰
          </span>
        </button>

      </div>

    </div>
  </nav>
</header>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#061B3A] px-5 pb-24 pt-40 md:px-8 md:pb-32 md:pt-48">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=2200&q=85"
            alt="Church placeholder"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[#061B3A]/75" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
            About CFF Juja
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight text-white md:text-7xl">
            A church rooted in faith,
            <br />
            purpose and community.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Welcome to Christian Foundation Fellowship Juja. This is a place
            where people come together to worship God, grow in faith and serve
            their community.
          </p>
        </div>
      </section>


      {/* INTRODUCTION */}
      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
              Who We Are
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#061B3A] md:text-5xl">
              More than a building.
              <br />
              We are a family.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-[#061B3A]/65">
              <p>
                Christian Foundation Fellowship Juja is a church community
                committed to following Jesus Christ and helping people grow
                in their relationship with God.
              </p>

              <p>
                We believe church is a place where people from different
                backgrounds can come together, worship, learn God's Word,
                build meaningful relationships and serve others.
              </p>

              <p>
                As CFF Juja continues to grow, our desire is to remain
                grounded in biblical truth while reaching and impacting our
                local community.
              </p>
            </div>
          </div>


          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1400&q=85"
              alt="Church community placeholder"
              className="h-[500px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A]/60 to-transparent" />

            <div className="absolute bottom-7 left-7 rounded-2xl bg-white/95 p-6 shadow-xl backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D62828]">
                CFF Juja
              </p>

              <p className="mt-2 text-xl font-semibold text-[#061B3A]">
                Faith. Community. Purpose.
              </p>
            </div>
          </div>

        </div>
      </section>

      


      {/* MISSION & VISION */}
      <section className="bg-[#F5F7FA] px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
              What Guides Us
            </p>

            <h2 className="mt-5 text-4xl font-semibold text-[#061B3A] md:text-5xl">
              Our Mission & Vision
            </h2>

            <p className="mt-5 leading-7 text-[#061B3A]/60">
              Our official mission and vision statements will be added after
              confirmation from CFF Juja leadership.
            </p>
          </div>


          <div className="mt-14 grid gap-7 md:grid-cols-2">

            {/* MISSION */}
            <div className="rounded-[2rem] bg-[#061B3A] p-9 md:p-12">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-xl font-bold text-[#0B3D91]">
                M
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-[#D62828]">
                Our Mission
              </p>

              <h3 className="mt-4 text-3xl font-semibold text-white">
                To glorify God and serve people.
              </h3>

              <p className="mt-5 leading-8 text-white/60">
                Official mission statement to be confirmed and replaced with
                the church's approved wording.
              </p>
            </div>


            {/* VISION */}
            <div className="rounded-[2rem] border border-[#061B3A]/10 bg-white p-9 shadow-sm md:p-12">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0B3D91] text-xl font-bold text-white">
                V
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-[#D62828]">
                Our Vision
              </p>

              <h3 className="mt-4 text-3xl font-semibold text-[#061B3A]">
                A Christ-centered community making an impact.
              </h3>

              <p className="mt-5 leading-8 text-[#061B3A]/60">
                Official vision statement to be confirmed and replaced with
                the church's approved wording.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* THEME OF THE YEAR */}
      <section className="bg-[#0B3D91] px-5 py-24 md:px-8 md:py-28">
        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/60">
            Theme of the Year
          </p>

          <h2 className="mt-6 text-4xl font-semibold text-white md:text-6xl">
            Your official theme goes here.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">
            The official CFF Juja theme for the year will be added here once
            confirmed by the church leadership.
          </p>

        </div>
      </section>


      {/* WHAT WE BELIEVE */}
      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                Our Faith
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#061B3A] md:text-5xl">
                What we believe.
              </h2>

              <p className="mt-6 leading-8 text-[#061B3A]/60">
                Our faith is centered on Jesus Christ and the truth of God's
                Word.
              </p>
            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              {[
                {
                  title: "Jesus Christ",
                  text: "We believe in Jesus Christ as Lord and Savior."
                },
                {
                  title: "The Word of God",
                  text: "We believe the Bible is God's Word and our guide for life."
                },
                {
                  title: "Prayer",
                  text: "We believe in the power and importance of prayer."
                },
                {
                  title: "Community",
                  text: "We believe believers are called to live, grow and serve together."
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#061B3A]/10 bg-white p-7 shadow-sm"
                >
                  <div className="h-1 w-10 rounded-full bg-[#D62828]" />

                  <h3 className="mt-6 text-xl font-semibold text-[#061B3A]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#061B3A]/55">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>


      {/* LEADERSHIP */}
      <section className="bg-[#F5F7FA] px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                Leadership
              </p>

              <h2 className="mt-5 text-4xl font-semibold text-[#061B3A] md:text-5xl">
                Servants leading with purpose.
              </h2>
            </div>

            <p className="max-w-xl leading-7 text-[#061B3A]/60">
              Meet the pastors and leaders serving the CFF Juja church family.
              Official profiles will be added after confirmation.
            </p>

          </div>


          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                role: "Senior Pastor",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
              },
              {
                role: "Pastor",
                image:
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85",
              },
              {
                role: "Pastor",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
              },
              {
                role: "Pastor",
                image:
                  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
              },
            ].map((pastor, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={pastor.image}
                    alt="Pastor placeholder"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D62828]">
                    {pastor.role}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-[#061B3A]">
                    Pastor Name
                  </h3>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* CALL TO ACTION */}
      <section className="bg-[#061B3A] px-5 py-24 md:px-8 md:py-28">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
            Join Us
          </p>

          <h2 className="mt-5 text-4xl font-semibold text-white md:text-6xl">
            There is a place for you here.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/60">
            Come worship with us, connect with our church family and discover
            how you can be part of what God is doing through CFF Juja.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/#visit"
              className="rounded-full bg-[#D62828] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#B91C1C]"
            >
              Visit Us
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}