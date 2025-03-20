
import React from 'react';
import { Course } from '@/data/courses/types';

interface CourseHeaderProps {
  course: Course;
}

const CourseHeader = ({ course }: CourseHeaderProps) => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">{course.title}</h1>
      {course.description && (
        <p className="text-swiss-text-secondary mb-8 text-lg">{course.description}</p>
      )}
    </>
  );
};

export default CourseHeader;
