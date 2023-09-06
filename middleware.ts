import { authMiddleware } from "@kinde-oss/kinde-auth-nextjs/server";

export const config = {
  matcher: [
    "/dashboard",
    "/api/jobs",
    "/api/jobs/[id]",
    "/api/users",
    "/api/users/[id]",
    "/api/kindeSession",
    // "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

export default authMiddleware;
