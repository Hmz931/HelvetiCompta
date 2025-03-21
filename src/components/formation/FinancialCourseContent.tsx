
import React from 'react';
import { courseStructure } from '@/data/courses';
import AccountsPanel from './financial/AccountsPanel';
import { 
  PieChart, 
  Droplet, 
  Search, 
  Settings, 
  LineChart,
  BarChart3,
  CircleDollarSign,
  Scale
} from 'lucide-react';

const FinancialCourseContent = () => {
  const course = courseStructure["financial"];
  
  if (!course) {
    return <div>Cours non trouvé</div>;
  }
  
  // Function to get an icon based on section title
  const getSectionIcon = (title: string) => {
    const titleLower = title.toLowerCase();
    
    if (titleLower.includes('liquidité')) {
      return <Droplet size={20} className="mr-2 text-swiss-blue" />;
    } 
    else if (titleLower.includes('rentabilité')) {
      return <PieChart size={20} className="mr-2 text-swiss-blue" />;
    }
    else if (titleLower.includes('solvabilité')) {
      return <Scale size={20} className="mr-2 text-swiss-blue" />;
    }
    else if (titleLower.includes('efficacité')) {
      return <Settings size={20} className="mr-2 text-swiss-blue" />;
    }
    else if (titleLower.includes('croissance')) {
      return <BarChart3 size={20} className="mr-2 text-swiss-blue" />;
    }
    else if (titleLower.includes('marché') || titleLower.includes('capital')) {
      return <CircleDollarSign size={20} className="mr-2 text-swiss-blue" />;
    }
    
    return null;
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
            <h2 className="text-xl font-bold mb-3 flex items-center">
              {getSectionIcon(section.title)}
              {section.title}
            </h2>
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
