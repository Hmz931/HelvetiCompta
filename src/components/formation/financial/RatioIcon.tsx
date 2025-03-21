
import React from 'react';
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
  const baseIconClass = `ratio-icon ratio-icon-${type} ${className}`;
  const viewBox = "0 0 512 512";
  const iconSize = size || 24;
  
  const renderIcon = () => {
    switch (type) {
      case 'liquidity':
        return (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={iconSize} 
            height={iconSize} 
            viewBox={viewBox} 
            className={baseIconClass}
            stroke="currentColor"
            fill="none"
            strokeWidth="28"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {/* Money Droplets with Hand Icon */}
            <path d="M145.2,350c-2.3-5.9-7.5-10.6-14.9-10.6c-16.1,0-16.9,15.9-16.9,18c0,18.1,21.1,21.5,24.7,21.5c11.9,0,21.5-4.4,21.5-25.1 c0-21.5-18-38.7-38.7-38.7H50c-27.6,0-50,22.4-50,50v67c0,5.5,4.5,10,10,10h83.1c5.5,0,10-4.5,10-10v-35.8" />
            <path d="M322.7,174.9c0,22.6-18.9,40.9-42.2,40.9s-42.2-18.3-42.2-40.9c0-2.8,0.3-5.5,0.8-8.1c2.4-12,9.5-25.5,15.7-35.4 c9-14.4,18.3-22.6,25.7-22.6c25.9,0,42.2,42.5,42.2,66.2" />
            <path d="M240.7,155.9c-0.9,4.6-1.4,9.5-1.4,14.1c0,32.6,25.4,60.9,60.3,60.9s60.3-28.3,60.3-60.9c0-3.8-0.4-7.5-1-11.1 c-3.2-20-13.3-41.1-22.4-55.6c-13.2-21.1-26.4-33.2-36.9-33.2c-39,0-59,67-59,85.8" />
            <path d="M359.9,185.9c-1.5,8.6-3.5,17.9-3.5,25.1c0,40.6,29.8,76.9,74.5,76.9s74.5-36.3,74.5-76.9c0-4.4-0.4-8.7-1.1-12.9 c-3.6-24.3-15.3-50.1-26.1-67.7c-15.8-25.9-31.9-40.5-47.3-40.5c-53.3,0-71,89.1-71,96.1" />
            <path d="M280.5,155.9c2,0,4,0.1,5.9,0.4"/>
            <path d="M280.5,175.9c2,0.3,4,0.4,5.9,0.4"/>
            <path d="M280.5,195.9c2,0.3,4,0.4,5.9,0.4"/>
            <path d="M400.5,175.9c2,0,4,0.1,5.9,0.4"/>
            <path d="M400.5,195.9c2,0.3,4,0.4,5.9,0.4"/>
            <path d="M400.5,215.9c2,0.3,4,0.4,5.9,0.4"/>
          </svg>
        );
      case 'profitability':
        return (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={iconSize} 
            height={iconSize} 
            viewBox={viewBox} 
            className={baseIconClass}
            stroke="currentColor"
            fill="none"
            strokeWidth="28"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {/* Growth Chart with Dollar Icon */}
            <path d="M472,452H40c-5.5,0-10-4.5-10-10V70c0-5.5,4.5-10,10-10h432c5.5,0,10,4.5,10,10v372C482,447.5,477.5,452,472,452z"/>
            <path d="M452,432V90H60v342H452z"/>
            <path d="M100,392V180"/>
            <path d="M180,392V220"/>
            <path d="M260,392V140"/>
            <path d="M340,392V100"/>
            <path d="M420,392v-112"/>
            <path d="M30,392h452"/>
            <path d="M494,316c-18.7-52.3-45.3-119.9-154-144"/>
            <circle cx="130" cy="120" r="50"/>
            <path d="M145,140c-4.2,3.7-9.5,6-15,6c-12.1,0-22-9.9-22-22c0-3.9,1-7.5,2.8-10.7"/>
            <path d="M116,116v-16c0-2.2,1.8-4,4-4h20c2.2,0,4,1.8,4,4v16"/>
            <path d="M130,150v-40"/>
          </svg>
        );
      case 'solvency':
        return (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={iconSize} 
            height={iconSize} 
            viewBox={viewBox} 
            className={baseIconClass}
            stroke="currentColor"
            fill="none"
            strokeWidth="28"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {/* Shield with Dollar and Checkmark Icon */}
            <path d="M256,472c-70.6-34.2-135.2-82.1-174-153.1C52.6,260.4,42,193.8,42,126V60h428v66c0,67.8-10.6,134.4-40,192.9 C391.2,389.9,326.6,437.8,256,472z"/>
            <path d="M186,166c0-22.1,31.4-40,70-40s70,17.9,70,40s-31.4,40-70,40S186,188.1,186,166z"/>
            <path d="M192,246c0,0-6,39.5,64,40c70,0.5,64-40,64-40"/>
            <path d="M220,166c0,0-6,39.5,36,40c42,0.5,36-40,36-40"/>
            <path d="M275,206v80"/>
            <path d="M241,206v80"/>
            <circle cx="384" cy="356" r="60"/>
            <path d="M368,356l12,12l20-20"/>
          </svg>
        );
      case 'efficiency':
        return (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={iconSize} 
            height={iconSize} 
            viewBox={viewBox} 
            className={baseIconClass}
            stroke="currentColor"
            fill="none"
            strokeWidth="28"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {/* Dollar, Gear, and Clock Icon */}
            <circle cx="130" cy="130" r="80"/>
            <path d="M145,150c-4.2,3.7-9.5,6-15,6c-12.1,0-22-9.9-22-22c0-3.9,1-7.5,2.8-10.7"/>
            <path d="M116,126v-16c0-2.2,1.8-4,4-4h20c2.2,0,4,1.8,4,4v16"/>
            <path d="M130,160v-40"/>
            <path d="M256,151v210"/>
            <path d="M382,360c-84.4,96.7-221.6,96.7-306,0"/>
            <path d="M76,151c39.4-45,92.2-70,154-70s114.6,25,154,70"/>
            <circle cx="256" cy="256" r="40"/>
            <path d="M256,246v20l10,10"/>
            <circle cx="380" cy="256" r="80"/>
            <path d="M360,256l-20,20"/>
            <path d="M380,276v-40"/>
            <path d="M400,256l-20-20"/>
            <path d="M328.1,304c-9.2-27.9,5.9-58.1,33.8-67.3"/>
            <path d="M431.9,304c9.2-27.9-5.9-58.1-33.8-67.3"/>
            <path d="M431.9,208c9.2,27.9-5.9,58.1-33.8,67.3"/>
            <path d="M328.1,208c-9.2,27.9,5.9,58.1,33.8,67.3"/>
            <circle cx="380" cy="256" r="10"/>
          </svg>
        );
      case 'growth':
        return (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={iconSize} 
            height={iconSize} 
            viewBox={viewBox} 
            className={baseIconClass}
            stroke="currentColor"
            fill="none"
            strokeWidth="28"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M472,452H40c-5.5,0-10-4.5-10-10V70c0-5.5,4.5-10,10-10h432c5.5,0,10,4.5,10,10v372C482,447.5,477.5,452,472,452z"/>
            <path d="M452,432V90H60v342H452z"/>
            <path d="M100,392V280"/>
            <path d="M180,392V220"/>
            <path d="M260,392V160"/>
            <path d="M340,392V120"/>
            <path d="M420,392v-312"/>
            <path d="M30,392h452"/>
            <path d="M420,80l-320,140"/>
          </svg>
        );
      case 'market':
        return (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={iconSize} 
            height={iconSize} 
            viewBox={viewBox} 
            className={baseIconClass}
            stroke="currentColor"
            fill="none"
            strokeWidth="28"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M256,472c-70.6-34.2-135.2-82.1-174-153.1C52.6,260.4,42,193.8,42,126V60h428v66c0,67.8-10.6,134.4-40,192.9 C391.2,389.9,326.6,437.8,256,472z"/>
            <path d="M186,166c0-22.1,31.4-40,70-40s70,17.9,70,40s-31.4,40-70,40S186,188.1,186,166z"/>
            <path d="M192,246c0,0-6,39.5,64,40c70,0.5,64-40,64-40"/>
            <path d="M220,166c0,0-6,39.5,36,40c42,0.5,36-40,36-40"/>
            <path d="M275,206v80"/>
            <path d="M241,206v80"/>
          </svg>
        );
      default:
        return (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={iconSize} 
            height={iconSize} 
            viewBox={viewBox} 
            className={baseIconClass}
            stroke="currentColor"
            fill="none"
            strokeWidth="28"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="256" cy="256" r="200"/>
            <path d="M271,296c-4.2,3.7-9.5,6-15,6c-12.1,0-22-9.9-22-22c0-3.9,1-7.5,2.8-10.7"/>
            <path d="M242,272v-36c0-2.2,1.8-4,4-4h20c2.2,0,4,1.8,4,4v36"/>
            <path d="M256,306v-40"/>
          </svg>
        );
    }
  };

  return renderIcon();
};

export default RatioIcon;
