import React from 'react';
import { courseStructure } from '@/data/courses';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import '../formation/financial/FormulaDisplay.css';
import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  RotateCcw, 
  Calculator, 
  Percent, 
  CreditCard,
  CircleDollarSign,
  PieChart,
  ArrowUpDown,
  Clock,
  Scale,
  Building2,
  Flag,
  Droplet,
  Search,
  Settings,
  Globe,
  Coins,
  Gauge,
  LineChart
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
    const sectionLower = sectionText.toLowerCase();
    const formulaLower = formulaText.toLowerCase();

    if (sectionLower.includes("liquidité")) {
      // Droplet icon for liquidity ratios like in the screenshot
      return <Droplet size={20} />;
    } 
    else if (sectionLower.includes("rentabilité")) {
      // PieChart icon for profitability ratios like in the screenshot
      return <PieChart size={20} />;
    } 
    else if (sectionLower.includes("solvabilité")) {
      // Search/magnifying glass for solvency ratios like in the screenshot
      return <Search size={20} />; 
    } 
    else if (sectionLower.includes("efficacité")) {
      // Gear/cog icon for efficiency ratios like in the screenshot
      return <Settings size={20} />;
    }
    else if (sectionLower.includes("croissance")) {
      // Bar chart with dollar for growth ratios like in the screenshot
      return <BarChart3 size={20} />;
    }
    else if (sectionLower.includes("marché") || sectionLower.includes("capital")) {
      // Trending line for capital market ratios like in the screenshot
      return <LineChart size={20} />;
    }
    // Default to calculator
    return <Calculator size={20} />;
  };

  // Function to get accounts icon based on section title
  const getAccountsIcon = (sectionText: string) => {
    const sectionLower = sectionText.toLowerCase();

    if (sectionLower.includes("liquidité")) {
      return <DollarSign size={20} />;
    } 
    else if (sectionLower.includes("rentabilité")) {
      return <PieChart size={20} />;
    } 
    else if (sectionLower.includes("solvabilité")) {
      return <Search size={20} />;
    } 
    else if (sectionLower.includes("efficacité")) {
      return <Settings size={20} />;
    }
    else if (sectionLower.includes("croissance")) {
      return <BarChart3 size={20} />;
    }
    else if (sectionLower.includes("marché") || sectionLower.includes("capital")) {
      return <LineChart size={20} />;
    }
    // Default
    return <CircleDollarSign size={20} />;
  };

  // Process HTML content to render with React components
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
            // Process for formula headers
            let processedHtml = paragraph;
            
            // Replace formula header divs with our custom ones that include the right icons
            if (processedHtml.includes('<div class="formula-header">')) {
              const formulaHeaderRegex = /<div class="formula-header">([^<]+)<\/div>/g;
              processedHtml = processedHtml.replace(formulaHeaderRegex, (match, content) => {
                const icon = getFormulaIcon(sectionHeader, content);
                return `
                  <div class="formula-header">
                    <span class="formula-icon">${idx}-${sectionIndex}-formula</span>
                    <span>${content}</span>
                  </div>
                `;
              });
            }
            
            // Replace accounts header divs with our custom ones that include the right icons
            if (processedHtml.includes('<div class="accounts-header">')) {
              const accountsHeaderRegex = /<div class="accounts-header">([^<]+)<\/div>/g;
              processedHtml = processedHtml.replace(accountsHeaderRegex, (match, content) => {
                const icon = getAccountsIcon(sectionHeader);
                return `
                  <div class="accounts-header">
                    <span class="accounts-icon">${idx}-${sectionIndex}-accounts</span>
                    <span>${content}</span>
                  </div>
                `;
              });
            }
            
            // Create a temporary div to process the HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = processedHtml;
            
            // Now render the processed HTML
            const renderHtml = () => {
              return {__html: processedHtml};
            };
            
            // Use the dangerouslySetInnerHTML to render the processed HTML
            return (
              <div key={idx} className="ratio-content">
                <div dangerouslySetInnerHTML={renderHtml()} />
                
                {/* Add icons programmatically */}
                {processedHtml.includes(`${idx}-${sectionIndex}-formula`) && (
                  <script dangerouslySetInnerHTML={{
                    __html: `
                      document.addEventListener('DOMContentLoaded', () => {
                        const iconElements = document.querySelectorAll('.formula-icon');
                        iconElements.forEach(el => {
                          if (el.textContent === '${idx}-${sectionIndex}-formula') {
                            el.textContent = '';
                            el.appendChild(${getFormulaIcon(sectionHeader, '').type.name});
                          }
                        });
                      });
                    `
                  }} />
                )}
                
                {processedHtml.includes(`${idx}-${sectionIndex}-accounts`) && (
                  <script dangerouslySetInnerHTML={{
                    __html: `
                      document.addEventListener('DOMContentLoaded', () => {
                        const iconElements = document.querySelectorAll('.accounts-icon');
                        iconElements.forEach(el => {
                          if (el.textContent === '${idx}-${sectionIndex}-accounts') {
                            el.textContent = '';
                            el.appendChild(${getAccountsIcon(sectionHeader).type.name});
                          }
                        });
                      });
                    `
                  }} />
                )}
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
            // Regular paragraph
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
