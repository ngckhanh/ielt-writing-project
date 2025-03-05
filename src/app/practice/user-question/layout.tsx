import PracticeLayout from "@/components/PracticeLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="min-h-screen flex flex-col">
          <PracticeLayout>{children}</PracticeLayout>
        </body>
      </html>
    );
  }
  
