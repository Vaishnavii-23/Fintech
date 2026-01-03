"use client";

import Link from "next/link";

import AuthLayout from "../../../components/auth/AuthLayout";
import AuthToggle from "../../../components/auth/AuthToggle";
import TextInput from "../../../components/auth/TextInput";

export default function SignupPage() {
  return (
    <AuthLayout imageSrc="/image.jpg" imageAlt="Create your Wealthora account">
      <div className="w-full space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-semibold">Welcome to Wealthora</h1>
          <p className="text-sm text-white/70">
            Your journey to smarter wealth management starts here.
          </p>
        </div>

        <AuthToggle active="sign-up" />

        <div className="space-y-5">
          

          <div className="space-y-3">
            <TextInput label="Name" placeholder="Enter your full name" />
            <TextInput label="Email Address" type="email" placeholder="you@example.com" />
            <TextInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              allowToggle
            />
          </div>

          <label className="flex items-center gap-2 text-sm text-white/70">
            <input type="checkbox" className="h-4 w-4 accent-white" />
            <span>I agree to <span className="text-white">Terms &amp; Privacy Policy</span></span>
          </label>

          <button className="w-full rounded-lg bg-[#1f2338] py-2.5 text-sm font-medium transition hover:bg-[#2a2f4a]">
            Get Started
          </button>

          <p className="mt-2 text-sm text-center  text-white">
            Already have an account? <Link href="/auth/sign-in" className="underline decoration-2 underline-offset-4">Sign In</Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}