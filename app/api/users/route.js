import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/users";

export async function GET() {
  const res = await fetch(DATA_SOURCE_URL);

  const users = await res.json();

  return NextResponse.json(users);
}
