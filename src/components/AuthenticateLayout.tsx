import Sidebar from "@/components/Sidebar";

export default function AuthenticateLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen">
          {/* Sidebar */}
          <Sidebar />
    
          {/* Main Content */}
          <main className="flex-grow p-6 overflow-auto">
            {children}
          </main>
        </div>
      );
}
