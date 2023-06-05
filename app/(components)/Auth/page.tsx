import React from "react";
import AuthComponents from "./AuthComponents";
import { getProviders } from "next-auth/react";
export default async function AuthProvider() {
  const providers: Awaited<ReturnType<typeof getProviders>> =
    await getProviders();
  return (
    <div className=" w-full 430:w-auto">
      <AuthComponents providers={providers} />
    </div>
  );
}
