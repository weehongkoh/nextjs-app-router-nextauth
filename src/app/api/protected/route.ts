import { NextApiRequest } from "next";
import { getServerSession } from "next-auth";

export async function GET(req: NextApiRequest) {
  const session = await getServerSession(req);

  if (!session) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  return new Response("Hello, Next.js!", {
    status: 200,
  });
}
