import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

function endPoints(tab) {
  let base = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v3/coach-dashboard`;

  switch (tab) {
    // client progress
    case "0":
      return `${base}/client-progress-view/`;
    // Clients without any future sessions scheduled
    case "1":
      return `${base}/clients-need-to-schedule`;
    // common tab
    default:
      return `${base}/coach-data/`;
  }
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

    if (!response.ok) {
      throw Error("Failed to fetch data");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
