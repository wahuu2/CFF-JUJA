import Link from "next/link";

export default function KingdomMenPage() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85",
      alt: "Men fellowshipping together",
      title: "Brotherhood",
    },
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=85",
      alt: "Men working together",
      title: "Working Together",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1400&q=85",
      alt: "Kingdom Men fellowship",
      title: "Fellowship",
    },
    {
      src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=85",
      alt: "Men participating in an activity",
      title: "Serving Together",
    },
    {
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1400&q=85",
      alt: "Men in leadership",
      title: "Leadership",
    },
    {
      src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",
      alt: "Men working as a team",
      title: "Building Together",
    },
  ];

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[75vh] overflow-hidden bg-[#061B3A]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=85')",
          }}
        />

        <div className="absolute inset-0 bg-[#061B3A]/80" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#061B3A] via-[#061B3A]/75 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#D62828]" />

        <div className="relative mx-auto flex min-h-[75vh] max-w-7xl items-center px-5 py-32 md:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#D62828]" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
                CFF Juja
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
              Kingdom
              <span className="block text-blue-200">Men</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              Raising men who know God, lead with integrity, serve faithfully
              and make a difference in their families, church and community.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full bg-[#D62828] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-950/20 transition hover:bg-[#A61F1F]"
              >
                Discover Kingdom Men
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Get Connected
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#D62828]">
              About Kingdom Men
            </p>

            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[#061B3A] sm:text-4xl md:text-5xl">
              Men who stand for Christ.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600">
              Kingdom Men is a community of men at CFF Juja committed to
              growing together in faith, character and purpose. We believe that
              godly men have an important role to play in their families, the
              church and society.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
              Through fellowship, Bible study, prayer, mentorship and service,
              we encourage men to become responsible leaders who reflect Christ
              in every area of life.
            </p>
          </div>

          <div className="rounded-3xl bg-[#061B3A] p-8 shadow-xl md:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D62828] text-2xl text-white">
              ✦
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-200">
              Our Scripture
            </p>

            <blockquote className="mt-5 text-2xl font-semibold leading-relaxed text-white">
              “Be on your guard; stand firm in the faith; be courageous; be
              strong.”
            </blockquote>

            <p className="mt-5 text-sm font-semibold text-white/60">
              1 Corinthians 16:13
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-gray-50 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#D62828]">
              What We Do
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[#061B3A] sm:text-4xl">
              Growing stronger together.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Kingdom Men creates spaces where men can grow spiritually,
              strengthen one another and become better leaders in every area
              of life.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Bible Study",
                text: "Studying God's Word and applying biblical principles to everyday life.",
              },
              {
                number: "02",
                title: "Prayer",
                text: "Coming together to seek God, pray for our families, church and community.",
              },
              {
                number: "03",
                title: "Fellowship",
                text: "Building strong friendships and encouraging one another through every season of life.",
              },
              {
                number: "04",
                title: "Mentorship",
                text: "Creating opportunities for older and younger men to learn, guide and grow together.",
              },
              {
                number: "05",
                title: "Leadership",
                text: "Equipping men to lead their families, serve the church and influence their communities.",
              },
              {
                number: "06",
                title: "Service & Outreach",
                text: "Using our time, skills and resources to serve others and advance God's Kingdom.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group rounded-3xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#123B63]/20 hover:shadow-xl"
              >
                <span className="text-sm font-bold text-[#D62828]">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-[#061B3A]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#D62828]">
                Gallery
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#061B3A] sm:text-4xl md:text-5xl">
                Brotherhood in action.
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                Moments of fellowship, service, leadership and growth within
                Kingdom Men.
              </p>
            </div>

            <div className="hidden h-px flex-1 bg-gray-200 md:ml-12 md:block" />
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
            {galleryImages.map((image, index) => (
              <div
                key={image.title}
                className={`group relative overflow-hidden rounded-3xl ${
                  index === 0 || index === 3
                    ? "md:col-span-2 md:row-span-2"
                    : ""
                }`}
              >
                <div
                  className={`relative ${
                    index === 0 || index === 3
                      ? "aspect-[4/3] md:aspect-auto md:h-full md:min-h-[420px]"
                      : "aspect-square"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A]/80 via-transparent to-transparent opacity-70" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-sm font-semibold text-white md:text-base">
                      {image.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOCUS */}
      <section className="bg-[#123B63] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-red-300">
                Our Focus
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Becoming men of Kingdom influence.
              </h2>

              <p className="mt-6 text-base leading-8 text-white/70">
                We want every man to grow in Christ and become a positive
                influence in his family, workplace, church and community.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Faith & Character",
                "Family & Responsibility",
                "Leadership & Purpose",
                "Service & Brotherhood",
              ].map((value, index) => (
                <div
                  key={value}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D62828] text-sm font-bold text-white">
                      {index + 1}
                    </span>

                    <p className="font-semibold text-white">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#061B3A] px-6 py-14 text-center shadow-2xl md:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-300">
            Get Involved
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Walk the journey together.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70">
            Connect with Kingdom Men, grow in your faith and discover
            opportunities to serve God, your family and your community.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#D62828] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#A61F1F]"
            >
              Contact Us
            </Link>

            <Link
              href="/departments"
              className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Departments
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}