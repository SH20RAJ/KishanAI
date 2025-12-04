"use client";

import { SignUp } from "@stackframe/stack";
import Link from "next/link";
import Image from "next/image";

export default function SignUpPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex flex-col items-center justify-center p-4">
            {/* Logo and Header */}
            <div className="mb-8 text-center">
                <Link href="/" className="inline-flex items-center space-x-3 mb-4">
                    <Image
                        src="/logo.png"
                        alt="KisanAI Logo"
                        width={50}
                        height={50}
                        className="rounded-xl"
                    />
                    <h1 className="text-2xl font-bold text-gray-900">KisanAI</h1>
                </Link>
                <p className="text-gray-600 mt-2">Create your account to get started</p>
            </div>

            {/* Sign Up Component */}
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <SignUp />
                </div>

                {/* Sign In Link */}
                <p className="text-center mt-6 text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link
                        href="/sign-in"
                        className="text-green-600 hover:text-green-700 font-semibold transition-colors"
                    >
                        Sign in
                    </Link>
                </p>

                {/* Back to Home */}
                <p className="text-center mt-4">
                    <Link
                        href="/"
                        className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        ← Back to home
                    </Link>
                </p>
            </div>
        </div>
    );
}
