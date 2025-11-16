import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Event from "@/database/event.model";
import { v2 as cloudinary } from "cloudinary";

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const formData = await request.formData();

    let event;

    try {
      event = Object.fromEntries(formData.entries());
    } catch (e) {
      console.log(e);
      return NextResponse.json({
        message: "Invalid form data",
        status: 400,
      });
    }

    const file = formData.get("image") as File;

    if (!file) {
      return NextResponse.json(
        {
          message: "Image file is required",
        },
        { status: 400 }
      );
    }

    const tags = JSON.parse(formData.get("tags") as string);
    const agenda = JSON.parse(formData.get("agenda") as string);

    const arrayBuffer = await file.arrayBuffer();

    const buffer = Buffer.from(arrayBuffer);

    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { resource_type: "image", folder: "EventForge" },
          (error, results) => {
            if (error) return reject(error);

            resolve(results);
          }
        )
        .end(buffer);
    });

    event.image = (uploadResult as { secure_url: string }).secure_url;

    const createdEvent = await Event.create({
      ...event,
      tags: tags,
      agenda: agenda,
    });

    return NextResponse.json(
      {
        message: "Event Created successfully",
        event: createdEvent,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Event Creation Failed",
        error: error instanceof Error ? error.message : "unknown",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const events = await Event.find().sort({ createdAt: -1 });

    return NextResponse.json(
      {
        message: "Events fetched successfully",
        events,
      },

      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch events",
        error: error instanceof Error ? error.message : "unknown",
      },
      { status: 500 }
    );
  }
}
