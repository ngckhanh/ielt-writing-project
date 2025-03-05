import TestHeader from "@/components/TestHeader";

export default function Task2Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <TestHeader />
            <main className="flex-grow container mx-auto">{children}</main>
        </>
    );
}
