
import React from 'react';
import { courseStructure } from '@/data/courses';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type CourseContentProps = {
  courseId: string;
};

const GenericCourseContent = ({ courseId }: CourseContentProps) => {
  const course = courseStructure[courseId];
  
  if (!course) {
    return <div>Cours non trouvé</div>;
  }
  
  // Function to render content with Markdown-like support for tables and other formatting
  const renderContent = (content: string) => {
    if (!content) return null;

    // Split content by sections that might have ## headers
    const sections = content.split(/(?=#{2}\s)/);

    return sections.map((section, sectionIndex) => {
      // Check if this is a section with a header
      const hasSectionHeader = section.startsWith('## ');
      
      // Extract header if present
      let sectionHeader = '';
      let sectionContent = section;
      
      if (hasSectionHeader) {
        const headerEndIndex = section.indexOf('\n');
        sectionHeader = section.substring(3, headerEndIndex).trim();
        sectionContent = section.substring(headerEndIndex + 1).trim();
      }

      return (
        <div key={sectionIndex} className="mb-10">
          {hasSectionHeader && <h3 className="text-xl font-semibold mb-5 text-swiss-dark border-b pb-2">{sectionHeader}</h3>}
          
          {sectionContent.split('\n\n').map((paragraph, idx) => {
            // Check if paragraph contains HTML tags (like <img> or <div>)
            if (paragraph.trim().startsWith('<') && paragraph.includes('>')) {
              return (
                <div key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
              );
            }
            // Check if paragraph contains a table (rows with | separators)
            else if (paragraph.includes('|') && paragraph.trim().startsWith('|')) {
              const tableRows = paragraph.trim().split('\n');
              const hasHeader = tableRows.length > 1 && tableRows[1].trim().startsWith('|-');
              
              // Process the table data
              let headers: string[] = [];
              let rows: string[][] = [];
              
              if (hasHeader) {
                headers = tableRows[0].split('|').filter(cell => cell.trim()).map(cell => cell.trim());
                rows = tableRows.slice(2).map(row => 
                  row.split('|').filter(cell => cell.trim()).map(cell => cell.trim())
                );
              } else {
                rows = tableRows.map(row => 
                  row.split('|').filter(cell => cell.trim()).map(cell => cell.trim())
                );
              }
              
              // Enhanced table styling with professional look
              return (
                <Card key={idx} className="my-6 overflow-hidden border border-gray-200 rounded-xl shadow-sm">
                  <div className="overflow-x-auto">
                    <Table>
                      {hasHeader && headers.length > 0 && (
                        <TableHeader className="bg-gradient-to-r from-swiss-blue/10 to-swiss-blue/5">
                          <TableRow>
                            {headers.map((header, i) => (
                              <TableHead 
                                key={i} 
                                className="font-semibold text-swiss-dark py-4 text-base"
                              >
                                {header}
                              </TableHead>
                            ))}
                          </TableRow>
                        </TableHeader>
                      )}
                      <TableBody>
                        {rows.map((row, rowIdx) => (
                          <TableRow 
                            key={rowIdx} 
                            className={`hover:bg-gray-50/80 ${
                              rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                            }`}
                          >
                            {row.map((cell, cellIdx) => (
                              <TableCell 
                                key={cellIdx} 
                                className={`py-3.5 ${cellIdx === 0 ? 'font-medium text-swiss-dark' : ''}`}
                              >
                                {cell}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </Card>
              );
            } else {
              // Regular paragraph with improved styling
              return (
                <p 
                  key={idx} 
                  className="my-4 text-gray-700 leading-relaxed"
                >
                  {paragraph}
                </p>
              );
            }
          })}
        </div>
      );
    });
  };
  
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold mb-4 text-swiss-dark">{course.title}</h1>
      {course.description && (
        <p className="text-gray-600 mb-8 text-lg">{course.description}</p>
      )}
      
      <div className="space-y-10">
        {course.sections.map((section) => (
          <Card key={section.id} className="border-0 shadow-md rounded-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-swiss-blue/15 to-swiss-blue/5 pb-4">
              <CardTitle className="text-2xl font-bold text-swiss-dark">{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 px-6">
              {section.content ? (
                renderContent(section.content)
              ) : (
                <p className="text-gray-500 italic">Contenu à venir...</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GenericCourseContent;
