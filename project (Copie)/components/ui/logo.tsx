"use client";

import { GraduationCap } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <GraduationCap className="h-8 w-8 text-primary" />
      <span className="font-bold text-2xl">School</span>
    </div>
  );
}