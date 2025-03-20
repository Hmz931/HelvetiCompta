
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AccountsExplanation = () => {
  return (
    <div className="mt-4">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="accounts-explanation">
          <AccordionTrigger className="text-swiss-blue">
            Comprendre l'organisation des comptes
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            <p className="mb-2">
              Le plan comptable suisse est organisé selon une structure numérique logique:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Classe 1: Actifs (liquidités, créances, stocks, immobilisations)</li>
              <li>Classe 2: Passifs (dettes, provisions, fonds propres)</li>
              <li>Classe 3: Revenus (ventes, prestations, produits)</li>
              <li>Classe 4: Charges de matières et de marchandises</li>
              <li>Classe 5: Charges de personnel</li>
              <li>Classe 6: Autres charges d'exploitation</li>
              <li>Classe 7: Résultats des activités annexes</li>
              <li>Classe 8: Résultats hors exploitation</li>
              <li>Classe 9: Clôture</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccountsExplanation;
