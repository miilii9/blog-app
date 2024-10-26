"use client";
import "@/app/globals.css";
import { useEffect } from "react";
import { getCookies } from "cookies-next";
import { useRouter } from "next/navigation";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookies = getCookies();
  const router = useRouter();
  useEffect(() => {
    if (cookies?.token) {
      router.push("/blogs");
    }
  });
  return (
    <html>
      <body className={` min-h-svh bg-white antialiased`}>{children}</body>
    </html>
  );
}
