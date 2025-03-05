import TestHeader from "@/components/TestHeader";

export default function Task1Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <TestHeader />
            <main className="flex-grow container mx-auto">{children}</main>
        </>
    );
}
