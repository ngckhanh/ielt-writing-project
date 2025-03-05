"use client";

import { usePathname } from "next/navigation"; // Import usePathname

export default function PracticeHeader() {
    const pathname = usePathname(); // Get the current path
    console.log("Current Pathname:", pathname);

    return (
        <div className="bg-white flex flex-row items-start p-4">
            <div className="flex space-x-4">
                {/* Task 1 Link */}
                <a href="/practice/task1">
                    <button
                        className={`px-4 py-2 rounded-lg border transition ${
                            pathname.startsWith("/practice/task1")
                                ? "bg-gray-200 text-black"
                                : "bg-white text-black hover:bg-black hover:text-white"
                        }`}
                    >
                        Luyện TASK 1
                    </button>
                </a>

                {/* Task 2 Link */}
                <a href="/practice/task2">
                    <button
                        className={`px-4 py-2 rounded-lg border transition ${
                            pathname.startsWith("/practice/task2")
                                ? "bg-gray-200 text-black"
                                : "bg-white text-black hover:bg-black hover:text-white"
                        }`}
                    >
                        Luyện TASK 2
                    </button>
                </a>

                {/* User-Question Link
                <a href="/practice/user-question">
                    <button
                        className={`px-4 py-2 rounded-lg border transition ${
                            pathname === "/practice/user-question"
                                ? "bg-gray-200 text-black"
                                : "bg-white text-black hover:bg-black hover:text-white"
                        }`}
                    >
                        Tự thêm topic
                    </button>
                </a> */}
            </div>
        </div>
    );
}
