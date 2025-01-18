"use client";

import { useEffect, useState } from "react";

import { getProviders } from "next-auth/react";

import Divider from "@/components/Divider";
import LoginForm from "@/components/LoginForm";
import LoginButton from "@/components/buttons/LoginButton";
import { ClientSafeProvider } from "next-auth/lib/client";

const renderLoginButtons = (
  providers: Record<string, ClientSafeProvider | null> | null
) =>
  providers
    ? Object.values(providers)
        .filter((provider): provider is ClientSafeProvider => provider !== null)
        .filter(({ id }) => id !== "hasura-credentials")
        .map((provider) => <LoginButton auth={provider} key={provider.id} />)
    : null;

export default function SignIn() {
  const [providers, setProviders] = useState<Record<
    string,
    ClientSafeProvider | null
  > | null>(null);

  useEffect(() => {
    async function fetchProviders() {
      const response = await getProviders();
      setProviders(response);
    }
    fetchProviders();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center mx-auto p-24 max-w-[40rem]">
      <h1 className="font-bold text-3xl">Sign in to your account</h1>
      <LoginForm />
      <Divider />
      <div className="flex flex-col items-center gap-y-4">
        {renderLoginButtons(providers)}
      </div>
    </div>
  );
}
