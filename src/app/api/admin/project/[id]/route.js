import { NextResponse } from "next/server";
import Project from "../../../../models/project";
import connectDB from "../../../../../config/databaseConnection";

export async function POST(request) {
  try {
    const { id } = request.params;
    connectDB();
    const project = await Project.findById(id);

    return NextResponse.json(
      {
        success: true,
        data: project,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Error in getting project",
      },
      {
        status: 500,
      }
    );
  }
}
