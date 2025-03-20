
import React, { useState, useEffect } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import { Search, BookOpen, ChevronDown, ChevronUp, Tag, Filter } from 'lucide-react';

// Define types for our lexicon entries
type LexiconEntry = {
  id: string;
  term: string;
  definition: string;
  category: string;
  tags: string[];
};

const lexiconData: LexiconEntry[] = [
  {
    id: '1',
    term: 'Actif',
    definition: 'Ensemble des biens et créances appartenant à une entreprise. Les actifs sont classés selon leur degré de liquidité (du plus liquide au moins liquide) et sont regroupés en actifs circulants et actifs immobilisés.',
    category: 'Comptabilité générale',
    tags: ['bilan', 'comptabilité fondamentale']
  },
  {
    id: '2',
    term: 'Passif',
    definition: 'Ensemble des dettes et obligations d\'une entreprise envers des tiers et envers ses propriétaires. Le passif indique l\'origine des ressources et comprend les fonds étrangers (dettes) et les fonds propres.',
    category: 'Comptabilité générale',
    tags: ['bilan', 'comptabilité fondamentale']
  },
  {
    id: '3',
    term: 'TVA',
    definition: 'Taxe sur la Valeur Ajoutée. En Suisse, il existe trois taux de TVA: le taux normal (7.7%), le taux réduit (2.5%) et le taux spécial pour l\'hébergement (3.7%).',
    category: 'Fiscalité',
    tags: ['impôts', 'déclaration']
  },
  {
    id: '4',
    term: 'Bilan',
    definition: 'État de la situation financière d\'une entreprise à un moment donné. Il présente l\'actif (ce que l\'entreprise possède) et le passif (comment ces actifs sont financés) et doit toujours être équilibré (Actif = Passif).',
    category: 'Comptabilité générale',
    tags: ['états financiers', 'comptabilité fondamentale']
  },
  {
    id: '5',
    term: 'Compte de résultat',
    definition: 'Document comptable qui synthétise l\'ensemble des charges et des produits d\'une entreprise pour une période donnée. Il permet de déterminer le résultat net (bénéfice ou perte).',
    category: 'Comptabilité générale',
    tags: ['états financiers', 'comptabilité fondamentale']
  },
  {
    id: '6',
    term: 'Amortissement',
    definition: 'Procédé comptable permettant de répartir le coût d\'acquisition d\'une immobilisation sur sa durée d\'utilisation. En Suisse, les méthodes d\'amortissement les plus courantes sont l\'amortissement linéaire et l\'amortissement dégressif.',
    category: 'Comptabilité générale',
    tags: ['immobilisations', 'fiscalité']
  },
  {
    id: '7',
    term: 'Ducroire',
    definition: 'Provision constituée pour tenir compte du risque de non-paiement des créances clients. Elle représente une estimation des pertes probables sur les créances commerciales.',
    category: 'Comptabilité générale',
    tags: ['provisions', 'créances']
  },
  {
    id: '8',
    term: 'AVS',
    definition: 'Assurance-Vieillesse et Survivants. Premier pilier du système de prévoyance suisse, c\'est une assurance obligatoire qui couvre les besoins vitaux en cas de retraite ou de décès.',
    category: 'Charges sociales',
    tags: ['assurances sociales', 'salaires']
  },
  {
    id: '9',
    term: 'LPP',
    definition: 'Loi sur la Prévoyance Professionnelle. Deuxième pilier du système de prévoyance suisse, elle oblige les employeurs à assurer leurs salariés auprès d\'une caisse de pension afin de compléter les prestations de l\'AVS/AI.',
    category: 'Charges sociales',
    tags: ['assurances sociales', 'salaires', 'prévoyance']
  },
  {
    id: '10',
    term: 'Réserves latentes',
    definition: 'Différence entre la valeur réelle d\'un actif et sa valeur comptable inférieure, ou entre la valeur réelle d\'un passif et sa valeur comptable supérieure. En Suisse, la constitution de réserves latentes est autorisée.',
    category: 'Comptabilité générale',
    tags: ['fiscalité', 'bilan']
  },
  {
    id: '11',
    term: 'Swiss GAAP RPC',
    definition: 'Normes comptables suisses élaborées par la Fondation pour les recommandations relatives à la présentation des comptes. Elles offrent un cadre comptable adapté aux PME suisses.',
    category: 'Normes comptables',
    tags: ['états financiers', 'réglementation']
  },
  {
    id: '12',
    term: 'Code des obligations',
    definition: 'Partie du droit privé suisse qui régit notamment les obligations comptables des entreprises (art. 957 à 964).',
    category: 'Réglementation',
    tags: ['droit', 'obligations légales']
  },
  {
    id: '13',
    term: 'Impôt anticipé',
    definition: 'Impôt prélevé à la source par la Confédération sur les revenus de capitaux mobiliers, les gains de loterie et certaines prestations d\'assurance. Son taux est généralement de 35%.',
    category: 'Fiscalité',
    tags: ['impôts', 'placements']
  },
  {
    id: '14',
    term: 'Décompte TVA',
    definition: 'Document permettant de déterminer la TVA due à l\'Administration fédérale des contributions. En Suisse, il existe plusieurs méthodes de décompte: la méthode effective, la méthode du taux de la dette fiscale nette et la méthode des taux forfaitaires.',
    category: 'Fiscalité',
    tags: ['TVA', 'déclaration']
  },
  {
    id: '15',
    term: 'Correction de valeur',
    definition: 'Ajustement comptable de la valeur d\'un actif pour refléter sa dépréciation ou sa perte de valeur. Permet de respecter le principe de prudence en comptabilité.',
    category: 'Comptabilité générale',
    tags: ['bilan', 'provisions']
  }
];

// Categories and tags for filters
const categories = Array.from(new Set(lexiconData.map(entry => entry.category)));
const allTags = Array.from(new Set(lexiconData.flatMap(entry => entry.tags)));

const Lexicon = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedTerms, setExpandedTerms] = useState<Record<string, boolean>>({});
  const [filteredData, setFilteredData] = useState<LexiconEntry[]>(lexiconData);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Filter entries based on search term, category, and tags
  useEffect(() => {
    let filtered = lexiconData;
    
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(entry => 
        entry.term.toLowerCase().includes(searchLower) || 
        entry.definition.toLowerCase().includes(searchLower)
      );
    }
    
    if (selectedCategory) {
      filtered = filtered.filter(entry => entry.category === selectedCategory);
    }
    
    if (selectedTags.length > 0) {
      filtered = filtered.filter(entry => 
        selectedTags.some(tag => entry.tags.includes(tag))
      );
    }
    
    setFilteredData(filtered);
  }, [searchTerm, selectedCategory, selectedTags]);

  const toggleTermExpansion = (id: string) => {
    setExpandedTerms(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleTagSelection = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedTags([]);
  };

  return (
    <div className="animate-fade-in">
      <Breadcrumb />
      <h1 className="text-3xl font-bold mb-6">Lexique Comptable Suisse</h1>
      
      <div className="glass rounded-xl p-6 shadow-card mb-10">
        <div className="flex items-start">
          <div className="mr-4 bg-swiss-blue/10 p-2 rounded-md text-swiss-blue mt-1">
            <BookOpen size={24} />
          </div>
          <div>
            <p className="text-lg mb-2">
              Définitions des termes spécifiques à la comptabilité suisse
            </p>
            <p className="text-swiss-text-secondary">
              Ce lexique présente les définitions des termes et concepts essentiels de la comptabilité en Suisse.
              Utilisez la recherche ou les filtres pour trouver rapidement les informations dont vous avez besoin.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un terme..."
                className="w-full py-2 px-4 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-swiss-blue/30"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 py-2 px-4 bg-swiss-blue/10 rounded-lg hover:bg-swiss-blue/20 transition-colors"
          >
            <Filter size={18} />
            <span>Filtres</span>
            {showFilters ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>
        
        {showFilters && (
          <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="font-semibold mb-2 md:mb-0">Filtrer par catégorie et tags</h3>
              <button 
                onClick={clearFilters}
                className="text-sm text-swiss-blue hover:underline"
              >
                Effacer les filtres
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Catégories</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="mr-2"
                      />
                      {category}
                    </label>
                  ))}
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === ''}
                      onChange={() => setSelectedCategory('')}
                      className="mr-2"
                    />
                    Toutes les catégories
                  </label>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => toggleTagSelection(tag)}
                      className={`text-sm py-1 px-3 rounded-full flex items-center ${
                        selectedTags.includes(tag) 
                          ? 'bg-swiss-blue text-white' 
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      <Tag size={12} className="mr-1" />
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {filteredData.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-500">Aucun terme ne correspond à votre recherche</p>
          <button 
            onClick={clearFilters}
            className="mt-4 text-swiss-blue hover:underline"
          >
            Effacer les filtres
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredData.map(entry => (
            <div key={entry.id} className="glass rounded-xl p-5 shadow-card">
              <div 
                className="flex justify-between items-start cursor-pointer"
                onClick={() => toggleTermExpansion(entry.id)}
              >
                <div>
                  <h2 className="text-xl font-semibold text-swiss-blue">{entry.term}</h2>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <span className="bg-swiss-blue/10 rounded-full px-2 py-0.5">{entry.category}</span>
                    <span className="mx-2">•</span>
                    <div className="flex space-x-1">
                      {entry.tags.map(tag => (
                        <span key={tag} className="text-swiss-text-secondary">{tag}</span>
                      )).reduce((prev, curr, i) => i === 0 ? [curr] : [...prev, <span key={i} className="text-gray-400">, </span>, curr], [] as React.ReactNode[])}
                    </div>
                  </div>
                </div>
                <button 
                  className="text-gray-400 hover:text-swiss-blue mt-1"
                  aria-label={expandedTerms[entry.id] ? "Réduire" : "Développer"}
                >
                  {expandedTerms[entry.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>
              
              {expandedTerms[entry.id] && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-swiss-text-secondary">{entry.definition}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Lexicon;
