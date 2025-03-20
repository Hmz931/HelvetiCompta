
import React from 'react';

const Partners = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8 border-b pb-2">Nos Partenaires</h2>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        <div className="flex flex-col items-center">
          <img 
            src="/assets/images/abacus-logo.png" 
            alt="Abacus Software" 
            className="h-16 w-auto object-contain mb-2" 
          />
          <span className="text-sm text-swiss-text-secondary">Solutions ERP</span>
        </div>
        <div className="flex flex-col items-center">
          <img 
            src="/assets/images/yooz-logo.png" 
            alt="Yooz" 
            className="h-16 w-auto object-contain mb-2" 
          />
          <span className="text-sm text-swiss-text-secondary">Dématérialisation</span>
        </div>
        <div className="flex flex-col items-center">
          <img 
            src="/assets/images/uneo-logo.png" 
            alt="Cabinet Fiduciaire" 
            className="h-16 w-auto object-contain mb-2" 
          />
          <span className="text-sm text-swiss-text-secondary">Expertise Comptable</span>
        </div>
      </div>
    </section>
  );
};

export default Partners;
