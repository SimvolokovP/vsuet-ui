import { IMenuItem } from "@/shared/data/menu.data";
import Link from "next/link";

interface MobilebarItemProps {
  navItem: IMenuItem;
  isActive: boolean;
}

export function MobilebarItem({ isActive, navItem }: MobilebarItemProps) {
  return (
    <Link
      className={`
        relative 
        flex 
        justify-center 
        items-center
        gap-1
        p-[6px]
        w-full 
        h-full 
        rounded-md
        transition-colors
        duration-300
        ${isActive ? "text-inner bg-mobilebar-active" : "text-muted"}
      `}
      href={navItem.href}
    >
      <navItem.icon size={24} />
      {isActive && navItem.label && (
        <span className="text-[12px] font-medium">{navItem.label}</span>
      )}
    </Link>
  );
}
