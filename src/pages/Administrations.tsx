
import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import { ExternalLink, Building, Clock, Phone, MapPin } from 'lucide-react';

type Administration = {
  name: string;
  type: 'cantonal' | 'federal';
  url: string;
  description: string;
  address?: string;
  phone?: string;
  hours?: string;
  services?: string[];
};

const administrations: Administration[] = [
  // Administrations cantonales
  {
    name: "Administration fiscale cantonale de Genève",
    type: "cantonal",
    url: "https://www.ge.ch/organisation/departement-finances-ressources-humaines",
    description: "Administration fiscale du canton de Genève, gérant l'imposition des personnes physiques et morales.",
    address: "Rue du Stand 26, 1204 Genève",
    phone: "+41 22 327 70 00",
    hours: "Lun-Ven: 9h-16h",
    services: ["Impôts des personnes physiques", "Impôts des personnes morales", "Impôt à la source", "Impôt immobilier"]
  },
  {
    name: "Administration cantonale des impôts (Vaud)",
    type: "cantonal",
    url: "https://www.vd.ch/themes/etat-droit-finances/impots/",
    description: "Service cantonal responsable de la taxation et de la perception des impôts dans le canton de Vaud.",
    address: "Route de Berne 46, 1014 Lausanne",
    phone: "+41 21 316 21 21",
    hours: "Lun-Ven: 8h30-11h30, 14h-16h",
    services: ["Taxation des personnes physiques", "Taxation des personnes morales", "Impôt à la source", "Registre foncier"]
  },
  {
    name: "Service cantonal des contributions (Valais)",
    type: "cantonal",
    url: "https://www.vs.ch/web/scc",
    description: "Autorité fiscale du canton du Valais chargée de l'application des lois fiscales cantonales et fédérales.",
    address: "Avenue de la Gare 35, 1951 Sion",
    phone: "+41 27 606 24 50",
    hours: "Lun-Ven: 8h-12h, 13h30-17h",
    services: ["Impôts ordinaires", "Impôts spéciaux", "Contentieux fiscal", "Inspectorat fiscal"]
  },
  {
    name: "Service des contributions (Fribourg)",
    type: "cantonal",
    url: "https://www.fr.ch/dfin/scc",
    description: "Service responsable de la taxation et de la perception des impôts cantonaux, communaux et paroissiaux.",
    address: "Rue Joseph-Piller 13, 1701 Fribourg",
    phone: "+41 26 305 32 75",
    services: ["Taxation", "Perception", "Impôt anticipé", "Impôt à la source"]
  },
  {
    name: "Administration fiscale cantonale (Neuchâtel)",
    type: "cantonal",
    url: "https://www.ne.ch/autorites/DFS/SCCO/Pages/accueil.aspx",
    description: "Service cantonal gérant l'ensemble du processus fiscal pour le canton de Neuchâtel.",
    address: "Rue du Musée 1, 2000 Neuchâtel",
    phone: "+41 32 889 64 12"
  },
  {
    name: "Finanzdirektion (Zürich)",
    type: "cantonal",
    url: "https://www.zh.ch/de/finanzdirektion.html",
    description: "Direction des finances du canton de Zurich, responsable de la gestion des impôts cantonaux.",
    address: "Walcheplatz 1, 8090 Zürich",
    phone: "+41 43 259 11 11"
  },
  {
    name: "Steuerverwaltung (Bern)",
    type: "cantonal",
    url: "https://www.sv.fin.be.ch/de/start.html",
    description: "Administration fiscale du canton de Berne, gérant la taxation et la perception des impôts.",
    address: "Brünnenstrasse 66, 3018 Bern",
    phone: "+41 31 633 60 01"
  },
  {
    name: "Steuerverwaltung (Basel-Stadt)",
    type: "cantonal",
    url: "https://www.steuerverwaltung.bs.ch/",
    description: "Administration fiscale du canton de Bâle-Ville.",
    address: "Fischmarkt 10, 4001 Basel",
    phone: "+41 61 267 81 81"
  },

  // Administrations fédérales
  {
    name: "Administration fédérale des contributions (AFC)",
    type: "federal",
    url: "https://www.estv.admin.ch/estv/fr/home.html",
    description: "Organe responsable des impôts fédéraux directs et indirects, notamment la TVA, l'impôt anticipé et les droits de timbre.",
    address: "Eigerstrasse 65, 3003 Berne",
    phone: "+41 58 462 71 06",
    services: ["TVA", "Impôt fédéral direct", "Impôt anticipé", "Droits de timbre", "Assistance administrative internationale"]
  },
  {
    name: "Secrétariat d'État à l'économie (SECO)",
    type: "federal",
    url: "https://www.seco.admin.ch/seco/fr/home.html",
    description: "Centre de compétence de la Confédération pour toutes les questions de politique économique.",
    address: "Holzikofenweg 36, 3003 Berne",
    phone: "+41 58 462 56 56"
  },
  {
    name: "Office fédéral de la statistique (OFS)",
    type: "federal",
    url: "https://www.bfs.admin.ch/bfs/fr/home.html",
    description: "Principal producteur de statistiques officielles en Suisse, incluant des données économiques et financières.",
    address: "Espace de l'Europe 10, 2010 Neuchâtel",
    phone: "+41 58 463 60 11"
  },
  {
    name: "Administration fédérale des finances (AFF)",
    type: "federal",
    url: "https://www.efv.admin.ch/efv/fr/home.html",
    description: "Responsable de la gestion des finances de la Confédération et de la politique budgétaire.",
    address: "Bundesgasse 3, 3003 Berne",
    phone: "+41 58 465 11 11"
  },
  {
    name: "Banque nationale suisse (BNS)",
    type: "federal",
    url: "https://www.snb.ch/fr/",
    description: "Banque centrale de la Suisse, responsable de la politique monétaire et de l'émission de monnaie.",
    address: "Börsenstrasse 15, 8022 Zurich",
    phone: "+41 58 631 00 00"
  }
];

const AdministrationCard = ({ admin }: { admin: Administration }) => {
  return (
    <div className="glass rounded-xl shadow-card overflow-hidden">
      <div className={`py-3 px-4 text-white font-medium ${admin.type === 'federal' ? 'bg-red-600' : 'bg-swiss-blue'}`}>
        <span className="flex items-center">
          <Building size={18} className="mr-2" /> 
          {admin.name}
        </span>
      </div>
      <div className="p-4">
        <p className="text-swiss-text-secondary mb-4">{admin.description}</p>
        
        {admin.services && admin.services.length > 0 && (
          <div className="mb-4">
            <h4 className="font-medium mb-1">Services principaux:</h4>
            <ul className="list-disc pl-5 text-sm text-swiss-text-secondary space-y-1">
              {admin.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="space-y-2 text-sm">
          {admin.address && (
            <div className="flex items-start">
              <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0 text-gray-500" />
              <span>{admin.address}</span>
            </div>
          )}
          
          {admin.phone && (
            <div className="flex items-center">
              <Phone size={16} className="mr-2 flex-shrink-0 text-gray-500" />
              <span>{admin.phone}</span>
            </div>
          )}
          
          {admin.hours && (
            <div className="flex items-center">
              <Clock size={16} className="mr-2 flex-shrink-0 text-gray-500" />
              <span>{admin.hours}</span>
            </div>
          )}
        </div>
        
        <a 
          href={admin.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center mt-4 text-swiss-blue hover:underline"
        >
          Visiter le site <ExternalLink size={14} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

const Administrations = () => {
  const cantonalAdmins = administrations.filter(admin => admin.type === 'cantonal');
  const federalAdmins = administrations.filter(admin => admin.type === 'federal');
  
  return (
    <div className="animate-fade-in">
      <Breadcrumb />
      <h1 className="text-3xl font-bold mb-6">Administrations Fiscales et Financières</h1>
      
      <div className="glass rounded-xl p-6 shadow-card mb-10">
        <p className="text-lg">
          Cette page regroupe les liens vers les principales administrations fiscales cantonales et fédérales. 
          Vous y trouverez les coordonnées et services proposés pour faciliter vos démarches administratives.
        </p>
      </div>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <span className="inline-block w-8 h-8 rounded-full bg-swiss-blue text-white flex items-center justify-center mr-3">
            <MapPin size={16} />
          </span>
          Administrations Cantonales
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cantonalAdmins.map((admin, index) => (
            <AdministrationCard key={index} admin={admin} />
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <span className="inline-block w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center mr-3">
            <Building size={16} />
          </span>
          Administrations Fédérales
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {federalAdmins.map((admin, index) => (
            <AdministrationCard key={index} admin={admin} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Administrations;
