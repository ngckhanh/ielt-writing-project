"use client";

import GoogleSignInButton from "@/components/GoogleSignInButton";
//import { createClient } from "@/supabase/server";
import { useState } from "react";
import { useRouter } from "next/navigation";
//import { emailLogin, signup } from "./actions";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState(false);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (field: string, value: string) => {
        if (field === "email") {
            setEmail(value);
        } else if (field === "password") {
            setPassword(value);
        }
        validateForm(value, field);
    };

    const validateForm = (value: string, field: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailValid = field === "email" ? emailRegex.test(value) : emailRegex.test(email);
        const isPasswordValid = field === "password" ? value.length >= 8 : password.length >= 8;
        setIsValid(isEmailValid && isPasswordValid);
    };

    const handleError = () => {
        console.error("Register failed!");
        alert("An error occurred while logging in. Please try again.");
    };

    const handleSubmit = async () => {
        if (isValid) {
            setIsLoading(true);
            try {
                const response = await fetch("/api/signup", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password }),
                });
                setIsLoading(false);
                if (response.ok) {
                    router.push("/auth/signin");
                } else {
                    alert("Signup failed. Please try again.");
                }
            } catch (error) {
                setIsLoading(false);
                console.error("Signup error:", error);
                alert("An error occurred during signup. Please try again.");
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                {/* Header */}
                <h2 className="text-2xl font-bold text-center text-gray-700">Create Your Account</h2>
                <p className="mt-4 text-sm text-gray-600 text-center">
                    Sign Up để bắt đầu với Bạch Dương App
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
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your email"
                        required
                    />
                    <label htmlFor="password" className="block mt-4 text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your password (min 8 characters)"
                        required
                    />
                </div>

                {/* Continue Button */}
                <button
                    onClick={handleSubmit}
                    className={`mt-6 w-full py-2 rounded-md ${isValid
                            ? "bg-blue-500 text-white hover:bg-blue-600"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                    disabled={!isValid || isLoading}
                >
                    {isLoading ? "Submitting..." : "Continue"}
                </button>


                <p className="mt-6 text-sm text-center text-gray-600">
                    Already have an account?{" "}
                    <a href="/auth/signin" className="text-blue-500 hover:underline">
                        Log in
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
