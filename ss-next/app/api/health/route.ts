import { NextResponse } from "next/server";
import { getServerRuntime } from "@/src/server/runtime";

export async function GET() {
  const { queue } = await getServerRuntime();

  return NextResponse.json({ ok: true, queueSize: queue.size() });
}
