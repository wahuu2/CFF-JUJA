import Link from "next/link";

const ministries = [
  {
    slug: "music",
    title: "Music Ministry",
    number: "01",
    description:
      "Using music and worship to create an atmosphere where people can praise God, encounter His presence, and grow in their faith.",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "media",
    title: "Media Ministry",
    number: "02",
    description:
      "Helping share the message of CFF Juja through photography, video, livestreaming, social media, and digital communication.",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "ushering",
    title: "Ushering Ministry",
    number: "03",
    description:
      "Serving with warmth and excellence by welcoming people, helping them feel comfortable, and supporting the smooth running of church services.",
    image:
      "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "intercessory",
    title: "Intercessory Ministry",
    number: "04",
    description:
      "A ministry committed to prayer, standing in the gap for individuals, families, the church, and the wider community.",
    image:
      "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "hospitality",
    title: "Hospitality Ministry",
    number: "05",
    description:
      "Creating a welcoming environment where members and visitors can experience genuine Christian love, care, and fellowship.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "evangelism",
    title: "Evangelism & Missions",
    number: "06",
    description:
      "Sharing the Gospel, reaching people with the love of Christ, and supporting the church's mission to make disciples and serve the wider community.",
    image:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1400&q=85",
  },
];

export default function MinistriesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#061B3A] px-5 pb-24 pt-40 md:px-8 md:pb-32 md:pt-48">
        {/* Decorative shapes */}
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#0B3D91]/40 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-[#D62828]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
              Our Ministries
            </p>

            <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl">
              There is a place
              <span className="block text-white/60">
                for you to serve.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
              Our ministries provide opportunities to grow in faith, build
              meaningful relationships, discover your gifts, and serve God and
              others.
            </p>
          </div>

          {/* Hero bottom detail */}
          <div className="mt-14 flex items-center gap-4">
            <div className="h-px w-12 bg-[#D62828]" />
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              Find your place. Make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                Serve With Us
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-[#061B3A] md:text-5xl">
                Growing together.
                <br />
                Serving together.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-base leading-8 text-[#061B3A]/60">
                At CFF Juja, ministry is about more than what happens during a
                service. It is about using our gifts, time, and abilities to
                build the church and make a difference in the lives of others.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <div className="h-1 w-10 rounded-full bg-[#D62828]" />
                <div className="h-1 w-3 rounded-full bg-[#0B3D91]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MINISTRIES */}
      <section className="bg-[#F5F7FA] px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0B3D91]">
                Find Your Place
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#061B3A] md:text-5xl">
                Our ministry areas.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#061B3A]/50 md:text-right">
              Discover an area where you can connect, grow, serve, and use the
              gifts God has given you.
            </p>
          </div>

          {/* Ministry cards */}
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {ministries.map((ministry) => (
              <article
                key={ministry.slug}
                className="group overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-[#061B3A]/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={ministry.image}
                    alt={`${ministry.title} placeholder`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A]/90 via-[#061B3A]/20 to-transparent" />

                  {/* Number */}
                  <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white backdrop-blur-md ring-1 ring-white/20">
                    {ministry.number}
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/55">
                      CFF Juja
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold leading-tight text-white">
                      {ministry.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <p className="text-sm leading-7 text-[#061B3A]/60">
                    {ministry.description}
                  </p>

                  <Link
                    href={`/ministries/${ministry.slug}`}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#D62828] transition-all duration-300 group-hover:gap-3"
                  >
                    Learn More
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 border-t border-[#061B3A]/10 pt-7">
            <p className="text-center text-xs leading-6 text-[#061B3A]/40">
              Ministry information, leadership details, meeting schedules, and
              official ministry contacts will be confirmed by CFF Juja
              leadership.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0B3D91] px-5 py-24 md:px-8 md:py-28">
        {/* Decorative shapes */}
        <div className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#D62828]/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/55">
            Get Involved
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Ready to serve?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/65">
            Discover where your gifts, passions, and abilities can make a
            difference in the church and the community.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D62828] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#061B3A]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#B91C1C]"
          >
            Contact Us
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}