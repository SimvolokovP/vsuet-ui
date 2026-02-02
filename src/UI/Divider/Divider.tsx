import type { HTMLAttributes } from "react";
import { cn } from "../../utils/cn";


interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return <div className={cn("h-[2px] bg-border", className)}></div>;
}
