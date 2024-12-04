export interface Student {
  id: string | null;
  firstName: string;
  lastName: string;
  schoolId: string | null;
  courses: Course[];
}

export interface Course {
  id: string;
  name: string;
  description: string;
  schedule: string;
  credits: number;
  enrolled: boolean;
}