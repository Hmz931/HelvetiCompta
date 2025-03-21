
import React from 'react';
import RatioIcon, { getRatioIconByTitle } from './RatioIcon';
import './FormulaDisplay.css';

interface RatioFormulaDisplayProps {
  title: string;
  formula: string;
  accounts?: string[];
  description?: string;
}

const RatioFormulaDisplay: React.FC<RatioFormulaDisplayProps> = ({
  title,
  formula,
  accounts,
  description
}) => {
  const ratioType = getRatioIconByTitle(title);
  
  return (
    <div className="ratio-section">
      <div className="formula-header-with-icon">
        <RatioIcon type={ratioType as any} />
        <span>{title}</span>
      </div>
      
      {description && (
        <p className="mb-4 text-gray-700">{description}</p>
      )}
      
      <div className="ratio-formula-equation">
        {formula}
      </div>
      
      {accounts && accounts.length > 0 && (
        <div>
          <div className="accounts-header">
            <span className="accounts-icon">
              <RatioIcon type={ratioType as any} size={16} />
            </span>
            <span>Comptes concernés:</span>
          </div>
          <ul className="accounts-list">
            {accounts.map((account, index) => (
              <li key={index}>{account}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RatioFormulaDisplay;
