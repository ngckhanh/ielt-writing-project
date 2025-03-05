"use client";

import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NextAuthProvider from "@/providers/NextAuthProvider";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { useSession } from "next-auth/react";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* <NextAuthProvider> */}
        <SessionProvider>
          <SessionBasedLayout>{children}</SessionBasedLayout>
        </SessionProvider>
          
        {/* </NextAuthProvider> */}
      </body>
    </html>
  );
}

const SessionBasedLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();

  // Optimize status handling
  // if (status === "loading") {
  //   return <LoadingScreen />;
  // }

  return session ? (
    <AuthenticatedLayout>{children}</AuthenticatedLayout>
  ) : (
    <UnauthenticatedLayout>{children}</UnauthenticatedLayout>
  );
};

// Reusable Loading Screen
const LoadingScreen = () => (
  <div className="flex items-center justify-center h-screen">
    <p>Loading...</p>
  </div>
);

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

// 'use client';

// import { SessionProvider } from "next-auth/react";
// import { useSession } from 'next-auth/react';
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import Sidebar from "@/components/Sidebar";
// import React from "react";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen flex flex-col">
//         <SessionProvider>
//           <OptimizedLayout>{children}</OptimizedLayout>
//         </SessionProvider>
//       </body>
//     </html>
//   );
// }

// function OptimizedLayout({ children }: { children: React.ReactNode }) {
//   const { status } = useSession();

//   console.log("Session status:", status);

//   return status === 'authenticated' ? (
//     <AuthenticatedLayout>{children}</AuthenticatedLayout>
//   ) : (
//     <UnauthenticatedLayout>{children}</UnauthenticatedLayout>
//   );
// }

// const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => (
//   <div className="flex h-screen">
//     <Sidebar />
//     <main className="flex-grow p-6 overflow-auto">{children}</main>
//   </div>
// );

// const UnauthenticatedLayout = ({ children }: { children: React.ReactNode }) => (
//   <>
//     <Header />
//     <main className="flex-grow container mx-auto">{children}</main>
//     <Footer />
//   </>
// );
