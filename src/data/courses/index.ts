
import { CourseStructure } from './types';
import { overviewCourse } from './overview';
import { financialCourse } from './financial';
import { salaryCourse } from './salary';
import { analyticsCourse } from './analytics';
import { taxCourse } from './tax';
import { closingCourse } from './closing';
import { exercisesCourse } from './exercises';
import { chartOfAccountsCourse, fullAccountsList } from './chartOfAccounts';
import { introCourse } from './intro';
import { journalCourse } from './journal';
import { incomeExpensesCourse } from './incomeExpenses';
import { interestsCourse } from './interests';
import { transitionalCourse } from './transitional';
import { provisionsCourse } from './provisions';
import { legalFormsCourse } from './legalForms';
import { partnershipsCourse } from './partnerships';
import { corporationsCourse } from './corporations';
import { llcCourse } from './llc';
import { depreciationCourse } from './depreciation';
import { financialRatiosCourse } from './financialRatios';
import { financialStatementsCourse } from './financialStatements';

export const courseStructure: CourseStructure = {
  overview: overviewCourse,
  financial: financialCourse,
  salary: salaryCourse,
  analytics: analyticsCourse,
  tax: taxCourse,
  closing: closingCourse,
  exercises: exercisesCourse,
  'chart-of-accounts': chartOfAccountsCourse,
  intro: introCourse,
  journal: journalCourse,
  'income-expenses': incomeExpensesCourse,
  interests: interestsCourse,
  transitional: transitionalCourse,
  provisions: provisionsCourse,
  'legal-forms': legalFormsCourse,
  partnerships: partnershipsCourse,
  corporations: corporationsCourse,
  llc: llcCourse,
  depreciation: depreciationCourse,
  'financial-ratios': financialRatiosCourse,
  'financial-statements': financialStatementsCourse
};

export * from './types';
export { fullAccountsList };
