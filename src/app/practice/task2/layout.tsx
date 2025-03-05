import PracticeHeader from "@/components/PracticeHeader";

export default function Task2Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <PracticeHeader />
            <main className="flex-grow container mx-auto">{children}</main>
        </>
    );
}
