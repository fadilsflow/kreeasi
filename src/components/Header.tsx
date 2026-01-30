"use client";

import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "@tanstack/react-router";
import { LogoType } from "./logo";


const menuItems = [
  { name: "Products", href: "/" },
  { name: "Values", href: "/" },
  { name: "Contact", href: "/" },
];

export const Header = () => {
  const [menuState, setMenuState] = React.useState(false);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className={
          "fixed z-20 w-full transition-all duration-300  bg-background "
        }
      >
        <div className="mx-auto max-w-6xl px-4 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-6  lg:gap-0">
            <div className="flex items-center w-full justify-between gap-6 lg:w-auto">
              <Link to="/" aria-label="home" className="flex items-center">
                <LogoType />
              </Link>
              <Button
                variant={"ghost"}
                size={"icon"}
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative grid place-items-center lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 size-6 duration-200 col-start-1 row-start-1" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 size-6 -rotate-180 scale-0 opacity-0 duration-200 col-start-1 row-start-1" />
              </Button>
            </div>
            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden justify-end flex-wrap items-center space-y-8 rounded-3xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 ">
              <div className="lg:hidden ">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Button 
                          variant="ghost"
                          size="sm"
                          onClick={() => setMenuState(false)}
                          render={<Link to={item.href}/>

                          }
                        >  
                          {item.name}
                        </Button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="m-auto hidden size-fit lg:block">
                <ul className="flex gap-1">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Button
                        variant="ghost"
                        size="sm"
                        render={<Link to={'/'}/>

                        }
                      >
                          {item.name}
                        </Button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

