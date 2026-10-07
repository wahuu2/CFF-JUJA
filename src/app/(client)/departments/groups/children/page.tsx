import Link from "next/link";

export default function ChildrenMinistryPage() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1504159506876-f8338247d9ee?auto=format&fit=crop&w=1200&q=85",
      alt: "Children learning together",
      title: "Learning Together",
    },
    {
      src: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=85",
      alt: "Children participating in church activities",
      title: "Growing in Faith",
    },
    {
      src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=85",
      alt: "Children enjoying fellowship",
      title: "Fellowship & Friendship",
    },
    {
      src: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1200&q=85",
      alt: "Children enjoying an activity",
      title: "Fun & Activities",
    },
    {
      src: "https://images.unsplash.com/photo-1472162314594-5f9d8c0e3b6a?auto=format&fit=crop&w=1200&q=85",
      alt: "Children together",
      title: "Making Memories",
    },
    {
      src: "https://images.unsplash.com/photo-1602030028438-4cf153cbae9e?auto=format&fit=crop&w=1200&q=85",
      alt: "Children spending time together",
      title: "Community",
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
              "url('https://images.unsplash.com/photo-1504159506876-f8338247d9ee?auto=format&fit=crop&w=1800&q=85')",
          }}
        />

        <div className="absolute inset-0 bg-[#061B3A]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061B3A] via-[#061B3A]/70 to-transparent" />

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
              Children's
              <span className="block text-blue-200">Ministry</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              Creating a safe, joyful and Christ-centered environment where
              children can learn about Jesus, grow in faith and discover God's
              purpose for their lives.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full bg-[#D62828] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-950/20 transition hover:bg-[#A61F1F]"
              >
                Discover Our Ministry
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

      {/* INTRO */}
      <section id="about" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#D62828]">
              About the Ministry
            </p>

            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[#061B3A] sm:text-4xl md:text-5xl">
              Helping children know, love and follow Jesus.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600">
              The Children's Ministry at CFF Juja exists to help children
              develop a strong foundation in God's Word from an early age. We
              provide a welcoming environment where children can worship, learn
              Scripture, build friendships and grow in their relationship with
              Christ.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
              Through Bible lessons, worship, prayer, activities and
              fellowship, we seek to make faith understandable, practical and
              enjoyable for every child.
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
              “Let the little children come to me, and do not hinder them, for
              the kingdom of heaven belongs to such as these.”
            </blockquote>

            <p className="mt-5 text-sm font-semibold text-white/60">
              Matthew 19:14
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
              Growing young hearts in faith
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              We create opportunities for children to learn God's Word, build
              meaningful friendships and experience the joy of following
              Christ.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Bible Lessons",
                text: "Age-appropriate teaching that helps children understand God's Word and apply it to everyday life.",
              },
              {
                number: "02",
                title: "Worship & Prayer",
                text: "Helping children develop a personal relationship with God through worship and prayer.",
              },
              {
                number: "03",
                title: "Fun & Fellowship",
                text: "Games, activities and fellowship that help children build friendships in a welcoming environment.",
              },
              {
                number: "04",
                title: "Discipleship",
                text: "Helping children develop Christian values and grow in their understanding of the Gospel.",
              },
              {
                number: "05",
                title: "Special Programs",
                text: "Supporting children's events, celebrations, holiday programs and other church activities.",
              },
              {
                number: "06",
                title: "Family Support",
                text: "Working alongside parents and guardians to encourage children in their faith journey.",
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
                Moments that matter.
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                A glimpse into the joy, fellowship and memories shared through
                the Children's Ministry.
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
                Building a strong foundation for life.
              </h2>

              <p className="mt-6 text-base leading-8 text-white/70">
                We believe that children can know Jesus, hear God's Word and
                begin living out their faith from an early age.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Knowing God's Word",
                "Growing in Prayer",
                "Living with Integrity",
                "Showing God's Love",
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
            Help us nurture the next generation.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70">
            Whether you would like to serve, support children's activities or
            simply learn more about the ministry, we would love to connect with
            you.
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