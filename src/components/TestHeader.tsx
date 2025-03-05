"use client";

import { usePathname } from "next/navigation"; // Import usePathname

export default function TestHeader() {
    const pathname = usePathname(); // Get the current path

    return (
        <div className="bg-white flex flex-row items-start p-4">
            <div className="flex space-x-4">
                {/* Task 1 Link */}
                <a href="/mock-test/task1">
                    <button
                        className={`px-4 py-2 rounded-lg border transition ${
                            pathname.startsWith("/mock-test/task1")
                                ? "bg-gray-200 text-black"
                                : "bg-white text-black hover:bg-black hover:text-white"
                        }`}
                    >
                        Thi TASK 1
                    </button>
                </a>

                {/* Task 2 Link */}
                <a href="/mock-test/task2">
                    <button
                        className={`px-4 py-2 rounded-lg border transition ${
                            pathname.startsWith("/mock-test/task2")
                                ? "bg-gray-200 text-black"
                                : "bg-white text-black hover:bg-black hover:text-white"
                        }`}
                    >
                        Thi TASK 2
                    </button>
                </a>

                {/* Full test Link */}
                <a href="/mock-test/full-test">
                    <button
                        className={`px-4 py-2 rounded-lg border transition ${
                            pathname.startsWith("/mock-test/full-test")
                                ? "bg-gray-200 text-black"
                                : "bg-white text-black hover:bg-black hover:text-white"
                        }`}
                    >
                        Full Test
                    </button>
                </a>
            </div>
        </div>
    );
}
