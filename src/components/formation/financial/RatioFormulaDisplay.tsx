
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
          <div className="formula-header">Formule :</div>
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
            <div className="accounts-header">Comptes utilisés :</div>
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
