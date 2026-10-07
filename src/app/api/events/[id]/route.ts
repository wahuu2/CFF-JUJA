import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectToDatabase } from "@/lib/mongodb";
import Event from "@/models/Event";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  request: Request,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid event ID" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const event = await Event.findById(id);

    if (!event) {
      return NextResponse.json(
        { message: "Event not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(event);
  } catch (error) {
    console.error("GET single event error:", error);

    return NextResponse.json(
      { message: "Failed to fetch event" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid event ID" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const body = await request.json();

    const event = await Event.findByIdAndUpdate(
      id,
      {
        title: body.title,
        date: body.date,
        time: body.time,
        location: body.location,
        description: body.description,
        image: body.image || "",
        status: body.status,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!event) {
      return NextResponse.json(
        { message: "Event not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(event);
  } catch (error) {
    console.error("PUT event error:", error);

    return NextResponse.json(
      { message: "Failed to update event" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid event ID" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const event = await Event.findByIdAndDelete(id);

    if (!event) {
      return NextResponse.json(
        { message: "Event not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Event deleted successfully",
    });
  } catch (error) {
    console.error("DELETE event error:", error);

    return NextResponse.json(
      { message: "Failed to delete event" },
      { status: 500 }
    );
  }
}