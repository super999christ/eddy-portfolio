import { SpeedInsights } from "@vercel/speed-insights/react";
import React from "react";
import PasswordGate from "@/components/PasswordGate";
import ThemeProvider from "@/components/ThemeProvider";

/**
 * A wrapper component that provides the application with the necessary providers.
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <React.StrictMode>
      <SpeedInsights />
      <ThemeProvider>
        <PasswordGate>{children}</PasswordGate>
      </ThemeProvider>
    </React.StrictMode>
  );
}
