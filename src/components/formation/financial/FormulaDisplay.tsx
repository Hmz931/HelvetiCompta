
import React from 'react';

type FractionProps = {
  numerator: string;
  denominator: string;
};

const Fraction = ({ numerator, denominator }: FractionProps) => {
  return (
    <span className="fraction">
      <span className="numerator">{numerator}</span>
      <span className="denominator">{denominator}</span>
    </span>
  );
};

type FormulaDisplayProps = {
  formula: {
    type: 'fraction';
    numerator: string;
    denominator: string;
  } | {
    type: 'text';
    content: string;
  };
};

const FormulaDisplay = ({ formula }: FormulaDisplayProps) => {
  if (formula.type === 'fraction') {
    return (
      <div className="formula-display">
        <Fraction 
          numerator={formula.numerator} 
          denominator={formula.denominator} 
        />
      </div>
    );
  }
  
  return (
    <div className="formula-display">
      <p>{formula.content}</p>
    </div>
  );
};

export default FormulaDisplay;
