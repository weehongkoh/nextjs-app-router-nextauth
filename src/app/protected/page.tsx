import LogoutButton from "@/components/buttons/LogoutButton";
import { getServerSession } from "next-auth";

export default async function Protected() {
  const session = await getServerSession();
  console.log(session);
  return (
    <main className="max-w-2xl min-h-screen flex flex-col items-center mx-auto">
      <div className="w-full flex justify-between my-10">
        <h1 className="text-2xl font-bold">Protected Page</h1>
        <LogoutButton />
      </div>
      <pre className="w-full bg-gray-200 p-4 rounded break-words whitespace-pre-wrap">
        {JSON.stringify(session, null, 2)}
      </pre>
    </main>
  );
}
