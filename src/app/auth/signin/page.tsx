import Divider from "@/components/Divider";
import LoginForm from "@/components/LoginForm";
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
    <div className="flex min-h-screen flex-col items-center mx-auto p-24 max-w-[40rem]">
      <h1 className="font-bold text-3xl">Sign in to your account</h1>
      <LoginForm />
      <Divider />
      <div className="flex flex-col items-center gap-y-4">
        {Object.values(resp).map(
          (provider) =>
            provider.id !== "hasura-credentials" && (
              <LoginButton auth={provider} key={provider.id} />
            )
        )}
      </div>
    </div>
  );
}
