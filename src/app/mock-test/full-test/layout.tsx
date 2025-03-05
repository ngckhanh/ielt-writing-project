import TestHeader from "@/components/TestHeader";

export default function FullTestLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <TestHeader />
            <main className="flex-grow container mx-auto">{children}</main>
        </>
    );
}
