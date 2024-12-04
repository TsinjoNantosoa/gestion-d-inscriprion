"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function PendingRegistration() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <GraduationCap className="h-12 w-12 text-muted-foreground" />
          </div>
          <CardTitle>Registration Pending</CardTitle>
          <CardDescription>
            Please wait while the administration processes your registration and assigns you a school ID.
            This usually takes 1-2 business days.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}