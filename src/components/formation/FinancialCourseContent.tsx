
import React from 'react';
import { courseStructure } from '@/data/courses';
import AccountsPanel from './financial/AccountsPanel';

const FinancialCourseContent = () => {
  const course = courseStructure["financial"];
  
  if (!course) {
    return <div>Cours non trouvé</div>;
  }
  
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">{course.title}</h1>
      {course.description && (
        <p className="text-swiss-text-secondary mb-8 text-lg">{course.description}</p>
      )}
      
      <div className="space-y-6">
        {course.sections.map((section) => (
          <div key={section.id} className="glass rounded-xl p-6 shadow-card">
            <h2 className="text-xl font-bold mb-3">{section.title}</h2>
            <p className="text-swiss-text-secondary">
              {section.content || "Contenu à venir..."}
            </p>
          </div>
        ))}

        <AccountsPanel />
      </div>
    </div>
  );
};

export default FinancialCourseContent;
