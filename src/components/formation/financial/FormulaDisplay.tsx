
import React from 'react';
import './FormulaDisplay.css';

interface FractionProps {
  numerator: string;
  denominator: string;
}

export const Fraction: React.FC<FractionProps> = ({ numerator, denominator }) => {
  return (
    <span className="fraction">
      <span className="numerator">{numerator}</span>
      <span className="denominator">{denominator}</span>
    </span>
  );
};

interface FormulaDisplayProps {
  formula: React.ReactNode;
  accounts?: {
    title?: string;
    items: string[];
  }[];
}

const FormulaDisplay: React.FC<FormulaDisplayProps> = ({ formula, accounts }) => {
  return (
    <div>
      <div className="ratio-formula">
        {formula}
      </div>
      
      {accounts && accounts.length > 0 && (
        <div className="accounts-used">
          {accounts.map((group, groupIndex) => (
            <div key={groupIndex}>
              {group.title && (
                <p className="accounts-title">{group.title}</p>
              )}
              <ul>
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormulaDisplay;
