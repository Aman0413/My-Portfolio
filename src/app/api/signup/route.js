import { NextResponse } from "next/server";
import User from "../../models/user";
import connectDB from "../../../config/databaseConnection";

// signup route
export async function POST(request) {
  try {
    await connectDB();
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        {
          message: "Please fill all fields",
        },
        {
          status: 400,
        }
      );
    }

    // if user already exists
    const user = await User.find({ email });
    if (user.length > 0) {
      return NextResponse.json(
        {
          message: "User already exists",
        },
        {
          status: 400,
        }
      );
    }

    // create new user
    const newUser = await User.create({
      name,
      email,
      password,
    });

    if (!newUser) {
      return NextResponse.json(
        {
          message: "Error while creating user",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        message: "Signup successfully",
        newUser,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error while signup",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
