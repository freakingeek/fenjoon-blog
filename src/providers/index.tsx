import { ThemeProvider } from "next-themes";
import { type PropsWithChildren } from "react";

export default async function Providers({ children }: PropsWithChildren) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
