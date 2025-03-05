"use client";

import { signOut } from 'next-auth/react';
import { usePathname } from "next/navigation"; // Import usePathname
import { useState } from "react";
import { GoHome } from "react-icons/go";
import { TbWriting } from "react-icons/tb";
import { VscPreview, VscAccount } from "react-icons/vsc";
import { BiExit } from "react-icons/bi";
import { LuFlag } from "react-icons/lu";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Sidebar() {
    const pathname = usePathname(); // Get the current path
    const [accountMenuOpen, setAccountMenuOpen] = useState(false);

    return (
        <div className="w-64 h-screen bg-white shadow-md flex flex-col justify-between">
            <div>
                {/* Logo */}
                <div className="p-4 flex items-center">
                    <a href="/" className="flex items-center space-x-4" aria-label="Navigate to home">
                        <img
                            className="h-10 w-10"
                            // src="/path/to/logo.png" // Replace with your logo path
                            alt="App Logo"
                        />
                        <div className="flex flex-row space-x-2">
                            <span className="text-lg font-semibold text-black">Bạch Dương</span>
                            <span className="text-lg font-semibold text-blue-500">App</span>
                        </div>
                    </a>
                </div>

                {/* Navigation Links */}
                <nav className="mt-6">
                    <a
                        href="/"
                        className={`flex items-center px-4 py-3 space-x-3 rounded-lg ${
                            pathname === "/" ? "bg-gray-200" : "text-black hover:bg-gray-100"
                        }`}
                    >
                        <GoHome className="text-xl" />
                        <span>Trang chủ</span>
                    </a>
                    <a
                        href="/practice"
                        className={`flex items-center px-4 py-3 space-x-3 rounded-lg ${
                            pathname.startsWith("/practice") ? "bg-gray-200" : "text-black hover:bg-gray-100"
                        }`}
                    >
                        <VscPreview className="text-xl" />
                        <span>Ôn Luyện</span>
                    </a>
                    <a
                        href="/mock-test"
                        className={`flex items-center px-4 py-3 space-x-3 rounded-lg ${
                            pathname.startsWith("/mock-test") ? "bg-gray-200" : "text-black hover:bg-gray-100"
                        }`}
                    >
                        <TbWriting className="text-xl" />
                        <span>Thi thử</span>
                    </a>
                </nav>
            </div>

            <div className="p-4">
                {/* Upgrade Button */}

                <a href ="/payment">
                    <button className="w-full py-3 px-4 text-blue-600 bg-white border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
                        Nâng cấp tài khoản
                    </button>
                </a>
                

                {/* Account Menu */}
                <div className="mt-6 relative">
                    <button
                        onClick={() => setAccountMenuOpen(!accountMenuOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-200"
                    >
                        <div className="flex items-center space-x-3">
                            <VscAccount className="text-xl" />
                            <span>Tài khoản</span>
                        </div>
                        {accountMenuOpen ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    {accountMenuOpen && (
                        <div className="absolute bottom-14 left-0 w-full bg-white shadow-md rounded-lg z-10">
                            <a
                                href="/feedback"
                                className="block px-4 py-3 hover:bg-gray-100 flex items-center space-x-2"
                            >
                                <LuFlag className="text-xl" />
                                <span>Phản hồi/Báo lỗi</span>
                            </a>

                            <a
                                onClick={() => signOut()}
                                className="block px-4 py-3 hover:bg-gray-100 flex items-center space-x-2"
                            >
                                <BiExit className="text-xl" />
                                <span>Đăng xuất</span>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
