"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import GoogleSignInButton from "@/components/GoogleSignInButton";

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        checkFormValidity(e.target.value, password);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        checkFormValidity(email, e.target.value);
    };

    const isEmailValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const checkFormValidity = (email: string, password: string) => {
        if (email.trim() !== "" && password.trim() !== "") {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    };

    const handleError = () => {
        console.error("Login failed!");
        alert("An error occurred while logging in. Please try again.");
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("/api/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            setIsLoading(false);
            if (response.ok) {
                router.push("/");
            } else {
                throw new Error("Signin failed. Please try again.");
            }
        } catch (error) {
            setIsLoading(false);
            console.error(error);
            handleError();
        }
    };
    

  
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                {/* Header */}
                <h2 className="text-2xl font-bold text-center text-gray-700">Welcome</h2>
                <p className="mt-4 text-sm text-gray-600 text-center">
                    Log in để bắt đầu với Bạch Dương App
                </p>

                {/* Email Input Section */}
                <div className="mt-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your email"
                    />
                    <label htmlFor="password" className="block mt-4 text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your password"
                    />
                </div>

                {/* Continue Button */}
                <button
                    onClick={handleSubmit}
                    className={`mt-6 w-full py-2 rounded-md ${!isButtonDisabled
                            ? "bg-blue-500 text-white hover:bg-blue-600"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                    disabled={isButtonDisabled || isLoading}
                >
                    {isLoading ? "Submitting..." : "Continue"}
                </button>



                <p className="mt-6 text-sm text-center text-gray-600">
                    Don't have an account?{" "}
                    <a href="/auth/signup" className="text-blue-500 hover:underline">
                        Sign up
                    </a>
                </p>

                {/* Divider */}
                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">OR</span>
                    </div>
                </div>

                {/* Google Login Section */}
                <div className="mt-6 w-full py-2 rounded-md">
                    <GoogleSignInButton />
                </div>

            </div>
        </div>
    );
}
