
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { courseStructure } from '@/data/courses';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FileBarChart } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const FinancialStatementsCourseContent = () => {
  const course = courseStructure['financial-statements'];
  
  return (
    <div className="container mx-auto px-4 py-6 max-w-5xl">
      <h1 className="text-3xl font-bold text-swiss-dark mb-6">{course.title}</h1>
      
      {course.introduction && (
        <Card className="mb-8 border-0 shadow-md">
          <CardHeader className="bg-gradient-to-r from-swiss-blue/15 to-swiss-blue/5 border-b">
            <CardTitle className="text-2xl text-swiss-dark flex items-center gap-2">
              <FileBarChart className="h-6 w-6 text-swiss-blue" />
              Introduction aux états financiers
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: course.introduction }} />
            </div>
          </CardContent>
        </Card>
      )}
      
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
            <AccordionContent className="px-6 pt-5 pb-6 border-t bg-white">
              {section.content && (
                <div className="prose max-w-none leading-relaxed">
                  <div dangerouslySetInnerHTML={{ __html: section.content }} />
                </div>
              )}
              
              {/* Special treatment for the income statement section to add the table visualization */}
              {section.id === 'income-statement' && (
                <div className="mt-6 bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4 text-swiss-dark">Structure détaillée du compte de résultat</h3>
                  <div className="overflow-x-auto">
                    <Table className="w-full border-collapse">
                      <TableHeader className="bg-swiss-blue/10">
                        <TableRow>
                          <TableHead className="w-1/2 font-bold">Élément du compte de résultat</TableHead>
                          <TableHead className="w-1/6 text-center font-bold">Opération</TableHead>
                          <TableHead className="w-1/3 font-bold">Groupes principaux de comptes</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Chiffre d'affaires résultant des ventes et des prestations de services</TableCell>
                          <TableCell></TableCell>
                          <TableCell>30-39</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Charges de matières, de marchandises et de services</TableCell>
                          <TableCell className="text-center">-</TableCell>
                          <TableCell>40-49</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-100">
                          <TableCell className="font-medium">= Marge brute 1</TableCell>
                          <TableCell className="text-center">=</TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Charges de personnel de production</TableCell>
                          <TableCell className="text-center">-</TableCell>
                          <TableCell>50-51</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-100">
                          <TableCell className="font-medium">= Marge brute 2</TableCell>
                          <TableCell className="text-center">=</TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Autres charges de personnel</TableCell>
                          <TableCell className="text-center">-</TableCell>
                          <TableCell>52-59</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-100">
                          <TableCell className="font-medium">= Marge brute 3</TableCell>
                          <TableCell className="text-center">=</TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Autres charges d'exploitation</TableCell>
                          <TableCell className="text-center">-</TableCell>
                          <TableCell>60-67</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-100">
                          <TableCell className="font-medium">= Résultat d'exploitation 1 (avant résultat financier)</TableCell>
                          <TableCell className="text-center">=</TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Résultat financier</TableCell>
                          <TableCell className="text-center">+/-</TableCell>
                          <TableCell>68</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-100">
                          <TableCell className="font-medium">= Résultat d'exploitation 2 (avant amortissements)</TableCell>
                          <TableCell className="text-center">=</TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Amortissements</TableCell>
                          <TableCell className="text-center">-</TableCell>
                          <TableCell>69</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-100">
                          <TableCell className="font-medium">= Résultat d'exploitation 3 (avant résultat des activités annexes d'exploitation)</TableCell>
                          <TableCell className="text-center">=</TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Résultat des activités annexes d'exploitation</TableCell>
                          <TableCell className="text-center">+/-</TableCell>
                          <TableCell>70-79</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-100">
                          <TableCell className="font-medium">= Résultat d'exploitation 4</TableCell>
                          <TableCell className="text-center">=</TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Résultats exceptionnel et hors exploitation</TableCell>
                          <TableCell className="text-center">+/-</TableCell>
                          <TableCell>80-88</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-100">
                          <TableCell className="font-medium">= Résultat de l'exercice (avant impôts)</TableCell>
                          <TableCell className="text-center">=</TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Charges d'impôt</TableCell>
                          <TableCell className="text-center">-</TableCell>
                          <TableCell>89</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-100">
                          <TableCell className="font-medium">= Bénéfice / Perte de l'exercice</TableCell>
                          <TableCell className="text-center">=</TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <p className="italic">Note: Cette structure suit la présentation par nature des charges selon le plan comptable suisse.</p>
                  </div>
                </div>
              )}
              
              {section.subsections && section.subsections.length > 0 && (
                <div className="mt-8 space-y-8">
                  {section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="bg-gray-50 rounded-lg p-6 border-l-4 border-swiss-blue/60">
                      <h3 className="text-lg font-medium text-swiss-dark mb-4 pb-2 border-b border-gray-200">
                        {subsection.title}
                      </h3>
                      <div className="prose max-w-none text-gray-700 leading-relaxed">
                        <div dangerouslySetInnerHTML={{ __html: subsection.content }} />
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
