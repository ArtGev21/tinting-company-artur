import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Paths allowed without login
  const publicPaths = [
    "/admin/login",
    "/admin/signup",
    "/admin/forgot-password",
    "/admin/reset-password",
  ];

  // Check if current path is protected
  const isProtected =
    pathname.startsWith("/admin") && !publicPaths.includes(pathname);

  // Check Supabase auth cookies
  const accessToken = request.cookies.get("sb-access-token")?.value;
  const refreshToken = request.cookies.get("sb-refresh-token")?.value;

  // 🚨 Protect admin pages
  // if (isProtected) {
  //   if (!accessToken || !refreshToken) {
  //     const loginUrl = new URL("/admin/login", request.url);
  //     loginUrl.searchParams.set("redirect", pathname);
  //     return NextResponse.redirect(loginUrl);
  //   }
  // }

  // 🚀 Redirect /admin → /admin/dashboard if logged in
  // if (pathname === "/admin") {
  //   if (accessToken) {
  //     return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  //   } else {
  //     return NextResponse.redirect(new URL("/admin/login", request.url));
  //   }
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};