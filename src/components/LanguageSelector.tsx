
"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="px-4 py-6">
      <Select value={language} onValueChange={(val: any) => setLanguage(val)}>
        <SelectTrigger className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <SelectValue placeholder="Select Language" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="english">English</SelectItem>
          <SelectItem value="hindi">Hindi (हिंदी)</SelectItem>
          <SelectItem value="marathi">Marathi (मराठी)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
