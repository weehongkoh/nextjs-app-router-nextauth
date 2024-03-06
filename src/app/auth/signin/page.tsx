import LoginButton from "@/components/buttons/LoginButton";

async function getProviders() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/providers`);

  if (!res.ok) {
    throw new Error("Failed to fetch providers");
  }

  return res.json();
}

export default async function SignIn() {
  const resp: ReturnType<typeof getProviders> = (await getProviders()) || {};

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="font-bold text-3xl mb-8">Custom Login Page</h1>
      {Object.values(resp).map((provider) => {
        return (
          <div key={provider.id} className="[&:not(:first-child)]:mt-4">
            <LoginButton auth={provider} />
          </div>
        );
      })}
    </div>
  );
}
