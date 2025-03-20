
import React from 'react';
import { Info, Download } from 'lucide-react';

interface InstructionsCardProps {
  onDownloadTemplate: () => void;
}

const InstructionsCard = ({ onDownloadTemplate }: InstructionsCardProps) => {
  return (
    <div className="mb-8">
      <p className="text-swiss-text-secondary mb-4">
        Cet outil vous permet de convertir des fichiers Excel au format compatible avec Abacus.
        Téléchargez votre fichier Excel et obtenez le fichier XML prêt à être importé dans Abacus.
      </p>
      
      <div className="bg-swiss-muted p-4 rounded-lg">
        <h3 className="font-semibold mb-2 flex items-center text-swiss-blue">
          <Info size={18} className="mr-2" />
          Format attendu
        </h3>
        <p className="text-sm mb-3">
          Le fichier Excel doit contenir les colonnes suivantes: <strong>Date, Compte, Contrepartie, Texte1, Montant, Code TVA</strong>.
        </p>
        <button 
          onClick={onDownloadTemplate}
          className="text-sm text-swiss-blue hover:underline flex items-center"
        >
          <Download size={16} className="mr-1" />
          Télécharger le modèle
        </button>
      </div>
    </div>
  );
};

export default InstructionsCard;
