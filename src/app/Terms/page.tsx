import Link from "next/link";

const sections = [
  {
    title: "1. Acceptance of These Terms",
    content: [
      "Welcome to the CFF Juja website. These Terms and Conditions govern your access to and use of this website and its available features.",
      "By accessing or using this website, you agree to these terms. If you do not agree, please discontinue using the website.",
    ],
  },
  {
    title: "2. Purpose of the Website",
    content: [
      "This website is intended to share information about CFF Juja, church services, ministries, events, announcements, and other church-related activities.",
      "Information published on the website may be updated, corrected, or removed as church activities and details change. Please contact the church to confirm important information before relying on it.",
    ],
  },
  {
    title: "3. Acceptable Use",
    content: [
      "You agree to use this website responsibly and in a manner consistent with applicable laws and these terms.",
    ],
    bullets: [
      "Do not use the website for unlawful, fraudulent, or harmful purposes.",
      "Do not attempt to gain unauthorised access to the website or its systems.",
      "Do not upload or submit abusive, threatening, misleading, or unlawful material.",
      "Do not interfere with the website's operation or attempt to compromise its security.",
      "Respect the rights, privacy, and dignity of other people.",
    ],
  },
  {
    title: "4. Privacy and Personal Information",
    content: [
      "CFF Juja should handle personal information submitted through the website responsibly and in accordance with applicable data protection laws in Kenya.",
      "If you submit information through a contact form, prayer request form, event registration, or another website feature, provide only information that is necessary for that purpose.",
      "A separate Privacy Policy should explain what information is collected, why it is collected, how it is used, who may receive it, how long it is retained, and how individuals can exercise their applicable rights.",
    ],
  },
  {
    title: "5. Prayer Requests and Other Submissions",
    content: [
      "If the website allows you to submit prayer requests, testimonies, questions, feedback, or other messages, please submit information that you are comfortable sharing for the stated purpose.",
      "Please avoid including sensitive personal information about yourself or another person unless it is necessary and the relevant safeguards have been explained.",
      "CFF Juja should obtain appropriate permission before publishing identifiable testimonies, photographs, or personal stories. Submitting a private prayer request should not automatically make it public.",
    ],
  },
  {
    title: "6. Intellectual Property and Copyright",
    content: [
      "Unless otherwise indicated, website text, photographs, graphics, logos, videos, and other materials may be protected by intellectual property laws or belong to their respective owners.",
      "You may access and share links to website pages for personal, non-commercial purposes. You must not reproduce, modify, distribute, or commercially use protected material without permission from the relevant rights holder, except where permitted by law.",
      "If you believe material on this website infringes your rights, please contact the church with details of the material and your concern.",
    ],
  },
  {
    title: "7. Third-Party Links",
    content: [
      "The website may link to external websites, social media platforms, maps, video services, or other third-party resources.",
      "These services are not necessarily controlled by CFF Juja. Their content, availability, privacy practices, and terms are governed by their respective providers. Visiting external links is at your discretion.",
    ],
  },
  {
    title: "8. Website Availability and Disclaimer",
    content: [
      "CFF Juja will make reasonable efforts to keep the website useful and available, but uninterrupted access cannot be guaranteed. Maintenance, technical problems, or circumstances beyond the church's control may affect availability.",
      "Website content is provided for general informational and church communication purposes. Although reasonable care should be taken to keep information accurate, errors or outdated details may occur.",
      "Nothing in these terms excludes or limits any liability or right that cannot lawfully be excluded or limited under applicable law.",
    ],
  },
  {
    title: "9. Changes to These Terms",
    content: [
      "These terms may be revised when the website, church activities, or applicable requirements change. The updated version will be published on this page with a revised effective date.",
      "You should review this page periodically to stay informed of the current terms.",
    ],
  },
  {
    title: "10. Governing Law",
    content: [
      "These terms are intended to be governed by the laws of Kenya. Any dispute relating to the website will be handled in accordance with applicable Kenyan law and the jurisdiction of the competent courts.",
    ],
  },
  {
    title: "11. Contact the Church",
    content: [
      "If you have questions about these Terms and Conditions or wish to raise a concern about the website, please contact CFF Juja through the official contact details published on the website.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] text-gray-800">
      <section className="bg-[#061B3A] px-6 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            CFF Juja
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Terms and Conditions
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Please read these terms carefully to understand the guidelines
            for using the CFF Juja website.
          </p>

          <p className="mt-6 text-sm text-gray-400">
            Effective date: To be confirmed before publication
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[260px_1fr] lg:py-16">
        <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-6 lg:sticky lg:top-8">
          <h2 className="mb-4 text-lg font-bold text-[#061B3A]">
            On this page
          </h2>

          <nav aria-label="Terms and conditions sections">
            <ul className="space-y-3 text-sm">
              {sections.map((section, index) => (
                <li key={section.title}>
                  <a
                    href={`#section-${index + 1}`}
                    className="text-gray-600 transition hover:text-[#0B3D91]"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <article className="min-w-0 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="mb-10 border-b border-gray-200 pb-8">
            <p className="leading-8 text-gray-600">
              These Terms and Conditions explain the basic rules for using
              this website. They should be read together with the website's
              Privacy Policy, where available.
            </p>
          </div>

          <div className="space-y-10">
            {sections.map((section, index) => (
              <section
                key={section.title}
                id={`section-${index + 1}`}
                className="scroll-mt-8"
              >
                <h2 className="text-xl font-bold text-[#061B3A] sm:text-2xl">
                  {section.title}
                </h2>

                <div className="mt-4 space-y-4 text-sm leading-7 text-gray-600 sm:text-base">
                  {section.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                {section.bullets && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-7 text-gray-600 sm:text-base">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-xl border-l-4 border-[#D62828] bg-[#F5F7FA] p-5">
            <h2 className="font-semibold text-[#061B3A]">
              Questions about these terms?
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Please use the official contact information provided by CFF
              Juja to reach the church.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex font-semibold text-[#0B3D91] underline underline-offset-4 hover:text-[#D62828]"
            >
              Contact the church
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}