
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
  
  // Function to process content with special layout for ratios
  const processContent = (content: string) => {
    // Check if content has formulas and accounts sections
    if (content.includes('<div class="formula-header">') || 
        content.includes('<div class="accounts-header">')) {
      
      // Split content by sections (each ratio)
      const sections = content.split('###').filter(section => section.trim());
      
      return (
        <>
          {sections.map((section, index) => {
            // Extract the section title
            const titleMatch = section.trim().match(/^(.*?)$/m);
            const title = titleMatch ? titleMatch[1].trim() : '';
            
            // Find formula section
            const formulaMatch = section.match(/<div class="ratio-formula-equation">([\s\S]*?)<\/div>/);
            const formula = formulaMatch ? formulaMatch[1].trim() : '';
            
            // Find accounts section
            const accountsListMatch = section.match(/<ul class="accounts-list">([\s\S]*?)<\/ul>/);
            const accountsList = accountsListMatch ? accountsListMatch[1] : '';
            
            // Extract individual accounts
            const accountItems: string[] = [];
            if (accountsList) {
              const accountMatches = accountsList.matchAll(/<li>(.*?)<\/li>/g);
              for (const match of accountMatches) {
                accountItems.push(match[1]);
              }
            }
            
            // Generate index like a) b) c) based on position
            const itemIndex = index + '-1-formula';
            
            return (
              <div key={index} className="ratio-item">
                <h4 className="ratio-title">{title}</h4>
                <div className="formula-item">
                  <div className="formula-item-index">{String.fromCharCode(97 + index)}</div>
                  <div className="formula-content">
                    <div className="formula-header">Formule :</div>
                    <div className="ratio-formula-equation" dangerouslySetInnerHTML={{ __html: formula }} />
                  </div>
                </div>
                
                {accountItems.length > 0 && (
                  <div className="accounts-item">
                    <div className="accounts-item-index">{String.fromCharCode(97 + index) + '-1'}</div>
                    <div className="accounts-content">
                      <div className="accounts-header">Comptes utilisés :</div>
                      <ul className="accounts-list">
                        {accountItems.map((account, idx) => (
                          <li key={idx}>{account}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </>
      );
    } else {
      // Regular content
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }
  };
  
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
                  processContent(section.content)
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
