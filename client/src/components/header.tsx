"use client";
import Link from "next/link";
import Logo from "./logo";
import { menu } from "@/assets/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { MenuMobile } from "./menu-mobile";




export const Header = () => {
  const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false);
  return ( 
    <>
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
            <Image
                src="https://img.freepik.com/foto-gratis/joven-empresario-hispano-sonriendo-feliz-tocando-sus-gafas-ciudad_839833-13933.jpg?t=st=1723070058~exp=1723073658~hmac=bdbb5d13ffc2f81a9ed94db4a4e72d990edd22b17d8bfa9ecb401186ebcf983d&w=138"
                alt="Image"
                width={100}
                height={100}
                className="w-10 h-10 object-cover rounded-full"
              />
              <h5 className="font-medium">Yefferson</h5>
            
                
                <button className="bg-background text-xl w-10 h-10 flex items-center justify-center rounded-full">
                <i className="fi fi-rr-settings"></i>
              </button>
             
            </li>
            <li className="lg:hidden">
              <button
                onClick={() => setShowMenuMobile(true)}
                className="bg-background text-xl w-10 h-10 flex items-center justify-center rounded-full"
              >
                <i className="fi fi-rr-bars-staggered"></i>
              </button>
            </li>
            </ul>
            </section>
      </header>
      <MenuMobile isOpen={showMenuMobile} onClose={setShowMenuMobile} />
    </>
     );
}
 

