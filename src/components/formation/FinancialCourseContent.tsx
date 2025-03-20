
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Info, Search } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { courseStructure } from '@/data/courseStructure';

// Échantillon des comptes pour l'affichage dans le cours de comptabilité financière
const financialAccounts = [
  { 
    number: '1000', 
    title: 'Caisse', 
    explanation: "Le compte 'Caisse' enregistre toutes les entrées et sorties d'argent liquide (billets et pièces). Ce compte est débité lors d'encaissements et crédité lors de décaissements. Il fait partie des actifs circulants et son solde représente le montant d'espèces détenu par l'entreprise à un moment donné.",
    example: "Débit: Encaissement du paiement d'un client en espèces.\nCrédit: Paiement d'une facture de fournitures en espèces."
  },
  { 
    number: '1020', 
    title: 'Compte courant CHF', 
    explanation: "Ce compte enregistre les opérations effectuées sur le compte bancaire principal de l'entreprise en francs suisses. Il permet de suivre toutes les entrées et sorties d'argent transitant par ce compte bancaire.",
    example: "Débit: Versement d'un client par virement bancaire.\nCrédit: Prélèvement automatique pour le paiement du loyer."
  },
  { 
    number: '1100', 
    title: 'Créances suisses en CHF', 
    explanation: "Ce compte enregistre les créances résultant des ventes à crédit à des clients suisses en francs suisses. Il représente les montants dus à l'entreprise par ses clients suisses et fait partie des actifs circulants.",
    example: "Débit: Émission d'une facture à un client suisse.\nCrédit: Encaissement du paiement d'une facture client."
  },
  { 
    number: '2000', 
    title: 'Dettes résultant d\'achats de matières et de marchandises', 
    explanation: "Ce compte enregistre les dettes de l'entreprise envers ses fournisseurs pour l'achat de matières et de marchandises. Il fait partie des passifs à court terme et représente les factures fournisseurs non encore réglées.",
    example: "Crédit: Réception d'une facture d'un fournisseur de marchandises.\nDébit: Paiement d'une facture fournisseur."
  },
  { 
    number: '3000', 
    title: 'Ventes de produits fabriqués A', 
    explanation: "Ce compte enregistre le chiffre d'affaires résultant de la vente des produits fabriqués par l'entreprise. Il s'agit d'un compte de produits qui influence directement le résultat de l'exercice.",
    example: "Crédit: Vente de produits manufacturés par l'entreprise.\nDébit: Retour de marchandises par un client."
  }
];

const FinancialCourseContent = () => {
  const course = courseStructure["financial"];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAccount, setSelectedAccount] = useState<typeof financialAccounts[0] | null>(null);

  const filteredAccounts = financialAccounts.filter(account => 
    account.number.includes(searchTerm) || 
    account.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  if (!course) {
    return <div>Cours non trouvé</div>;
  }
  
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">{course.title}</h1>
      {course.description && (
        <p className="text-swiss-text-secondary mb-8 text-lg">{course.description}</p>
      )}
      
      <div className="space-y-6">
        {course.sections.map((section) => (
          <div key={section.id} className="glass rounded-xl p-6 shadow-card">
            <h2 className="text-xl font-bold mb-3">{section.title}</h2>
            <p className="text-swiss-text-secondary">
              {section.content || "Contenu à venir..."}
            </p>
          </div>
        ))}

        <div className="glass rounded-xl p-6 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Plan Comptable - Comptes Principaux</h2>
            <Link 
              to="/plan-comptable" 
              className="text-swiss-blue hover:underline flex items-center gap-1"
            >
              <span>Voir le plan complet</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <p className="text-swiss-text-secondary mb-6">
            Familiarisez-vous avec les comptes les plus couramment utilisés en comptabilité financière suisse. 
            Cliquez sur un compte pour voir son explication détaillée.
          </p>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Rechercher un compte..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 border-b text-left font-semibold">Numéro</th>
                  <th className="py-3 px-4 border-b text-left font-semibold">Libellé du compte</th>
                  <th className="py-3 px-4 border-b text-center font-semibold w-24">Infos</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredAccounts.length > 0 ? (
                  filteredAccounts.map((account, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{account.number}</td>
                      <td className="py-3 px-4">{account.title}</td>
                      <td className="py-3 px-4 text-center">
                        <Dialog>
                          <DialogTrigger asChild>
                            <button 
                              className="inline-flex items-center justify-center rounded-full h-7 w-7 bg-blue-50 text-swiss-blue hover:bg-blue-100 transition-colors"
                              onClick={() => setSelectedAccount(account)}
                            >
                              <Info size={16} />
                            </button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[550px]">
                            <DialogHeader>
                              <DialogTitle className="text-xl flex items-center gap-2">
                                <span className="text-swiss-blue font-mono">{account.number}</span> - {account.title}
                              </DialogTitle>
                              <DialogDescription className="text-sm text-gray-500">
                                Explications détaillées sur ce compte
                              </DialogDescription>
                            </DialogHeader>
                            <div className="mt-4 space-y-4">
                              <div>
                                <h4 className="font-medium text-gray-800 mb-1">Description</h4>
                                <p className="text-gray-600">{account.explanation}</p>
                              </div>
                              {account.example && (
                                <div>
                                  <h4 className="font-medium text-gray-800 mb-1">Exemples d'utilisations</h4>
                                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                                    <pre className="text-gray-600 whitespace-pre-wrap text-sm">{account.example}</pre>
                                  </div>
                                </div>
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="py-4 px-4 text-center text-gray-500">
                      Aucun compte ne correspond à votre recherche
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
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
        </div>
      </div>
    </div>
  );
};

export default FinancialCourseContent;
