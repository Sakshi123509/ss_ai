import { NextResponse } from "next/server";
import { getServerRuntime } from "@/src/server/runtime";

export async function GET() {
  const { repository } = await getServerRuntime();
  const records = await repository.list();

  return NextResponse.json(records);
}
