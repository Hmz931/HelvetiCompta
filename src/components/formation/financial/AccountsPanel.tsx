
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import AccountsTable from './AccountsTable';
import AccountsExplanation from './AccountsExplanation';
import { AccountInfo } from './AccountInfoDialog';

// Échantillon des comptes pour l'affichage dans le cours de comptabilité financière
const financialAccounts: AccountInfo[] = [
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
  },
  { 
    number: '2270', 
    title: 'TVA due', 
    explanation: "Ce compte enregistre la TVA collectée sur les ventes et qui doit être versée à l'administration fiscale. C'est un compte de passif à court terme représentant une dette envers l'État.",
    example: "Crédit: TVA collectée sur les ventes.\nDébit: Règlement du décompte TVA à l'administration fiscale."
  }
];

const AccountsPanel = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="glass rounded-xl p-6 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Plan Comptable - Comptes Principaux</h2>
        <Link 
          to="/formation/chart-of-accounts" 
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
          onChange={handleSearchChange}
          className="pl-10"
        />
      </div>

      <AccountsTable accounts={financialAccounts} searchTerm={searchTerm} />
      <AccountsExplanation />
    </div>
  );
};

export default AccountsPanel;
