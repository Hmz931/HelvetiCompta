
import React from 'react';
import { 
  Book, 
  Database, 
  Laptop,
  BookOpen, 
  FileText, 
  List, 
  HelpCircle, 
  Map, 
  Building,
  Award,
  FileSpreadsheet,
  PieChart,
  Search,
  Droplet,
  Settings,
  LineChart,
  CircleDollarSign
} from 'lucide-react';

export const getIcon = (name: string) => {
  const size = 20;
  switch (name) {
    case 'formation': return <Book size={size} />;
    case 'abacus': return <Database size={size} />;
    case 'yooz': return <Laptop size={size} />;
    case 'lexique': return <BookOpen size={size} />;
    case 'ressources': return <HelpCircle size={size} />;
    case 'templates': return <FileText size={size} />;
    case 'plan-comptable': return <List size={size} />;
    case 'carte': return <Map size={size} />;
    case 'administrations': return <Building size={size} />;
    case 'quiz': return <Award size={size} />;
    case 'excel-converter': return <FileSpreadsheet size={size} />;
    case 'financial-ratios': return <CircleDollarSign size={size} />;
    default: return null;
  }
};

export default getIcon;
