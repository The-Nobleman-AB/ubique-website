"use client";

import { ReactNode } from "react";

import {
  AlertTriangle,
  CheckCircle2,
  Info,
  X,
} from "lucide-react";

import Button from "./Button";

type ModalVariant =
  | "danger"
  | "warning"
  | "success"
  | "info";

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

    iconBg: "bg-red-100",

    iconColor: "text-red-600",

    buttonVariant: "danger" as const,

  },

  warning: {

    icon: AlertTriangle,

    iconBg: "bg-amber-100",

    iconColor: "text-amber-600",

    buttonVariant: "warning" as const,

  },

  success: {

    icon: CheckCircle2,

    iconBg: "bg-green-100",

    iconColor: "text-green-600",

    buttonVariant: "success" as const,

  },

  info: {

    icon: Info,

    iconBg: "bg-blue-100",

    iconColor: "text-[#155EEF]",

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

  const config =
    variantConfig[variant];

  const Icon =
    config.icon;

  return (

    <div

      className="
      fixed
      inset-0
      z-[999]
      flex
      items-center
      justify-center
      bg-black/50
      p-6
      backdrop-blur-sm
      "

      onClick={() => {

        if (closeOnBackdrop) {

          onClose();

        }

      }}

    >

      <div

        onClick={(e) =>
          e.stopPropagation()
        }

        className="
        w-full
        max-w-xl
        rounded-[32px]
        bg-white
        shadow-[0_40px_100px_rgba(15,23,42,0.18)]
        "

      >
        {/* Header */}

        <div
          className="
          flex
          items-start
          justify-between
          p-8
          "
        >

          <div
            className="
            flex
            items-start
            gap-5
            "
          >

            <div
              className={`
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl

              ${config.iconBg}
              `}
            >

              <Icon
                size={30}
                className={
                  config.iconColor
                }
              />

            </div>

            <div>

              <h2
                className="
                text-3xl
                font-black
                tracking-[-0.03em]
                text-[#071B3A]
                "
              >
                {title}
              </h2>

              <p
                className="
                mt-4
                max-w-md
                leading-8
                text-gray-600
                "
              >
                {description}
              </p>

            </div>

          </div>

          <button
            type="button"
            onClick={onClose}
            className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            transition-all
            duration-300
            hover:bg-gray-100
            "
          >

            <X size={20} />

          </button>

        </div>

        {/* Divider */}

        <div
          className="
          h-px
          bg-gray-200
          "
        />

        {/* Body */}

        <div
          className="
          p-8
          "
        >

          {children && (

            <div
              className="
              mb-8
              "
            >

              {children}

            </div>

          )}

          <div
            className="
            rounded-2xl
            bg-[#F8FAFC]
            p-6
            "
          >

            <p
              className="
              text-sm
              leading-7
              text-gray-600
              "
            >

              Please review this action carefully before
              continuing.

              {variant === "danger" && (
                <>
                  <br />
                  <br />
                  <strong>
                    This action cannot be undone.
                  </strong>
                </>
              )}

            </p>

          </div>

        </div>

        {/* Divider */}

        <div
          className="
          h-px
          bg-gray-200
          "
        />

        {/* Footer */}

        <div
          className="
          flex
          flex-col-reverse
          gap-4
          p-8
          sm:flex-row
          sm:justify-end
          "
        >
          <Button
            variant="secondary"
            onClick={onClose}
            disabled={loading}
          >
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