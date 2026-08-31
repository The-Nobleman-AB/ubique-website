"use client";

import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const buttonVariants = cva(
  `
  inline-flex
  items-center
  justify-center
  gap-2
  rounded-control
  font-semibold
  transition-all
  duration-200
  disabled:pointer-events-none
  disabled:opacity-50
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-brand
  focus-visible:ring-offset-2
  active:scale-[0.98]
  `,

  {
    variants: {
      variant: {
        primary: `
          bg-navy
          text-white
          hover:bg-brand
        `,

        secondary: `
          border
          border-line
          bg-white
          text-navy
          hover:border-brand
          hover:text-brand
        `,

        success: `
          bg-accent
          text-white
          hover:brightness-110
        `,

        danger: `
          bg-danger
          text-white
          hover:brightness-110
        `,

        warning: `
          bg-warn
          text-white
          hover:brightness-110
        `,

        outline: `
          border
          border-brand
          bg-brand-tint
          text-brand
          hover:bg-brand
          hover:text-white
        `,

        ghost: `
          bg-transparent
          text-navy
          hover:bg-surface
        `,
      },

      size: {
        sm: `
          h-10
          px-4
          text-sm
        `,

        md: `
          h-12
          px-6
          text-base
        `,

        lg: `
          h-14
          px-8
          text-lg
        `,

        xl: `
          h-16
          px-10
          text-xl
        `,
      },

      fullWidth: {
        true: "w-full",

        false: "",
      },
    },

    defaultVariants: {
      variant: "primary",

      size: "md",

      fullWidth: false,
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ReactNode;

  rightIcon?: React.ReactNode;

  loading?: boolean;
}
export default function Button({
  className,

  variant,

  size,

  fullWidth,

  leftIcon,

  rightIcon,

  loading = false,

  children,

  disabled,

  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        buttonVariants({
          variant,
          size,
          fullWidth,
        }),
        className,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="h-5 w-5 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />

          <path
            className="opacity-75"
            fill="currentColor"
            d="
              M4 12
              a8 8 0 018-8
              V0
              C5.373 0
              0 5.373
              0 12
              h4z
            "
          />
        </svg>
      )}

      {!loading && leftIcon}

      <span>{children}</span>

      {!loading && rightIcon}
    </button>
  );
}

export { buttonVariants };
