"use client";
import { SessionProvider } from "next-auth/react";
import { SWRConfig } from "swr";
import api from "@/lib/api";

export function Providers({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export const SWRProvider = ({ children }) => {
  return (
    <SWRConfig
      value={{
        fetcher: (...args) => api.get(...args).then((res) => res.data),
      }}
    >
      {children}
    </SWRConfig>
  );
};
