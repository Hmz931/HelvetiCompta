
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
  
  return (
    <div className="prose max-w-none">
      <div dangerouslySetInnerHTML={{ __html: section.content || "Contenu à venir..." }} />
    </div>
  );
};

export default CourseSectionRenderer;
