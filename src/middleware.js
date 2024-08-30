import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function middleware(request) {
  const path = request.path;

  const isPublicPath = path === "login";

  const token = request.cookies.token;
  //   const user = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET);

  console.log({
    token,
  });

  // validate token

  if (token && isPublicPath) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
