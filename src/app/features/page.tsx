"use client";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { TbWriting } from "react-icons/tb";
import { VscPreview } from "react-icons/vsc";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function FeaturePage() {
    //const session = await getServerSession(authOptions);
    const { data: session } = useSession();
    const router = useRouter();

    const handleButtonClick = (path: string) => {
        if (session) {
            router.push(path);
        } else {
            router.push("/auth/signin");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center py-12">
            {/* Heading */}
            <h1 className="text-4xl font-bold text-black mb-4">
                Tự Ôn Luyện IELTS Writing
            </h1>

            <p className="text-gray-600 mb-4">
                Bạch Dương App giúp bạn biết được trình độ của mình và giúp bạn cải thiện.
            </p>

            {/* Divider */}
            <div className="relative my-6 w-full max-w-xl">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-gray-50 text-gray-500">Các tính năng</span>
                </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
                {/* Feature 1 */}
                <div className="border border-gray-400 rounded-lg p-6 bg-white">
                    <div className="flex items-center space-x-3 mb-4">
                        <VscPreview className="text-2xl text-blue-600" />
                        <span className="text-lg font-semibold">Ôn Luyện</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                        Tự trả lời các topic tự chọn. Nhận sửa lỗi và đánh giá lập tức.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={() => handleButtonClick("/practice/task1")}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                        >
                            Task 1
                        </button>

                        <button
                            onClick={() => handleButtonClick("/practice/task2")}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                        >
                            Task 2
                        </button>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="border border-gray-400 rounded-lg p-6 bg-white">
                    <div className="flex items-center space-x-3 mb-4">
                        <TbWriting className="text-2xl text-blue-600" />
                        <span className="text-lg font-semibold">Thi thử</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                        Trả lời một bộ câu hỏi ngẫu nhiên. Cấu trúc giống bài thi thật.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={() => handleButtonClick("/mock-test/task1")}
                            className="border-1 border-pink-600 text-pink-600 px-4 py-2 rounded-lg hover:bg-pink-600 hover:text-white"
                        >
                            Task 1
                        </button>

                        <button
                            onClick={() => handleButtonClick("/mock-test/task2")}
                            className="border-1 border-pink-600 text-pink-600 px-4 py-2 rounded-lg hover:bg-pink-600 hover:text-white"
                        >
                            Task 2
                        </button>

                        <button
                            onClick={() => handleButtonClick("/mock-test/full-test")}
                            className="border-1 border-pink-600 text-pink-600 px-4 py-2 rounded-lg hover:bg-pink-600 hover:text-white"
                        >
                            Full test
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
