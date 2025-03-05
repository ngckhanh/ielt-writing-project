'use client';

import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NextAuthProvider from "@/providers/NextAuthProvider";
import React from "react";
import { useSession } from 'next-auth/react';
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <NextAuthProvider>
        <SessionBasedLayout>{children}</SessionBasedLayout>
          {/* <RootContent>{children}</RootContent> */}
        </NextAuthProvider>
      </body>
    </html>
  );
}

const SessionBasedLayout = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return status === "authenticated" ? (
    // Layout for authenticated users
    <AuthenticatedLayout>{children}</AuthenticatedLayout>
  ) : (
    // Default layout for unauthenticated users
    <UnauthenticatedLayout>{children}</UnauthenticatedLayout>
  );
};

const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-screen">
    <Sidebar />
    <main className="flex-grow p-6 overflow-auto">{children}</main>
  </div>
);

const UnauthenticatedLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main className="flex-grow container mx-auto">{children}</main>
    <Footer />
  </>
);
