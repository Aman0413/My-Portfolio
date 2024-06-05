import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../config/databaseConnection";
import Project from "../../../models/project";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// api route to create a new project /admin/project
export async function POST(request) {
  try {
    await connectDB();

    // Get data from request
    const { title, category, desc, image, live, github } = await request.json();

    // Check if all fields are filled
    if (!title || !desc || !image || !live || !github) {
      return NextResponse.json(
        { message: "Please fill all fields" },
        {
          status: 400,
        }
      );
    }

    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(image, {
      folder: process.env.CLOUDINARY_FOLDER,
    });

    // Check if image was uploaded successfully
    if (!result) {
      return NextResponse.json(
        { message: "Error uploading image" },
        {
          status: 500,
        }
      );
    }

    // Create new project
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

    // Save project to database
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

// api route to get all projects /admin/project
export async function GET(request) {
  try {
    await connectDB();

    // Get all projects
    const projects = await Project.find();

    return NextResponse.json(
      {
        message: "Projects retrieved successfully",
        data: projects,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error in getting projects", error: error.message },
      {
        status: 500,
      }
    );
  }
}

// api route to delete a project /admin/project
export async function DELETE(request) {
  try {
    await connectDB();

    // Get project id from request
    const { id } = await request.json();

    // Check if project exists
    const project = await Project.findById(id);

    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        {
          status: 404,
        }
      );
    }

    // Delete project from cloudinary
    await cloudinary.uploader.destroy(project.image.public_id);

    // Delete project from database
    await Project.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Project deleted successfully" },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error in deleting project", error: error.message },
      {
        status: 500,
      }
    );
  }
}
