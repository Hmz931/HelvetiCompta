
import React from 'react';
import Breadcrumb from '@/components/common/Breadcrumb';
import TextProcessor from '@/components/text/TextProcessor';
import { Book, FileText, Info } from 'lucide-react';

const TextAnalysis = () => {
  return (
    <div>
      <Breadcrumb />
      <div className="animate-fade-in">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-4">Analyse de Texte Comptable</h1>
          <div className="glass rounded-xl p-6 shadow-card">
            <p className="text-lg">
              Utilisez cet outil pour analyser vos documents texte et en extraire le contenu important.
              Vous pourrez ensuite ajouter facilement ces informations à vos sections de cours.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          <div className="glass rounded-xl p-6 shadow-card">
            <div className="flex items-start space-x-4 mb-4">
              <div className="bg-swiss-blue/10 text-swiss-blue p-2 rounded-lg">
                <Info size={24} />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Comment utiliser l'analyseur</h2>
                <ol className="space-y-2 list-decimal list-inside text-swiss-text-secondary">
                  <li>Collez votre texte ou téléchargez un fichier texte (.txt)</li>
                  <li>Cliquez sur "Analyser le texte" pour extraire les informations importantes</li>
                  <li>Ajustez le titre, le résumé et les points clés si nécessaire</li>
                  <li>Sélectionnez le cours et la section où vous souhaitez ajouter ce contenu</li>
                  <li>Cliquez sur "Ajouter à la section" pour sauvegarder</li>
                </ol>
              </div>
            </div>
          </div>
          
          <TextProcessor />
        </div>
      </div>
    </div>
  );
};

export default TextAnalysis;
