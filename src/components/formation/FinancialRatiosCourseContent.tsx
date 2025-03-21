
import React from 'react';
import { courseStructure } from '@/data/courses';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import RatioIcon, { getRatioIconByTitle } from './financial/RatioIcon';
import './financial/FormulaDisplay.css';

const FinancialRatiosCourseContent = () => {
  const course = courseStructure["financial-ratios"];
  
  if (!course) {
    return <div>Cours non trouvé</div>;
  }
  
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold mb-4 text-swiss-dark">{course.title}</h1>
      {course.description && (
        <p className="text-gray-600 mb-8 text-lg">{course.description}</p>
      )}
      
      <div className="space-y-10">
        {course.sections.map((section) => {
          const ratioType = getRatioIconByTitle(section.title);
          
          return (
            <Card key={section.id} className="border-0 shadow-md rounded-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-swiss-blue/15 to-swiss-blue/5 pb-4">
                <CardTitle className="text-2xl font-bold text-swiss-dark flex items-center">
                  <span className="mr-3">
                    <RatioIcon type={ratioType as any} />
                  </span>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 px-6">
                {section.content ? (
                  <div dangerouslySetInnerHTML={{ __html: section.content }} />
                ) : (
                  <p className="text-gray-500 italic">Contenu à venir...</p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default FinancialRatiosCourseContent;
