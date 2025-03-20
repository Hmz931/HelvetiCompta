
import { CourseStructure } from './types';
import { overviewCourse } from './overview';
import { financialCourse } from './financial';
import { salaryCourse } from './salary';
import { analyticsCourse } from './analytics';
import { taxCourse } from './tax';
import { closingCourse } from './closing';
import { exercisesCourse } from './exercises';

export const courseStructure: CourseStructure = {
  overview: overviewCourse,
  financial: financialCourse,
  salary: salaryCourse,
  analytics: analyticsCourse,
  tax: taxCourse,
  closing: closingCourse,
  exercises: exercisesCourse
};

export * from './types';
