import { NextResponse, type NextRequest } from "next/server";
import userData from "../../../data/userData.json";

export function GET(request: NextRequest) {
  return NextResponse.json(userData);
}
