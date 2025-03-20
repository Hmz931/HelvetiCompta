
import React, { useState, useRef } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle, Download, FileSpreadsheet, Info } from 'lucide-react';
import * as XLSX from 'xlsx';

// TVA mapping for Swiss tax rates
const tauxTVAMapping = {
  111: 7.7, 121: 7.7, 131: 8.1, 132: 2.6,
  141: 8.1, 142: 2.6, 144: 3.8, 311: 7.7,
  312: 2.5, 511: 8.1, 512: 2.6, 516: 100,
  112: 2.5, 122: 2.5, 126: 0, 136: 0,
  116: 0, 200: 0, 400: 0, 401: 0,
  115: 100, 125: 100
};

// Output columns for Abacus format
const outputColumns = [
  "N° enregistrement", "Version", "Date", "Compte", "Contrepartie", "Texte1", "Montant", "Texte2", "DC",
  "Niveau d'imputation 1", "Contrepartie niveau d'imputation 1", "Numéro du document", "Cours", "Gre cours",
  "Montant ME", "Identificateur écriture collective", "Spec1", "Applicationidentification", "Réserve", "Date de valeur",
  "Position coll.", "Réserve", "N° mandant", "ISO", "ISO2", "Quantité", "Taux", "Niveau d'imputation 2",
  "Contrepartie niveau d'imputation 2", "Fond1", "Fond2", "Réserve", "Réserve", "Réserve", "Champ de code", "Code TVA",
  "Taux TVA", "TVA incl.", "Méthode TVA", "Pays de TVA", "Coeff. TVA", "Compte TVA", "Contrepartie TVA", "DC TVA",
  "Montant TVA", "TVA montant ME", "Reste montant TVA", "Reste TVA montant ME", "Réserve", "Type TVA", "Réserve",
  "Réserve", "Réserve", "Division", "Budgétisés / Réel", "MontantCollCondCrédit", "MEMontantCollCondCrédit", "Coeff1 Euro",
  "Coeff2 Euro", "Intercompany", "Cours2", "Code de consolidation", "Niveau d'imputation 3", "Contrepartie niveau d'imputation 3"
];

const ExcelConverter = () => {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [summary, setSummary] = useState<any | null>(null);
  const [convertedData, setConvertedData] = useState<any[] | null>(null);
  const [outputWorkbook, setOutputWorkbook] = useState<XLSX.WorkBook | null>(null);
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
    setSummary(null);
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
    setSummary(null);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const validateHeaders = (headers: string[]) => {
    const requiredHeaders = ["Date", "Compte", "Contrepartie", "Texte1", "Montant", "Code TVA"];
    const missingHeaders = requiredHeaders.filter(header => !headers.includes(header));
    
    if (missingHeaders.length > 0) {
      return {
        valid: false,
        message: `Colonnes manquantes : ${missingHeaders.join(", ")}`
      };
    }
    
    return { valid: true, message: '' };
  };

  const processExcelData = (data: any[]) => {
    return data.map((row, index) => {
      const codeTVA = row["Code TVA"];
      const montant = parseFloat(row["Montant"]) || 0;
      const texte1 = row["Texte1"] ? String(row["Texte1"]).substring(0, 80) : "";

      const tauxTVA = tauxTVAMapping[codeTVA as keyof typeof tauxTVAMapping] || 0;
      const tvaIncl = codeTVA ? "I" : "";
      const coeffTVA = 100;
      const compteTVA = codeTVA ? row["Compte"] || 0 : 0;
      const contrepartieTVA = codeTVA ? 1172 : 0;
      const dcTVA = codeTVA ? 2 : 0;
      const montantTVA = tauxTVA > 0 ? -(Math.round((montant - (montant / (1 + tauxTVA / 100))) * 100) / 100) : 0;
      const typeTVA = codeTVA ? 2 : 0;

      return {
        "N° enregistrement": index + 1, 
        "Version": "J", 
        "Date": row["Date"], 
        "Compte": row["Compte"],
        "Contrepartie": row["Contrepartie"] || "", 
        "Texte1": texte1, 
        "Montant": montant, 
        "Texte2": "",
        "DC": "D", 
        "Niveau d'imputation 1": 0, 
        "Contrepartie niveau d'imputation 1": 0, 
        "Numéro du document": "",
        "Cours": 0, 
        "Gre cours": "", 
        "Montant ME": 0, 
        "Identificateur écriture collective": "",
        "Spec1": "", 
        "Applicationidentification": "F", 
        "Réserve": "", 
        "Date de valeur": "", 
        "Position coll.": 0,
        "ISO": "CHF", 
        "ISO2": "CHF", 
        "Quantité": 0, 
        "Taux": 0, 
        "Niveau d'imputation 2": 0,
        "Contrepartie niveau d'imputation 2": 0, 
        "Fond1": 0, 
        "Fond2": 0, 
        "Champ de code": "", 
        "Code TVA": codeTVA,
        "Taux TVA": tauxTVA, 
        "TVA incl.": tvaIncl, 
        "Méthode TVA": 2, 
        "Pays de TVA": "CH", 
        "Coeff. TVA": coeffTVA,
        "Compte TVA": compteTVA, 
        "Contrepartie TVA": contrepartieTVA, 
        "DC TVA": dcTVA, 
        "Montant TVA": montantTVA,
        "TVA montant ME": 0, 
        "Reste montant TVA": 0, 
        "Reste TVA montant ME": 0, 
        "Type TVA": typeTVA, 
        "Division": 0,
        "Budgétisés / Réel": 0, 
        "MontantCollCondCrédit": 0, 
        "MEMontantCollCondCrédit": 0, 
        "Coeff1 Euro": 1,
        "Coeff2 Euro": 1, 
        "Intercompany": 0, 
        "Cours2": 0, 
        "Code de consolidation": "", 
        "Niveau d'imputation 3": 0,
        "Contrepartie niveau d'imputation 3": 0
      };
    });
  };

  const generateSummary = (data: any[]) => {
    let encaissements = { total: 0, details: {} as Record<string, number> };
    let decaissements = { total: 0, salaires: 0, achatsDirects: 0, achatsIndirects: 0 };

    data.forEach((row) => {
      const compte = row["Compte"];
      const montant = parseFloat(row["Montant"]) || 0;

      if (compte >= 1000 && compte <= 1999) {
        encaissements.total += montant;
        encaissements.details[compte] = (encaissements.details[compte] || 0) + montant;
      } else {
        decaissements.total += montant;
        if (compte == 2299) decaissements.salaires += montant;
        if (compte >= 4000 && compte <= 4999) decaissements.achatsDirects += montant;
        if (compte >= 6000 && compte <= 8999) decaissements.achatsIndirects += montant;
      }
    });

    return {
      totalTransactions: data.length,
      encaissements,
      decaissements
    };
  };

  const handleConvert = async () => {
    if (!file) return;
    
    setProcessing(true);
    setError(null);
    
    try {
      const arrayBuffer = await file.arrayBuffer();
      const data = new Uint8Array(arrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });

      // Get the first sheet
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(firstSheet, { header: 1 }) as any[][];
      
      if (rows.length < 2) {
        throw new Error('Le fichier ne contient pas suffisamment de données.');
      }
      
      // Get headers (first row)
      const headers = rows[0].map(h => String(h));
      
      // Validate required headers
      const validation = validateHeaders(headers);
      if (!validation.valid) {
        throw new Error(validation.message);
      }
      
      // Convert data to JSON (with headers)
      const jsonData = XLSX.utils.sheet_to_json(firstSheet);
      
      // Process data for Abacus format
      const processedData = processExcelData(jsonData);
      
      // Create output workbook
      const outputSheet = XLSX.utils.json_to_sheet(processedData, { header: outputColumns });
      const newWorkbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(newWorkbook, outputSheet, 'Ecritures');
      
      // Generate summary
      const summaryData = generateSummary(processedData);
      
      setConvertedData(processedData);
      setOutputWorkbook(newWorkbook);
      setSummary(summaryData);
      setSuccess(true);
    } catch (err: any) {
      setError(`Une erreur est survenue: ${err.message}`);
      setSuccess(false);
    } finally {
      setProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!outputWorkbook || !file) return;
    
    const wbout = XLSX.write(outputWorkbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([wbout], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${file.name.replace(/\.[^/.]+$/, '')}_abacus.xml`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadTemplate = () => {
    // Create a new workbook for the template
    const templateWorkbook = XLSX.utils.book_new();
    
    // Create headers
    const headers = ["Date", "Compte", "Contrepartie", "Texte1", "Montant", "Code TVA"];
    
    // Add some example data
    const exampleData = [
      headers,
      ["2023-01-15", "1020", "3200", "Facture client 123", "1000.00", "111"],
      ["2023-01-20", "4200", "1020", "Achat fournitures", "250.75", "311"],
      ["2023-01-25", "6000", "1020", "Loyer janvier", "1500.00", "400"]
    ];
    
    // Create worksheet and add to workbook
    const worksheet = XLSX.utils.aoa_to_sheet(exampleData);
    XLSX.utils.book_append_sheet(templateWorkbook, worksheet, "Modèle");
    
    // Generate file and trigger download
    const wbout = XLSX.write(templateWorkbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([wbout], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "Template_Ecritures.xlsx";
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
            <Info size={18} className="mr-2" />
            Format attendu
          </h3>
          <p className="text-sm mb-3">
            Le fichier Excel doit contenir les colonnes suivantes: <strong>Date, Compte, Contrepartie, Texte1, Montant, Code TVA</strong>.
          </p>
          <button 
            onClick={handleDownloadTemplate}
            className="text-sm text-swiss-blue hover:underline flex items-center"
          >
            <Download size={16} className="mr-1" />
            Télécharger le modèle
          </button>
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
            className="bg-swiss-blue text-white px-6 py-2 rounded-lg hover:bg-swiss-blue/90 transition-colors flex items-center"
          >
            <FileSpreadsheet size={18} className="mr-2" />
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
      
      {success && summary && (
        <div className="bg-green-50 border border-green-200 p-5 rounded-lg mb-6">
          <div className="flex items-center mb-4">
            <CheckCircle size={24} className="text-green-600 mr-3" />
            <h3 className="text-lg font-semibold">Conversion réussie!</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-swiss-text-secondary mb-1">Fichier source</p>
              <p className="font-medium">{file?.name}</p>
            </div>
            <div>
              <p className="text-sm text-swiss-text-secondary mb-1">Format de sortie</p>
              <p className="font-medium">Abacus XML</p>
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
              onClick={handleDownload}
              className="bg-swiss-blue text-white px-6 py-2 rounded-lg hover:bg-swiss-blue/90 transition-colors flex items-center"
            >
              <Download size={18} className="mr-2" />
              Télécharger le fichier pour Abacus
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExcelConverter;
