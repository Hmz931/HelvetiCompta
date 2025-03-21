
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
  Settings,
  LineChart,
  CircleDollarSign
} from 'lucide-react';
import RatioIcon from '@/components/formation/financial/RatioIcon';

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
    case 'financial-ratios': return <PieChart size={size} />; 
    case 'liquidity-ratio': return <RatioIcon type="liquidity" size={size} />;
    case 'profitability-ratio': return <RatioIcon type="profitability" size={size} />;
    case 'solvency-ratio': return <RatioIcon type="solvency" size={size} />;
    case 'efficiency-ratio': return <RatioIcon type="efficiency" size={size} />;
    case 'growth-ratio': return <RatioIcon type="growth" size={size} />;
    case 'market-ratio': return <RatioIcon type="market" size={size} />;
    default: return null;
  }
};

export default getIcon;
