import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";

import { payments } from "@/lib/apiUrls";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${payments.list}`,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${session.access}`,
        },
      }
    );

    if (!response.ok) {
      throw Error("Failed to fetch data");
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
