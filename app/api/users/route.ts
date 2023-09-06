import { getUserById, getUser } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  const user = await getUserById({
    userId: id!,
  });

  return new Response(
    JSON.stringify({
      user: user,
    })
  );
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  getUser({
    email: body.email,
    userId: body.id,
    name: body.name,
    role: body.role,
  });

  return new Response(JSON.stringify({ message: "Job posted" }), {
    headers: {
      "content-type": "application/json",
    },
  });
}
