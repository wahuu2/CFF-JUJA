import dotenv from "dotenv";
import path from "path";

const envPath = path.resolve(process.cwd(), ".env.local");

const result = dotenv.config({ path: envPath });

if (result.error) {
  throw result.error;
}

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is missing");
}

async function seedEvents() {
  // Import AFTER loading .env.local
  const mongoose = (await import("mongoose")).default;
  const Event = (await import("../models/Event")).default;

  console.log("Connecting to MongoDB...");

  await mongoose.connect(process.env.MONGODB_URI);

  console.log("Connected to MongoDB.");

  const events = [
    {
      title: "CFF Worship Night",
      date: "2026-10-30",
      time: "6:00 PM - 9:00 PM",
      location: "CFF Juja",
      description:
        "Join us for an evening dedicated to worship, prayer and the presence of God. Come together with the CFF Juja family as we lift our voices and hearts to Him. It will be a time of thanksgiving, reflection and spiritual renewal. Everyone is welcome to come and experience an atmosphere of genuine fellowship. Come ready to worship, pray and encounter God.",
      image:
        "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=80",
      status: "Published",
    },

    {
      title: "Family Fellowship Sunday",
      date: "2026-11-08",
      time: "10:00 AM - 1:00 PM",
      location: "CFF Juja",
      description:
        "Family Fellowship Sunday is a special opportunity to worship and connect as one church family. We will gather for a meaningful service filled with worship, teaching and fellowship. Families and individuals are invited to come and share in this special time together. The day will also provide an opportunity to build stronger relationships within our community. Come ready to worship, connect and celebrate the family of God.",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1600&q=80",
      status: "Published",
    },

    {
      title: "Youth Encounter",
      date: "2026-11-14",
      time: "2:00 PM - 6:00 PM",
      location: "CFF Juja",
      description:
        "Youth Encounter is a gathering created to inspire young people to grow in faith and purpose. Expect powerful worship, practical teaching, meaningful conversations and fellowship. We will explore what it means to follow Christ while navigating everyday life. It will be a space for young people to ask questions, connect and encourage one another. Come ready to learn, worship and discover how God can use your life.",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80",
      status: "Published",
    },

    {
      title: "Thanksgiving Service",
      date: "2026-11-22",
      time: "9:00 AM - 12:30 PM",
      location: "CFF Juja",
      description:
        "Come together with the CFF Juja family for a special service of thanksgiving and praise. We will take time to reflect on God's faithfulness and celebrate His goodness. Through worship, testimonies and the Word, we will give thanks for all He has done. Everyone is invited to join this joyful gathering and celebrate God's faithfulness together. Bring a grateful heart as we give God all the glory and honor.",
      image:
        "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1600&q=80",
      status: "Published",
    },

    {
      title: "Christmas Celebration Service",
      date: "2026-12-20",
      time: "9:00 AM - 1:00 PM",
      location: "CFF Juja",
      description:
        "Celebrate the birth of Jesus Christ with the CFF Juja church family. This special service will bring together worship, music, the Word and joyful fellowship. Come with your family and friends as we remember the hope and salvation found in Christ. It will be a beautiful opportunity to celebrate God's love and share the joy of the season. Everyone is welcome as we celebrate Jesus together.",
      image:
        "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=1600&q=80",
      status: "Published",
    },
  ];

  try {
    const inserted = await Event.insertMany(events);

    console.log(`Successfully added ${inserted.length} events.`);

    await mongoose.connection.close();

    console.log("Database connection closed.");
  } catch (error) {
    console.error("Failed to insert events:", error);

    await mongoose.connection.close();

    process.exit(1);
  }
}

seedEvents();