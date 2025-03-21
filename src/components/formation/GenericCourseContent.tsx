import React from 'react';
import { courseStructure } from '@/data/courses';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import '../formation/financial/FormulaDisplay.css';
import { 
  BarChart3, 
  TrendingUp, 
  Wallet, 
  RotateCcw, 
  Calculator, 
  Percent, 
  CreditCard,
  CircleDollarSign,
  PiggyBank,
  ArrowUpDown,
  Clock,
  Scale,
  Building2
} from 'lucide-react';

type CourseContentProps = {
  courseId: string;
};

// Function to create SectionContent as a separate component to improve code organization
const SectionContent = ({ content }: { content: string }) => {
  if (!content) return null;

  // Split content by sections that might have ## headers
  const sections = content.split(/(?=#{2}\s)/);

  // Function to get formula icon based on section title and formula content
  const getFormulaIcon = (sectionText: string, formulaText: string) => {
    if (sectionText.includes("liquidité")) {
      if (formulaText.includes("générale")) {
        return <PiggyBank size={18} />;
      } else if (formulaText.includes("immédiate")) {
        return <Wallet size={18} />;
      }
      return <CircleDollarSign size={18} />;
    } 
    else if (sectionText.includes("rentabilité")) {
      if (formulaText.includes("bénéficiaire")) {
        return <Percent size={18} />;
      } else if (formulaText.includes("capitaux propres") || formulaText.includes("ROE")) {
        return <Building2 size={18} />;
      } else if (formulaText.includes("actifs") || formulaText.includes("ROA")) {
        return <TrendingUp size={18} />;
      }
      return <Calculator size={18} />;
    } 
    else if (sectionText.includes("solvabilité")) {
      if (formulaText.includes("endettement")) {
        return <Scale size={18} />;
      } else if (formulaText.includes("autonomie")) {
        return <Building2 size={18} />;
      }
      return <BarChart3 size={18} />;
    } 
    else if (sectionText.includes("efficacité")) {
      if (formulaText.includes("rotation")) {
        return <RotateCcw size={18} />;
      } else if (formulaText.includes("recouvrement") || formulaText.includes("délai")) {
        return <Clock size={18} />;
      }
      return <ArrowUpDown size={18} />;
    }
    return <Calculator size={18} />;
  };

  // Function to get accounts icon based on section title and accounts content
  const getAccountsIcon = (sectionText: string, accountsText: string) => {
    if (sectionText.includes("liquidité")) {
      return <CircleDollarSign size={18} />;
    } 
    else if (sectionText.includes("rentabilité")) {
      return <Calculator size={18} />;
    } 
    else if (sectionText.includes("solvabilité")) {
      return <BarChart3 size={18} />;
    } 
    else if (sectionText.includes("efficacité")) {
      return <ArrowUpDown size={18} />;
    }
    return <CreditCard size={18} />;
  };

  // Process HTML content to add proper icons
  const processContent = (html: string, sectionText: string) => {
    // Process formula headers with icons
    let processedHtml = html.replace(
      /<div class="formula-header">([^<]+)<\/div>/g, 
      (match, content) => {
        const icon = getFormulaIcon(sectionText.toLowerCase(), content.toLowerCase());
        return `<div class="formula-header"><span class="formula-icon">${''}</span>${content}</div>`;
      }
    );
    
    // Process accounts headers with icons
    processedHtml = processedHtml.replace(
      /<div class="accounts-header">([^<]+)<\/div>/g, 
      (match, content) => {
        const icon = getAccountsIcon(sectionText.toLowerCase(), content.toLowerCase());
        return `<div class="accounts-header"><span class="accounts-icon">${''}</span>${content}</div>`;
      }
    );
    
    return processedHtml;
  };

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
          // Check if paragraph is just a hash symbol (separator)
          if (paragraph.trim() === '#') {
            return <div key={idx} className="my-6"></div>;
          }
          // Check if paragraph contains HTML for formulas or other special content
          else if (
            paragraph.includes('<div') || 
            paragraph.includes('<span') || 
            paragraph.includes('<ul')
          ) {
            // Process HTML content to add proper icons
            const processedHtml = processContent(paragraph, sectionHeader || '');
            
            // Create a wrapper element to hold the processed HTML and icons
            const wrapper = document.createElement('div');
            wrapper.innerHTML = processedHtml;
            
            // Find formula header elements and add icons
            const formulaHeaders = wrapper.querySelectorAll('.formula-header');
            formulaHeaders.forEach(header => {
              const iconSpan = header.querySelector('.formula-icon');
              if (iconSpan) {
                const headerText = header.textContent || '';
                const sectionText = sectionHeader || '';
                const icon = getFormulaIcon(sectionText.toLowerCase(), headerText.toLowerCase());
                
                // Create React element for icon and render it to the DOM
                const tempDiv = document.createElement('div');
                const iconContainer = document.createElement('span');
                iconContainer.className = 'formula-icon';
                tempDiv.appendChild(iconContainer);
                
                // Remove the empty placeholder span
                if (iconSpan) {
                  header.removeChild(iconSpan);
                }
                
                // Add the new icon span at the beginning of the header
                header.insertBefore(iconContainer, header.firstChild);
              }
            });
            
            // Find accounts header elements and add icons
            const accountsHeaders = wrapper.querySelectorAll('.accounts-header');
            accountsHeaders.forEach(header => {
              const iconSpan = header.querySelector('.accounts-icon');
              if (iconSpan) {
                const headerText = header.textContent || '';
                const sectionText = sectionHeader || '';
                const icon = getAccountsIcon(sectionText.toLowerCase(), headerText.toLowerCase());
                
                // Create React element for icon and render it to the DOM
                const tempDiv = document.createElement('div');
                const iconContainer = document.createElement('span');
                iconContainer.className = 'accounts-icon';
                tempDiv.appendChild(iconContainer);
                
                // Remove the empty placeholder span
                if (iconSpan) {
                  header.removeChild(iconSpan);
                }
                
                // Add the new icon span at the beginning of the header
                header.insertBefore(iconContainer, header.firstChild);
              }
            });
            
            // Use dangerouslySetInnerHTML to render the processed HTML
            return (
              <div key={idx} dangerouslySetInnerHTML={{ __html: processedHtml }} className="ratio-content">
                {/* Formula headers with icons will be rendered by React here */}
              </div>
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
          }
          // Handle subsection headers (###)
          else if (paragraph.startsWith('### ')) {
            return (
              <h4 key={idx} className="text-lg font-semibold mt-8 mb-4 text-swiss-dark">
                {paragraph.substring(4)}
              </h4>
            );
          }
          else {
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

const GenericCourseContent = ({ courseId }: CourseContentProps) => {
  const course = courseStructure[courseId];
  
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
        {course.sections.map((section) => (
          <Card key={section.id} className="border-0 shadow-md rounded-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-swiss-blue/15 to-swiss-blue/5 pb-4">
              <CardTitle className="text-2xl font-bold text-swiss-dark">{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 px-6">
              {section.content ? (
                <SectionContent content={section.content} />
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
