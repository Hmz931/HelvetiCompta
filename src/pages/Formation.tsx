
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';
import FormationOverview from '../components/formation/FormationOverview';
import GenericCourseContent from '../components/formation/GenericCourseContent';
import FinancialCourseContent from '../components/formation/FinancialCourseContent';
import ChartOfAccountsCourseContent from '../components/formation/ChartOfAccountsCourseContent';

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
      </Routes>
    </div>
  );
};

export default Formation;
