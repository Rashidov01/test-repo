import { NextResponse, type NextRequest } from "next/server";
import userData from "../../../data/userData.json";

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const queryUserId = searchParams.get("query");

  if (!queryUserId) {
    return NextResponse.json({ message: "Method Not Allowed" });
  }

  const userIfo = userData.find((user) => user.id === queryUserId);

  if (userIfo) {
    return NextResponse.json({ data: userIfo });
  } else {
    return NextResponse.json({ message: "User not found" });
  }
}
