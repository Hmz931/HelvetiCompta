
import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import { FileText, Globe, BookOpen, ExternalLink } from 'lucide-react';

type ResourceLink = {
  title: string;
  url: string;
  description?: string;
  isExternal?: boolean;
};

type ResourceCategory = {
  title: string;
  icon: React.ReactNode;
  links: ResourceLink[];
};

const ResourceLinkCard = ({ title, url, description, isExternal = true }: ResourceLink) => (
  <a 
    href={url} 
    target={isExternal ? "_blank" : undefined}
    rel={isExternal ? "noopener noreferrer" : undefined}
    className="flex flex-col h-full glass rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1"
  >
    <h3 className="text-lg font-semibold mb-2 flex items-center">
      {title}
      {isExternal && <ExternalLink size={14} className="ml-2 text-swiss-blue" />}
    </h3>
    {description && (
      <p className="text-swiss-text-secondary text-sm flex-grow">
        {description}
      </p>
    )}
  </a>
);

const Resources = () => {
  const resourceCategories: ResourceCategory[] = [
    {
      title: "Textes Légaux",
      icon: <FileText size={20} />,
      links: [
        {
          title: "Code des Obligations (CO)",
          url: "https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr",
          description: "Texte de loi régissant la comptabilité suisse (articles 957 à 964)"
        },
        {
          title: "Loi fédérale sur la TVA",
          url: "https://www.fedlex.admin.ch/eli/cc/2009/615/fr",
          description: "Dispositions légales concernant la taxe sur la valeur ajoutée en Suisse"
        },
        {
          title: "Loi sur l'impôt fédéral direct",
          url: "https://www.fedlex.admin.ch/eli/cc/1991/1184_1184_1184/fr",
          description: "Réglementation fiscale au niveau fédéral"
        },
        {
          title: "Ordonnance sur la tenue et la conservation des livres de comptes",
          url: "https://www.fedlex.admin.ch/eli/cc/2002/204/fr",
          description: "Règles concernant l'archivage et la tenue des documents comptables"
        }
      ]
    },
    {
      title: "Organismes Officiels",
      icon: <Globe size={20} />,
      links: [
        {
          title: "Administration fédérale des finances",
          url: "https://www.efd.admin.ch/",
          description: "Informations sur les finances publiques et la politique budgétaire"
        },
        {
          title: "Administration fédérale des contributions",
          url: "https://www.estv.admin.ch/",
          description: "Autorité fiscale fédérale, informations sur l'imposition"
        },
        {
          title: "Office fédéral de la statistique",
          url: "https://www.bfs.admin.ch/",
          description: "Données statistiques sur l'économie suisse"
        },
        {
          title: "Secrétariat d'État à l'économie (SECO)",
          url: "https://www.seco.admin.ch/",
          description: "Centre de compétence de la Confédération pour les questions de politique économique"
        }
      ]
    },
    {
      title: "Ressources Professionnelles",
      icon: <BookOpen size={20} />,
      links: [
        {
          title: "EXPERTsuisse",
          url: "https://www.expertsuisse.ch/",
          description: "Association des experts en audit, fiscalité et fiduciaire"
        },
        {
          title: "veb.ch",
          url: "https://www.veb.ch/",
          description: "Association pour la comptabilité et le controlling"
        },
        {
          title: "Swiss GAAP RPC",
          url: "https://www.fer.ch/",
          description: "Fondation pour les recommandations relatives à la présentation des comptes"
        },
        {
          title: "Chambre fiduciaire suisse",
          url: "https://www.treuhandsuisse.ch/",
          description: "Association suisse des experts fiduciaires"
        }
      ]
    },
    {
      title: "Liens Utiles",
      icon: <Globe size={20} />,
      links: [
        {
          title: "Plan comptable suisse PME",
          url: "/resources/plan-comptable-pme.pdf",
          description: "Téléchargez le plan comptable de référence pour les PME suisses",
          isExternal: false
        },
        {
          title: "Calculateur de TVA en ligne",
          url: "https://www.tva-calculateur.ch/",
          description: "Outil gratuit pour calculer la TVA selon les taux suisses"
        },
        {
          title: "Portail PME",
          url: "https://www.kmu.admin.ch/",
          description: "Plateforme d'information de la Confédération pour les PME"
        },
        {
          title: "Société suisse des employés de commerce",
          url: "https://www.secsuisse.ch/",
          description: "Organisation professionnelle pour les employés de commerce"
        }
      ]
    }
  ];

  return (
    <div className="animate-fade-in">
      <Breadcrumb />
      <h1 className="text-3xl font-bold mb-6">Ressources Comptables</h1>
      
      <div className="glass rounded-xl p-6 shadow-card mb-10">
        <p className="text-lg">
          Cette page regroupe les principales ressources externes utiles pour les professionnels 
          de la comptabilité en Suisse. Vous y trouverez des liens vers les bases légales, 
          les organismes officiels et des outils pratiques.
        </p>
      </div>
      
      <div className="space-y-12">
        {resourceCategories.map((category, index) => (
          <section key={category.title} className="animate-on-scroll opacity-0">
            <div className="flex items-center mb-4">
              <div className="bg-swiss-blue/10 text-swiss-blue p-2 rounded-lg mr-3">
                {category.icon}
              </div>
              <h2 className="text-2xl font-bold">{category.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.links.map((link) => (
                <ResourceLinkCard 
                  key={link.title} 
                  title={link.title} 
                  url={link.url} 
                  description={link.description}
                  isExternal={link.isExternal}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Resources;
