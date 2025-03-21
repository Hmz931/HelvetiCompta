
import React from 'react';
import { List } from 'lucide-react';
import RatioIcon, { getRatioIconByTitle } from './RatioIcon';

interface RatioFormulaDisplayProps {
  title: string;
  formula: string;
  accounts: string[];
  itemIndex?: string;
}

const RatioFormulaDisplay: React.FC<RatioFormulaDisplayProps> = ({ 
  title, 
  formula, 
  accounts,
  itemIndex = ''
}) => {
  const ratioType = getRatioIconByTitle(title);
  
  return (
    <div className="ratio-item">
      <h3 className="text-xl font-semibold mb-5 text-swiss-dark border-b pb-2 flex items-center">
        <RatioIcon type={ratioType} className="mr-2" />
        {title}
      </h3>
      
      <div className="formula-item">
        {itemIndex && <div className="formula-item-index">{itemIndex}</div>}
        <div className="formula-content">
          <div className="formula-header-with-icon">
            <span className="ratio-icon">
              <RatioIcon type={ratioType} size={20} />
            </span>
            Formule :
          </div>
          <div 
            className="ratio-formula-equation" 
            dangerouslySetInnerHTML={{ __html: formula }}
          />
        </div>
      </div>
      
      <div className="accounts-item">
        {itemIndex && <div className="accounts-item-index">{itemIndex.split('-')[0]}-2</div>}
        <div className="accounts-content">
          <div className="accounts-header-with-icon">
            <span className="accounts-icon">
              <List size={20} />
            </span>
            Comptes utilisés :
          </div>
          <ul className="accounts-list">
            {accounts.map((account, idx) => (
              <li key={idx}>{account}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RatioFormulaDisplay;
