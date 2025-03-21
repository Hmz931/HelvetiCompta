
import React from 'react';
import { 
  Droplet, 
  PieChart, 
  Search, 
  Settings, 
  LineChart, 
  CircleDollarSign 
} from 'lucide-react';
import './FormulaDisplay.css';

type RatioType = 'liquidity' | 'profitability' | 'solvency' | 'efficiency' | 'growth' | 'market' | 'default';

interface RatioIconProps {
  type: RatioType;
  size?: number;
  className?: string;
}

export const getRatioIconByTitle = (title: string): RatioType => {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes('liquidité')) {
    return 'liquidity';
  } 
  else if (titleLower.includes('rentabilité')) {
    return 'profitability';
  }
  else if (titleLower.includes('solvabilité')) {
    return 'solvency';
  }
  else if (titleLower.includes('efficacité')) {
    return 'efficiency';
  }
  else if (titleLower.includes('croissance')) {
    return 'growth';
  }
  else if (titleLower.includes('marché') || titleLower.includes('capital')) {
    return 'market';
  }
  
  return 'default';
};

const RatioIcon: React.FC<RatioIconProps> = ({ type, size = 24, className = '' }) => {
  const iconClassName = `formula-icon formula-icon-${type} ${className}`;
  
  const getIcon = () => {
    switch (type) {
      case 'liquidity':
        return <Droplet size={size} strokeWidth={1.5} className={iconClassName} />;
      case 'profitability':
        return <PieChart size={size} strokeWidth={1.5} className={iconClassName} />;
      case 'solvency':
        return <Search size={size} strokeWidth={1.5} className={iconClassName} />;
      case 'efficiency':
        return <Settings size={size} strokeWidth={1.5} className={iconClassName} />;
      case 'growth':
        return <LineChart size={size} strokeWidth={1.5} className={iconClassName} />;
      case 'market':
        return <CircleDollarSign size={size} strokeWidth={1.5} className={iconClassName} />;
      default:
        return <CircleDollarSign size={size} strokeWidth={1.5} className={iconClassName} />;
    }
  };

  return getIcon();
};

export default RatioIcon;
