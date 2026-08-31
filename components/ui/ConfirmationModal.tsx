"use client";

import { ReactNode } from "react";

import { AlertTriangle, CheckCircle2, Info, X } from "lucide-react";

import Button from "./Button";

type ModalVariant = "danger" | "warning" | "success" | "info";

interface ConfirmationModalProps {
  open: boolean;

  onClose: () => void;

  onConfirm: () => void;

  title: string;

  description: string;

  confirmText?: string;

  cancelText?: string;

  variant?: ModalVariant;

  loading?: boolean;

  closeOnBackdrop?: boolean;

  children?: ReactNode;
}

const variantConfig = {
  danger: {
    icon: AlertTriangle,

    iconBg: "bg-danger/10",

    iconColor: "text-danger",

    buttonVariant: "danger" as const,
  },

  warning: {
    icon: AlertTriangle,

    iconBg: "bg-warn/10",

    iconColor: "text-warn",

    buttonVariant: "warning" as const,
  },

  success: {
    icon: CheckCircle2,

    iconBg: "bg-accent-tint",

    iconColor: "text-accent-dark",

    buttonVariant: "success" as const,
  },

  info: {
    icon: Info,

    iconBg: "bg-brand-tint",

    iconColor: "text-brand",

    buttonVariant: "primary" as const,
  },
};

export default function ConfirmationModal({
  open,

  onClose,

  onConfirm,

  title,

  description,

  confirmText = "Confirm",

  cancelText = "Cancel",

  variant = "info",

  loading = false,

  closeOnBackdrop = true,

  children,
}: ConfirmationModalProps) {
  if (!open) {
    return null;
  }

  const config = variantConfig[variant];

  const Icon = config.icon;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 p-6 backdrop-blur-sm"

      onClick={() => {
        if (closeOnBackdrop) {
          onClose();
        }
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}

        className="rounded-card shadow-panel w-full max-w-xl bg-white"
      >
        {/* Header */}

        <div className="flex items-start justify-between p-8">
          <div className="flex items-start gap-5">
            <div
              className={`rounded-control flex h-16 w-16 items-center justify-center ${config.iconBg} `}
            >
              <Icon size={30} className={config.iconColor} />
            </div>

            <div>
              <h2 className="text-navy display-4 font-bold">{title}</h2>

              <p className="text-muted mt-4 max-w-md leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-control hover:bg-surface flex h-11 w-11 items-center justify-center transition-all duration-200"
          >
            <X size={20} />
          </button>
        </div>

        {/* Divider */}

        <div className="bg-surface h-px" />

        {/* Body */}

        <div className="p-8">
          {children && <div className="mb-8">{children}</div>}

          <div className="rounded-control bg-surface p-6">
            <p className="text-muted text-sm leading-relaxed">
              Please review this action carefully before continuing.
              {variant === "danger" && (
                <>
                  <br />
                  <br />
                  <strong>This action cannot be undone.</strong>
                </>
              )}
            </p>
          </div>
        </div>

        {/* Divider */}

        <div className="bg-surface h-px" />

        {/* Footer */}

        <div className="flex flex-col-reverse gap-4 p-8 sm:flex-row sm:justify-end">
          <Button variant="secondary" onClick={onClose} disabled={loading}>
            {cancelText}
          </Button>

          <Button
            variant={config.buttonVariant}
            onClick={onConfirm}
            loading={loading}
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
}
