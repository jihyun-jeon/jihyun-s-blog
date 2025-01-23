"use client";

import { useEffect, useState } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
type ThemeProviderProps = React.ComponentProps<typeof NextThemeProvider>;

export function ThemeProvider({ childeren, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{childeren}</>;
  }

  return <NextThemeProvider {...props}>{childeren}</NextThemeProvider>;
}
