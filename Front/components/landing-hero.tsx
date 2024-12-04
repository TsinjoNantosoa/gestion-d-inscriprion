"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { useRouter } from "next/navigation";

export function LandingHero() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-4">
      <Logo />
      
      <div className="text-center space-y-4 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Welcome to School
        </h1>
        <p className="text-xl text-muted-foreground">
          School Management System
        </p>
      </div>

      <div className="flex gap-4">
        <Button size="lg" onClick={() => router.push("/signin")}>
          Sign in
        </Button>
        <Button size="lg" variant="outline" onClick={() => router.push("/signup")}>
          Sign up
        </Button>
      </div>
    </div>
  );
}