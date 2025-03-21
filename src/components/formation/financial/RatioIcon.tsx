
import React from 'react';
import { PieChart, Droplet, Search, Settings, LineChart, BarChart3, CircleDollarSign } from 'lucide-react';

type RatioType = 'liquidity' | 'profitability' | 'solvency' | 'efficiency' | 'growth' | 'market' | 'default';

interface RatioIconProps {
  type: RatioType;
  size?: number;
  className?: string;
}

export const getRatioIconByTitle = (title: string) => {
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

const RatioIcon: React.FC<RatioIconProps> = ({ type, size = 20, className = '' }) => {
  const getIcon = () => {
    switch (type) {
      case 'liquidity':
        return <Droplet size={size} className={className} />;
      case 'profitability':
        return <PieChart size={size} className={className} />;
      case 'solvency':
        return <Search size={size} className={className} />;
      case 'efficiency':
        return <Settings size={size} className={className} />;
      case 'growth':
        return <BarChart3 size={size} className={className} />;
      case 'market':
        return <CircleDollarSign size={size} className={className} />;
      default:
        return <CircleDollarSign size={size} className={className} />;
    }
  };

  return (
    <div className="formula-icon-container">
      <span className="formula-icon">
        {getIcon()}
      </span>
    </div>
  );
};

export default RatioIcon;
