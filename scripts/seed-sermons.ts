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

async function seedSermons() {
  const mongoose = (await import("mongoose")).default;
  const Sermon = (await import("../models/Sermon")).default;

  console.log("Connecting to MongoDB...");

  await mongoose.connect(process.env.MONGODB_URI);

  console.log("Connected to MongoDB.");

  const sermons = [
    {
      title: "Walking by Faith",
      speaker: "Rev. John Doe",
      date: "2026-09-27",
      scripture: "Hebrews 11:1-6",
      description:
        "A teaching on what it means to trust God even when we cannot see the full picture. We are reminded that faith requires confidence in God's character, His promises and His direction for our lives.",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      audioUrl: "",
      image:
        "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=80",
      status: "Published",
    },

    {
      title: "The Power of Prayer",
      speaker: "Rev. Mary Wanjiku",
      date: "2026-09-20",
      scripture: "Philippians 4:6-7",
      description:
        "Prayer is more than presenting our requests to God. It is an opportunity to draw closer to Him, surrender our worries and experience His peace in every situation.",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      audioUrl: "",
      image:
        "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1200&q=80",
      status: "Published",
    },

    {
      title: "Rooted in Christ",
      speaker: "Rev. Peter Mwangi",
      date: "2026-09-13",
      scripture: "Colossians 2:6-7",
      description:
        "Discover what it means to build a strong and lasting relationship with Christ. This message encourages believers to remain rooted in God's Word and continue growing in faith.",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      audioUrl: "",
      image:
        "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1200&q=80",
      status: "Published",
    },

    {
      title: "Grace That Transforms",
      speaker: "Rev. Sarah Njeri",
      date: "2026-09-06",
      scripture: "Ephesians 2:8-10",
      description:
        "God's grace saves us and also transforms the way we live. This sermon explores how receiving God's grace should produce a life of gratitude, obedience and good works.",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      audioUrl: "",
      image:
        "https://images.unsplash.com/photo-1548625361-2c1e2f9a5b0e?auto=format&fit=crop&w=1200&q=80",
      status: "Published",
    },

    {
      title: "Trusting God in Difficult Seasons",
      speaker: "Rev. Daniel Kariuki",
      date: "2026-08-30",
      scripture: "Isaiah 41:10",
      description:
        "Every believer experiences difficult seasons. This message reminds us that God remains present, faithful and powerful even when circumstances are uncertain or painful.",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXgX",
      audioUrl: "",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      status: "Published",
    },

    {
      title: "Living as the Light",
      speaker: "Rev. John Doe",
      date: "2026-08-23",
      scripture: "Matthew 5:14-16",
      description:
        "Jesus calls His followers to be the light of the world. This message challenges us to reflect Christ through our character, relationships, work and service to others.",
      videoUrl: "",
      audioUrl: "",
      image:
        "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1200&q=80",
      status: "Published",
    },

    {
      title: "A Life of Thanksgiving",
      speaker: "Rev. Mary Wanjiku",
      date: "2026-08-16",
      scripture: "1 Thessalonians 5:16-18",
      description:
        "Thanksgiving changes our perspective and helps us recognize God's faithfulness. This teaching encourages us to cultivate gratitude in both seasons of abundance and seasons of difficulty.",
      videoUrl: "",
      audioUrl: "",
      image:
        "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=80",
      status: "Published",
    },
  ];

  try {
    const inserted = await Sermon.insertMany(sermons);

    console.log(`Successfully added ${inserted.length} sermons.`);

    await mongoose.connection.close();

    console.log("Database connection closed.");
  } catch (error) {
    console.error("Failed to insert sermons:", error);

    await mongoose.connection.close();

    process.exit(1);
  }
}

seedSermons();