"use client";

import { Course } from "@/lib/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

interface ScheduleViewProps {
  courses: Course[];
}

export function ScheduleView({ courses }: ScheduleViewProps) {
  const enrolledCourses = courses.filter(course => course.enrolled);
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const coursesByDay = days.map(day => ({
    day,
    courses: enrolledCourses.filter(course => course.schedule.includes(day))
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Weekly Schedule
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {coursesByDay.map(({ day, courses }) => (
            <div key={day} className="space-y-2">
              <h3 className="font-semibold text-lg">{day}</h3>
              {courses.length > 0 ? (
                <div className="space-y-2">
                  {courses.map(course => (
                    <div
                      key={course.id}
                      className="flex items-start gap-3 p-3 bg-muted rounded-lg"
                    >
                      <Clock className="h-4 w-4 mt-1 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{course.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {course.schedule.split(day)[1].split(",")[0].trim()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No classes scheduled</p>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}