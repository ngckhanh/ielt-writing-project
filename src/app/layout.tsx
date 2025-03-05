'use client';

import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthenticateLayout from "@/components/AuthenticateLayout";
import NextAuthProvider from "@/providers/NextAuthProvider";
import React from "react";
import { useSession } from 'next-auth/react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <NextAuthProvider>
          <RootContent>{children}</RootContent>
        </NextAuthProvider>
      </body>
    </html>
  );
}

const RootContent = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return status === "authenticated" ? (
    // Layout for authenticated users
    <AuthenticateLayout>{children}</AuthenticateLayout>
  ) : (
    // Default layout for unauthenticated users
    <>
      <Header />
      <main className="flex-grow container mx-auto">{children}</main>
      <Footer />
    </>
  );
};
