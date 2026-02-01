import { Logo } from "@/components/Logo";
import { Logout } from "@/components/Logout";
import { Navigation } from "@/components/Navigation";
import { ThemeChanger } from "@/components/ThemeChanger";
import { PAGES } from "@/config/pages-url.config";
import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="fixed z-30 hidden md:flex border-r-2 sidebar-shadow border-r-border h-full flex-col bg-secondary w-[120px] shrink py-[36px]">
      <div className="h-full flex flex-col items-center justify-between w-full">
        <div className="flex flex-col gap-10 w-full items-center">
          <Link href={PAGES.HOME}>
            <Logo />
          </Link>
          <Navigation />
        </div>
        <div className="flex flex-col gap-6 w-full items-center">
          <ThemeChanger />
          <Logout />
        </div>
      </div>
    </aside>
  );
}
