import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  if(url.searchParams.has("name")) {
    return new NextResponse("helloworld")
  }
}