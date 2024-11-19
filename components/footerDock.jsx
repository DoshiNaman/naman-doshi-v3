import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconMap2,
  IconPresentation,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function FooterDock() {
  const pathname = usePathname();
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Journey",
      icon: (
        <IconMap2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/journey",
    },
    {
      title: "Projects",
      icon: (
        <IconPresentation className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/naman-doshi-007/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/DoshiNaman",
    },
  ];
  return (
    <div className="fixed md:bottom-10 max-md:top-10">
      <div className="flex items-end justify-center h-auto w-full">
        <FloatingDock
          // only for demo, remove for production
          mobileClassName="translate-y-20"
          items={links.map((link) => ({
            ...link,
            active: link.href === pathname, // Set active based on current path
          }))}
        />
      </div>
    </div>
  );
}
