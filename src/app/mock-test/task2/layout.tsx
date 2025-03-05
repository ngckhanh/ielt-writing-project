import TestLayout from "@/components/TestLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="min-h-screen flex flex-col">
          <TestLayout>{children}</TestLayout>
        </body>
      </html>
    );
  }
  
