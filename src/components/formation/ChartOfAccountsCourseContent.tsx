
import React from 'react';
import { courseStructure } from '@/data/courses';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CourseSectionRenderer from './chart-of-accounts/CourseSectionRenderer';
import GenericCourseContent from './GenericCourseContent';

const ChartOfAccountsCourseContent = () => {
  return <GenericCourseContent courseId="chart-of-accounts" />;
};

export default ChartOfAccountsCourseContent;
