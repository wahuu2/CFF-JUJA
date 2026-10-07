import Link from "next/link";
import { notFound } from "next/navigation";

const sermons = {
  "the-greater-sacrifice": {
    title: "The Greater Sacrifice",
    category: "Sunday Service",
    speaker: "CFF Juja",
    date: "2026",
    image:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1600&q=85",

    youtubeUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",

    summary: `
      This sermon explores the concept of sacrifice from a biblical
      perspective. It begins by defining greater and sacrifice, and then
      examines the biblical meaning of sacrifice as an act of offering to God.

      The sermon traces the practice of sacrifice throughout Scripture,
      beginning with God's act of clothing Adam and Eve with animal skins
      in Genesis 3:21. The practice of sacrifice continued through the lives
      of Noah, Abraham, Isaac, Jacob, and Job.

      The message explains the different types of sacrifices in the Old
      Testament and the requirements for the animals used in sacrifice.
      It also examines how sacrifice can be misused for selfish and evil
      purposes.

      The sermon ultimately points to Jesus Christ as the greater sacrifice.
      The sacrifices of the Old Testament pointed forward to Christ, whose
      sacrifice was once and for all, dealing with sin and restoring
      fellowship between humanity and God.
    `,

    scriptures: [
      "Genesis 3:21",
      "Genesis 4:2–5",
      "Genesis 8:20",
      "Genesis 12:7–8",
      "Genesis 13:4",
      "Genesis 13:18",
      "Genesis 22:13",
      "Genesis 26:25",
      "Genesis 31:54",
      "Genesis 33:20",
      "Genesis 35:1–7",
      "Genesis 46:1",
      "2 Kings 3:27",
      "Hebrews 9:25–27",
      "Hebrews 10:19–31",
      "Hebrews 7:26–27",
    ],
  },

  "the-power-of-prayer": {
    title: "The Power of Prayer",
    category: "Sunday Service",
    speaker: "CFF Juja",
    date: "2026",
    image:
      "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1600&q=85",

    youtubeUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",

    summary: `
      This message explores the importance of prayer in the life of a
      believer and encourages Christians to develop a consistent and
      meaningful prayer life.
    `,

    scriptures: [
      "1 Thessalonians 5:17",
      "Philippians 4:6–7",
      "Matthew 6:5–13",
    ],
  },
};

export default async function SermonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const sermon =
    sermons[slug as keyof typeof sermons];

  if (!sermon) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#061B3A] pt-32 md:pt-40">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${sermon.image}')`,
          }}
        />

        <div className="absolute inset-0 bg-[#061B3A]/80" />

        <div className="absolute bottom-0 left-0 h-1.5 w-full bg-[#D62828]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">

          <Link
            href="/sermons"
            className="inline-flex items-center text-sm font-medium text-white/60 transition hover:text-white"
          >
            ← Back to Sermons
          </Link>

          <p className="mt-10 text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
            {sermon.category}
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            {sermon.title}
          </h1>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/55">
            <span>{sermon.speaker}</span>
            <span>•</span>
            <span>{sermon.date}</span>
          </div>

        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-[#F7F9FC] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl">

          <div className="overflow-hidden rounded-3xl bg-black shadow-2xl">

            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={sermon.youtubeUrl}
                title={sermon.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

          </div>

        </div>
      </section>

      {/* SERMON CONTENT */}
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.5fr_0.7fr]">

          {/* SUMMARY */}
          <article>

            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#D62828]">
              Sermon Summary
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#123B63] md:text-5xl">
              Here's a summary of the sermon
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-gray-600 md:text-lg">

              {sermon.summary
                .trim()
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index}>
                    {paragraph.trim()}
                  </p>
                ))}

            </div>

          </article>

          {/* SCRIPTURES */}
          <aside>

            <div className="rounded-3xl bg-[#123B63] p-7 md:p-8">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D62828]">
                Scripture References
              </p>

              <h3 className="mt-4 text-2xl font-bold text-white">
                Bible References
              </h3>

              <div className="mt-7 space-y-3">

                {sermon.scriptures.map((scripture) => (
                  <div
                    key={scripture}
                    className="rounded-xl bg-white/10 px-4 py-3 text-sm text-white/75"
                  >
                    {scripture}
                  </div>
                ))}

              </div>

            </div>

          </aside>

        </div>
      </section>

      {/* SHARE */}
      <section className="bg-[#F7F9FC] px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#D62828]">
            Spread The Word
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#123B63] md:text-4xl">
            Share this message
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500">
            Help someone else hear the Word by sharing this sermon with
            your family and friends.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">

            <a
              href="#"
              className="rounded-full bg-[#1877F2] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Facebook
            </a>

            <a
              href="#"
              className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              WhatsApp
            </a>

            <a
              href="#"
              className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Twitter
            </a>

            <a
              href="#"
              className="rounded-full bg-[#123B63] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Email
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}