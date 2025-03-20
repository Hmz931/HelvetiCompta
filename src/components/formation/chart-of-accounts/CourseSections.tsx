
import React from 'react';
import { Section } from '@/data/courses/types';
import CourseSectionRenderer from './CourseSectionRenderer';

interface CourseSectionsProps {
  sections: Section[];
}

const CourseSections = ({ sections }: CourseSectionsProps) => {
  return (
    <div className="space-y-6">
      {sections.map((section) => (
        <div key={section.id} className="glass rounded-xl p-6 shadow-card">
          <h2 className="text-xl font-bold mb-3">{section.title}</h2>
          <CourseSectionRenderer section={section} />
        </div>
      ))}
    </div>
  );
};

export default CourseSections;
