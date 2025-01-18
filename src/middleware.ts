import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/protected"];

export default async function middleware(req: NextRequest) {
  const session = await auth();
  const pathname = req.nextUrl.pathname;

  if (protectedRoutes.includes(pathname) && !session) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
