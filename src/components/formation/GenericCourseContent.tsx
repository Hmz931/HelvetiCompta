
import React from 'react';
import { courseStructure } from '@/data/courses';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

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
        <div key={sectionIndex} className="mb-6">
          {hasSectionHeader && <h3 className="text-lg font-semibold mb-3">{sectionHeader}</h3>}
          
          {sectionContent.split('\n\n').map((paragraph, idx) => {
            // Check if paragraph contains a table (rows with | separators)
            if (paragraph.includes('|') && paragraph.trim().startsWith('|')) {
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
              
              return (
                <div key={idx} className="my-4 overflow-x-auto">
                  <Table>
                    {hasHeader && headers.length > 0 && (
                      <TableHeader>
                        <TableRow>
                          {headers.map((header, i) => (
                            <TableHead key={i}>{header}</TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                    )}
                    <TableBody>
                      {rows.map((row, rowIdx) => (
                        <TableRow key={rowIdx}>
                          {row.map((cell, cellIdx) => (
                            <TableCell key={cellIdx}>{cell}</TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              );
            } else {
              // Regular paragraph
              return <p key={idx} className="my-2">{paragraph}</p>;
            }
          })}
        </div>
      );
    });
  };
  
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
            {section.content ? (
              renderContent(section.content)
            ) : (
              <p className="text-swiss-text-secondary">Contenu à venir...</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenericCourseContent;
