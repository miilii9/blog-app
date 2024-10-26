import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={` min-h-svh bg-white antialiased`}>{children}</body>
    </html>
  );
}
