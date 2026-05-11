"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconHome,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import AnimatedHandshakeIcon from "@/components/AnimatedHandshakeIcon";
import { BarChartIcon } from "@/components/BarChartIcon";
import { MasonryIcon } from "@/components/MasonryIcon";

export default function SidebarDemo({ children }: { children: React.ReactNode }) {
  const links = [
    {
      label: "Home",
      href: "/",
      icon: (
        <IconHome className="h-5 w-5 shrink-0 text-neutral-700" />
      ),
    },
    {
      label: "Programs",
      href: "/programs",
      icon: (
        <MasonryIcon size={20} className="h-5 w-5 shrink-0 text-neutral-700" />
      ),
    },
    {
      label: "Impact",
      href: "/impact",
      icon: (
        <BarChartIcon size={20} className="h-5 w-5 shrink-0 text-neutral-700" />
      ),
    },
    {
      label: "Donate",
      href: "/donate",
      icon: (
        <AnimatedHandshakeIcon size={36} colorLeft="#FF6D00" colorRight="#1A237E" className="shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "flex min-h-screen w-full flex-col md:flex-row relative"
      )}
    >
      <div className="sticky top-0 z-50 md:h-screen">
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10">
            <div className={cn("flex flex-1 flex-col overflow-x-hidden overflow-y-auto", !open && "items-center")}>
              {open ? <Logo /> : <LogoIcon />}
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} active={pathname === link.href} />
                ))}
              </div>
            </div>
          </SidebarBody>
        </Sidebar>
      </div>
      <div className="flex flex-1 flex-col rounded-tl-2xl border border-neutral-200 overflow-hidden relative">
        {children}
      </div>
    </div>
  );
}
export const Logo = () => {
  return (
    <a
      href="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <img src="/icon.svg" alt="Crowdera Logo" className="h-6 w-6 shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-heading font-bold whitespace-pre text-primary"
      >
        Crowdera
      </motion.span>
    </a>
  );
};
export const LogoIcon = () => {
  return (
    <a
      href="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <img src="/icon.svg" alt="Crowdera Logo" className="h-6 w-6 shrink-0" />
    </a>
  );
};


