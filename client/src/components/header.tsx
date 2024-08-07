import Link from "next/link";
import Logo from "./logo";
import { menu } from "@/assets/data";
import { cn } from "@/lib/utils";

export const Header = () => {
    return ( 
        <header className="flex items-center justify-between">
            <section >
                <Logo/>
            </section>
            <section className="hidden lg:block">
          <nav>
            <ul className="flex items-center gap-x-1 bg-background-foreground p-1 rounded-full">
              {menu.map((menu) => (
                <li key={menu.href}>
                  <Link
                    href={menu.href}
                    className={cn(
                      "flex items-center gap-x-2 text-sm py-3 px-6 rounded-full transition-colors",
                      menu.href === "/menu"
                        ? "bg-primary font-medium"
                        : "hover:bg-background/70"
                    )}
                  >
                    <i className={menu.icon}></i>
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
            <section>
            <ul className="flex items-center gap-x-3 bg-background-foreground p-3 rounded-full">
                    <li className="flex items-center gap-x-2">
                        
            </li>
            </ul>
            </section>
        </header>
     );
}
 

