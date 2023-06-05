"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "../../Setting/store";
import { SessionProvider } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <Provider store={store}>
          <ThemeProvider enableSystem={true} attribute="class">
            <Toaster position="top-center" reverseOrder={false} />
            {children}
          </ThemeProvider>
        </Provider>
      </SessionProvider>
    </QueryClientProvider>
  );
}
