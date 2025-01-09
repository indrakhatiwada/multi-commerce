"use client";
import { cn } from "@/lib/utils";
import {
  FileText,
  HomeIcon,
  Layout,
  LogOut,
  SlidersHorizontal,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: HomeIcon,
        label: "Home",
        href: "/dashboard",
      },
      {
        icon: FileText,
        label: "Products",
        href: "/dashboard/products",
      },
      {
        icon: Layout,
        label: "Banner",
        href: "/dashboard/banners",
      },
      {
        icon: SlidersHorizontal,
        label: "Coupons",
        href: "/dashboard/cupons",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: LogOut,
        label: "Logout",
        href: "/logout",
      },
    ],
  },
];

export default function Menu() {
  const pathname = usePathname();

  return (
    <div className="h-full min-h-screen border-r border-gray-200 bg-emerald-800 overflow-auto">
      <div className="flex items-center gap-2 px-6 py-4.5 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-white">Back Office</span>
        </div>
      </div>
      <div className="flex flex-col gap-6 px-4 py-6">
        {menuItems.map((section, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <span className="px-4 text-xs font-semibold text-gray-400">
              {section.title}
            </span>
            <div className="flex flex-col gap-1">
              {section.items.map((item, itemIdx) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <Link
                    key={itemIdx}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-4 py-2 text-gray-600 hover:bg-green-800 transition-colors",
                      isActive && "bg-green-400 text-green-900 font-medium"
                    )}
                  >
                    <Icon className="h-5 w-5 text-white" />
                    <span className="text-white">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
