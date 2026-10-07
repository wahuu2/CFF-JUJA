import Link from "next/link";

export default function TeensPage() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1400&q=85",
      alt: "Teenagers spending time together",
      title: "Growing Together",
    },
    {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85",
      alt: "Young people learning together",
      title: "Learning & Growing",
    },
    {
      src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85",
      alt: "Young people fellowshipping",
      title: "Fellowship",
    },
    {
      src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1400&q=85",
      alt: "Teenagers participating together",
      title: "Making Memories",
    },
    {
      src: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1400&q=85",
      alt: "Young person smiling",
      title: "Confidence & Purpose",
    },
    {
      src: "https://images.unsplash.com/photo-1504159506876-f8338247a14a?auto=format&fit=crop&w=1400&q=85",
      alt: "Young people together",
      title: "Together in Faith",
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
              "url('https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1800&q=85')",
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
              Teens
              <span className="block text-blue-200">Ministry</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              Helping teenagers know Christ, grow in faith, discover their
              identity and become confident young people who live for God.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full bg-[#D62828] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-950/20 transition hover:bg-[#A61F1F]"
              >
                Discover Teens Ministry
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
              About Teens Ministry
            </p>

            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[#061B3A] sm:text-4xl md:text-5xl">
              Growing in Christ, identity and purpose.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600">
              The Teens Ministry at CFF Juja is a place where teenagers can
              build a strong relationship with God while navigating the
              challenges and opportunities of growing up.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
              Through Bible study, prayer, fellowship, mentorship and
              activities, we create an environment where teenagers can ask
              questions, discover their gifts and develop a faith that becomes
              their own.
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
              “Don’t let anyone look down on you because you are young, but
              set an example for the believers.”
            </blockquote>

            <p className="mt-5 text-sm font-semibold text-white/60">
              1 Timothy 4:12
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
              Faith, friendship and growth.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              We provide opportunities for teenagers to grow spiritually,
              develop healthy relationships and discover how they can use their
              gifts to honour God.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Bible Study",
                text: "Exploring God's Word and learning how to apply biblical truth to everyday teenage life.",
              },
              {
                number: "02",
                title: "Prayer",
                text: "Teaching teenagers to seek God, trust Him and bring their hopes, questions and challenges before Him.",
              },
              {
                number: "03",
                title: "Fellowship",
                text: "Creating a safe and welcoming environment where teenagers can build meaningful friendships.",
              },
              {
                number: "04",
                title: "Mentorship",
                text: "Providing godly guidance and positive role models to help teenagers navigate important stages of life.",
              },
              {
                number: "05",
                title: "Talent & Creativity",
                text: "Helping teenagers discover and develop their gifts through music, media, arts, sports and other activities.",
              },
              {
                number: "06",
                title: "Outreach & Service",
                text: "Encouraging teenagers to show God's love by serving others and making a positive difference in their community.",
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
                  and teenage life.
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                A glimpse into the fellowship, learning, activities and
                memories shared by the Teens Ministry.
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
                Raising a generation that knows God.
              </h2>

              <p className="mt-6 text-base leading-8 text-white/70">
                We desire to see teenagers become confident in Christ,
                grounded in God's Word and prepared to make godly decisions as
                they grow into adulthood.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Faith & Identity",
                "Character & Choices",
                "Purpose & Gifts",
                "Friendship & Community",
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
            You belong here.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70">
            Connect with the Teens Ministry, grow in your relationship with
            Christ, make new friends and discover the gifts God has given you.
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