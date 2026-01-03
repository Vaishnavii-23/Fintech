"use client";

import Link from "next/link";

interface AuthToggleProps {
  active: "sign-in" | "sign-up";
}

const tabs = [
  { id: "sign-up" as const, label: "Sign Up", href: "/auth/sign-up" },
  { id: "sign-in" as const, label: "Sign In", href: "/auth/sign-in" },
];

export default function AuthToggle({ active }: AuthToggleProps) {
  return (
    <div className="flex justify-center mt-8">
      <div className="relative flex w-[220px] rounded-xl bg-[#2A2D45] p-1 shadow-inner">
        <div
          className={`absolute top-1 h-[36px] w-[100px] rounded-lg bg-[#7A7FA6] transition-all ${active === "sign-up" ? "left-1" : "right-1"}`}
        />
        {tabs.map((tab) => {
          const commonClasses = "relative z-10 w-1/2 py-2 text-center text-sm";
          if (tab.id === active) {
            return (
              <span key={tab.id} className={`${commonClasses} font-medium`}>
                {tab.label}
              </span>
            );
          }
          return (
            <Link
              key={tab.id}
              href={tab.href}
              className={`${commonClasses} text-white/70 hover:text-white`}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
