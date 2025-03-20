
import React, { useState } from 'react';
import { FileSpreadsheet, AlertCircle, CheckCircle } from 'lucide-react';
import * as XLSX from 'xlsx';
import FileUploader from './FileUploader';
import ConversionSummary from './ConversionSummary';
import InstructionsCard from './InstructionsCard';
import { 
  validateHeaders,
  processExcelData,
  generateSummary,
  createWorkbook,
  downloadWorkbook,
  createTemplateWorkbook
} from '../../utils/excelUtils';

const ExcelConverter = () => {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [summary, setSummary] = useState<any | null>(null);
  const [convertedData, setConvertedData] = useState<any[] | null>(null);
  const [outputWorkbook, setOutputWorkbook] = useState<XLSX.WorkBook | null>(null);

  const handleFileChange = (selectedFile: File | null) => {
    setFile(selectedFile);
    
    if (!selectedFile) {
      setError('Veuillez sélectionner un fichier Excel (.xlsx ou .xls)');
    } else {
      setError(null);
    }
    
    setSuccess(false);
    setConvertedData(null);
    setSummary(null);
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
      const newWorkbook = createWorkbook(processedData);
      
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
    const fileName = `${file.name.replace(/\.[^/.]+$/, '')}_abacus.xml`;
    downloadWorkbook(outputWorkbook, fileName);
  };

  const handleDownloadTemplate = () => {
    const templateWorkbook = createTemplateWorkbook();
    downloadWorkbook(templateWorkbook, "Template_Ecritures.xlsx");
  };

  return (
    <div className="glass rounded-xl p-6 shadow-card">
      <h2 className="text-2xl font-bold mb-6">Convertisseur Excel vers Abacus</h2>
      
      <InstructionsCard onDownloadTemplate={handleDownloadTemplate} />
      
      <FileUploader 
        file={file} 
        onFileChange={handleFileChange}
        error={error}
      />
      
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
        <ConversionSummary 
          summary={summary}
          file={file}
          onDownload={handleDownload}
          convertedData={convertedData}
        />
      )}
    </div>
  );
};

export default ExcelConverter;
