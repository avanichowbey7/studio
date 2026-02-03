
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Home, Calendar, Users, HelpCircle, Cross } from "lucide-react";
import { cn } from "@/lib/utils";
import { LanguageSelector } from "./LanguageSelector";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function Sidebar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const emblem = PlaceHolderImages.find((img) => img.id === "ashoka-emblem");
  const [stars, setStars] = useState<{ top: string; left: string; size: string; delay: string }[]>([]);

  const navItems = [
    { label: t("home"), href: "/", icon: Home },
    { label: t("bookAppointment"), href: "/book", icon: Calendar },
    { label: t("doctors"), href: "/doctors", icon: Users },
    { label: t("help"), href: "/help", icon: HelpCircle },
  ];

  useEffect(() => {
    const generatedStars = [...Array(12)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      delay: `${Math.random() * 5}s`,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="sidebar-gradient w-64 h-screen sticky left-0 top-0 flex flex-col shadow-2xl overflow-hidden text-white z-50 shrink-0">
      {stars.map((star, i) => (
        <div
          key={i}
          className="glowing-star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
          }}
        />
      ))}

      <div className="p-8 flex flex-col items-center gap-4 relative z-10">
        <div className="relative w-20 h-20 bg-white p-2 rounded-full shadow-lg border-2 border-red-500/50">
          <Image
            src={emblem?.imageUrl || ""}
            alt="Emblem"
            width={80}
            height={80}
            className="object-contain"
            data-ai-hint="Ashoka Emblem"
          />
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 border border-red-500">
            <Cross className="h-4 w-4 text-red-600 fill-red-600" />
          </div>
        </div>
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest opacity-80">{t("govtHospital")}</p>
          <h2 className="text-xl font-bold font-headline">{t("brandName")}</h2>
        </div>
      </div>

      <LanguageSelector />

      <nav className="flex-1 px-4 py-2 space-y-2 relative z-10">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group",
                isActive
                  ? "bg-white text-blue-900 shadow-lg font-bold"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              )}
            >
              <item.icon className={cn("h-5 w-5", isActive ? "text-blue-700" : "opacity-70 group-hover:opacity-100")} />
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-6 text-center text-[10px] opacity-60 relative z-10">
        <p>© 2024 Ministry of Health</p>
        <p>Govt. of India</p>
      </div>
    </div>
  );
}
