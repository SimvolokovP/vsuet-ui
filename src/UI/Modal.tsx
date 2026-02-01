"use client";

import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "../utils/cn";
import { Button } from "./Button/Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
  closeOnBackdropClick?: boolean;
  showCloseButton?: boolean;
  preventBodyScroll?: boolean;
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  className,
  closeOnBackdropClick = true,
  showCloseButton = true,
  preventBodyScroll = true,
}: ModalProps) {
  useEffect(() => {
    if (preventBodyScroll && isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      if (preventBodyScroll) {
        document.body.style.overflow = "unset";
      }
    };
  }, [isOpen, preventBodyScroll]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ zIndex: 100 }}
    >
      <div
        className={cn(
          "fixed inset-0 bg-modal-backdrop transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        style={{ zIndex: 100 }}
        onClick={closeOnBackdropClick ? onClose : undefined}
      />

      <div
        className={cn(
          "relative w-full max-w-md rounded-lg bg-modal-background p-4 pt-2 shadow-xl",
          "transition-all duration-300",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0",
          className
        )}
        style={{ zIndex: 101 }}
        onClick={(e) => e.stopPropagation()}
      >
        {(title || showCloseButton) && (
          <div className="mb-2 flex w-full items-center justify-between">
            {title && (
              <h3 className="text-xl font-medium leading-6 text-foreground">
                {title}
              </h3>
            )}
            {showCloseButton && (
              <Button
                className="ml-auto h-[24px] min-w-[24px] p-0"
                variant="text"
                onClick={onClose}
                aria-label="Закрыть"
                size="md"
              >
                <X size={24} />
              </Button>
            )}
          </div>
        )}

        <div className="max-h-[70vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}