"use client";

import { ReactNode } from "react";
import { X } from "lucide-react";
import { Button } from "@/UI/Button";
import { cn } from "@/utils/cn";

interface RightSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
  closeOnBackdropClick?: boolean;
  showCloseButton?: boolean;
}

export function RightSidebar({
  isOpen,
  onClose,
  title,
  children,
  className,
  closeOnBackdropClick = true,
  showCloseButton = true,
}: RightSidebarProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-60 flex items-center justify-end overflow-hidden",
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      <div
        className={cn(
          "fixed inset-0 bg-modal-backdrop transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={closeOnBackdropClick ? onClose : undefined}
      />

      <div
        className={cn(
          "relative h-full z-40 w-full max-w-md border-r-2 border-r-border bg-modal-background p-4 shadow-xl",
          "transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
          className
        )}
        style={{ width: "75%", maxWidth: "400px" }}
      >
        {(title || showCloseButton) && (
          <div className="mb-4 flex w-full justify-end items-center">
            {title && (
              <h3 className="font-medium text-xl md:text-2xl leading-6 mr-auto">
                {title}
              </h3>
            )}
            {showCloseButton && (
              <Button
                className="h-[24px] ml-2"
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

        <div className="h-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
