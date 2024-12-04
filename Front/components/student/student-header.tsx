"use client";

import { Student } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { IdCard } from "lucide-react";

interface StudentHeaderProps {
  student: Student;
}

export function StudentHeader({ student }: StudentHeaderProps) {
  return (
    <Card className="mb-8">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              Welcome, {student.firstName} {student.lastName}
            </h2>
            <div className="flex items-center gap-2 mt-2 text-muted-foreground">
              <IdCard className="h-4 w-4" />
              School ID: {student.schoolId}
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">
              Enrolled Courses
            </div>
            <div className="text-2xl font-bold">
              {student.courses.filter(c => c.enrolled).length}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}