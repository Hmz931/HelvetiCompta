
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';
import { Download, FileText, BarChart, FileSpreadsheet, CreditCard } from 'lucide-react';

type Template = {
  id: number;
  name: string;
  description: string;
  format: string;
  fileSize?: string;
};

type TemplateCategory = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  templates: Template[];
};

const templateCategories: TemplateCategory[] = [
  {
    id: "closing",
    title: "Dossiers de Clôture",
    description: "Templates pour la clôture annuelle et intermédiaire",
    icon: <FileText size={24} />,
    templates: [
      { id: 1, name: "Dossier de clôture annuelle", description: "Template complet pour la clôture des comptes annuels", format: "Excel", fileSize: "245 KB" },
      { id: 2, name: "Checklist de bouclement", description: "Liste des tâches à effectuer pour une clôture réussie", format: "PDF", fileSize: "120 KB" },
      { id: 3, name: "Tableaux des provisions", description: "Modèle pour calculer et documenter les provisions", format: "Excel", fileSize: "180 KB" },
      { id: 4, name: "Contrôle de TVA annuel", description: "Réconciliation des décomptes TVA avec la comptabilité", format: "Excel", fileSize: "210 KB" }
    ]
  },
  {
    id: "reporting",
    title: "Rapports Financiers",
    description: "Modèles de reporting et d'analyses financières",
    icon: <BarChart size={24} />,
    templates: [
      { id: 5, name: "Tableau de bord financier", description: "Modèle de reporting mensuel avec KPIs", format: "Excel", fileSize: "320 KB" },
      { id: 6, name: "Analyse de rentabilité", description: "Template pour l'analyse détaillée de la rentabilité", format: "Excel", fileSize: "275 KB" },
      { id: 7, name: "Cash flow prévisionnel", description: "Modèle pour prévoir les flux de trésorerie", format: "Excel", fileSize: "190 KB" },
      { id: 8, name: "Rapport de gestion", description: "Template pour le rapport annuel de gestion", format: "Word", fileSize: "150 KB" }
    ]
  },
  {
    id: "tax",
    title: "Déclarations Fiscales",
    description: "Templates pour la TVA et autres déclarations fiscales",
    icon: <CreditCard size={24} />,
    templates: [
      { id: 9, name: "Décompte TVA", description: "Formulaire de décompte TVA avec calculs automatiques", format: "Excel", fileSize: "180 KB" },
      { id: 10, name: "Réconciliation fiscale", description: "Template pour la réconciliation entre résultat comptable et fiscal", format: "Excel", fileSize: "230 KB" },
      { id: 11, name: "Formulaire de déclaration d'impôt", description: "Modèle de déclaration pour PME", format: "PDF", fileSize: "290 KB" },
      { id: 12, name: "Suivi des taux d'imposition", description: "Tableau récapitulatif des taux d'imposition par canton", format: "Excel", fileSize: "150 KB" }
    ]
  },
  {
    id: "accounting",
    title: "Documents Comptables",
    description: "Documents pour la tenue quotidienne de la comptabilité",
    icon: <FileSpreadsheet size={24} />,
    templates: [
      { id: 13, name: "Journal comptable", description: "Modèle de journal pour les écritures manuelles", format: "Excel", fileSize: "160 KB" },
      { id: 14, name: "Plan comptable suisse PME", description: "Plan comptable adapté aux PME suisses", format: "Excel", fileSize: "210 KB" },
      { id: 15, name: "Tableau d'amortissement", description: "Calcul d'amortissement linéaire et dégressif", format: "Excel", fileSize: "185 KB" },
      { id: 16, name: "Suivi des immobilisations", description: "Registre détaillé pour le suivi des actifs immobilisés", format: "Excel", fileSize: "240 KB" }
    ]
  }
];

const getCategoryById = (id: string): TemplateCategory | undefined => {
  return templateCategories.find(cat => cat.id === id);
};

const TemplatesList = ({ category }: { category: string }) => {
  const categoryData = getCategoryById(category);
  
  if (!categoryData) {
    return <div>Catégorie non trouvée</div>;
  }
  
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold mb-2">{categoryData.title}</h1>
      <p className="text-swiss-text-secondary mb-8">{categoryData.description}</p>
      
      <div className="space-y-4">
        {categoryData.templates.map(template => (
          <div key={template.id} className="glass rounded-xl shadow-card overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between p-6">
              <div className="flex-grow mb-4 md:mb-0 md:mr-6">
                <div className="flex items-center">
                  <div className="bg-swiss-blue/10 text-swiss-blue p-2 rounded-lg mr-3">
                    {template.format === 'Excel' && <FileSpreadsheet size={20} />}
                    {template.format === 'PDF' && <FileText size={20} />}
                    {template.format === 'Word' && <FileText size={20} />}
                  </div>
                  <h3 className="text-xl font-semibold">{template.name}</h3>
                </div>
                <p className="text-swiss-text-secondary my-2">{template.description}</p>
                <div className="flex items-center text-sm text-swiss-text-secondary">
                  <span className="mr-4">Format: <span className="font-medium">{template.format}</span></span>
                  {template.fileSize && <span>Taille: <span className="font-medium">{template.fileSize}</span></span>}
                </div>
              </div>
              <button className="bg-swiss-blue text-white px-5 py-2.5 rounded-lg flex items-center justify-center space-x-2 button-hover-effect w-full md:w-auto">
                <Download size={18} />
                <span>Télécharger</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TemplatesOverview = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold mb-4">Templates et Documents</h1>
      <div className="glass rounded-xl p-6 shadow-card mb-10">
        <p className="text-lg">
          Cette section contient des modèles de documents essentiels pour la comptabilité suisse.
          Tous les templates sont prêts à l'emploi et peuvent être adaptés à vos besoins spécifiques.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {templateCategories.map(category => (
          <div key={category.id} className="glass rounded-xl p-6 shadow-card card-hover staggered-item">
            <div className="flex items-center mb-4">
              <div className="bg-swiss-blue/10 text-swiss-blue p-3 rounded-lg mr-3">
                {category.icon}
              </div>
              <h2 className="text-2xl font-semibold">{category.title}</h2>
            </div>
            <p className="text-swiss-text-secondary mb-6 min-h-[48px]">{category.description}</p>
            <div className="flex justify-between items-center">
              <p className="text-sm text-swiss-text-secondary">{category.templates.length} templates</p>
              <Link 
                to={`/templates/${category.id}`} 
                className="bg-swiss-blue text-white px-4 py-2 rounded-lg flex items-center space-x-2 button-hover-effect"
              >
                <span>Voir les modèles</span>
                <FileText size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Templates = () => {
  return (
    <div>
      <Breadcrumb />
      <Routes>
        <Route path="/" element={<TemplatesOverview />} />
        <Route path="/closing" element={<TemplatesList category="closing" />} />
        <Route path="/reporting" element={<TemplatesList category="reporting" />} />
        <Route path="/tax" element={<TemplatesList category="tax" />} />
        <Route path="/accounting" element={<TemplatesList category="accounting" />} />
      </Routes>
    </div>
  );
};

export default Templates;
