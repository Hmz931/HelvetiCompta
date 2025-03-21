
import React from 'react';
import { PieChart } from 'lucide-react';

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
  // For types that have PNG files
  if (['liquidity', 'profitability', 'solvency', 'efficiency'].includes(type)) {
    return (
      <div className={`ratio-icon ratio-icon-${type} ${className}`}>
        <img 
          src={`/assets/images/${type}-icon.png`} 
          alt={`${type} icon`} 
          width={size} 
          height={size} 
        />
      </div>
    );
  }
  
  // Default and other types - use PieChart from lucide-react
  return <PieChart size={size} className={className} />;
};

export default RatioIcon;
