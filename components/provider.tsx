import { SessionProvider } from "next-auth/react";
import React from "react";

const provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SessionProvider>{children}</SessionProvider>
    </div>
  );
};

export default provider;
