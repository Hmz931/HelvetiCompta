
import React from 'react';
import { CircleDollarSign, LineChart, PieChart } from 'lucide-react';

export type RatioIconType = 'liquidity' | 'profitability' | 'solvency' | 'efficiency' | 'growth' | 'market' | 'default';

interface RatioIconProps {
  type?: RatioIconType;
  size?: number;
  className?: string;
}

// Helper function to determine ratio type from section title
export const getRatioIconByTitle = (title: string): RatioIconType => {
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

const RatioIcon: React.FC<RatioIconProps> = ({ type = 'default', size = 24, className = '' }) => {
  const iconSize = size || 24;
  
  // Custom SVG icons based on type
  const renderIcon = () => {
    switch (type) {
      case 'liquidity':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
          </svg>
        );
      
      case 'profitability':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        );
      
      case 'solvency':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        );
      
      case 'efficiency':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M12 20v-6M6 20V10M18 20V4"></path>
          </svg>
        );
      
      case 'growth':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
            <polyline points="17 6 23 6 23 12"></polyline>
          </svg>
        );
      
      case 'market':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M16 12h-6.5a2.5 2.5 0 0 0 0 5H12"></path>
            <path d="M10 7h6.5a2.5 2.5 0 0 1 0 5H14"></path>
          </svg>
        );
      
      default:
        return <PieChart size={iconSize} className={className} />;
    }
  };

  return (
    <div className={`ratio-icon ratio-icon-${type}`}>
      {renderIcon()}
    </div>
  );
};

export default RatioIcon;
