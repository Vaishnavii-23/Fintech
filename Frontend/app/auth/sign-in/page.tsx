"use client";

import Link from "next/link";

import AuthLayout from "../../../components/auth/AuthLayout";
import AuthToggle from "../../../components/auth/AuthToggle";
import TextInput from "../../../components/auth/TextInput";

export default function SignInPage() {
  return (
    <AuthLayout>
      <div className="mx-auto w-full max-w-[420px] space-y-10 text-white">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-semibold">Welcome to Wealthora</h1>
          <p className="text-sm text-white/70">
            Your journey to smarter wealth management starts here.
          </p>
        </div>

        <AuthToggle active="sign-in" />

        <div className="space-y-6">

          <div className="space-y-4">
            <TextInput
              label="Email Address"
              type="email"
              placeholder="you@example.com"
            />
            <TextInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              allowToggle
              rightSlot={(
                <button
                  type="button"
                  className="text-xs text-white/70 transition hover:text-white"
                >
                  Forgot password?
                </button>
              )}
            />
          </div>

          <button className="w-full rounded-lg bg-[#2A2D45] py-3 font-medium shadow-md hover:bg-[#1f2238]">
            Sign In
          </button>

          <p className="text-sm text-center text-white">
            Don&apos;t have an account?{" "}
            <Link href="/auth/sign-up" className="underline hover:text-white">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
