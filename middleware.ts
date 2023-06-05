import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export default function MiddleWare(req: NextRequest) {
  let verify = req.cookies.get("jwt")?.value;
  let next_auth_session_token = req.cookies.get(
    "next-auth.session-token"
  )?.value;
  if (!verify) {
    if (req.nextUrl.pathname.startsWith("/Chats")) {
      return NextResponse.rewrite(new URL("/", req.url));
    }
  } else {
    if (
      req.nextUrl.pathname.startsWith("/") ||
      req.nextUrl.pathname.startsWith("/SaveInfo/Login") ||
      req.nextUrl.pathname.startsWith("/SaveInfo")
    ) {
      return NextResponse.rewrite(new URL("/Chats", req.url));
    }
  }
  if (!next_auth_session_token) {
    if (req.nextUrl.pathname.startsWith("/SaveInfo")) {
      return NextResponse.rewrite(new URL("/", req.url));
    }
  } else {
    if (req.nextUrl.pathname.startsWith("/")) {
      return NextResponse.rewrite(new URL("/SaveInfo", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/Chats/:path*", "/SaveInfo", "/SaveInfo/Login", "/"],
};
