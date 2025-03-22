
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
  { number: '1000', title: 'Caisse' },
  { number: '1001', title: 'Petite caisse' },
  { number: '1010', title: 'Chèques postaux' },
  { number: '1020', title: 'Banque, compte courant' },
  { number: '1030', title: 'Banque, compte épargne' },
  { number: '1040', title: 'Titres à court terme' },
  { number: '1050', title: 'Impôts préalables' },
  { number: '1060', title: 'TVA préalable' },
  { number: '1070', title: 'Autres impôts préalables' },
  { number: '1100', title: 'Clients, créances en francs suisses' },
  { number: '1101', title: 'Clients, créances en monnaies étrangères' },
  { number: '1110', title: 'Effets à recevoir' },
  { number: '1120', title: 'Intérêts courus et non échus' },
  { number: '1130', title: 'Loyers courus et non échus' },
  { number: '1140', title: 'Commissions courues et non échues' },
  { number: '1150', title: 'Dividendes courus et non échus' },
  { number: '1160', title: 'Autres créances' },
  { number: '1170', title: 'Créances douteuses' },
  { number: '1180', title: 'Provision pour créances douteuses' },
  { number: '1190', title: 'Factures à établir' },
  { number: '1200', title: 'Stocks de matières premières' },
  { number: '1210', title: 'Stocks de marchandises' },
  { number: '1220', title: 'Stocks de produits en cours de fabrication' },
  { number: '1230', title: 'Stocks de produits finis' },
  { number: '1240', title: 'Stocks d\'emballages' },
  { number: '1250', title: 'Stocks de fournitures' },
  { number: '1260', title: 'Acomptes versés pour stocks' },
  { number: '1300', title: 'Frais de publicité payés d\'avance' },
  { number: '1310', title: 'Frais de loyer payés d\'avance' },
  { number: '1320', title: 'Frais d\'assurances payés d\'avance' },
  { number: '1330', title: 'Intérêts payés d\'avance' },
  { number: '1340', title: 'Autres frais payés d\'avance' },
  { number: '1400', title: 'Actions' },
  { number: '1410', title: 'Obligations' },
  { number: '1420', title: 'Autres participations' },
  { number: '1430', title: 'Prêts accordés' },
  { number: '1440', title: 'Hypothèques' },
  { number: '1450', title: 'Autres créances à long terme' },
  { number: '1500', title: 'Terrains' },
  { number: '1510', title: 'Immeubles' },
  { number: '1520', title: 'Installations techniques' },
  { number: '1530', title: 'Machines' },
  { number: '1540', title: 'Mobilier et matériel de bureau' },
  { number: '1550', title: 'Véhicules' },
  { number: '1560', title: 'Autres installations et machines' },
  { number: '1570', title: 'Améliorations d\'immeubles d\'autrui' },
  { number: '1580', title: 'Acomptes versés pour immobilisations corporelles' },
  { number: '1600', title: 'Amortissements cumulés sur immeubles' },
  { number: '1610', title: 'Amortissements cumulés sur installations techniques' },
  { number: '1620', title: 'Amortissements cumulés sur machines' },
  { number: '1630', title: 'Amortissements cumulés sur mobilier et matériel de bureau' },
  { number: '1640', title: 'Amortissements cumulés sur véhicules' },
  { number: '1650', title: 'Amortissements cumulés sur autres installations et machines' },
  { number: '1660', title: 'Amortissements cumulés sur améliorations d\'immeubles d\'autrui' },
  { number: '1700', title: 'Brevets' },
  { number: '1710', title: 'Licences' },
  { number: '1720', title: 'Marques' },
  { number: '1730', title: 'Fonds de commerce' },
  { number: '1740', title: 'Logiciels' },
  { number: '1750', title: 'Autres immobilisations incorporelles' },
  { number: '1760', title: 'Amortissements cumulés sur brevets' },
  { number: '1770', title: 'Amortissements cumulés sur licences' },
  { number: '1780', title: 'Amortissements cumulés sur marques' },
  { number: '1790', title: 'Amortissements cumulés sur fonds de commerce' },
  { number: '1800', title: 'Capital-actions non versé' },
  { number: '2000', title: 'Fournisseurs, dettes en francs suisses' },
  { number: '2001', title: 'Fournisseurs, dettes en monnaies étrangères' },
  { number: '2010', title: 'Effets à payer' },
  { number: '2020', title: 'Acomptes reçus de clients' },
  { number: '2030', title: 'Impôts dus' },
  { number: '2040', title: 'TVA due' },
  { number: '2050', title: 'Autres impôts dus' },
  { number: '2060', title: 'Salaires dus' },
  { number: '2070', title: 'Charges sociales dues' },
  { number: '2080', title: 'Commissions dues' },
  { number: '2090', title: 'Dividendes dus' },
  { number: '2100', title: 'Emprunts bancaires à court terme' },
  { number: '2110', title: 'Crédits hypothécaires à court terme' },
  { number: '2120', title: 'Autres dettes à court terme' },
  { number: '2200', title: 'Loyers encaissés d\'avance' },
  { number: '2210', title: 'Intérêts encaissés d\'avance' },
  { number: '2220', title: 'Autres revenus encaissés d\'avance' },
  { number: '2300', title: 'Provisions pour impôts' },
  { number: '2310', title: 'Provisions pour risques' },
  { number: '2320', title: 'Provisions pour litiges' },
  { number: '2330', title: 'Provisions pour garanties' },
  { number: '2340', title: 'Provisions pour restructurations' },
  { number: '2350', title: 'Autres provisions' },
  { number: '2400', title: 'Capital social' },
  { number: '2410', title: 'Capital de fondation' },
  { number: '2420', title: 'Réserves légales' },
  { number: '2430', title: 'Réserves facultatives' },
  { number: '2440', title: 'Bénéfice reporté' },
  { number: '2450', title: 'Perte reportée' },
  { number: '2460', title: 'Bénéfice de l\'exercice' },
  { number: '2470', title: 'Perte de l\'exercice' },
  { number: '2500', title: 'Emprunts bancaires à long terme' },
  { number: '2510', title: 'Crédits hypothécaires à long terme' },
  { number: '2520', title: 'Autres dettes à long terme' },
  { number: '3000', title: 'Ventes de marchandises' },
  { number: '3001', title: 'Rabais, remises, escomptes accordés' },
  { number: '3010', title: 'Ventes de produits fabriqués' },
  { number: '3020', title: 'Ventes de prestations de services' },
  { number: '3030', title: 'Ventes d\'emballages' },
  { number: '3100', title: 'Variation des stocks de produits finis' },
  { number: '3110', title: 'Variation des stocks de produits en cours de fabrication' },
  { number: '3120', title: 'Variation des prestations de services non facturées' },
  { number: '3200', title: 'Autres produits d\'exploitation' },
  { number: '3210', title: 'Produits de commissions' },
  { number: '3220', title: 'Produits de locations' },
  { number: '3230', title: 'Produits de participations' },
  { number: '3240', title: 'Produits de titres à court terme' },
  { number: '3250', title: 'Produits de titres à long terme' },
  { number: '3260', title: 'Gains de change' },
  { number: '3270', title: 'Produits divers' },
  { number: '4000', title: 'Achats de matières premières' },
  { number: '4010', title: 'Achats de marchandises' },
  { number: '4020', title: 'Achats d\'emballages' },
  { number: '4030', title: 'Achats de fournitures' },
  { number: '4100', title: 'Frais de transport sur achats' },
  { number: '4110', title: 'Droits de douane sur achats' },
  { number: '4120', title: 'Autres frais sur achats' },
  { number: '4200', title: 'Achats de prestations de services' },
  { number: '4900', title: 'Rabais, remises, escomptes obtenus' },
  { number: '5000', title: 'Salaires' },
  { number: '5010', title: 'Commissions versées' },
  { number: '5020', title: 'Indemnités versées' },
  { number: '5030', title: 'Rémunérations des apprentis' },
  { number: '5100', title: 'Charges sociales' },
  { number: '5110', title: 'AVS, AI, APG' },
  { number: '5120', title: 'LPP' },
  { number: '5130', title: 'AC' },
  { number: '5140', title: 'Assurances accidents' },
  { number: '5150', title: 'Allocations familiales' },
  { number: '5160', title: 'Autres charges sociales' },
  { number: '5200', title: 'Frais de personnel' },
  { number: '5210', title: 'Frais de déplacement' },
  { number: '5220', title: 'Frais de formation' },
  { number: '5230', title: 'Autres frais de personnel' },
  { number: '6000', title: 'Loyers' },
  { number: '6010', title: 'Frais d\'entretien et de réparation d\'immeubles' },
  { number: '6020', title: 'Frais de chauffage, d\'eau et d\'électricité' },
  { number: '6030', title: 'Assurances d\'immeubles' },
  { number: '6040', title: 'Impôts d\'immeubles' },
  { number: '6050', title: 'Autres frais d\'immeubles' },
  { number: '6100', title: 'Frais d\'entretien et de réparation de machines' },
  { number: '6110', title: 'Frais d\'entretien et de réparation de véhicules' },
  { number: '6120', title: 'Frais d\'entretien et de réparation de mobilier et matériel de bureau' },
  { number: '6200', title: 'Frais de véhicules' },
  { number: '6210', title: 'Frais de carburant' },
  { number: '6220', title: 'Frais d\'assurances de véhicules' },
  { number: '6230', title: 'Impôts de véhicules' },
  { number: '6240', title: 'Autres frais de véhicules' },
  { number: '6300', title: 'Frais de publicité' },
  { number: '6310', title: 'Frais de marketing' },
  { number: '6320', title: 'Frais de foires et expositions' },
  { number: '6400', title: 'Frais d\'énergie' },
  { number: '6410', title: 'Frais de téléphone' },
  { number: '6420', title: 'Frais de port' },
  { number: '6430', title: 'Frais de papeterie' },
  { number: '6440', title: 'Frais d\'informatique' },
  { number: '6450', title: 'Frais de documentation' },
  { number: '6500', title: 'Frais d\'assurances' },
  { number: '6510', title: 'Frais de licences' },
  { number: '6520', title: 'Frais de brevets' },
  { number: '6530', title: 'Frais de marques' },
  { number: '6600', title: 'Frais de voyages' },
  { number: '6610', title: 'Frais de réception' },
  { number: '6620', title: 'Frais de représentation' },
  { number: '6700', title: 'Pertes sur créances' },
  { number: '6710', title: 'Amortissements' },
  { number: '6720', title: 'Corrections de valeur' },
  { number: '6800', title: 'Frais financiers' },
  { number: '6810', title: 'Intérêts passifs' },
  { number: '6820', title: 'Commissions bancaires' },
  { number: '6830', title: 'Pertes de change' },
  { number: '6840', title: 'Autres frais financiers' },
  { number: '6900', title: 'Impôts' },
  { number: '6910', title: 'Impôts sur le bénéfice' },
  { number: '6920', title: 'Impôts sur le capital' },
  { number: '6930', title: 'Autres impôts' },
  { number: '7000', title: 'Produits financiers' },
  { number: '7010', title: 'Intérêts actifs' },
  { number: '7020', title: 'Produits de participations' },
  { number: '7030', title: 'Gains de change' },
  { number: '7100', title: 'Produits extraordinaires' },
  { number: '7110', title: 'Charges extraordinaires' },
  { number: '7200', title: 'Prélèvements privés' },
  { number: '7210', title: 'Apports privés' },
  { number: '8000', title: 'Bénéfice de l\'exercice précédent' },
  { number: '8001', title: 'Perte de l\'exercice précédent' },
  { number: '8100', title: 'Solde du compte de résultat' },
  { number: '8200', title: 'Transfert au bilan' },
  { number: '8300', title: 'Transfert du bilan' },
  { number: '8400', title: 'Clôture du compte de résultat' },
  { number: '8500', title: 'Clôture du bilan' },
  { number: '9000', title: 'Compte de clôture' }
];
