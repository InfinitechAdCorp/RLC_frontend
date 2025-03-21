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
// import { Link } from "@heroui/link";
import NextLink from "next/link";
import clsx from "clsx";
import { ThemeSwitch } from "@/components/theme-switch";
import { useState } from "react";
import { usePathname } from 'next/navigation';

const navItems = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contactus" },
  {
    label: "Properties",
    href: "#",
    dropdown: [
      { label: "Condominiums", href: "/properties/condominiums" },
      { label: "House and Lots", href: "/properties/house-and-lots" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  let timeoutId: ReturnType<typeof setTimeout>;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setDropdownOpen(false), 300);
  };

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">RLC</p>
          </NextLink>
        </NavbarBrand>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              {item.dropdown ? (
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className={pathname.includes('/properties') ? 'text-yellow-500 font-medium' : ''}>
                    {item.label}
                  </button>
                  {dropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg">
                      {item.dropdown.map((subItem) => (
                        <NextLink
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {subItem.label}
                        </NextLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NextLink
                  className={clsx(
                    pathname === item.href
                      ? 'text-yellow-500 font-medium'
                      : ''
                  )}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              )}
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="center">
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="center">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {navItems.map((item) => (
          <NavbarMenuItem key={item.href}>{item.label}</NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroUINavbar>
  );
};
