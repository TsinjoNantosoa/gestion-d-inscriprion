"use client";

import { useState } from "react";
import { StudentHeader } from "@/components/student/student-header";
import { CourseList } from "@/components/student/course-list";
import { ScheduleView } from "@/components/student/schedule-view";
import { PendingRegistration } from "@/components/student/pending-registration";
import { Course, Student } from "@/lib/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data - replace with actual API calls
const mockCourses: Course[] = [
  {
    id: "1",
    name: "Introduction to Computer Science",
    description: "Learn the basics of programming and computer science concepts",
    schedule: "Monday, Wednesday 10:00 AM - 11:30 AM",
    credits: 3,
    enrolled: false
  },
  {
    id: "2",
    name: "Calculus I",
    description: "Fundamental concepts of single-variable calculus",
    schedule: "Tuesday, Thursday 2:00 PM - 3:30 PM",
    credits: 4,
    enrolled: false
  },
  {
    id: "3",
    name: "World History",
    description: "Survey of major historical events and developments",
    schedule: "Monday, Wednesday, Friday 1:00 PM - 2:00 PM",
    credits: 3,
    enrolled: false
  }
];

const mockStudent: Student = {
  id: "1",
  firstName: "John",
  lastName: "Doe",
  schoolId: "STU2024001", // Set to null to test pending registration state
  courses: mockCourses
};

export default function DashboardPage() {
  const [student, setStudent] = useState<Student>(mockStudent);
  const [courses, setCourses] = useState<Course[]>(mockCourses);

  const handleEnroll = (courseId: string) => {
    setCourses(courses.map(course =>
      course.id === courseId ? { ...course, enrolled: true } : course
    ));
  };

  const handleUnenroll = (courseId: string) => {
    setCourses(courses.map(course =>
      course.id === courseId ? { ...course, enrolled: false } : course
    ));
  };

  // Show pending registration state if student has no school ID
  if (!student.schoolId) {
    return <PendingRegistration />;
  }

  return (
    <div className="container max-w-6xl mx-auto py-8 px-4">
      <StudentHeader student={student} />
      <Tabs defaultValue="schedule" className="space-y-6">
        <TabsList>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="courses">Course Registration</TabsTrigger>
        </TabsList>
        
        <TabsContent value="schedule" className="space-y-6">
          <ScheduleView courses={courses} />
        </TabsContent>
        
        <TabsContent value="courses" className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Available Courses</h2>
            <CourseList
              courses={courses}
              onEnroll={handleEnroll}
              onUnenroll={handleUnenroll}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}


