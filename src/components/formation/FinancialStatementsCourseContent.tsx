
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { courseStructure } from '@/data/courses';
import { TextProcessor } from '@/components/text/TextProcessor';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FileBarChart } from 'lucide-react';

const FinancialStatementsCourseContent = () => {
  const course = courseStructure['financial-statements'];
  
  return (
    <div className="container mx-auto px-4 py-6 max-w-5xl">
      <h1 className="text-3xl font-bold text-swiss-dark mb-6">{course.title}</h1>
      
      <Card className="mb-8 border-0 shadow-md">
        <CardHeader className="bg-gradient-to-r from-swiss-blue/15 to-swiss-blue/5 border-b">
          <CardTitle className="text-2xl text-swiss-dark flex items-center gap-2">
            <FileBarChart className="h-6 w-6 text-swiss-blue" />
            Introduction aux états financiers
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="prose max-w-none">
            <TextProcessor text={course.introduction} />
          </div>
        </CardContent>
      </Card>
      
      <Accordion type="single" collapsible className="space-y-4">
        {course.sections.map((section, index) => (
          <AccordionItem 
            key={index} 
            value={`section-${index}`}
            className="border rounded-lg overflow-hidden shadow-sm bg-white"
          >
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-lg font-medium text-swiss-dark">
              {section.title}
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 border-t bg-white">
              <div className="prose max-w-none">
                <TextProcessor text={section.content} />
              </div>
              
              {section.subsections && section.subsections.length > 0 && (
                <div className="mt-6 space-y-6">
                  {section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="border-l-4 border-swiss-blue/30 pl-4">
                      <h3 className="text-lg font-medium text-swiss-dark mb-3">
                        {subsection.title}
                      </h3>
                      <div className="prose max-w-none text-gray-700">
                        <TextProcessor text={subsection.content} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FinancialStatementsCourseContent;
