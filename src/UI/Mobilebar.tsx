"use client";
import { MENU } from "@/shared/data/menu.data";
import { usePathname } from "next/navigation";
import { match } from "path-to-regexp";
import { MobilebarItem } from "./MobilebarItem";
import { Z_INDEX } from "@/constans/zIndex";

export function Mobilebar() {
  const pathname = usePathname();

  return (
    <div
      className="fixed bottom-0 left-0 right-0 mx-auto w-full max-w-96 px-4 pb-4 block md:hidden"
      style={{ zIndex: Z_INDEX.mobilebar }}
    >
      <div className="rounded-xl border-2 border-border bg-mobilebar-background p-2 shadow-2xl">
        <ul className="flex justify-around">
          {MENU.map((menuItem) => (
            <li className="flex-1" key={menuItem.href}>
              <MobilebarItem
                navItem={menuItem}
                isActive={!!match(menuItem.href)(pathname)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
