import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Event from "@/models/Event";

export async function GET(request: Request) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");

    const filter =
      status === "Published"
        ? { status: "Published" }
        : {};

    const events = await Event.find(filter).sort({ date: 1 });

    return NextResponse.json(events);
  } catch (error) {
    console.error("GET events error:", error);

    return NextResponse.json(
      { message: "Failed to fetch events" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectToDatabase();

    const body = await request.json();

    const event = await Event.create({
      title: body.title,
      date: body.date,
      time: body.time,
      location: body.location,
      description: body.description,
      image: body.image || "",
      status: body.status || "Draft",
    });

    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    console.error("POST event error:", error);

    return NextResponse.json(
      { message: "Failed to create event" },
      { status: 500 }
    );
  }
}