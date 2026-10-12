import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Sermon from "@/models/Sermon";

export async function GET() {
  try {
    await connectToDatabase();

    const sermons = await Sermon.find().sort({ date: -1 });

    return NextResponse.json(sermons);
  } catch (error) {
    console.error("GET sermons error:", error);

    return NextResponse.json(
      { message: "Failed to fetch sermons" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectToDatabase();

    const body = await request.json();

    const sermon = await Sermon.create({
      title: body.title,
      speaker: body.speaker,
      date: body.date,
      scripture: body.scripture,
      description: body.description,
      videoUrl: body.videoUrl || "",
      audioUrl: body.audioUrl || "",
      image: body.image || "",
      status: body.status || "Draft",
    });

    return NextResponse.json(sermon, { status: 201 });
  } catch (error) {
    console.error("POST sermon error:", error);

    return NextResponse.json(
      { message: "Failed to create sermon" },
      { status: 500 }
    );
  }
}