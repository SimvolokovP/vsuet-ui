import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../../utils/cn";

type ButtonVariant = "primary" | "default" | "text";
type ButtonSize = "sm" | "md" | "lg" | "none";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export function Button({
  children,
  className,
  variant = "default",
  size = "md",
  ...rest
}: PropsWithChildren<ButtonProps>) {
  const baseClasses = cn(
    "cursor-pointer",
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "whitespace-nowrap",
    "rounded-sm",
    "text-sm",
    "font-medium",
    "transition-all",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "shrink-0",
    "outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-offset-2"
  );

  const sizeClasses = {
    sm: "h-7 px-2 py-0.5 text-xs",
    md: "h-8 px-3 py-1 text-sm",
    lg: "h-10 px-4 py-2 text-base",
    none: "",
  };

  const variantClasses = {
    primary: cn(
      "text-primary-inner",
      "bg-primary-background",
      "shadow-xs",
      "hover:bg-primary-background/90",
      "focus-visible:ring-primary"
    ),
    default: cn(
      "bg-default-background",
      "text-default-inner",
      "shadow-xs",
      "hover:bg-secondary/75",
      "focus-visible:ring-secondary"
    ),
    text: cn(
      "bg-transparent",
      "text-inner",
      "hover:bg-accent/5",
      "shadow-none"
    ),
  };

  return (
    <button
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}