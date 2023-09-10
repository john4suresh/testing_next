import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { coachHome } from "@/lib/apiUrls";

function endPoints(section) {
  let baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  switch (section) {
    case "engagementBanner":
      return `${baseURL}${coachHome?.engagementBanner}`;
    case "todoAndCompleted":
      return `${baseURL}${coachHome?.todoAndCompleted}`;
    case "upcomingSession":
      return `${baseURL}${coachHome?.upcomingSession}`;
    case "sessionReporting":
      return `${baseURL}${coachHome?.sessionReporting}`;
  }
}

export async function GET(req) {
  try {
    const token = await getToken({ req });
    const section = await req.nextUrl.searchParams.get("section");

    if (!token) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const response = await fetch(endPoints(section), {
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
