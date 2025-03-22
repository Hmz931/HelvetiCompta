import { Course } from './types';

export const chartOfAccountsCourse: Course = {
  id: 'chart-of-accounts',
  title: 'Les comptes et leur classification',
  description: 'Comprendre l\'organisation et l\'utilisation du plan comptable suisse',
  introduction: `
    <p>Le plan comptable est un élément fondamental de la comptabilité qui organise les comptes utilisés par une entreprise pour enregistrer ses opérations financières. En Suisse, le plan comptable PME est largement utilisé et fournit une structure standardisée pour la tenue des comptes.</p>
    <p>Cette organisation facilite la préparation des états financiers, la déclaration fiscale et l'analyse des performances de l'entreprise.</p>
  `,
  sections: [
    {
      id: 'fundamentals',
      title: 'Notions fondamentales',
      content: `
<h3>Définition et structure des comptes</h3>

<p>Le bilan permet de déterminer la situation d'une entreprise à un moment donné; le bilan représente ainsi une sorte de photographie à un moment précis.</p>

<p>Compte tenu des nombreuses activités et transactions de l'entreprise, il est bien évident que la situation se modifie très rapidement.</p>

<p>Le contrôle permanent qui permet de connaître l'évolution de la situation de l'entreprise s'effectue à l'aide des <strong>comptes</strong>, éléments dynamiques de la comptabilité.</p>

<p>Le compte est un tableau qui comprend deux colonnes. La colonne de gauche s'appelle le <strong>Débit</strong> (ou Doit) et la colonne de droite s'appelle le <strong>Crédit</strong> (ou l'Avoir).</p>

<p>Lorsqu'on porte une somme:</p>
<ul>
  <li>au débit d'un compte → on DÉBITE le compte</li>
  <li>au crédit d'un compte → on CRÉDITE le compte</li>
</ul>

<p>L'ensemble des comptes de la comptabilité s'appelle le <strong>Grand Livre</strong>.</p>

<h3>Numérotation des comptes</h3>

<p>Il est attribué un N° à chaque compte. La numérotation des comptes est en général conforme au «Plan comptable suisse PME (USAM)». S'agissant des comptes actifs, le premier chiffre est toujours un 1, tandis que, pour les comptes passifs, le premier chiffre est toujours un 2 (ex.: compte Caisse – compte actif: 1000; Compte Dettes fournisseurs – compte passif: 2000).</p>

<p>La numérotation des comptes est fondamentale lors de l'informatisation des opérations comptables, puisque chaque compte est «appelé» par son N° (ex.: lorsque le comptable souhaite consulter le compte Caisse, il frappe sur le clavier de l'ordinateur le N° 1000).</p>

<h3>Présentation des comptes en "T"</h3>

<p>Par mesure de simplification, les comptes sont souvent présentés de la manière suivante (on parle alors de comptes en «T»):</p>

<div class="flex justify-center my-6">
  <div class="border-t border-l border-r border-gray-400 w-full max-w-md">
    <div class="border-b border-gray-400 flex">
      <div class="w-1/3 px-2 py-1 font-bold text-center border-r border-gray-400">DÉBIT</div>
      <div class="w-1/3 px-2 py-1 font-bold text-center">N° + NOM DU COMPTE</div>
      <div class="w-1/3 px-2 py-1 font-bold text-center border-l border-gray-400">CRÉDIT</div>
    </div>
    <div class="flex h-24">
      <div class="w-1/2 border-r border-gray-400"></div>
      <div class="w-1/2"></div>
    </div>
  </div>
</div>
      `
    },
    {
      id: 'structure',
      title: 'Structure du plan comptable suisse',
      content: `
<h3>Les classes de comptes</h3>
<p>Le plan comptable suisse PME est organisé en 9 classes principales, chacune identifiée par le premier chiffre du numéro de compte:</p>

<table class="min-w-full bg-white border border-gray-300 my-4">
  <thead>
    <tr>
      <th class="py-2 px-4 border-b border-gray-300 bg-gray-100 text-left">Classe</th>
      <th class="py-2 px-4 border-b border-gray-300 bg-gray-100 text-left">Description</th>
      <th class="py-2 px-4 border-b border-gray-300 bg-gray-100 text-left">Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="py-2 px-4 border-b border-gray-300">1</td>
      <td class="py-2 px-4 border-b border-gray-300">Actifs</td>
      <td class="py-2 px-4 border-b border-gray-300">Bilan</td>
    </tr>
    <tr>
      <td class="py-2 px-4 border-b border-gray-300">2</td>
      <td class="py-2 px-4 border-b border-gray-300">Passifs</td>
      <td class="py-2 px-4 border-b border-gray-300">Bilan</td>
    </tr>
    <tr>
      <td class="py-2 px-4 border-b border-gray-300">3</td>
      <td class="py-2 px-4 border-b border-gray-300">Produits des ventes et prestations</td>
      <td class="py-2 px-4 border-b border-gray-300">Résultat</td>
    </tr>
    <tr>
      <td class="py-2 px-4 border-b border-gray-300">4</td>
      <td class="py-2 px-4 border-b border-gray-300">Charges de matières et de marchandises</td>
      <td class="py-2 px-4 border-b border-gray-300">Résultat</td>
    </tr>
    <tr>
      <td class="py-2 px-4 border-b border-gray-300">5</td>
      <td class="py-2 px-4 border-b border-gray-300">Charges de personnel</td>
      <td class="py-2 px-4 border-b border-gray-300">Résultat</td>
    </tr>
    <tr>
      <td class="py-2 px-4 border-b border-gray-300">6</td>
      <td class="py-2 px-4 border-b border-gray-300">Autres charges d'exploitation</td>
      <td class="py-2 px-4 border-b border-gray-300">Résultat</td>
    </tr>
    <tr>
      <td class="py-2 px-4 border-b border-gray-300">7</td>
      <td class="py-2 px-4 border-b border-gray-300">Résultats des activités annexes</td>
      <td class="py-2 px-4 border-b border-gray-300">Résultat</td>
    </tr>
    <tr>
      <td class="py-2 px-4 border-b border-gray-300">8</td>
      <td class="py-2 px-4 border-b border-gray-300">Résultats hors exploitation et extraordinaires</td>
      <td class="py-2 px-4 border-b border-gray-300">Résultat</td>
    </tr>
    <tr>
      <td class="py-2 px-4 border-b border-gray-300">9</td>
      <td class="py-2 px-4 border-b border-gray-300">Clôture</td>
      <td class="py-2 px-4 border-b border-gray-300">Résultat</td>
    </tr>
  </tbody>
</table>
      `
    },
    {
      id: 'search',
      title: 'Recherche de comptes',
      content: 'Utilisez l\'outil ci-dessous pour rechercher des comptes spécifiques dans le plan comptable suisse:'
    },
    {
      id: 'accounting-entries',
      title: 'Fonctionnement des comptes',
      content: `
<h3>Règles de base</h3>
<p>Le fonctionnement des comptes s'appuie sur des principes de base qui permettent de déterminer quand débiter ou créditer un compte:</p>

<ul>
  <li><strong>Comptes d'actif:</strong> Débit lors d'une augmentation, Crédit lors d'une diminution</li>
  <li><strong>Comptes de passif:</strong> Crédit lors d'une augmentation, Débit lors d'une diminution</li>
  <li><strong>Comptes de charges:</strong> Débit lors d'une augmentation, Crédit lors d'une diminution</li>
  <li><strong>Comptes de produits:</strong> Crédit lors d'une augmentation, Débit lors d'une diminution</li>
</ul>

<h3>Règle de la partie double</h3>
<p>Toute opération comptable doit être enregistrée au minimum dans deux comptes différents, de telle sorte que la somme des débits soit toujours égale à la somme des crédits.</p>

<div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
  <p class="font-semibold">Exemple:</p>
  <p>Pour un achat de marchandises à crédit de 1000 CHF:</p>
  <ul>
    <li>Débit du compte "Achats de marchandises" (4200): 1000 CHF</li>
    <li>Crédit du compte "Dettes fournisseurs" (2000): 1000 CHF</li>
  </ul>
</div>
      `
    }
  ]
};

// Pour la recherche et l'affichage
export const fullAccountsList = [
  { number: '1000', title: 'Caisse', description: 'Espèces en monnaie nationale détenues par l\'entreprise' },
  { number: '1001', title: 'Petite caisse', description: 'Fonds de petite caisse pour les dépenses mineures du quotidien' },
  { number: '1010', title: 'Chèques postaux', description: 'Avoirs sur compte postal (PostFinance)' },
  { number: '1020', title: 'Banque, compte courant', description: 'Avoirs à vue dans les établissements bancaires' },
  { number: '1030', title: 'Banque, compte épargne', description: 'Avoirs d\'épargne dans les établissements bancaires' },
  { number: '1040', title: 'Titres à court terme', description: 'Titres cotés détenus à court terme (moins de 12 mois)' },
  { number: '1050', title: 'Impôts préalables', description: 'Impôts préalables cumulés (TVA)' },
  { number: '1060', title: 'TVA préalable', description: 'TVA payée sur les achats, récupérable auprès de l\'AFC' },
  { number: '1070', title: 'Autres impôts préalables', description: 'Autres impôts récupérables' },
  { number: '1100', title: 'Clients, créances en francs suisses', description: '' },
  { number: '1101', title: 'Clients, créances en monnaies étrangères', description: '' },
  { number: '1110', title: 'Effets à recevoir', description: '' },
  { number: '1120', title: 'Intérêts courus et non échus', description: '' },
  { number: '1130', title: 'Loyers courus et non échus', description: '' },
  { number: '1140', title: 'Commissions courues et non échues', description: '' },
  { number: '1150', title: 'Dividendes courus et non échus', description: '' },
  { number: '1160', title: 'Autres créances', description: '' },
  { number: '1170', title: 'TVA déductible sur achats de matières et prestations de services', description: 'Impôt préalable versé aux fournisseurs de matières et de marchandises, ainsi qu\'aux prestataires de services, provenant de la classe de comptes 4' },
  { number: '1171', title: 'TVA déductible sur investissements et autres charges d\'exploitation', description: 'Impôt préalable touchant les investissements en équipements et les autres charges d\'exploitation, provenant des classes de comptes 1 et 6' },
  { number: '1180', title: 'Provision pour créances douteuses', description: '' },
  { number: '1190', title: 'Factures à établir', description: '' },
  { number: '1200', title: 'Stocks de matières premières', description: '' },
  { number: '1210', title: 'Stocks de marchandises', description: '' },
  { number: '1220', title: 'Stocks de produits en cours de fabrication', description: '' },
  { number: '1230', title: 'Stocks de produits finis', description: '' },
  { number: '1240', title: 'Stocks d\'emballages', description: '' },
  { number: '1250', title: 'Stocks de fournitures', description: '' },
  { number: '1260', title: 'Acomptes versés pour stocks', description: '' },
  { number: '1300', title: 'Frais de publicité payés d\'avance', description: '' },
  { number: '1310', title: 'Frais de loyer payés d\'avance', description: '' },
  { number: '1320', title: 'Frais d\'assurances payés d\'avance', description: '' },
  { number: '1330', title: 'Intérêts payés d\'avance', description: '' },
  { number: '1340', title: 'Autres frais payés d\'avance', description: '' },
  { number: '1400', title: 'Actions', description: '' },
  { number: '1410', title: 'Obligations', description: '' },
  { number: '1420', title: 'Autres participations', description: '' },
  { number: '1430', title: 'Prêts accordés', description: '' },
  { number: '1440', title: 'Hypothèques', description: '' },
  { number: '1450', title: 'Autres créances à long terme', description: '' },
  { number: '1500', title: 'Terrains', description: '' },
  { number: '1510', title: 'Immeubles', description: '' },
  { number: '1520', title: 'Installations techniques', description: '' },
  { number: '1530', title: 'Machines', description: '' },
  { number: '1540', title: 'Mobilier et matériel de bureau', description: '' },
  { number: '1550', title: 'Véhicules', description: '' },
  { number: '1560', title: 'Autres installations et machines', description: '' },
  { number: '1570', title: 'Améliorations d\'immeubles d\'autrui', description: '' },
  { number: '1580', title: 'Acomptes versés pour immobilisations corporelles', description: '' },
  { number: '1600', title: 'Amortissements cumulés sur immeubles', description: '' },
  { number: '1610', title: 'Amortissements cumulés sur installations techniques', description: '' },
  { number: '1620', title: 'Amortissements cumulés sur machines', description: '' },
  { number: '1630', title: 'Amortissements cumulés sur mobilier et matériel de bureau', description: '' },
  { number: '1640', title: 'Amortissements cumulés sur véhicules', description: '' },
  { number: '1650', title: 'Amortissements cumulés sur autres installations et machines', description: '' },
  { number: '1660', title: 'Amortissements cumulés sur améliorations d\'immeubles d\'autrui', description: '' },
  { number: '1700', title: 'Brevets', description: '' },
  { number: '1710', title: 'Licences', description: '' },
  { number: '1720', title: 'Marques', description: '' },
  { number: '1730', title: 'Fonds de commerce', description: '' },
  { number: '1740', title: 'Logiciels', description: '' },
  { number: '1750', title: 'Autres immobilisations incorporelles', description: '' },
  { number: '1760', title: 'Amortissements cumulés sur brevets', description: '' },
  { number: '1770', title: 'Amortissements cumulés sur licences', description: '' },
  { number: '1780', title: 'Amortissements cumulés sur marques', description: '' },
  { number: '1790', title: 'Amortissements cumulés sur fonds de commerce', description: '' },
  { number: '1800', title: 'Capital-actions non versé', description: '' },
  { number: '2000', title: 'Fournisseurs, dettes en francs suisses', description: '' },
  { number: '2001', title: 'Fournisseurs, dettes en monnaies étrangères', description: '' },
  { number: '2010', title: 'Effets à payer', description: '' },
  { number: '2020', title: 'Acomptes reçus de clients', description: '' },
  { number: '2030', title: 'Impôts dus', description: '' },
  { number: '2040', title: 'TVA due', description: 'Compte de passif qui présente le solde de l\'impôt sur les ventes soumises à l\'impôt dû à l\'AFC, découlant de la fourniture de prestations selon la classe de comptes 3' },
  { number: '2050', title: 'Autres impôts dus', description: '' },
  { number: '2060', title: 'Salaires dus', description: '' },
  { number: '2070', title: 'Charges sociales dues', description: '' },
  { number: '2080', title: 'Commissions dues', description: '' },
  { number: '2090', title: 'Dividendes dus', description: '' },
  { number: '2100', title: 'Emprunts bancaires à court terme', description: '' },
  { number: '2110', title: 'Crédits hypothécaires à court terme', description: '' },
  { number: '2120', title: 'Autres dettes à court terme', description: '' },
  { number: '2200', title: 'Loyers encaissés d\'avance', description: '' },
  { number: '2210', title: 'Intérêts encaissés d\'avance', description: '' },
  { number: '2220', title: 'Autres revenus encaissés d\'avance', description: '' },
  { number: '2300', title: 'Provisions pour impôts', description: '' },
  { number: '2310', title: 'Provisions pour risques', description: '' },
  { number: '2320', title: 'Provisions pour litiges', description: '' },
  { number: '2330', title: 'Provisions pour garanties', description: '' },
  { number: '2340', title: 'Provisions pour restructurations', description: '' },
  { number: '2350', title: 'Autres provisions', description: '' },
  { number: '2400', title: 'Capital social', description: '' },
  { number: '2410', title: 'Capital de fondation', description: '' },
  { number: '2420', title: 'Réserves légales', description: '' },
  { number: '2430', title: 'Réserves facultatives', description: '' },
  { number: '2440', title: 'Bénéfice reporté', description: '' },
  { number: '2450', title: 'Perte reportée', description: '' },
  { number: '2460', title: 'Bénéfice de l\'exercice', description: '' },
  { number: '2470', title: 'Perte de l\'exercice', description: '' },
  { number: '2500', title: 'Emprunts bancaires à long terme', description: '' },
  { number: '2510', title: 'Crédits hypothécaires à long terme', description: '' },
  { number: '2520', title: 'Autres dettes à long terme', description: '' },
  { number: '3000', title: 'Ventes de marchandises', description: '' },
  { number: '3001', title: 'Rabais, remises, escomptes accordés', description: '' },
  { number: '3010', title: 'Ventes de produits fabriqués', description: '' },
  { number: '3020', title: 'Ventes de prestations de services', description: '' },
  { number: '3030', title: 'Ventes d\'emballages', description: '' },
  { number: '3100', title: 'Variation des stocks de produits finis', description: '' },
  { number: '3110', title: 'Variation des stocks de produits en cours de fabrication', description: '' },
  { number: '3120', title: 'Variation des prestations de services non facturées', description: '' },
  { number: '3200', title: 'Autres produits d\'exploitation', description: '' },
  { number: '3210', title: 'Produits de commissions', description: '' },
  { number: '3220', title: 'Produits de locations', description: '' },
  { number: '3230', title: 'Produits de participations', description: '' },
  { number: '3240', title: 'Produits de titres à court terme', description: '' },
  { number: '3250', title: 'Produits de titres à long terme', description: '' },
  { number: '3260', title: 'Gains de change', description: '' },
  { number: '3270', title: 'Produits divers', description: '' },
  { number: '4000', title: 'Achats de matières premières', description: '' },
  { number: '4010', title: 'Achats de marchandises', description: '' },
  { number: '4020', title: 'Achats d\'emballages', description: '' },
  { number: '4030', title: 'Achats de fournitures', description: '' },
  { number: '4100', title: 'Frais de transport sur achats', description: '' },
  { number: '4110', title: 'Droits de douane sur achats', description: '' },
  { number: '4120', title: 'Autres frais sur achats', description: '' },
  { number: '4200', title: 'Achats de prestations de services', description: '' },
  { number: '4900', title: 'Rabais, remises, escomptes obtenus', description: '' },
  { number: '5000', title: 'Salaires', description: '' },
  { number: '5010', title: 'Commissions versées', description: '' },
  { number: '5020', title: 'Indemnités versées', description: '' },
  { number: '5030', title: 'Rémunérations des apprentis', description: '' },
  { number: '5100', title: 'Charges sociales', description: '' },
  { number: '5110', title: 'AVS, AI, APG', description: '' },
  { number: '5120', title: 'LPP', description: '' },
  { number: '5130', title: 'AC', description: '' },
  { number: '5140', title: 'Assurances accidents', description: '' },
  { number: '5150', title: 'Allocations familiales', description: '' },
  { number: '5160', title: 'Autres charges sociales', description: '' },
  { number: '5200', title: 'Frais de personnel', description: '' },
  { number: '5210', title: 'Frais de déplacement', description: '' },
  { number: '5220', title: 'Frais de formation', description: '' },
  { number: '5230', title: 'Autres frais de personnel', description: '' },
  { number: '6000', title: 'Loyers', description: '' },
  { number: '6010', title: 'Frais d\'entretien et de réparation d\'immeubles', description: '' },
  { number: '6020', title: 'Frais de chauffage, d\'eau et d\'électricité', description: '' },
  { number: '6030', title: 'Assurances d\'immeubles', description: '' },
  { number: '6040', title: 'Impôts d\'immeubles', description: '' },
  { number: '6050', title: 'Autres frais d\'immeubles', description: '' },
  { number: '6100', title: 'Frais d\'entretien et de réparation de machines', description: '' },
  { number: '6110', title: 'Frais d\'entretien et de réparation de véhicules', description: '' },
  { number: '6120', title: 'Frais d\'entretien et de réparation de mobilier et matériel de bureau', description: '' },
  { number: '6200', title: 'Frais de véhicules', description: '' },
  { number: '6210', title: 'Frais de carburant', description: '' },
  { number: '6220', title: 'Frais d\'assurances de véhicules', description: '' },
  { number: '6230', title: 'Impôts de véhicules', description: '' },
  { number: '6240', title: 'Autres frais de véhicules', description: '' },
  { number: '6300', title: 'Frais de publicité', description: '' },
  { number: '6310', title: 'Frais de marketing', description: '' },
  { number: '6320', title: 'Frais de foires et expositions', description: '' },
  { number: '6400', title: 'Frais d\'énergie', description: '' },
  { number: '6410', title: 'Frais de téléphone', description: '' },
  { number: '6420', title: 'Frais de port', description: '' },
  { number: '6430', title: 'Frais de papeterie', description: '' },
  { number: '6440', title: 'Frais d\'informatique', description: '' },
  { number: '6450', title: 'Frais de documentation', description: '' },
  { number: '6500', title: 'Frais d\'assurances', description: '' },
  { number: '6510', title: 'Frais de licences', description: '' },
  { number: '6520', title: 'Frais de brevets', description: '' },
  { number: '6530', title: 'Frais de marques', description: '' },
  { number: '6600', title: 'Frais de voyages', description: '' },
  { number: '6610', title: 'Frais de réception', description: '' },
  { number: '6620', title: 'Frais de représentation', description: '' },
  { number: '6700', title: 'Pertes sur créances', description: '' },
  { number: '6710', title: 'Amortissements', description: '' },
  { number: '6720', title: 'Corrections de valeur', description: '' },
  { number: '6800', title: 'Frais financiers', description: '' },
  { number: '6810', title: 'Intérêts passifs', description: '' },
  { number: '6820', title: 'Commissions bancaires', description: '' },
  { number: '6830', title: 'Pertes de change', description: '' },
  { number: '6840', title: 'Autres frais financiers', description: '' },
  { number: '6900', title: 'Impôts', description: '' },
  { number: '6910', title: 'Impôts sur le bénéfice', description: '' },
  { number: '6920', title: 'Impôts sur le capital', description: '' },
  { number: '6930', title: 'Autres impôts', description: '' },
  { number: '7000', title: 'Produits financiers', description: '' },
  { number: '7010', title: 'Intérêts actifs', description: '' },
  { number: '7020', title: 'Produits de participations', description: '' },
  { number: '7030', title: 'Gains de change', description: '' },
  { number: '7100', title: 'Produits extraordinaires', description: '' },
  { number: '7110', title: 'Charges extraordinaires', description: '' },
  { number: '7200', title: 'Prélèvements privés', description: '' },
  { number: '7210', title: 'Apports privés', description: '' },
  { number: '8000', title: 'Bénéfice de l\'exercice précédent', description: '' },
  { number: '8001', title: 'Perte de l\'exercice précédent', description: '' },
  { number: '8100', title: 'Solde du compte de résultat', description: '' },
  { number: '8200', title: 'Transfert au bilan', description: '' },
  { number: '8300', title: 'Transfert du bilan', description: '' },
  { number: '8400', title: 'Clôture du compte de résultat', description: '' },
  { number: '8500', title: 'Clôture du bilan', description: '' },
  { number: '9000', title: 'Compte de clôture', description: '' }
];
