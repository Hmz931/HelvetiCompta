
import React, { useState, useRef } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle, Download } from 'lucide-react';

const ExcelConverter = () => {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [convertedData, setConvertedData] = useState<any | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;
    
    // Check if file is Excel
    if (!selectedFile.name.endsWith('.xlsx') && !selectedFile.name.endsWith('.xls')) {
      setError('Veuillez sélectionner un fichier Excel (.xlsx ou .xls)');
      setFile(null);
      return;
    }
    
    setFile(selectedFile);
    setError(null);
    setSuccess(false);
    setConvertedData(null);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    
    const droppedFile = event.dataTransfer.files[0];
    if (!droppedFile) return;
    
    // Check if file is Excel
    if (!droppedFile.name.endsWith('.xlsx') && !droppedFile.name.endsWith('.xls')) {
      setError('Veuillez sélectionner un fichier Excel (.xlsx ou .xls)');
      setFile(null);
      return;
    }
    
    setFile(droppedFile);
    setError(null);
    setSuccess(false);
    setConvertedData(null);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleConvert = async () => {
    if (!file) return;
    
    setProcessing(true);
    setError(null);
    
    // Simulate processing
    try {
      // In a real application, we would actually process the Excel file here
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock converted data
      const mockConvertedData = {
        fileName: file.name,
        convertedCount: Math.floor(Math.random() * 50) + 10,
        timestamp: new Date().toISOString(),
        format: 'Abacus XML',
        entries: [
          { account: '1020', debit: 1000, credit: 0, text: 'Paiement facture 123' },
          { account: '3200', debit: 0, credit: 926, text: 'Vente produit A' },
          { account: '2200', debit: 0, credit: 74, text: 'TVA sur vente' },
          // More entries would be here in a real application
        ]
      };
      
      setConvertedData(mockConvertedData);
      setSuccess(true);
    } catch (err) {
      setError('Une erreur est survenue lors de la conversion. Veuillez réessayer.');
      setSuccess(false);
    } finally {
      setProcessing(false);
    }
  };

  const handleDownload = () => {
    // In a real application, this would download the actual converted file
    const mockData = `<?xml version="1.0" encoding="UTF-8"?>
<AbacusExport>
  <Header>
    <CreationDate>${new Date().toISOString()}</CreationDate>
    <SourceFile>${file?.name}</SourceFile>
  </Header>
  <Transactions>
    <Transaction>
      <Account>1020</Account>
      <Debit>1000</Debit>
      <Credit>0</Credit>
      <Text>Paiement facture 123</Text>
    </Transaction>
    <Transaction>
      <Account>3200</Account>
      <Debit>0</Debit>
      <Credit>926</Credit>
      <Text>Vente produit A</Text>
    </Transaction>
    <Transaction>
      <Account>2200</Account>
      <Debit>0</Debit>
      <Credit>74</Credit>
      <Text>TVA sur vente</Text>
    </Transaction>
  </Transactions>
</AbacusExport>`;

    const blob = new Blob([mockData], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${file?.name.replace(/\.[^/.]+$/, '')}_abacus.xml`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="glass rounded-xl p-6 shadow-card">
      <h2 className="text-2xl font-bold mb-6">Convertisseur Excel vers Abacus</h2>
      
      <div className="mb-8">
        <p className="text-swiss-text-secondary mb-4">
          Cet outil vous permet de convertir des fichiers Excel au format compatible avec Abacus.
          Téléchargez votre fichier Excel et obtenez le fichier XML prêt à être importé dans Abacus.
        </p>
        
        <div className="bg-swiss-muted p-4 rounded-lg">
          <h3 className="font-semibold mb-2 flex items-center text-swiss-blue">
            <AlertCircle size={18} className="mr-2" />
            Important
          </h3>
          <p className="text-sm">
            Assurez-vous que votre fichier Excel respecte la structure attendue: colonnes pour comptes, montants, date, libellé, etc.
            Consultez notre documentation pour plus de détails sur le format requis.
          </p>
        </div>
      </div>
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept=".xlsx,.xls"
      />
      
      <div 
        className={`border-2 border-dashed rounded-lg p-6 mb-6 text-center transition-colors ${
          file ? 'border-swiss-blue bg-swiss-blue/5' : 'border-gray-300 hover:border-swiss-blue/50'
        }`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleUploadClick}
      >
        {file ? (
          <div className="flex flex-col items-center">
            <FileText size={40} className="text-swiss-blue mb-3" />
            <p className="font-medium mb-1">{file.name}</p>
            <p className="text-sm text-swiss-text-secondary mb-3">
              {(file.size / 1024).toFixed(1)} KB
            </p>
            <button 
              className="text-sm text-swiss-blue hover:underline"
              onClick={(e) => {
                e.stopPropagation();
                setFile(null);
              }}
            >
              Changer de fichier
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <Upload size={40} className="text-gray-400 mb-3" />
            <p className="font-medium mb-1">Glissez votre fichier Excel ici</p>
            <p className="text-sm text-swiss-text-secondary mb-3">
              ou cliquez pour parcourir vos fichiers
            </p>
            <p className="text-xs text-gray-500">
              Formats acceptés: .xlsx, .xls
            </p>
          </div>
        )}
      </div>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6 flex items-start">
          <AlertCircle size={20} className="mr-3 mt-0.5 flex-shrink-0" />
          <p>{error}</p>
        </div>
      )}
      
      {file && !processing && !success && (
        <div className="flex justify-center">
          <button
            onClick={handleConvert}
            className="bg-swiss-blue text-white px-6 py-2 rounded-lg hover:bg-swiss-blue/90 transition-colors"
          >
            Convertir pour Abacus
          </button>
        </div>
      )}
      
      {processing && (
        <div className="flex justify-center">
          <div className="bg-swiss-blue/10 text-swiss-blue px-6 py-2 rounded-lg flex items-center">
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Conversion en cours...
          </div>
        </div>
      )}
      
      {success && convertedData && (
        <div className="bg-green-50 border border-green-200 p-5 rounded-lg mb-6">
          <div className="flex items-center mb-4">
            <CheckCircle size={24} className="text-green-600 mr-3" />
            <h3 className="text-lg font-semibold">Conversion réussie!</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-swiss-text-secondary mb-1">Fichier source</p>
              <p className="font-medium">{convertedData.fileName}</p>
            </div>
            <div>
              <p className="text-sm text-swiss-text-secondary mb-1">Format de sortie</p>
              <p className="font-medium">{convertedData.format}</p>
            </div>
            <div>
              <p className="text-sm text-swiss-text-secondary mb-1">Écritures converties</p>
              <p className="font-medium">{convertedData.convertedCount}</p>
            </div>
            <div>
              <p className="text-sm text-swiss-text-secondary mb-1">Date de conversion</p>
              <p className="font-medium">
                {new Date(convertedData.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
          
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
                  {convertedData.entries.map((entry: any, index: number) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{entry.account}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {entry.debit > 0 ? `${entry.debit.toFixed(2)} CHF` : ''}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {entry.credit > 0 ? `${entry.credit.toFixed(2)} CHF` : ''}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{entry.text}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            <button
              onClick={handleDownload}
              className="bg-swiss-blue text-white px-6 py-2 rounded-lg hover:bg-swiss-blue/90 transition-colors flex items-center"
            >
              <Download size={18} className="mr-2" />
              Télécharger le fichier XML
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExcelConverter;
