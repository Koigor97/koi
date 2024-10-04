"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "@uidotdev/usehooks";
import clsx from "clsx";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { AlignRight } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Dev Journey" },
  { href: "/blog", label: "Dev Blog" },
];

function Nav() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="text-lg text-bodyText/85 font-medium flex gap-5">
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
    </nav>
  );
}

function MobileNav() {
  const pathname = usePathname();

  return (
    <nav>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <AlignRight size={34} className="py-1 px-1" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {links.map((link) => (
            <DropdownMenuItem
              key={link.href}
              className={clsx(
                {
                  "bg-secondary1 font-bold text-bgBody": pathname === link.href,
                },
                "text-base"
              )}
            >
              <Link href={link.href}>{link.label}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}

function ResponsiveNav() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) {
    return <MobileNav />;
  }

  return <Nav />;
}

export default ResponsiveNav;
