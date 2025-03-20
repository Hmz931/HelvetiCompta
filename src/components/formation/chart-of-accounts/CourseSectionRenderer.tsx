
import React from 'react';
import { Section } from '@/data/courses/types';
import ChartOfAccountsSearch from './ChartOfAccountsSearch';

interface CourseSectionRendererProps {
  section: Section;
}

const CourseSectionRenderer = ({ section }: CourseSectionRendererProps) => {
  if (section.id === 'search') {
    return <ChartOfAccountsSearch />;
  }
  
  // For other sections, we'll let the parent component handle rendering
  // as it has the Markdown table parsing logic
  return null;
};

export default CourseSectionRenderer;
