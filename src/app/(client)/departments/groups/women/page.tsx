import Link from "next/link";

export default function DaughtersOfZionPage() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1400&q=85",
      alt: "Women fellowshipping together",
      title: "Sisterhood",
    },
    {
      src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85",
      alt: "Women spending time together",
      title: "Growing Together",
    },
    {
      src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=1400&q=85",
      alt: "Women enjoying fellowship",
      title: "Fellowship",
    },
    {
      src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1400&q=85",
      alt: "Women participating in an activity",
      title: "Serving Together",
    },
    {
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      alt: "Woman in the community",
      title: "Faith & Purpose",
    },
    {
      src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=1400&q=85",
      alt: "Women together",
      title: "Making Memories",
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
              "url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1800&q=85')",
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
              Daughters
              <span className="block text-blue-200">of Zion</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              A sisterhood of women growing in Christ, walking together in
              faith and using their gifts to impact their families, church and
              community.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full bg-[#D62828] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-950/20 transition hover:bg-[#A61F1F]"
              >
                Discover Daughters of Zion
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
              About Daughters of Zion
            </p>

            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[#061B3A] sm:text-4xl md:text-5xl">
              Women rooted in Christ and connected in sisterhood.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600">
              Daughters of Zion is a community of women at CFF Juja who seek to
              grow together in their relationship with God and encourage one
              another through every season of life.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
              Through prayer, Bible study, fellowship, mentorship and service,
              we seek to equip women to live out their God-given identity,
              gifts and purpose.
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
              “Arise, shine, for your light has come, and the glory of the Lord
              rises upon you.”
            </blockquote>

            <p className="mt-5 text-sm font-semibold text-white/60">
              Isaiah 60:1
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
              Growing, serving and walking together.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Daughters of Zion creates opportunities for women to grow
              spiritually, build meaningful relationships and use their gifts
              for God's Kingdom.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Bible Study",
                text: "Studying God's Word and discovering how biblical truth applies to every area of life.",
              },
              {
                number: "02",
                title: "Prayer",
                text: "Coming together to seek God, intercede for others and strengthen our faith through prayer.",
              },
              {
                number: "03",
                title: "Fellowship",
                text: "Building genuine friendships and creating a supportive sisterhood where women can belong.",
              },
              {
                number: "04",
                title: "Mentorship",
                text: "Encouraging women of different generations to learn from, support and strengthen one another.",
              },
              {
                number: "05",
                title: "Leadership",
                text: "Equipping women to discover their gifts and confidently serve God, the church and community.",
              },
              {
                number: "06",
                title: "Outreach & Service",
                text: "Showing God's love through practical service, outreach and support for those in need.",
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
                Faith, friendship
                <span className="block text-[#123B63]">
                  and sisterhood.
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                A glimpse into the fellowship, service, growth and memories
                shared by the Daughters of Zion.
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
                Women living with Kingdom purpose.
              </h2>

              <p className="mt-6 text-base leading-8 text-white/70">
                We desire to see every woman rooted in Christ, confident in
                her God-given identity and equipped to make a difference
                wherever God has placed her.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Faith & Identity",
                "Family & Relationships",
                "Purpose & Leadership",
                "Service & Sisterhood",
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
            You are part of the sisterhood.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70">
            Connect with the Daughters of Zion, grow in your relationship with
            Christ and discover opportunities to serve and encourage others.
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
