import Link from "next/link";

const galleryImages = [
  {
    src: "/images/gallery/gallery-1.jpg",
    title: "Worship & Fellowship",
    category: "Worship",
  },
  {
    src: "/images/gallery/gallery-2.jpg",
    title: "Sunday Service",
    category: "Church Life",
  },
  {
    src: "/images/gallery/gallery-3.jpg",
    title: "Praise & Worship",
    category: "Worship",
  },
  {
    src: "/images/gallery/gallery-4.jpg",
    title: "Community",
    category: "Fellowship",
  },
  {
    src: "/images/gallery/gallery-5.jpg",
    title: "Church Family",
    category: "Fellowship",
  },
  {
    src: "/images/gallery/gallery-6.jpg",
    title: "Together in Faith",
    category: "Church Life",
  },
  {
    src: "/images/gallery/gallery-7.jpg",
    title: "Celebrating Together",
    category: "Events",
  },
  {
    src: "/images/gallery/gallery-8.jpg",
    title: "Moments Together",
    category: "Church Life",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#F7F9FC]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#123B63] px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF6B6B]">
              CFF Juja
            </p>

            <h1 className="mt-4 text-5xl font-semibold leading-tight text-white md:text-7xl">
              Moments of faith,
              <br />
              <span className="text-[#FF6B6B]">fellowship & joy.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
              A glimpse into the life of our church family — worship,
              fellowship, community and the moments we share together.
            </p>
          </div>
        </div>

        {/* DECORATIVE SHAPE */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[40px] border-white/5" />
        <div className="absolute -bottom-32 right-20 h-72 w-72 rounded-full border-[40px] border-[#C62828]/20" />
      </section>

      {/* BREADCRUMB */}
      <div className="border-b border-[#D9E2EC] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-5 md:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-gray-400 transition hover:text-[#C62828]"
            >
              Home
            </Link>

            <span className="text-gray-300">/</span>

            <span className="font-medium text-[#123B63]">
              Gallery
            </span>
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">

          {/* SECTION HEADER */}
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C62828]">
              Our Church Life
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#10243D] md:text-4xl">
              Captured moments
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-500">
              From Sunday worship to fellowship and community moments,
              these are some of the memories that make our church family
              special.
            </p>
          </div>

          {/* IMAGE GRID */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-3xl bg-gray-200 ${
                  index === 0
                    ? "sm:col-span-2 lg:col-span-2 lg:row-span-2"
                    : ""
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
                    index === 0
                      ? "h-[420px] sm:h-[500px] lg:h-full lg:min-h-[620px]"
                      : "h-[320px]"
                  }`}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6B6B]">
                    {image.category}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-5 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#123B63] px-6 py-14 text-center md:px-12 md:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF6B6B]">
            You belong here
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
            Come and be part of the CFF Juja family.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/70">
            Join us for worship, fellowship and an opportunity to grow
            together in Christ.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex rounded-full bg-[#C62828] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#A91F1F]"
          >
            Find Us
          </Link>
        </div>
      </section>

    </main>
  );
}