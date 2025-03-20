
import React, { useRef } from 'react';
import { Upload, FileText } from 'lucide-react';

interface FileUploaderProps {
  file: File | null;
  onFileChange: (file: File | null) => void;
  error: string | null;
}

const FileUploader = ({ file, onFileChange, error }: FileUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;
    
    // Check if file is Excel
    if (!selectedFile.name.endsWith('.xlsx') && !selectedFile.name.endsWith('.xls')) {
      onFileChange(null);
      return;
    }
    
    onFileChange(selectedFile);
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
      onFileChange(null);
      return;
    }
    
    onFileChange(droppedFile);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
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
                onFileChange(null);
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
    </>
  );
};

export default FileUploader;
