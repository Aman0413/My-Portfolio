import { NextResponse } from "next/server";

import { cookies } from "next/headers";

// logout route
export async function DELETE(request) {
  try {
    // remove token from cookie
    cookies().set("token", "", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      expires: new Date(0),
    });

    console.log("Aman");

    return NextResponse.json(
      {
        success: true,
        message: "Logout successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error while Logout",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
