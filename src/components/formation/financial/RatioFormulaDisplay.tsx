
import React from 'react';
import RatioIcon, { getRatioIconByTitle } from './RatioIcon';

interface RatioFormulaDisplayProps {
  title: string;
  formula: string;
  accounts: string[];
}

const RatioFormulaDisplay: React.FC<RatioFormulaDisplayProps> = ({ 
  title, 
  formula, 
  accounts
}) => {
  const ratioType = getRatioIconByTitle(title);
  
  return (
    <div className="ratio-item">
      <h3 className="text-xl font-semibold mb-5 text-swiss-dark border-b pb-2 flex items-center">
        <RatioIcon type={ratioType} size={26} className="mr-2" />
        {title}
      </h3>
      
      <div className="formula-content mb-4">
        <div className="formula-header-with-icon">
          Formule :
        </div>
        <div 
          className="ratio-formula-equation" 
          dangerouslySetInnerHTML={{ __html: formula }}
        />
      </div>
      
      <div className="accounts-content">
        <div className="accounts-header-with-icon">
          Comptes utilisés :
        </div>
        <ul className="accounts-list">
          {accounts.map((account, idx) => (
            <li key={idx}>{account}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RatioFormulaDisplay;
