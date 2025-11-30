"use client";
import Link from "next/link";

import { LogIn, Menu, ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className={cn(
          " fixed z-20 w-full transition-all duration-300 screen-line-before screen-line-after before:-top-px after:-bottom-px bg-background"
        )}
      >
        <div className="mx-auto px-2 md:px-6 lg:px-8 max-w-5xl ">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0">
            <div className="  flex items-center w-full justify-between gap-6 lg:w-auto">
              <Link href="/" aria-label="home" className="flex items-center  ">
                <Logo />
              </Link>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl p-6  md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 ">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                        onClick={() => setMenuState(false)}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>

              <div className="m-auto hidden size-fit lg:block">
                <ul className="flex gap-1">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Button asChild variant="ghost" size="sm">
                        <Link href={item.href} className="text-base">
                          <span>{item.name}</span>
                        </Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button variant="outline" className="rounded-full" size="icon">
                  <ShoppingBag />
                </Button>
                <Button variant="outline" className="rounded-full" size="icon">
                  <LogIn />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
