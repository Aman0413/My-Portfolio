import { NextResponse } from "next/server";
import User from "../../models/user";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import connectDB from "../../../config/databaseConnection";

// login route
export async function POST(request) {
  try {
    await connectDB();
    const { email, password } = await request.json();

    if (!email || !password) {
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
    if (user.length < 0) {
      return NextResponse.json(
        {
          message: "User does not exist",
        },
        {
          status: 400,
        }
      );
    }

    if (user[0].password !== password) {
      return NextResponse.json(
        {
          message: "Password is incorrect",
        },
        {
          status: 400,
        }
      );
    }

    // generate jwt token
    const token = jwt.sign({ user }, process.env.NEXT_PUBLIC_JWT_SECRET, {
      expiresIn: "24h",
    });

    // store token in cookie
    const cookie = ("token", token);

    cookies().set("token", cookie, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    return NextResponse.json(
      {
        message: "Login successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error while Login",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
