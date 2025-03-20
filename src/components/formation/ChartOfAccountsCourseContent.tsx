
import React from 'react';
import { courseStructure } from '@/data/courses';
import CourseHeader from './chart-of-accounts/CourseHeader';
import CourseSections from './chart-of-accounts/CourseSections';

const ChartOfAccountsCourseContent = () => {
  const course = courseStructure['chart-of-accounts'];
  
  if (!course) {
    return <div>Cours non trouvé</div>;
  }
  
  return (
    <div className="animate-fade-in">
      <CourseHeader course={course} />
      <CourseSections sections={course.sections} />
    </div>
  );
};

export default ChartOfAccountsCourseContent;
