
import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import { ExternalLink, Building, GraduationCap, FileText, Landmark } from 'lucide-react';

type AdminLink = {
  name: string;
  url: string;
  description: string;
};

const cantonalAdmins: Record<string, AdminLink[]> = {
  'Genève': [
    {
      name: 'Administration Fiscale Cantonale',
      url: 'https://www.ge.ch/organisation/administration-fiscale-cantonale',
      description: 'Informations sur la fiscalité genevoise et déclarations d\'impôts.'
    },
    {
      name: 'Registre du Commerce',
      url: 'https://ge.ch/hrcintapp/commun/first.action',
      description: 'Registre des entreprises et sociétés du canton de Genève.'
    }
  ],
  'Vaud': [
    {
      name: 'Administration Cantonale des Impôts',
      url: 'https://www.vd.ch/themes/etat-droit-finances/impots/',
      description: 'Services fiscaux du canton de Vaud.'
    },
    {
      name: 'Registre du Commerce',
      url: 'https://www.vd.ch/themes/economie/registre-du-commerce/',
      description: 'Registre des entreprises vaudoises.'
    }
  ],
  'Zurich': [
    {
      name: 'Administration Fiscale',
      url: 'https://www.zh.ch/de/steuern-finanzen.html',
      description: 'Steuerverwaltung des Kantons Zürich.'
    },
    {
      name: 'Office du Registre du Commerce',
      url: 'https://www.zh.ch/de/wirtschaft-arbeit/handelsregister.html',
      description: 'Handelsregisteramt des Kantons Zürich.'
    }
  ],
  'Berne': [
    {
      name: 'Intendance des impôts',
      url: 'https://www.sv.fin.be.ch/fr/start.html',
      description: 'Services fiscaux du canton de Berne.'
    },
    {
      name: 'Office du Registre du Commerce',
      url: 'https://www.handelsregisteramt.be.ch/fr/start.html',
      description: 'Registre du commerce du canton de Berne.'
    }
  ]
};

const federalAdmins: AdminLink[] = [
  {
    name: 'Administration Fédérale des Contributions',
    url: 'https://www.estv.admin.ch/estv/fr/home.html',
    description: 'Autorité fiscale fédérale de la Suisse.'
  },
  {
    name: 'Secrétariat d\'État à l\'économie SECO',
    url: 'https://www.seco.admin.ch/seco/fr/home.html',
    description: 'Centre de compétence de la Confédération pour les questions de politique économique.'
  },
  {
    name: 'Office Fédéral de la Statistique',
    url: 'https://www.bfs.admin.ch/bfs/fr/home.html',
    description: 'Statistiques officielles suisses, y compris les données économiques.'
  },
  {
    name: 'Banque Nationale Suisse',
    url: 'https://www.snb.ch/fr/',
    description: 'Banque centrale de la Suisse.'
  },
  {
    name: 'Administration fédérale des douanes',
    url: 'https://www.bazg.admin.ch/bazg/fr/home.html',
    description: 'Informations sur les importations, exportations et droits de douane.'
  }
];

const educationalResources: AdminLink[] = [
  {
    name: 'Chambre fiduciaire suisse EXPERTsuisse',
    url: 'https://www.expertsuisse.ch/fr-ch/Home',
    description: 'Association des experts en audit, fiscalité et fiduciaire.'
  },
  {
    name: 'veb.ch - Association pour la comptabilité',
    url: 'https://www.veb.ch/fr',
    description: 'Organisation professionnelle suisse pour la comptabilité et le controlling.'
  },
  {
    name: 'Haute école de gestion de Genève',
    url: 'https://www.hesge.ch/heg/',
    description: 'Formation académique en économie et gestion.'
  }
];

const Administrations = () => {
  return (
    <div className="animate-fade-in">
      <Breadcrumb />
      <h1 className="text-3xl font-bold mb-6">Administrations et Ressources Officielles</h1>
      
      <div className="glass rounded-xl p-6 shadow-card mb-10">
        <div className="flex items-start">
          <div className="mr-4 bg-swiss-blue/10 p-2 rounded-md text-swiss-blue mt-1">
            <Landmark size={24} />
          </div>
          <div>
            <p className="text-lg mb-2">
              Liens vers les administrations cantonales et fédérales suisses
            </p>
            <p className="text-swiss-text-secondary">
              Cette page regroupe des liens utiles vers les sites officiels des administrations fiscales, 
              registres du commerce et autres institutions pertinentes pour les professionnels de la comptabilité en Suisse.
            </p>
          </div>
        </div>
      </div>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Building size={24} className="mr-3 text-swiss-blue" />
          Administrations Cantonales
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(cantonalAdmins).map(([canton, links]) => (
            <div key={canton} className="glass rounded-xl p-6 shadow-card">
              <h3 className="text-xl font-semibold mb-4 border-b pb-2">{canton}</h3>
              <ul className="space-y-4">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-start hover:text-swiss-blue transition-colors"
                    >
                      <ExternalLink size={18} className="mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium block">{link.name}</span>
                        <span className="text-sm text-swiss-text-secondary">{link.description}</span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Landmark size={24} className="mr-3 text-swiss-blue" />
          Administrations Fédérales
        </h2>
        
        <div className="glass rounded-xl p-6 shadow-card">
          <ul className="space-y-4 divide-y">
            {federalAdmins.map((link, index) => (
              <li key={index} className={index > 0 ? 'pt-4' : ''}>
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start hover:text-swiss-blue transition-colors"
                >
                  <ExternalLink size={18} className="mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium block">{link.name}</span>
                    <span className="text-sm text-swiss-text-secondary">{link.description}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <GraduationCap size={24} className="mr-3 text-swiss-blue" />
          Ressources Éducatives
        </h2>
        
        <div className="glass rounded-xl p-6 shadow-card">
          <ul className="space-y-4 divide-y">
            {educationalResources.map((link, index) => (
              <li key={index} className={index > 0 ? 'pt-4' : ''}>
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start hover:text-swiss-blue transition-colors"
                >
                  <ExternalLink size={18} className="mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium block">{link.name}</span>
                    <span className="text-sm text-swiss-text-secondary">{link.description}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <FileText size={24} className="mr-3 text-swiss-blue" />
          Publications et Documents Officiels
        </h2>
        
        <div className="glass rounded-xl p-6 shadow-card">
          <ul className="space-y-4">
            <li>
              <a 
                href="https://www.admin.ch/gov/fr/accueil/droit-federal/recueil-systematique.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start hover:text-swiss-blue transition-colors"
              >
                <ExternalLink size={18} className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium block">Recueil systématique du droit fédéral</span>
                  <span className="text-sm text-swiss-text-secondary">Textes législatifs suisses, y compris le Code des obligations.</span>
                </div>
              </a>
            </li>
            <li>
              <a 
                href="https://www.efd.admin.ch/efd/fr/home/le-dff/legislation/directives/directives-et-circulaires-concernant-la-tva.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start hover:text-swiss-blue transition-colors"
              >
                <ExternalLink size={18} className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium block">Directives et circulaires concernant la TVA</span>
                  <span className="text-sm text-swiss-text-secondary">Publications officielles sur la taxe sur la valeur ajoutée en Suisse.</span>
                </div>
              </a>
            </li>
            <li>
              <a 
                href="https://www.kmu.admin.ch/kmu/fr/home/savoir-pratique/creation-pme.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start hover:text-swiss-blue transition-colors"
              >
                <ExternalLink size={18} className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium block">Portail PME de la Confédération</span>
                  <span className="text-sm text-swiss-text-secondary">Informations et ressources pour les petites et moyennes entreprises suisses.</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Administrations;
