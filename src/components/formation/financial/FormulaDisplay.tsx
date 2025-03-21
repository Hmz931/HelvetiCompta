
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

interface Account {
  name: string;
  range?: string;
}

interface FormulaDisplayProps {
  title: string;
  formula: React.ReactNode;
  accounts: Account[];
}

const FormulaDisplay: React.FC<FormulaDisplayProps> = ({ title, formula, accounts }) => {
  return (
    <div className="ratio-section">
      <h4 className="ratio-title">{title}</h4>
      
      <div className="formula-header">Formule :</div>
      <div className="ratio-formula-equation">
        {formula}
      </div>
      
      <div className="accounts-header">Comptes utilisés :</div>
      <ul className="accounts-list">
        {accounts.map((account, idx) => (
          <li key={idx}>
            {account.name} {account.range && `(${account.range})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormulaDisplay;
