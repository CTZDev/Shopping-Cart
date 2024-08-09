import { CoursesContext } from './../contexts/CoursesContext';
import { useContext } from 'react';

export const useCourses = () => {
  const context = useContext(CoursesContext);
  if (!context)
    throw new Error('useCourses must be used within a CoursesProvider');

  return context;
};
