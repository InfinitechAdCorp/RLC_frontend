"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import NextLink from "next/link";
import clsx from "clsx";
import { ThemeSwitch } from "@/components/theme-switch";
import { useState } from "react";
import { usePathname } from 'next/navigation';

const navItems = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contactus" },
  { label: "Properties", href: "/properties" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <HeroUINavbar className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <NavbarContent className="w-full flex items-center justify-between px-4 lg:px-16">
        <NavbarBrand>
          <NextLink href="/">
            <p className="font-bold text-black">RLC</p>
          </NextLink>
        </NavbarBrand>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-8">
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  pathname === item.href
                    ? 'text-yellow-500 font-medium'
                    : 'text-black'
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>

        <NavbarItem className="hidden lg:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>

        {/* Mobile Navigation */}
        <NavbarContent className="lg:hidden flex items-center gap-4">
          <ThemeSwitch />
          <NavbarMenuToggle onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </NavbarContent>
      </NavbarContent>

      {isMenuOpen && (
        <NavbarMenu className="lg:hidden block bg-white border-t w-full">
          {navItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <NextLink href={item.href} className="block py-2 text-black">
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}
    </HeroUINavbar>
  );
};
