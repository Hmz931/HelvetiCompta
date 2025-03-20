
import React, { useState } from 'react';
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Search, HelpCircle, Info } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const accountCategories = [
  { id: '1', name: 'Actifs', range: '1000-1999' },
  { id: '2', name: 'Passifs', range: '2000-2999' },
  { id: '3', name: 'Revenus', range: '3000-3999' },
  { id: '4', name: 'Charges de matériel et de marchandises', range: '4000-4999' },
  { id: '5', name: 'Charges de personnel', range: '5000-5999' },
  { id: '6', name: 'Autres charges d\'exploitation', range: '6000-6999' },
  { id: '7', name: 'Résultats des activités annexes d\'exploitation', range: '7000-7999' },
  { id: '8', name: 'Résultats hors exploitation', range: '8000-8999' },
  { id: '9', name: 'Clôture', range: '9000-9999' }
];

// Échantillon des comptes du plan comptable suisse avec explications
const accounts = [
  { 
    number: '1000', 
    title: 'Caisse', 
    explanation: "Le compte 'Caisse' enregistre toutes les entrées et sorties d'argent liquide (billets et pièces). Ce compte est débité lors d'encaissements et crédité lors de décaissements. Il fait partie des actifs circulants et son solde représente le montant d'espèces détenu par l'entreprise à un moment donné.",
    example: "Débit: Encaissement du paiement d'un client en espèces.\nCrédit: Paiement d'une facture de fournitures en espèces."
  },
  { 
    number: '1003', 
    title: 'Caisse EUR', 
    explanation: "Le compte 'Caisse EUR' fonctionne comme le compte de caisse principal, mais est spécifiquement dédié à l'enregistrement des mouvements d'espèces en euros. Ce compte permet de suivre séparément les liquidités en euros pour faciliter la gestion des devises.",
    example: "Débit: Encaissement d'un paiement client en euros.\nCrédit: Paiement d'un fournisseur en euros."
  },
  { 
    number: '1004', 
    title: 'Caisse en devise étrangère A', 
    explanation: "Ce compte sert à enregistrer les mouvements d'espèces dans une devise étrangère spécifique (autre que l'euro). Les entreprises ayant des activités internationales utilisent ce compte pour suivre leurs liquidités dans différentes devises.",
    example: "Débit: Encaissement en dollars américains lors d'une vente à l'exportation.\nCrédit: Paiement en dollars américains à un fournisseur étranger."
  },
  { 
    number: '1010', 
    title: 'Compte postal', 
    explanation: "Le compte 'Compte postal' enregistre tous les mouvements relatifs au compte courant postal de l'entreprise. Il est utilisé pour suivre les versements et prélèvements effectués par le biais de PostFinance.",
    example: "Débit: Versement reçu d'un client par bulletin de versement.\nCrédit: Paiement d'une facture via e-banking de PostFinance."
  },
  { 
    number: '1020', 
    title: 'Compte courant CHF', 
    explanation: "Ce compte enregistre les opérations effectuées sur le compte bancaire principal de l'entreprise en francs suisses. Il permet de suivre toutes les entrées et sorties d'argent transitant par ce compte bancaire.",
    example: "Débit: Versement d'un client par virement bancaire.\nCrédit: Prélèvement automatique pour le paiement du loyer."
  },
  { 
    number: '1022', 
    title: 'Compte courant EUR', 
    explanation: "Similaire au compte courant en CHF, ce compte est dédié aux opérations en euros. Il est utilisé par les entreprises qui effectuent régulièrement des transactions en euros avec des partenaires de la zone euro.",
    example: "Débit: Paiement reçu d'un client européen.\nCrédit: Règlement d'une facture d'un fournisseur européen."
  },
  { 
    number: '1023', 
    title: 'Compte courant USD', 
    explanation: "Ce compte bancaire spécifique enregistre les transactions en dollars américains. Il est particulièrement utile pour les entreprises ayant des relations commerciales avec les États-Unis ou d'autres pays utilisant le dollar.",
    example: "Débit: Virement reçu d'un client américain.\nCrédit: Paiement à un fournisseur américain."
  },
  { 
    number: '1100', 
    title: 'Créances suisses en CHF', 
    explanation: "Ce compte enregistre les créances résultant des ventes à crédit à des clients suisses en francs suisses. Il représente les montants dus à l'entreprise par ses clients suisses et fait partie des actifs circulants.",
    example: "Débit: Émission d'une facture à un client suisse.\nCrédit: Encaissement du paiement d'une facture client."
  },
  { 
    number: '1200', 
    title: 'Stocks de marchandises commerciales A', 
    explanation: "Ce compte enregistre la valeur des marchandises détenues pour la revente. Il fait partie des actifs circulants et sa valeur est généralement ajustée lors des inventaires périodiques ou en fin d'exercice.",
    example: "Débit: Achat de marchandises destinées à la revente.\nCrédit: Sortie de stock lors de la vente de marchandises."
  },
  { 
    number: '2000', 
    title: 'Dettes résultant d\'achats de matières et de marchandises', 
    explanation: "Ce compte enregistre les dettes de l'entreprise envers ses fournisseurs pour l'achat de matières et de marchandises. Il fait partie des passifs à court terme et représente les factures fournisseurs non encore réglées.",
    example: "Crédit: Réception d'une facture d'un fournisseur de marchandises.\nDébit: Paiement d'une facture fournisseur."
  },
  { 
    number: '2001', 
    title: 'Dettes résultant de prestations de services de tiers', 
    explanation: "Ce compte enregistre les dettes de l'entreprise envers ses fournisseurs pour des prestations de services (contrairement aux achats de biens matériels). Il s'agit par exemple de factures de consultants, d'avocats, ou de prestataires de services divers.",
    example: "Crédit: Réception d'une facture d'un consultant.\nDébit: Règlement des honoraires d'un avocat."
  },
  { 
    number: '2800', 
    title: 'Capital-actions / parts sociales / capital de fondation / capital-participation', 
    explanation: "Ce compte représente le capital de base de l'entreprise apporté par les actionnaires ou associés. Sa nature dépend de la forme juridique de l'entreprise (SA, Sàrl, etc.). Il fait partie des fonds propres et reste généralement stable sauf en cas d'augmentation ou de réduction de capital.",
    example: "Crédit: Apport initial des fondateurs lors de la création de l'entreprise.\nCrédit: Augmentation de capital par émission de nouvelles actions."
  },
  { 
    number: '3000', 
    title: 'Ventes de produits fabriqués A', 
    explanation: "Ce compte enregistre le chiffre d'affaires résultant de la vente des produits fabriqués par l'entreprise. Il s'agit d'un compte de produits qui influence directement le résultat de l'exercice.",
    example: "Crédit: Vente de produits manufacturés par l'entreprise.\nDébit: Retour de marchandises par un client."
  },
  { 
    number: '4000', 
    title: 'Charges de matériel produit A', 
    explanation: "Ce compte enregistre les coûts des matières premières et composants utilisés dans la fabrication des produits. Il s'agit d'un compte de charges qui diminue le résultat de l'exercice.",
    example: "Débit: Achat de matières premières pour la production.\nCrédit: Remise obtenue sur un achat de matières."
  },
  { 
    number: '5200', 
    title: 'Salaires de base', 
    explanation: "Ce compte enregistre les salaires bruts versés aux employés, hors primes, commissions ou indemnités spéciales. Il s'agit d'un compte de charges qui impacte directement le résultat de l'exercice.",
    example: "Débit: Comptabilisation des salaires mensuels.\nCrédit: Correction d'une erreur de salaire."
  },
  { 
    number: '6000', 
    title: 'Loyer des usines', 
    explanation: "Ce compte enregistre les charges locatives pour les bâtiments industriels utilisés par l'entreprise. Il s'agit d'une charge d'exploitation qui diminue le résultat de l'exercice.",
    example: "Débit: Paiement du loyer mensuel de l'usine.\nCrédit: Remboursement partiel de loyer suite à un litige."
  },
  { 
    number: '7000', 
    title: 'Produits bruts', 
    explanation: "Ce compte est utilisé pour enregistrer les produits bruts des activités annexes d'exploitation, c'est-à-dire les revenus qui ne proviennent pas de l'activité principale de l'entreprise.",
    example: "Crédit: Location d'une partie non utilisée des locaux.\nCrédit: Commission reçue pour une activité d'intermédiation."
  },
  { 
    number: '8000', 
    title: 'Charges hors exploitation', 
    explanation: "Ce compte enregistre les charges qui ne sont pas liées à l'activité d'exploitation normale de l'entreprise. Il peut s'agir de charges exceptionnelles ou d'éléments sans rapport avec l'activité principale.",
    example: "Débit: Perte sur la vente d'un actif non lié à l'exploitation.\nDébit: Amendes et pénalités non liées à l'exploitation."
  },
  { 
    number: '9000', 
    title: 'Produits nets des ventes de biens et de prestations de services', 
    explanation: "Ce compte est utilisé pour la clôture des comptes et le transfert des produits nets (chiffre d'affaires net) vers le compte de résultat. Il fait partie des comptes de clôture qui permettent d'établir les états financiers.",
    example: "Débit: Transfert du solde des comptes de ventes lors de la clôture.\nCrédit: Réouverture des comptes en début d'exercice."
  }
];

const ChartOfAccounts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedAccount, setSelectedAccount] = useState<typeof accounts[0] | null>(null);
  
  const filteredAccounts = accounts.filter(account => {
    const matchesSearch = 
      account.number.includes(searchTerm) || 
      account.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = 
      activeCategory === 'all' || 
      (activeCategory === '1' && account.number.startsWith('1')) ||
      (activeCategory === '2' && account.number.startsWith('2')) ||
      (activeCategory === '3' && account.number.startsWith('3')) ||
      (activeCategory === '4' && account.number.startsWith('4')) ||
      (activeCategory === '5' && account.number.startsWith('5')) ||
      (activeCategory === '6' && account.number.startsWith('6')) ||
      (activeCategory === '7' && account.number.startsWith('7')) ||
      (activeCategory === '8' && account.number.startsWith('8')) ||
      (activeCategory === '9' && account.number.startsWith('9'));
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="animate-fade-in space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Plan Comptable Suisse</h1>
        <p className="text-swiss-text-secondary">
          Structure normalisée des comptes pour la comptabilité suisse conforme aux exigences légales.
        </p>
      </div>
      
      <div className="glass rounded-xl p-6 shadow-card">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">À propos du plan comptable suisse</h2>
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
            <p className="text-gray-700">
              Le plan comptable suisse est un référentiel standardisé de numérotation et d'organisation des comptes utilisés par les entreprises en Suisse. Il est structuré selon les classes 1 à 9, chacune représentant un type spécifique d'actifs, passifs, produits ou charges. Ce plan facilite l'harmonisation des pratiques comptables et permet une meilleure comparabilité des états financiers entre les entreprises suisses.
            </p>
            <p className="text-gray-700 mt-2">
              Pour obtenir des explications détaillées sur un compte spécifique, cliquez sur ce compte dans le tableau ci-dessous.
            </p>
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Structure du plan comptable</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {accountCategories.map(category => (
              <div 
                key={category.id}
                className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                  activeCategory === category.id ? 'bg-swiss-blue text-white border-swiss-blue' : 'bg-white hover:bg-gray-50 border-gray-200'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <div className="font-semibold">{category.name}</div>
                <div className={`text-sm ${activeCategory === category.id ? 'text-blue-100' : 'text-gray-500'}`}>
                  {category.range}
                </div>
              </div>
            ))}
            <div 
              className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                activeCategory === 'all' ? 'bg-swiss-blue text-white border-swiss-blue' : 'bg-white hover:bg-gray-50 border-gray-200'
              }`}
              onClick={() => setActiveCategory('all')}
            >
              <div className="font-semibold">Tous les comptes</div>
              <div className={`text-sm ${activeCategory === 'all' ? 'text-blue-100' : 'text-gray-500'}`}>
                Afficher l'ensemble du plan
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div>
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Rechercher par numéro ou libellé..."
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
          
          <div className="mt-4 text-sm text-gray-500 text-center">
            Affichage d'un échantillon du plan comptable. Cliquez sur l'icône <Info className="inline h-4 w-4 text-swiss-blue" /> pour voir les détails d'un compte.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartOfAccounts;
