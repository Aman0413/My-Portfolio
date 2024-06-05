import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../config/databaseConnection";
import Project from "../../../models/project";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
  try {
    await connectDB();

    const { title, category, desc, image, live, github } = await request.json();

    const result = await cloudinary.uploader.upload(image, {
      folder: process.env.CLOUDINARY_FOLDER,
    });

    if (!result) {
      return NextResponse.json(
        { message: "Error uploading image" },
        {
          status: 500,
        }
      );
    }

    const newProject = new Project({
      title,
      category,
      description: desc,
      image: {
        public_id: result.public_id,
        url: result.secure_url,
      },
      live,
      github,
    });

    await newProject.save();

    return NextResponse.json(
      {
        message: "Project created successfully",
        result: newProject,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error: error.message },
      {
        status: 500,
      }
    );
  }
}
