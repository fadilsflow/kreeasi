"use client";

import { GiftIcon, Menu, ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { LogoType } from "./logo";


const menuItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [menuState, setMenuState] = React.useState(false);
//   const pathname = usePathname();

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className={
          "fixed z-20 w-full transition-all duration-300  bg-background "
        }
      >
        <div className="mx-auto max-w-2xl md:max-w-3xl lg:max-w-7xl px-4 lg:px-8 py-4">
          <div className="relative flex flex-wrap items-center justify-between gap-6  lg:gap-0">
            <div className="flex items-center w-full justify-between gap-6 lg:w-auto">
              <Link to="/" aria-label="home" className="flex items-center">
                <LogoType />
              </Link>
              <Button
                variant={"ghost"}
                size={"icon-sm"}
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative block lg:hidden "
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </Button>
            </div>
            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden justify-end flex-wrap items-center space-y-8 rounded-3xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 ">
              <div className="lg:hidden ">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link to={item.href}>
                        <Button 
                          variant="ghost"
                          size="sm"
                        //   className={cn(
                        //     pathname === item.href
                        //       ? "text-accent-foreground"
                        //       : " text-muted-foreground hover:text-accent-foreground",
                        //     " block px-3  duration-150 ",
                        //   )}
                          onClick={() => setMenuState(false)}
                        >
                          {item.name}
                        </Button>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="m-auto hidden size-fit lg:block">
                <ul className="flex gap-1">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link to={item.href}>
                        <Button
                          variant="ghost"
                          size="sm"
                        //   className={cn(
                        //     pathname === item.href
                        //       ? "text-accent-foreground"
                        //       : " text-muted-foreground hover:text-accent-foreground",
                        //     " block px-3  duration-150 ",
                        //   )}
                        >
                          {item.name}
                        </Button>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full  sm:gap-3 space-x-3  sm:space-x-0 md:w-fit">
                <Button variant="outline" size="icon-sm">
                  <ShoppingBag />
                </Button>
                <Button variant="default" className=" px-4 " size={"sm"}>
                  Log in
                </Button>
                {/* <ToggleTheme /> */}
              </div>
            </div>
          </div>
        </div>

        <span className="bg-size-[6px_1px] block h-px bg-[linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] bg-bottom bg-repeat-x opacity-30 dark:opacity-15"></span>
      </nav>
    </header>
  );
};

