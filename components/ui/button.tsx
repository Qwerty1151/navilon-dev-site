"use client";
import * as React from "react";
import { cn } from "./utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const variantClasses: Record<string,string> = {
  default: "bg-blue-600 text-white hover:opacity-90",
  outline: "border border-slate-300 text-slate-900 hover:bg-slate-50",
  ghost: "bg-transparent text-slate-900 hover:bg-slate-100",
};

const sizeClasses: Record<string,string> = {
  sm: "px-2 py-1 text-sm rounded",
  md: "px-3 py-2 rounded-md",
  lg: "px-4 py-3 text-lg rounded-lg",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size="md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn("inline-flex items-center justify-center transition", variantClasses[variant], sizeClasses[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;
