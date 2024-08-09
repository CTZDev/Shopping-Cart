import { createContext, useState } from 'react';
import { COURSES } from '../consts/course';
import type { Course } from '../types/Course';

type CoursesContextType = {
  courses: Course[];
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
};

export const CoursesContext = createContext<CoursesContextType | null>(null);

export const CoursesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [courses, setCourses] = useState<Course[]>(COURSES);

  return (
    <CoursesContext.Provider value={{ courses, setCourses }}>
      {children}
    </CoursesContext.Provider>
  );
};
