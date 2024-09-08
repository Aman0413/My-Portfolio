import { NextResponse } from "next/server";
import Project from "../../../../models/project";

export async function POST(request) {
  try {
    const id = request.url.split("/project/")[1];

    console.log("AMAN");
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
