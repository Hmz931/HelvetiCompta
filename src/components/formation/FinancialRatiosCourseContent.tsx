
import React from 'react';
import { courseStructure } from '@/data/courses';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import RatioIcon, { getRatioIconByTitle } from './financial/RatioIcon';
import './financial/FormulaDisplay.css';
import RatioFormulaDisplay from './financial/RatioFormulaDisplay';
import RatioSummaryTable from './financial/RatioSummaryTable';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const FinancialRatiosCourseContent = () => {
  const course = courseStructure["financial-ratios"];
  
  if (!course) {
    return <div>Cours non trouvé</div>;
  }
  
  // Function to process content with special layout for ratios
  const processContent = (content: string, sectionId: string) => {
    // For the summary section, use our new component
    if (sectionId === 'summary') {
      return <RatioSummaryTable />;
    }
    
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
            
            return (
              <RatioFormulaDisplay
                key={index}
                title={title}
                formula={formula}
                accounts={accountItems}
              />
            );
          })}
        </>
      );
    } else {
      // Regular content
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }
  };
  
  // Separate intro from ratio sections
  const introSection = course.sections.find(section => section.id === 'intro');
  const ratioSections = course.sections.filter(section => 
    section.id !== 'intro' && section.id !== 'summary'
  );
  const summarySection = course.sections.find(section => section.id === 'summary');
  
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold mb-4 text-swiss-dark">{course.title}</h1>
      {course.description && (
        <p className="text-gray-600 mb-8 text-lg">{course.description}</p>
      )}
      
      <div className="space-y-10">
        {/* Introduction section */}
        {introSection && (
          <Card className="border-0 shadow-md rounded-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-swiss-blue/15 to-swiss-blue/5 pb-4">
              <CardTitle className="text-2xl font-bold text-swiss-dark flex items-center gap-3">
                {introSection.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 px-6">
              {introSection.content && (
                <div dangerouslySetInnerHTML={{ __html: introSection.content }} />
              )}
              
              {introSection.subsections && introSection.subsections.length > 0 && (
                <div className="mt-6">
                  <Tabs defaultValue={introSection.subsections[0].title}>
                    <TabsList className="mb-4 w-full">
                      {introSection.subsections.map((subsection) => (
                        <TabsTrigger 
                          key={subsection.title} 
                          value={subsection.title}
                          className="flex-1"
                        >
                          {subsection.title}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    
                    {introSection.subsections.map((subsection) => (
                      <TabsContent key={subsection.title} value={subsection.title}>
                        <div className="py-2" dangerouslySetInnerHTML={{ __html: subsection.content }} />
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Ratio sections in accordion */}
        <Card className="border-0 shadow-md rounded-xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-swiss-blue/15 to-swiss-blue/5 pb-4">
            <CardTitle className="text-2xl font-bold text-swiss-dark">
              Les différents types de ratios
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 px-6">
            <Accordion type="single" collapsible className="w-full">
              {ratioSections.map((section) => {
                const ratioType = getRatioIconByTitle(section.title);
                
                return (
                  <AccordionItem key={section.id} value={section.id} className="border-b border-gray-200 py-2">
                    <AccordionTrigger className="hover:no-underline py-3">
                      <div className="flex items-center gap-3 text-xl font-medium text-swiss-dark">
                        <RatioIcon type={ratioType} size={24} />
                        {section.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2 px-2">
                      {section.content && (
                        <div dangerouslySetInnerHTML={{ __html: section.content }} />
                      )}
                      
                      {section.subsections && section.subsections.length > 0 && (
                        <div className="mt-4">
                          <Tabs defaultValue={section.subsections[0].title}>
                            <TabsList className="mb-4 w-full">
                              {section.subsections.map((subsection) => (
                                <TabsTrigger 
                                  key={subsection.title} 
                                  value={subsection.title}
                                  className="flex-1"
                                >
                                  {subsection.title}
                                </TabsTrigger>
                              ))}
                            </TabsList>
                            
                            {section.subsections.map((subsection) => (
                              <TabsContent key={subsection.title} value={subsection.title}>
                                <div className="py-2" dangerouslySetInnerHTML={{ __html: subsection.content }} />
                              </TabsContent>
                            ))}
                          </Tabs>
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </CardContent>
        </Card>

        {/* Summary section */}
        {summarySection && (
          <Card className="border-0 shadow-md rounded-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-swiss-blue/15 to-swiss-blue/5 pb-4">
              <CardTitle className="text-2xl font-bold text-swiss-dark flex items-center gap-3">
                {summarySection.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 px-6">
              {summarySection.content && (
                <div dangerouslySetInnerHTML={{ __html: summarySection.content }} />
              )}
              
              {summarySection.subsections && summarySection.subsections.length > 0 && (
                <div className="mt-6">
                  <Tabs defaultValue={summarySection.subsections[0].title}>
                    <TabsList className="mb-4 w-full">
                      {summarySection.subsections.map((subsection) => (
                        <TabsTrigger 
                          key={subsection.title} 
                          value={subsection.title}
                          className="flex-1"
                        >
                          {subsection.title}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    
                    {summarySection.subsections.map((subsection) => (
                      <TabsContent key={subsection.title} value={subsection.title}>
                        <div className="py-2" dangerouslySetInnerHTML={{ __html: subsection.content }} />
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default FinancialRatiosCourseContent;
