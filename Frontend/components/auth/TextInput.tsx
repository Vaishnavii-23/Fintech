"use client";

import { forwardRef, useId, useState } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import {
  Mail as EmailIcon,
  Lock as LockIcon,
  User as UserIcon,
  Eye as EyeIcon,
  EyeOff as EyeOffIcon,
} from "lucide-react";

type Props = {
  label: string;
  type?: "text" | "email" | "password";
  placeholder: string;
  error?: string;
  allowToggle?: boolean;
  rightSlot?: ReactNode;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "placeholder" | "className">;

const TextInput = forwardRef<HTMLInputElement, Props>(function TextInput(
  {
    label,
    type = "text",
    placeholder,
    error,
    id,
    allowToggle,
    rightSlot,
    ...rest
  },
  ref
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = error ? `${inputId}-error` : undefined;

  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const shouldAllowToggle = allowToggle ?? isPassword;
  const resolvedType = isPassword && showPassword ? "text" : type;

  return (
    <div className="space-y-2">
      {/* Accessible label (hidden visually) */}
      <label htmlFor={inputId} className="sr-only">
        {label}
      </label>

      <div className="relative">
        {/* LEFT ICON */}
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-white/50">
          {type === "email" && <EmailIcon />}
          {type === "password" && <LockIcon />}
          {type === "text" && <UserIcon />}
        </span>

        <input
          id={inputId}
          ref={ref}
          type={resolvedType}
          placeholder={placeholder}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={errorId}
          className="
            w-full rounded-lg bg-white/15
            pl-11 pr-11 py-3
            text-sm text-white placeholder-white/60
            shadow-inner
            focus:outline-none focus:ring-2 focus:ring-white/20
          "
          {...rest}
        />

        {/* EYE TOGGLE */}
        {isPassword && shouldAllowToggle && (
          <button
            type="button"
            onClick={() => setShowPassword((p) => !p)}
            className="absolute inset-y-0 right-3 flex items-center text-white/60 hover:text-white"
            aria-label={showPassword ? "Hide password" : "Show password"}
            aria-pressed={showPassword}
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        )}
      </div>

      {rightSlot && (
        <div className="flex justify-end text-xs text-white/70">{rightSlot}</div>
      )}

      {error && (
        <p id={errorId} className="text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  );
});

export default TextInput;
