
import React from 'react';
import RatioIcon, { getRatioIconByTitle } from './RatioIcon';
import './FormulaDisplay.css';

interface RatioFormulaDisplayProps {
  title: string;
  formula: string;
  accounts?: string[];
  description?: string;
  itemIndex?: string;
}

const RatioFormulaDisplay: React.FC<RatioFormulaDisplayProps> = ({
  title,
  formula,
  accounts,
  description,
  itemIndex
}) => {
  const ratioType = getRatioIconByTitle(title);
  
  return (
    <div className="ratio-section">
      <h4 className="ratio-title">{title}</h4>
      
      {description && (
        <p className="mb-4 text-gray-700">{description}</p>
      )}
      
      <div className="formula-item">
        <div className="formula-item-index">{itemIndex || ""}</div>
        <div className="formula-content">
          <div className="formula-header-with-icon">
            <RatioIcon type={ratioType} size={20} />
            <span>Formule :</span>
          </div>
          <div className="ratio-formula-equation">
            {formula}
          </div>
        </div>
      </div>
      
      {accounts && accounts.length > 0 && (
        <div className="accounts-item">
          <div className="accounts-item-index">
            {itemIndex ? itemIndex.split('-')[0] + '-' + (parseInt(itemIndex.split('-')[1]) + 1) : ""}
          </div>
          <div className="accounts-content">
            <div className="accounts-header-with-icon">
              <span className="accounts-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                </svg>
              </span>
              <span>Comptes utilisés :</span>
            </div>
            <ul className="accounts-list">
              {accounts.map((account, index) => (
                <li key={index}>{account}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default RatioFormulaDisplay;
