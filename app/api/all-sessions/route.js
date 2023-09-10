import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { allSessions } from "@/lib/apiUrls";

function endPoints(tab) {
  let baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  // tab => 0 (upcoming session), 1 (past session)
  return tab === "0"
    ? `${baseUrl}${allSessions?.upcomingSession}`
    : `${baseUrl}${allSessions?.pastSession}`;
}

export async function GET(request) {
  try {
    const token = await getToken({ req: request });
    const tabNumber = request.nextUrl.searchParams.get("tab");

    if (!token) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const response = await fetch(endPoints(tabNumber), {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token.access}`,
      },
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
