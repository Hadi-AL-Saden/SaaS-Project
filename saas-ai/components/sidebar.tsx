"use client";
import { UserButton } from "@clerk/nextjs";

import Image from "next/image";

import Link from "next/link";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
});

import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  MusicIcon,
  VideoIcon,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";

const routs = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-500",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-500",
  },
  {
    label: "Music Generation",
    icon: MusicIcon,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    label: "code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-500",
  },
  {
    label: "Settings ",
    icon: Settings,
    href: "/settings",
    // color:"text-green-500",
  },
];

export default function Sidebar() {
  const pathName = usePathname();
  return (
    <>
      <div className="space-y-4 py-4 flex flex-col h-full bg-gradient-to-b from-[#520099] to-gray-900  text-white">
        <div className="px-3 py-2 flex-1">
          <Link href={"/dashboard"} className="flex items-center pl-3 mb-14">
            <div className="relative w-8 h-8 mr-4">
              <Image fill alt="Logo" src={"/Logo.png"} />
            </div>
            <h1 className={cn("text-xl font-bold", montserrat.className)}>
              Rain-AI
            </h1>
          </Link>
          <div className="space-y-1">
            {routs.map((route) => (
              <Link
                href={route.href}
                key={route.href}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg",
                  pathName === route.href
                    ? "text-white bg-white/35"
                    : "text-zinc-400"
                )}>
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                  {route.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="h-10 flex gap-5 ">
          <div className="w-10 h-50 flex"></div>
          <div className="w-10 h-50 flex-box"></div>
        </div>
      </div>
    </>
  );
}
