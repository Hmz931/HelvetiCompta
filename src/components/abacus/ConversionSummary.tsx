
import React from 'react';
import { Download } from 'lucide-react';

interface SummaryData {
  totalTransactions: number;
  encaissements: {
    total: number;
    details: Record<string, number>;
  };
  decaissements: {
    total: number;
    salaires: number;
    achatsDirects: number;
    achatsIndirects: number;
  };
}

interface ConversionSummaryProps {
  summary: SummaryData;
  file: File | null;
  onDownload: () => void;
  convertedData: any[] | null;
}

const ConversionSummary = ({ summary, file, onDownload, convertedData }: ConversionSummaryProps) => {
  return (
    <div className="bg-green-50 border border-green-200 p-5 rounded-lg mb-6">
      <div className="flex items-center mb-4">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="text-green-600 mr-3" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <h3 className="text-lg font-semibold">Conversion réussie!</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-swiss-text-secondary mb-1">Fichier source</p>
          <p className="font-medium">{file?.name}</p>
        </div>
        <div>
          <p className="text-sm text-swiss-text-secondary mb-1">Format de sortie</p>
          <p className="font-medium">Excel compatible Abacus</p>
        </div>
        <div>
          <p className="text-sm text-swiss-text-secondary mb-1">Écritures converties</p>
          <p className="font-medium">{summary.totalTransactions}</p>
        </div>
        <div>
          <p className="text-sm text-swiss-text-secondary mb-1">Date de conversion</p>
          <p className="font-medium">
            {new Date().toLocaleString()}
          </p>
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Résumé</h4>
        <div className="rounded border border-gray-200 bg-white shadow-sm p-4">
          <p className="mb-2"><span className="font-medium">Total Transactions :</span> {summary.totalTransactions}</p>
          
          {summary.encaissements.total > 0 && (
            <div className="mb-2">
              <p className="font-medium mb-1">Encaissements : {summary.encaissements.total.toFixed(2)} CHF</p>
              <ul className="pl-5 text-sm text-swiss-text-secondary">
                {Object.entries(summary.encaissements.details).map(([compte, total]) => (
                  <li key={compte}>Compte {compte} : {(total as number).toFixed(2)} CHF</li>
                ))}
              </ul>
            </div>
          )}
          
          {summary.decaissements.total > 0 && (
            <div>
              <p className="font-medium mb-1">Décaissements : {summary.decaissements.total.toFixed(2)} CHF</p>
              <ul className="pl-5 text-sm text-swiss-text-secondary">
                {summary.decaissements.salaires > 0 && (
                  <li>Salaires : {summary.decaissements.salaires.toFixed(2)} CHF</li>
                )}
                {summary.decaissements.achatsDirects > 0 && (
                  <li>Achats directs : {summary.decaissements.achatsDirects.toFixed(2)} CHF</li>
                )}
                {summary.decaissements.achatsIndirects > 0 && (
                  <li>Achats indirects : {summary.decaissements.achatsIndirects.toFixed(2)} CHF</li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
      
      {convertedData && convertedData.length > 0 && (
        <div className="border-t border-green-200 pt-4 mt-4">
          <h4 className="font-semibold mb-2">Aperçu des écritures</h4>
          <div className="bg-white rounded border border-gray-200 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Compte</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Débit</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Crédit</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Libellé</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {convertedData.slice(0, 5).map((entry, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{entry.Compte}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {entry.Montant > 0 ? `${parseFloat(entry.Montant).toFixed(2)} CHF` : ''}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {entry.Montant < 0 ? `${Math.abs(parseFloat(entry.Montant)).toFixed(2)} CHF` : ''}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{entry.Texte1}</td>
                  </tr>
                ))}
                {convertedData.length > 5 && (
                  <tr>
                    <td colSpan={4} className="px-6 py-2 text-center text-sm text-gray-500">
                      ... et {convertedData.length - 5} autres écritures
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      <div className="flex justify-center mt-6">
        <button
          onClick={onDownload}
          className="bg-swiss-blue text-white px-6 py-2 rounded-lg hover:bg-swiss-blue/90 transition-colors flex items-center"
        >
          <Download size={18} className="mr-2" />
          Télécharger le fichier Excel pour Abacus
        </button>
      </div>
    </div>
  );
};

export default ConversionSummary;
