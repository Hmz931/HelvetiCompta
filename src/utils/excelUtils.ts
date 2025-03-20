
import * as XLSX from 'xlsx';

// TVA mapping for Swiss tax rates
export const tauxTVAMapping = {
  111: 7.7, 121: 7.7, 131: 8.1, 132: 2.6,
  141: 8.1, 142: 2.6, 144: 3.8, 311: 7.7,
  312: 2.5, 511: 8.1, 512: 2.6, 516: 100,
  112: 2.5, 122: 2.5, 126: 0, 136: 0,
  116: 0, 200: 0, 400: 0, 401: 0,
  115: 100, 125: 100
};

// Output columns for Abacus format
export const outputColumns = [
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

export const validateHeaders = (headers: string[]) => {
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

export const processExcelData = (data: any[]) => {
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

export const generateSummary = (data: any[]) => {
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

export const createWorkbook = (processedData: any[]) => {
  const outputSheet = XLSX.utils.json_to_sheet(processedData, { header: outputColumns });
  const newWorkbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(newWorkbook, outputSheet, 'Ecritures');
  return newWorkbook;
};

export const downloadWorkbook = (workbook: XLSX.WorkBook, fileName: string) => {
  const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([wbout], { type: 'application/octet-stream' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const createTemplateWorkbook = () => {
  // Create a new workbook for the template
  const templateWorkbook = XLSX.utils.book_new();
  
  // Create headers
  const headers = ["Date", "Compte", "Contrepartie", "Texte1", "Montant", "Code TVA"];
  
  // Add some example data with the new date format (JJ.MM-AAAA)
  const exampleData = [
    headers,
    ["03.01.2024", "1020", "3400", "ENC CA", "5987,3", "511"],
    ["06.01.2024", "6500", "1020", "Achat fourniture de bureau", "10589,4", "141"],
    ["08.01.2024", "2299", "1020", "PMT Salaires", "16864,95", ""],
    ["09.01.2024", "4000", "1020", "Achat marchandises", "10589,4", "131"]
  ];
  
  // Create worksheet and add to workbook
  const worksheet = XLSX.utils.aoa_to_sheet(exampleData);
  XLSX.utils.book_append_sheet(templateWorkbook, worksheet, "Modèle");
  
  return templateWorkbook;
};
