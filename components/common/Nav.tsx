"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { AlignRight, XIcon } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "../ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Dev Journey" },
  { href: "/blog", label: "Dev Blog" },
];

function ResponsiveNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  function handleToggle() {
    setIsOpen((prev) => !prev);
  }

  // check window size on load and window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // initial check
    handleResize();

    //  listen for window resize
    window.addEventListener("resize", handleResize);

    // clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      <div className="flex justify-between items-center py-4">
        <AlignRight className="w-7 h-7 md:hidden" onClick={handleToggle} />

        <ul
          className={`${
            isMobile ? "hidden" : "flex"
          } text-lg text-bodyText/85 font-medium gap-5`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={clsx({
                  "text-secondary1 font-bold underline underline-offset-4":
                    pathname === link.href,
                })}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <motion.div
        initial={{ x: "100%" }}
        animate={isOpen ? { x: 0 } : { x: "100%" }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 right-0 w-1/2 h-screen bg-white z-50 lg:hidden py-3"
      >
        <div className="grid gap-5">
          <XIcon onClick={handleToggle} className="ml-2" />
          <ul className="px-2">
            {links.map((link) => (
              <li
                key={link.href}
                className={clsx(
                  {
                    "bg-secondary1 text-bgBody font-bold ":
                      pathname === link.href,
                  },
                  "px-4 py-2 rounded-md"
                )}
              >
                <Link
                  href={link.href}
                  onClick={handleToggle}
                  className="text-lg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </nav>
  );
}

export default ResponsiveNav;
