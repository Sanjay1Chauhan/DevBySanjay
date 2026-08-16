// src/lib/mockData/menuList.ts

export type MenuItem = {
  label: string;
  href: string;
  subMenu?: MenuItem[];
};

export const menuList: MenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Experience",
    href: "/#experience",
  },
  {
    label: "Portfolio",
    href: "/#portfolio",
  },
  {
    label: "Services",
    href: "/#services",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];
