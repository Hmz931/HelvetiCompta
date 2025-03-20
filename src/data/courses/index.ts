
import { CourseStructure } from './types';
import { overviewCourse } from './overview';
import { financialCourse } from './financial';
import { salaryCourse } from './salary';
import { analyticsCourse } from './analytics';
import { taxCourse } from './tax';
import { closingCourse } from './closing';
import { exercisesCourse } from './exercises';
import { chartOfAccountsCourse, fullAccountsList } from './chartOfAccounts';

export const courseStructure: CourseStructure = {
  overview: overviewCourse,
  financial: financialCourse,
  salary: salaryCourse,
  analytics: analyticsCourse,
  tax: taxCourse,
  closing: closingCourse,
  exercises: exercisesCourse,
  'chart-of-accounts': chartOfAccountsCourse
};

export * from './types';
export { fullAccountsList };
