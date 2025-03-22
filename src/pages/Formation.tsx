
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';
import FormationOverview from '../components/formation/FormationOverview';
import GenericCourseContent from '../components/formation/GenericCourseContent';
import FinancialCourseContent from '../components/formation/FinancialCourseContent';
import FinancialRatiosCourseContent from '../components/formation/FinancialRatiosCourseContent';
import ChartOfAccountsCourseContent from '../components/formation/ChartOfAccountsCourseContent';
import FinancialStatementsCourseContent from '../components/formation/FinancialStatementsCourseContent';

const Formation = () => {
  return (
    <div>
      <Breadcrumb />
      <Routes>
        <Route path="/" element={<FormationOverview />} />
        <Route path="/overview" element={<GenericCourseContent courseId="overview" />} />
        <Route path="/financial" element={<FinancialCourseContent />} />
        <Route path="/salary" element={<GenericCourseContent courseId="salary" />} />
        <Route path="/analytics" element={<GenericCourseContent courseId="analytics" />} />
        <Route path="/tax" element={<GenericCourseContent courseId="tax" />} />
        <Route path="/closing" element={<GenericCourseContent courseId="closing" />} />
        <Route path="/exercises" element={<GenericCourseContent courseId="exercises" />} />
        <Route path="/chart-of-accounts" element={<ChartOfAccountsCourseContent />} />
        <Route path="/intro" element={<GenericCourseContent courseId="intro" />} />
        <Route path="/journal" element={<GenericCourseContent courseId="journal" />} />
        <Route path="/income-expenses" element={<GenericCourseContent courseId="income-expenses" />} />
        <Route path="/interests" element={<GenericCourseContent courseId="interests" />} />
        <Route path="/transitional" element={<GenericCourseContent courseId="transitional" />} />
        <Route path="/provisions" element={<GenericCourseContent courseId="provisions" />} />
        <Route path="/legal-forms" element={<GenericCourseContent courseId="legal-forms" />} />
        <Route path="/partnerships" element={<GenericCourseContent courseId="partnerships" />} />
        <Route path="/corporations" element={<GenericCourseContent courseId="corporations" />} />
        <Route path="/llc" element={<GenericCourseContent courseId="llc" />} />
        <Route path="/depreciation" element={<GenericCourseContent courseId="depreciation" />} />
        <Route path="/financial-ratios" element={<FinancialRatiosCourseContent />} />
        <Route path="/financial-statements" element={<FinancialStatementsCourseContent />} />
      </Routes>
    </div>
  );
};

export default Formation;
