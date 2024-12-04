"use client";

import { Course } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Clock, BookOpen } from "lucide-react";
import { toast } from "sonner";

interface CourseListProps {
  courses: Course[];
  onEnroll: (courseId: string) => void;
  onUnenroll: (courseId: string) => void;
}

export function CourseList({ courses, onEnroll, onUnenroll }: CourseListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <Card key={course.id}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              {course.name}
            </CardTitle>
            <CardDescription>{course.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              {course.schedule}
            </div>
            <div className="mt-2 text-sm">
              Credits: {course.credits}
            </div>
          </CardContent>
          <CardFooter>
            {course.enrolled ? (
              <Button
                variant="destructive"
                onClick={() => {
                  onUnenroll(course.id);
                  toast.success(`Unenrolled from ${course.name}`);
                }}
              >
                Unenroll
              </Button>
            ) : (
              <Button
                onClick={() => {
                  onEnroll(course.id);
                  toast.success(`Enrolled in ${course.name}`);
                }}
              >
                Enroll
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}