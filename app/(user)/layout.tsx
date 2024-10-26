import type { Metadata } from "next";
import { Suspense } from "react";
import "@/app/globals.css";
import Header from "@/components/layout/header/header";
import HandleAuth from "@/components/layout/logic/handle-auth";
import ReactQueryProvider from "@/components/layout/logic/React-query-provider";

export const metadata: Metadata = {
  title: "blog-app",
  description: "blog-app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <HandleAuth />
        <Header />
        <ReactQueryProvider>
          <Suspense fallback={null}>
            <main className="container mx-auto py-20">{children}</main>
          </Suspense>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
