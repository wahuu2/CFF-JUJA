import Link from "next/link";

export default function FellowshipGroupsPage() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1400&q=85",
      alt: "People fellowshipping together",
      title: "Together in Fellowship",
    },
    {
      src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85",
      alt: "Friends spending time together",
      title: "Building Friendships",
    },
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=85",
      alt: "People meeting together",
      title: "Connecting",
    },
    {
      src: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&w=1400&q=85",
      alt: "People enjoying fellowship",
      title: "Sharing Life",
    },
    {
      src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85",
      alt: "Friends together",
      title: "Friendship",
    },
    {
      src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",
      alt: "People working together",
      title: "Serving Together",
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
              Fellowship
              <span className="block text-blue-200">Groups</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              Building meaningful Christian relationships where people grow
              together, encourage one another and share life in Christ.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full bg-[#D62828] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-950/20 transition hover:bg-[#A61F1F]"
              >
                Discover Fellowship
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
              About Fellowship Groups
            </p>

            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[#061B3A] sm:text-4xl md:text-5xl">
              Doing life together in Christ.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600">
              Fellowship Groups at CFF Juja provide a place where members can
              connect beyond the main church gatherings, build genuine
              friendships and encourage one another in their walk with Christ.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
              Through prayer, Bible discussions, sharing experiences and
              supporting one another, fellowship groups help create a strong
              sense of belonging and community within the church.
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
              “And let us consider how we may spur one another on toward love
              and good deeds.”
            </blockquote>

            <p className="mt-5 text-sm font-semibold text-white/60">
              Hebrews 10:24
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
              Connecting, encouraging and growing together.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Fellowship Groups create opportunities for members to build
              relationships, strengthen their faith and support one another
              through different seasons of life.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Fellowship",
                text: "Creating welcoming spaces where members can connect, build friendships and enjoy meaningful Christian community.",
              },
              {
                number: "02",
                title: "Bible Discussions",
                text: "Studying God's Word together and discussing how biblical principles apply to everyday life.",
              },
              {
                number: "03",
                title: "Prayer",
                text: "Praying together, sharing prayer needs and encouraging one another to trust God.",
              },
              {
                number: "04",
                title: "Encouragement",
                text: "Supporting one another through challenges, celebrating victories and reminding each other of God's faithfulness.",
              },
              {
                number: "05",
                title: "Care & Support",
                text: "Standing with members during important moments and offering practical and spiritual support where possible.",
              },
              {
                number: "06",
                title: "Service",
                text: "Working together to serve the church, support others and make a positive difference in the community.",
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
                Life is better
                <span className="block text-[#123B63]">
                  together.
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                Moments of friendship, fellowship, prayer, service and
                community within CFF Juja.
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
                A church family beyond Sunday.
              </h2>

              <p className="mt-6 text-base leading-8 text-white/70">
                We want every member to experience genuine Christian community,
                find people who will walk with them and have opportunities to
                encourage and serve others.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Faith & Growth",
                "Friendship & Community",
                "Care & Encouragement",
                "Service & Belonging",
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
            Find your people.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70">
            Connect with a fellowship group, build meaningful relationships
            and grow together as part of the CFF Juja family.
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