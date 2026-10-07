import Link from "next/link";
import { notFound } from "next/navigation";

const ministries = {
  music: {
    title: "Music Ministry",
    label: "Praise & Worship",

    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=85",

    intro:
      "Leading the congregation in worship and using the gift of music to glorify God, encourage believers, and draw people closer to Him.",

    about:
      "The Music Ministry plays an important role in the worship life of the church. Its purpose is to lead the congregation in worship in spirit and truth, as taught in John 4:23. The ministry provides an opportunity for members who have musical gifts and a willingness to serve to use their talents for the glory of God.",

    scripture:
      "Yet a time is coming and has now come when the true worshipers will worship the Father in the Spirit and in truth, for they are the kind of worshipers the Father seeks.",

    scriptureReference: "John 4:23",

    teams: [
      {
        name: "Praise & Worship Team",
        image:
          "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=85",
        description:
          "Leads the congregation in praise and worship during church services and other approved church gatherings. The team helps create opportunities for the congregation to worship God together.",
      },
      {
        name: "Choir",
        image:
          "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1200&q=85",
        description:
          "Uses group singing to minister to the congregation, nurture musical gifts, and encourage members to grow in their ability to serve through music.",
      },
      {
        name: "Special Music Teams",
        image:
          "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=85",
        description:
          "Provides opportunities for singers and other gifted musicians to minister through different musical styles, languages, and expressions of worship.",
      },
    ],

    keyRoles: [
      "Lead the congregation in worship in spirit and truth",
      "Lead praise and worship during church services",
      "Identify, encourage, and develop musical gifts and talents",
      "Recruit and train new members",
      "Prepare and rehearse music for services and church functions",
      "Compose, develop, and record original songs where appropriate",
    ],

    impact: [
      "Encouraging the congregation to worship God in spirit and truth",
      "Helping believers focus on God through praise and worship",
      "Providing opportunities for members to develop and use their musical gifts",
      "Strengthening fellowship and participation through music",
    ],

    requirements: [
      "Be born again",
      "Be a person above reproach",
      "Dress decently and modestly",
      "Maintain good public relations",
      "Have a willingness to learn, practise, and serve with others",
    ],

    additionalActivities: [
      "Worship services",
      "Music and worship seminars",
      "Team-building activities",
    ],

    involvement:
      "If you have a gift for singing, playing an instrument, or supporting worship through music, consider connecting with the Music Ministry to learn how you can serve.",
  },

  evangelism: {
    title: "Evangelism & Missions",
    label: "Evangelism & Outreach",

    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1600&q=85",

    intro:
      "Sharing the Gospel, reaching people with the love of Christ, and supporting the church's mission to make disciples and serve the wider community.",

    about:
      "The Evangelism & Missions Ministry exists to help the church fulfil the Great Commission by sharing the Gospel of Jesus Christ and reaching people with God's love. The ministry encourages members to be intentional about sharing their faith, supporting outreach activities, and participating in missions that bring hope and practical help to communities.",

    purpose:
      "To equip and encourage believers to share the Gospel, reach people for Christ, make disciples, and participate in mission activities that demonstrate God's love in practical ways.",

    scripture:
      "Go into all the world and preach the gospel to all creation.",

    scriptureReference: "Mark 16:15",

    activities: [
      "Community evangelism and outreach",
      "Sharing the Gospel with individuals and families",
      "Supporting missions and missionary activities",
      "Organising evangelism campaigns and open-air meetings",
      "Visiting and ministering to people in the community",
      "Supporting practical outreach and community service initiatives",
    ],

    keyRoles: [
      "Share the Gospel of Jesus Christ with others",
      "Encourage members to become intentional witnesses for Christ",
      "Organise and support evangelism and outreach activities",
      "Reach out to communities with the message of hope and salvation",
      "Support missions and approved missionary initiatives",
      "Follow up and encourage people who respond to the Gospel",
    ],

    impact: [
      "More people hear and respond to the Gospel",
      "Members become more confident in sharing their faith",
      "Communities experience the love of Christ through practical service",
      "New believers are encouraged and connected to the church community",
    ],

    requirements: [
      "Be born again",
      "Have a genuine desire to share the Gospel",
      "Have a heart for people and communities",
      "Be willing to learn and participate in evangelism activities",
      "Demonstrate good character and respect toward others",
    ],

    additionalActivities: [
      "Evangelism training",
      "Community outreach",
      "Open-air evangelism",
      "Missions and mission support",
      "Community service activities",
      "Follow-up and discipleship",
    ],

    involvement:
      "If you have a heart for reaching people and sharing the love of Christ, connect with the Evangelism & Missions Ministry and discover how you can participate in outreach, missions, and making disciples.",
  },

  media: {
    title: "Media Ministry",
    label: "Media & Communications",

    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1600&q=85",

    intro:
      "Using creativity and technology to share the message of CFF Juja, document church activities, and connect with people beyond the church walls.",

    about:
      "The Media Ministry supports the communication and presentation of the church's message through digital media and technology. It helps document church activities, communicate important information, and share the message of Jesus Christ through appropriate media platforms.",

    purpose:
      "To use media, communication, and technology to support the church's mission, serve the congregation, and help more people engage with the message of the Gospel.",

    activities: [
      "Photography and videography during church services and events",
      "Video editing and preparation of church media content",
      "Managing and preparing content for social media platforms",
      "Supporting livestreaming and service presentations",
      "Preparing digital announcements and church communications",
      "Organising and maintaining church photos, videos, and media files",
    ],

    keyRoles: [
      "Capture important moments during church services and events",
      "Edit videos and prepare engaging digital content",
      "Share approved church updates and announcements",
      "Support livestreaming, projection, and presentation needs where applicable",
      "Help maintain a consistent and appropriate online presence",
      "Handle church media files responsibly and obtain permission before sharing sensitive content",
    ],

    impact: [
      "Helping communicate church news and announcements clearly",
      "Making approved sermons and church content accessible to more people",
      "Documenting church activities and special events",
      "Supporting evangelism through digital communication",
    ],

    requirements: [
      "Have a willingness to serve and learn",
      "Demonstrate responsibility and teamwork",
      "Use media and technology respectfully",
      "Respect privacy and seek permission before publishing identifiable or sensitive content",
      "Be willing to follow the church's communication and publishing guidelines",
    ],

    additionalActivities: [
      "Media training and skills development",
      "Planning and covering church events",
      "Content creation and video-editing sessions",
      "Learning new media tools and technologies",
    ],

    involvement:
      "If you are interested in photography, videography, video editing, social media, livestreaming, design, sound, or technology, connect with the Media Ministry to explore how you can use your skills to serve.",
  },

  ushering: {
    title: "Ushering Ministry",
    label: "Welcome & Service",

    image:
      "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?auto=format&fit=crop&w=1600&q=85",

    intro:
      "Serving with warmth and excellence by welcoming people, helping them feel comfortable, and supporting the smooth running of church services.",

    about:
      "The Ushering Ministry is an important ministry of service within the church. Ushers help create a welcoming, orderly, and comfortable environment where members and visitors can worship God freely.",

    scriptureRoles: [
      {
        role: "Doorkeeper",
        verse: "Psalm 84:10",
      },
      {
        role: "Priest",
        verse: "Numbers 3:5–10",
      },
      {
        role: "Gatekeeper",
        verse: "1 Chronicles 9:17–27",
      },
      {
        role: "Deacons",
        verse: "Acts 6:1–7",
      },
    ],

    keyRoles: [
      "Welcoming people at the door and making them feel wanted and appreciated",
      "Helping people find places to sit",
      "Helping visitors find assistance when necessary",
      "Maintaining order during the service",
      "Collecting tithes and offerings",
      "Distributing bulletins and service programs",
      "Cleaning and arranging seats in readiness for the service",
      "Helping calm and guide running children",
    ],

    impact: [
      "Members and visitors feel welcomed and appreciated",
      "Orderliness is maintained during services",
      "Members and visitors are able to find seats as necessary",
      "Tithes and offerings are collected in an organized manner",
      "Seats and the worship environment are prepared and kept orderly",
    ],

    requirements: [
      "Be a born-again Christian",
      "Be a person above reproach",
      "Have genuine love for people",
      "Dress decently and modestly",
      "Maintain good public relations",
    ],

    involvement:
      "If you have a heart for people and enjoy serving others, the Ushering Ministry provides an opportunity to welcome, assist, encourage, and serve the church family.",
  },

  intercessory: {
    title: "Intercessory Ministry",
    label: "Prayer & Intercession",

    image:
      "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1600&q=85",

    intro:
      "Standing in prayer for the church, its members, families, leaders, the nation, and the world.",

    about:
      "The Intercessory Ministry is dedicated to prayer and intercession for the church and to encouraging the congregation to pray. Intercession involves praying on behalf of others and bringing their needs before God. Prayer is an opportunity to spend intimate time with the Father, learn His wisdom, draw from His strength, experience His presence, and grow in His love. The ministry welcomes church members who have a burden for prayer and intercession.",

    purpose:
      "To encourage a culture of prayer within the church, intercede for the needs of others, and help believers develop a deeper and more personal relationship with God through prayer.",

    scripture:
      "I urge, then, first of all, that petitions, prayers, intercession and thanksgiving be made for all people.",

    scriptureReference: "1 Timothy 2:1",

    keyRoles: [
      "Mobilise the congregation to pray",
      "Pray and intercede for the church",
      "Pray for church members, families, leaders, young people, pastors, and ministries",
      "Intercede for the nation of Kenya and the wider world",
      "Encourage individuals and families to develop a deeper personal prayer life",
      "Strengthen the spiritual life of the church through consistent prayer",
    ],

    activities: [
      "Weekly prayer meetings",
      "Prayer retreats",
      "Overnight prayer vigils",
      "Prayer seminars",
      "Prayer walks",
      "Prayer drives",
    ],

    impact: [
      "Encouraging the church to become a praying community",
      "Providing prayer support for members, families, leaders, and ministries",
      "Strengthening personal and family prayer lives",
      "Interceding for the nation and the needs of the wider world",
    ],

    requirements: [
      "Be born again",
      "Have a genuine burden for prayer and intercession",
      "Be willing to pray consistently for others",
      "Have a willingness to participate in prayer gatherings and ministry activities",
    ],

    additionalActivities: [
      "Prayer retreats",
      "Overnight prayer vigils",
      "Prayer seminars",
      "Weekly prayer meetings",
      "Prayer walks",
      "Prayer drives",
    ],

    involvement:
      "If you have a burden for prayer and a desire to stand in the gap for others, connect with the Intercessory Ministry to learn how you can participate in prayer and intercession at CFF Juja.",
  },

  hospitality: {
    title: "Hospitality Ministry",
    label: "Welcome & Fellowship",

    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=85",

    intro:
      "Creating a welcoming environment where members and visitors can experience genuine Christian love, care, and fellowship.",

    about:
      "The Hospitality Ministry is dedicated to caring for visitors and helping create a warm and welcoming environment during worship services. The ministry is inspired by Hebrews 13:2, which reminds us to show hospitality to strangers. It is open to members of the church who have a heart and gift for hospitality.",

    scripture:
      "Do not forget to show hospitality to strangers, for by so doing some people have shown hospitality to angels without knowing it.",

    scriptureReference: "Hebrews 13:2",

    achievements: [
      "Welcoming and connecting with visitors who attend worship services",
      "Praying with people who have specific needs and encouraging them in faith",
      "Helping visitors feel welcomed, valued, and connected to the church community",
      "Creating opportunities for visitors to learn more about Christ and the church",
    ],

    keyRoles: [
      "Taking care of visitors who come to worship services",
      "Welcoming visitors with warmth, courtesy, and genuine care",
      "Helping visitors feel comfortable and valued during their time at church",
      "Connecting visitors with appropriate church members or ministries",
      "Offering prayer and encouragement to people with specific needs",
    ],

    impact: [
      "Visitors experience a warm and welcoming church environment",
      "People receive prayer, encouragement, and spiritual support",
      "Visitors have opportunities to connect with the church community",
      "A culture of Christian love and hospitality is strengthened within the church",
    ],

    requirements: [
      "Be born again",
      "Have a heart for God and His people",
      "Have a genuine desire to welcome and serve others",
      "Demonstrate kindness, courtesy, and respect toward people",
    ],

    additionalActivities: [
      "Seekers Sunday",
      "Hospitality seminars",
    ],

    involvement:
      "If you have a heart for people and a gift for hospitality, you can connect with the Hospitality Ministry and discover how you can help welcome, care for, and encourage those who come to CFF Juja.",
  },
} as const;

export default async function MinistryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const ministry = ministries[slug as keyof typeof ministries];

  if (!ministry) {
    notFound();
  }

  const isUshering = slug === "ushering";
  const isIntercessory = slug === "intercessory";
  const isHospitality = slug === "hospitality";
  const isMusic = slug === "music";
  const isMedia = slug === "media";
  const isEvangelism = slug === "evangelism";

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative h-[560px] overflow-hidden md:h-[650px]">
        <img
          src={ministry.image}
          alt={`${ministry.title} placeholder`}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#061B3A]/75" />

        <div className="absolute bottom-0 left-0 h-1 w-full bg-[#D62828]" />

        <div className="relative mx-auto flex h-full max-w-7xl items-end px-5 pb-20 md:px-8 md:pb-28">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
              {ministry.label}
            </p>

            <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl">
              {ministry.title}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
              {ministry.intro}
            </p>
          </div>
        </div>
      </section>

      {/* USHERING PAGE */}
      {isUshering ? (
        <>
          {/* ABOUT */}
          <section className="px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                    About The Ministry
                  </p>

                  <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#061B3A] md:text-5xl">
                    Serving with
                    <br />
                    love and excellence.
                  </h2>
                </div>

                <div>
                  <p className="text-lg leading-9 text-[#061B3A]/65 md:text-xl">
                    {ministry.about}
                  </p>

                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-1 w-12 rounded-full bg-[#D62828]" />
                    <div className="h-1 w-4 rounded-full bg-[#0B3D91]" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SCRIPTURAL FOUNDATION */}
          <section className="bg-[#F5F7FA] px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0B3D91]">
                  Biblical Foundation
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#061B3A] md:text-5xl">
                  The ministry of helps.
                </h2>

                <p className="mt-5 text-base leading-8 text-[#061B3A]/60">
                  Scripture presents different forms of service that help the
                  body of Christ function effectively. The following passages
                  provide a biblical foundation for the spirit of service
                  demonstrated through ushering.
                </p>
              </div>

              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {ministry.scriptureRoles.map((item, index) => (
                  <div
                    key={item.role}
                    className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-[#061B3A]/5"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D62828]">
                      0{index + 1}
                    </p>

                    <h3 className="mt-4 text-xl font-semibold text-[#061B3A]">
                      {item.role}
                    </h3>

                    <p className="mt-3 text-sm font-medium text-[#0B3D91]">
                      {item.verse}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* KEY ROLES */}
          <section className="px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto max-w-7xl">
              <div className="mb-14">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                  Key Roles
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#061B3A] md:text-5xl">
                  What our ushers do.
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {ministry.keyRoles.map((role, index) => (
                  <div
                    key={role}
                    className="group rounded-[1.5rem] border border-[#061B3A]/10 p-7 transition duration-300 hover:-translate-y-1 hover:border-[#0B3D91]/20 hover:shadow-lg md:p-8"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B3D91]/10 text-sm font-bold text-[#0B3D91] transition group-hover:bg-[#D62828] group-hover:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <p className="pt-1 text-base leading-7 text-[#061B3A]/70">
                        {role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* IMPACT */}
          <section className="bg-[#061B3A] px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                  Our Impact
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  Making every service welcoming and orderly.
                </h2>
              </div>

              <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {ministry.impact.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-7"
                  >
                    <p className="text-xs font-bold text-[#D62828]">
                      0{index + 1}
                    </p>

                    <p className="mt-4 text-base leading-7 text-white/65">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* REQUIREMENTS */}
          <section className="px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0B3D91]">
                    Requirements
                  </p>

                  <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[#061B3A] md:text-5xl">
                    Ready to serve?
                  </h2>

                  <p className="mt-5 leading-8 text-[#061B3A]/55">
                    Serving as an usher requires a heart that reflects Christ
                    and a willingness to serve people with humility and care.
                  </p>
                </div>

                <div className="space-y-4">
                  {ministry.requirements.map((requirement, index) => (
                    <div
                      key={requirement}
                      className="flex items-center gap-5 rounded-2xl bg-[#F5F7FA] p-5"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D62828] text-sm font-bold text-white">
                        {index + 1}
                      </div>

                      <p className="text-sm leading-6 text-[#061B3A]/70">
                        {requirement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      ) : isMusic ? (
        <>
          {/* ABOUT */}
          <section className="px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                  About The Ministry
                </p>

                <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#061B3A] md:text-5xl">
                  Worshipping God
                  <br />
                  through music.
                </h2>
              </div>

              <div>
                <p className="text-lg leading-9 text-[#061B3A]/65 md:text-xl">
                  {ministry.about}
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <div className="h-1 w-12 rounded-full bg-[#D62828]" />
                  <div className="h-1 w-4 rounded-full bg-[#0B3D91]" />
                </div>
              </div>
            </div>
          </section>

          {/* SCRIPTURE */}
          <section className="bg-[#061B3A] px-5 py-24 md:px-8 md:py-28">
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                Biblical Foundation
              </p>

              <blockquote className="mt-7 text-2xl font-medium leading-10 text-white md:text-4xl md:leading-[1.4]">
                “{ministry.scripture}”
              </blockquote>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                {ministry.scriptureReference}
              </p>
            </div>
          </section>

          {/* MUSIC TEAMS */}
          <section className="bg-[#F5F7FA] px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto max-w-7xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0B3D91]">
                Serving Through Music
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#061B3A] md:text-5xl">
                Different gifts, one purpose.
              </h2>

              <div className="grid gap-6 md:grid-cols-3">
                {ministry.teams.map((team) => (
                  <div
                    key={team.name}
                    className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                  >
                    <img
                      src={team.image}
                      alt={team.name}
                      className="h-56 w-full object-cover"
                    />

                    <div className="p-5">
                      <h3 className="text-xl font-semibold text-[#061B3A]">
                        {team.name}
                      </h3>

                      <p className="mt-3 text-gray-600">
                        {team.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* KEY ROLES */}
          <section className="px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto max-w-7xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                Key Roles
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#061B3A] md:text-5xl">
                How we serve through music.
              </h2>

              <div className="mt-12 grid gap-5 md:grid-cols-2">
                {ministry.keyRoles.map((role, index) => (
                  <div
                    key={role}
                    className="group rounded-[1.5rem] border border-[#061B3A]/10 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B3D91]/10 text-sm font-bold text-[#0B3D91] transition group-hover:bg-[#D62828] group-hover:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <p className="pt-1 text-base leading-7 text-[#061B3A]/70">
                        {role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* IMPACT */}
          <section className="bg-[#061B3A] px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto max-w-7xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                Our Impact
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Helping the church worship together.
              </h2>

              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {ministry.impact.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-7"
                  >
                    <p className="text-xs font-bold text-[#D62828]">
                      0{index + 1}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-white/70">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* REQUIREMENTS */}
          <section className="px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0B3D91]">
                  Requirements
                </p>

                <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[#061B3A] md:text-5xl">
                  A heart ready
                  <br />
                  to worship and serve.
                </h2>
              </div>

              <div className="space-y-4">
                {ministry.requirements.map((requirement, index) => (
                  <div
                    key={requirement}
                    className="flex items-center gap-5 rounded-2xl bg-[#F5F7FA] p-5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D62828] text-sm font-bold text-white">
                      {index + 1}
                    </div>

                    <p className="text-sm leading-6 text-[#061B3A]/70">
                      {requirement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ADDITIONAL ACTIVITIES */}
          <section className="bg-[#F5F7FA] px-5 py-24 md:px-8 md:py-28">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-24">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                  Beyond Sunday
                </p>

                <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[#061B3A] md:text-5xl">
                  Growing together
                  <br />
                  through music.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {ministry.additionalActivities.map((activity, index) => (
                  <div
                    key={activity}
                    className="rounded-[1.5rem] bg-[#0B3D91] p-7"
                  >
                    <p className="text-xs font-bold text-white/50">
                      0{index + 1}
                    </p>

                    <p className="mt-4 text-lg font-semibold text-white">
                      {activity}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : isMedia ? (
        <>
          {/* ABOUT */}
          <section className="px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                  About The Ministry
                </p>

                <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#061B3A] md:text-5xl">
                  Sharing the message
                  <br />
                  through media.
                </h2>
              </div>

              <div>
                <p className="text-lg leading-9 text-[#061B3A]/65 md:text-xl">
                  {ministry.about}
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <div className="h-1 w-12 rounded-full bg-[#D62828]" />
                  <div className="h-1 w-4 rounded-full bg-[#0B3D91]" />
                </div>
              </div>
            </div>
          </section>

          {/* PURPOSE */}
          <section className="bg-[#061B3A] px-5 py-24 md:px-8 md:py-28">
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                Our Purpose
              </p>

              <h2 className="mt-6 text-3xl font-semibold leading-tight text-white md:text-5xl">
                Creativity with a purpose.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/65 md:text-lg">
                {ministry.purpose}
              </p>
            </div>
          </section>

          {/* KEY ROLES */}
          <section className="px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto max-w-7xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                Key Responsibilities
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#061B3A] md:text-5xl">
                What we do.
              </h2>

              <div className="mt-12 grid gap-5 md:grid-cols-2">
                {ministry.keyRoles.map((role, index) => (
                  <div
                    key={role}
                    className="group rounded-[1.5rem] border border-[#061B3A]/10 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B3D91]/10 text-sm font-bold text-[#0B3D91] transition group-hover:bg-[#D62828] group-hover:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <p className="pt-1 text-base leading-7 text-[#061B3A]/70">
                        {role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ACTIVITIES */}
          <section className="bg-[#F5F7FA] px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto max-w-7xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0B3D91]">
                Our Activities
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#061B3A] md:text-5xl">
                Turning ideas into impact.
              </h2>

              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {ministry.activities.map((activity, index) => (
                  <div
                    key={activity}
                    className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-[#061B3A]/5"
                  >
                    <p className="text-xs font-bold text-[#D62828]">
                      0{index + 1}
                    </p>

                    <p className="mt-4 text-base leading-7 text-[#061B3A]/70">
                      {activity}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* IMPACT */}
          <section className="bg-[#061B3A] px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto max-w-7xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                Our Impact
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Helping the message reach further.
              </h2>

              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {ministry.impact.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-7"
                  >
                    <p className="text-xs font-bold text-[#D62828]">
                      0{index + 1}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-white/70">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* REQUIREMENTS */}
          <section className="px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0B3D91]">
                  Requirements
                </p>

                <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[#061B3A] md:text-5xl">
                  Creativity,
                  <br />
                  responsibility, service.
                </h2>
              </div>

              <div className="space-y-4">
                {ministry.requirements.map((requirement, index) => (
                  <div
                    key={requirement}
                    className="flex items-center gap-5 rounded-2xl bg-[#F5F7FA] p-5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D62828] text-sm font-bold text-white">
                      {index + 1}
                    </div>

                    <p className="text-sm leading-6 text-[#061B3A]/70">
                      {requirement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ADDITIONAL ACTIVITIES */}
          <section className="bg-[#F5F7FA] px-5 py-24 md:px-8 md:py-28">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-24">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                  Growing Our Skills
                </p>

                <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[#061B3A] md:text-5xl">
                  Learning,
                  <br />
                  creating, improving.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {ministry.additionalActivities.map((activity, index) => (
                  <div
                    key={activity}
                    className="rounded-[1.5rem] bg-[#0B3D91] p-7"
                  >
                    <p className="text-xs font-bold text-white/50">
                      0{index + 1}
                    </p>

                    <p className="mt-4 text-lg font-semibold text-white">
                      {activity}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : isEvangelism ? (
        <>
          {/* ABOUT */}
          <section className="px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                  About The Ministry
                </p>

                <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#061B3A] md:text-5xl">
                  Reaching people
                  <br />
                  with the Gospel.
                </h2>
              </div>

              <div>
                <p className="text-lg leading-9 text-[#061B3A]/65 md:text-xl">
                  {ministry.about}
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <div className="h-1 w-12 rounded-full bg-[#D62828]" />
                  <div className="h-1 w-4 rounded-full bg-[#0B3D91]" />
                </div>
              </div>
            </div>
          </section>

          {/* SCRIPTURE */}
          <section className="bg-[#061B3A] px-5 py-24 md:px-8 md:py-28">
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                Biblical Foundation
              </p>

              <blockquote className="mt-7 text-2xl font-medium leading-10 text-white md:text-4xl md:leading-[1.4]">
                “{ministry.scripture}”
              </blockquote>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                {ministry.scriptureReference}
              </p>
            </div>
          </section>

          {/* PURPOSE */}
          <section className="bg-[#F5F7FA] px-5 py-24 md:px-8 md:py-28">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0B3D91]">
                Our Purpose
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#061B3A] md:text-4xl">
                Making disciples and reaching communities.
              </h2>

              <p className="mt-6 text-base leading-8 text-[#061B3A]/65 md:text-lg">
                {ministry.purpose}
              </p>
            </div>
          </section>

          {/* KEY ROLES */}
          <section className="px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto max-w-7xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                Key Roles
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#061B3A] md:text-5xl">
                Taking the Gospel to others.
              </h2>

              <div className="mt-12 grid gap-5 md:grid-cols-2">
                {ministry.keyRoles.map((role, index) => (
                  <div
                    key={role}
                    className="group rounded-[1.5rem] border border-[#061B3A]/10 p-7 transition duration-300 hover:-translate-y-1 hover:border-[#0B3D91]/20 hover:shadow-lg md:p-8"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B3D91]/10 text-sm font-bold text-[#0B3D91] transition group-hover:bg-[#D62828] group-hover:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <p className="pt-1 text-base leading-7 text-[#061B3A]/70">
                        {role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ACTIVITIES */}
          <section className="bg-[#F5F7FA] px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto max-w-7xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0B3D91]">
                Our Activities
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#061B3A] md:text-5xl">
                Taking faith beyond the church walls.
              </h2>

              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {ministry.activities.map((activity, index) => (
                  <div
                    key={activity}
                    className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-[#061B3A]/5"
                  >
                    <p className="text-xs font-bold text-[#D62828]">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <p className="mt-4 text-base leading-7 text-[#061B3A]/70">
                      {activity}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* IMPACT */}
          <section className="bg-[#061B3A] px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto max-w-7xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                Our Impact
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Taking the love of Christ to people.
              </h2>

              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {ministry.impact.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-7"
                  >
                    <p className="text-xs font-bold text-[#D62828]">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-white/70">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* REQUIREMENTS */}
          <section className="px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0B3D91]">
                  Requirements
                </p>

                <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[#061B3A] md:text-5xl">
                  Ready to
                  <br />
                  reach others?
                </h2>
              </div>

              <div className="space-y-4">
                {ministry.requirements.map((requirement, index) => (
                  <div
                    key={requirement}
                    className="flex items-center gap-5 rounded-2xl bg-[#F5F7FA] p-5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D62828] text-sm font-bold text-white">
                      {index + 1}
                    </div>

                    <p className="text-sm leading-6 text-[#061B3A]/70">
                      {requirement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ADDITIONAL ACTIVITIES */}
          <section className="bg-[#F5F7FA] px-5 py-24 md:px-8 md:py-28">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-24">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                  Beyond Sunday
                </p>

                <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[#061B3A] md:text-5xl">
                  Going beyond
                  <br />
                  the church walls.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {ministry.additionalActivities.map((activity, index) => (
                  <div
                    key={activity}
                    className="rounded-[1.5rem] bg-[#0B3D91] p-7"
                  >
                    <p className="text-xs font-bold text-white/50">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <p className="mt-4 text-lg font-semibold text-white">
                      {activity}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : isIntercessory ? (
        <>
          {/* ABOUT */}
          <section className="px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                  About The Ministry
                </p>

                <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#061B3A] md:text-5xl">
                  Standing in the gap
                  <br />
                  through prayer.
                </h2>
              </div>

              <div>
                <p className="text-lg leading-9 text-[#061B3A]/65 md:text-xl">
                  {ministry.about}
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <div className="h-1 w-12 rounded-full bg-[#D62828]" />
                  <div className="h-1 w-4 rounded-full bg-[#0B3D91]" />
                </div>
              </div>
            </div>
          </section>

          {/* SCRIPTURE */}
          <section className="bg-[#061B3A] px-5 py-24 md:px-8 md:py-28">
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                Biblical Foundation
              </p>

              <blockquote className="mt-7 text-2xl font-medium leading-10 text-white md:text-4xl md:leading-[1.4]">
                “{ministry.scripture}”
              </blockquote>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                {ministry.scriptureReference}
              </p>
            </div>
          </section>

          {/* PURPOSE */}
          <section className="bg-[#F5F7FA] px-5 py-24 md:px-8 md:py-28">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0B3D91]">
                Our Purpose
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#061B3A] md:text-4xl">
                A church strengthened through prayer.
              </h2>

              <p className="mt-6 text-base leading-8 text-[#061B3A]/65 md:text-lg">
                {ministry.purpose}
              </p>
            </div>
          </section>

          {/* KEY ROLES */}
          <section className="px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto max-w-7xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                Key Roles
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#061B3A] md:text-5xl">
                Praying for one another.
              </h2>

              <div className="mt-12 grid gap-5 md:grid-cols-2">
                {ministry.keyRoles.map((role, index) => (
                  <div
                    key={role}
                    className="group rounded-[1.5rem] border border-[#061B3A]/10 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B3D91]/10 text-sm font-bold text-[#0B3D91] transition group-hover:bg-[#D62828] group-hover:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <p className="pt-1 text-base leading-7 text-[#061B3A]/70">
                        {role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* IMPACT */}
          <section className="bg-[#061B3A] px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto max-w-7xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                Our Impact
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Building a church that prays.
              </h2>

              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {ministry.impact.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-7"
                  >
                    <p className="text-xs font-bold text-[#D62828]">
                      0{index + 1}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-white/70">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PRAYER ACTIVITIES */}
          <section className="bg-[#F5F7FA] px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto max-w-7xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0B3D91]">
                Prayer Activities
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#061B3A] md:text-5xl">
                Growing together in prayer.
              </h2>

              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {ministry.activities.map((activity, index) => (
                  <div
                    key={activity}
                    className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-[#061B3A]/5"
                  >
                    <p className="text-xs font-bold text-[#D62828]">
                      0{index + 1}
                    </p>

                    <h3 className="mt-4 text-lg font-semibold text-[#061B3A]">
                      {activity}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* REQUIREMENTS */}
          <section className="px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0B3D91]">
                  Requirements
                </p>

                <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[#061B3A] md:text-5xl">
                  A heart committed
                  <br />
                  to prayer.
                </h2>
              </div>

              <div className="space-y-4">
                {ministry.requirements.map((requirement, index) => (
                  <div
                    key={requirement}
                    className="flex items-center gap-5 rounded-2xl bg-[#F5F7FA] p-5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D62828] text-sm font-bold text-white">
                      {index + 1}
                    </div>

                    <p className="text-sm leading-6 text-[#061B3A]/70">
                      {requirement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : isHospitality ? (
        <>
          {/* ABOUT */}
          <section className="px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                    About The Ministry
                  </p>

                  <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#061B3A] md:text-5xl">
                    Welcoming people
                    <br />
                    with love and care.
                  </h2>
                </div>

                <div>
                  <p className="text-lg leading-9 text-[#061B3A]/65 md:text-xl">
                    {ministry.about}
                  </p>

                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-1 w-12 rounded-full bg-[#D62828]" />
                    <div className="h-1 w-4 rounded-full bg-[#0B3D91]" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SCRIPTURE */}
          <section className="bg-[#061B3A] px-5 py-24 md:px-8 md:py-28">
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                Our Inspiration
              </p>

              <blockquote className="mt-7 text-2xl font-medium leading-10 text-white md:text-4xl md:leading-[1.4]">
                “{ministry.scripture}”
              </blockquote>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
                {ministry.scriptureReference}
              </p>
            </div>
          </section>

          {/* KEY ROLES */}
          <section className="px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto max-w-7xl">
              <div className="mb-14">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                  Key Roles
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#061B3A] md:text-5xl">
                  How we serve.
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {ministry.keyRoles.map((role, index) => (
                  <div
                    key={role}
                    className="group rounded-[1.5rem] border border-[#061B3A]/10 p-7 transition duration-300 hover:-translate-y-1 hover:border-[#0B3D91]/20 hover:shadow-lg md:p-8"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B3D91]/10 text-sm font-bold text-[#0B3D91] transition group-hover:bg-[#D62828] group-hover:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <p className="pt-1 text-base leading-7 text-[#061B3A]/70">
                        {role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* IMPACT */}
          <section className="bg-[#F5F7FA] px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0B3D91]">
                  Our Impact
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#061B3A] md:text-5xl">
                  Making people feel at home.
                </h2>
              </div>

              <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {ministry.impact.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-[#061B3A]/5"
                  >
                    <p className="text-xs font-bold text-[#D62828]">
                      0{index + 1}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-[#061B3A]/65">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ADDITIONAL ACTIVITIES */}
          <section className="px-5 py-24 md:px-8 md:py-28">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-24">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                    Additional Activities
                  </p>

                  <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[#061B3A] md:text-5xl">
                    Creating more
                    <br />
                    opportunities to connect.
                  </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {ministry.additionalActivities.map((activity, index) => (
                    <div
                      key={activity}
                      className="rounded-[1.5rem] bg-[#0B3D91] p-7"
                    >
                      <p className="text-xs font-bold text-white/40">
                        0{index + 1}
                      </p>

                      <p className="mt-4 text-lg font-semibold text-white">
                        {activity}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* REQUIREMENTS */}
          <section className="bg-[#F5F7FA] px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0B3D91]">
                    Requirements
                  </p>

                  <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[#061B3A] md:text-5xl">
                    A heart for
                    <br />
                    God's people.
                  </h2>
                </div>

                <div className="space-y-4">
                  {ministry.requirements.map((requirement, index) => (
                    <div
                      key={requirement}
                      className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D62828] text-sm font-bold text-white">
                        {index + 1}
                      </div>

                      <p className="text-sm leading-6 text-[#061B3A]/70">
                        {requirement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* OTHER MINISTRIES */
        <>
          {/* PURPOSE */}
          <section className="px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                    Our Purpose
                  </p>

                  <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#061B3A] md:text-5xl">
                    Serving God
                    <br />
                    through our gifts.
                  </h2>
                </div>

                <div>
                  <p className="text-lg leading-9 text-[#061B3A]/65 md:text-xl">
                    {ministry.purpose}
                  </p>

                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-1 w-12 rounded-full bg-[#D62828]" />
                    <div className="h-1 w-4 rounded-full bg-[#0B3D91]" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* WHAT WE DO */}
          <section className="bg-[#F5F7FA] px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto max-w-7xl">
              <div className="mb-14">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0B3D91]">
                  What We Do
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#061B3A] md:text-5xl">
                  How we serve.
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {ministry.activities.map((activity, index) => (
                  <div
                    key={activity}
                    className="group rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-[#061B3A]/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B3D91]/10 text-sm font-bold text-[#0B3D91] transition group-hover:bg-[#D62828] group-hover:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <p className="pt-1 text-base leading-7 text-[#061B3A]/70">
                        {activity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* GET INVOLVED */}
      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[2rem] bg-[#0B3D91] p-8 md:p-14">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/55">
              Get Involved
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
              There is a place for you to serve.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
              {ministry.involvement}
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D62828] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#B91C1C]"
            >
              Contact Us
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}