
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
  { number: '1000', title: 'Caisse', description: 'Espèces en monnaie nationale détenues par l\'entreprise sous forme de billets de banque et de pièces de monnaie. Inclut aussi les timbres postaux, timbres fiscaux et monnaies étrangères sous forme de pièces et billets.' },
  { number: '1001', title: 'Petite caisse', description: 'Fonds de petite caisse pour les dépenses mineures du quotidien, comme la caisse des frais, la caisse pour les frais de port, etc.' },
  { number: '1010', title: 'Chèques postaux', description: 'Avoirs sur compte postal (PostFinance). Si le compte postal présente un solde négatif en faveur de l\'office des chèques postaux, on le mentionnera sous les passifs (compte 2110).' },
  { number: '1020', title: 'Banque, compte courant', description: 'Avoirs à vue dans les établissements bancaires. Si à la date du bilan le compte bancaire présente un solde négatif en faveur de la banque, ce montant figurera sous les passifs (compte 2100).' },
  { number: '1030', title: 'Banque, compte épargne', description: 'Avoirs d\'épargne et de placement de tout genre dans les établissements bancaires.' },
  { number: '1040', title: 'Titres à court terme', description: 'Titres cotés détenus à court terme (moins de 12 mois), pouvant être remis à l\'escompte. Les chèques et effets exprimés en monnaie étrangère seront convertis en monnaie suisse à la date du bilan.' },
  { number: '1050', title: 'Impôts préalables', description: 'Impôts préalables cumulés (TVA) récupérables auprès de l\'Administration fédérale des contributions.' },
  { number: '1060', title: 'TVA préalable', description: 'TVA payée sur les achats, récupérable auprès de l\'AFC.' },
  { number: '1070', title: 'Autres impôts préalables', description: 'Autres impôts récupérables auprès des administrations fiscales.' },
  { number: '1100', title: 'Clients, créances en francs suisses', description: 'Créances qui découlent de l\'activité principale de l\'entreprise, libellées en francs suisses. Une provision pour pertes sur créances (ducroire) peut être comptabilisée, généralement admise à 5% sur des créances envers des tiers suisses.' },
  { number: '1101', title: 'Clients, créances en monnaies étrangères', description: 'Créances envers des tiers étrangers, libellées en monnaies étrangères. Une provision pour pertes sur créances (ducroire) forfaitaire de 10% pour les créances en francs suisses ou 15% pour les créances en monnaie étrangère est généralement admise par les autorités fiscales.' },
  { number: '1110', title: 'Effets à recevoir', description: 'Titres pouvant être remis à l\'escompte.' },
  { number: '1120', title: 'Intérêts courus et non échus', description: 'Produits concernant l\'exercice écoulé mais qui ne seront encaissés que lors de l\'exercice suivant.' },
  { number: '1130', title: 'Loyers courus et non échus', description: 'Loyers concernant l\'exercice écoulé mais qui ne seront encaissés que lors de l\'exercice suivant.' },
  { number: '1140', title: 'Commissions courues et non échues', description: 'Commissions concernant l\'exercice écoulé mais qui ne seront encaissées que lors de l\'exercice suivant.' },
  { number: '1150', title: 'Dividendes courus et non échus', description: 'Dividendes concernant l\'exercice écoulé mais qui ne seront encaissés que lors de l\'exercice suivant.' },
  { number: '1160', title: 'Autres créances', description: 'Autres créances à court terme qui ne sont pas en rapport direct avec l\'activité de l\'entreprise.' },
  { number: '1170', title: 'TVA déductible sur achats de matières et prestations de services', description: 'Impôt préalable versé aux fournisseurs de matières et de marchandises, ainsi qu\'aux prestataires de services, provenant de la classe de comptes 4.' },
  { number: '1171', title: 'TVA déductible sur investissements et autres charges d\'exploitation', description: 'Impôt préalable touchant les investissements en équipements et les autres charges d\'exploitation, provenant des classes de comptes 1 et 6.' },
  { number: '1176', title: 'Impôt anticipé à récupérer', description: 'Impôt anticipé de 35% retenu à la source sur les revenus de capitaux mobiliers (dividendes, intérêts) qui peut être récupéré auprès de l\'Administration fédérale des contributions.' },
  { number: '1180', title: 'Provision pour créances douteuses', description: 'Provision destinée à couvrir les risques de non-paiement des créances clients.' },
  { number: '1190', title: 'Factures à établir', description: 'Produits concernant l\'exercice écoulé mais qui ne seront facturés que dans le prochain exercice.' },
  { number: '1200', title: 'Stocks de matières premières', description: 'Matières premières intégrées dans le produit lors de la fabrication. Peuvent être évalués au plus à leur prix d\'acquisition ou à leur coût de revient, mais si ces coûts sont supérieurs au prix du marché à la date du bilan, ce prix est déterminant.' },
  { number: '1210', title: 'Stocks de marchandises', description: 'Marchandises vendues sans modifications. Soumises au principe de la valeur la plus basse (prix d\'acquisition ou prix du marché).' },
  { number: '1220', title: 'Stocks de produits en cours de fabrication', description: 'Produits en cours de la production. Évalués au plus à leur coût de revient ou au prix du marché s\'il est inférieur.' },
  { number: '1230', title: 'Stocks de produits finis', description: 'Inventaire des produits terminés que l\'on a soi-même fabriqués. Évalués au plus à leur coût de revient ou au prix du marché s\'il est inférieur.' },
  { number: '1240', title: 'Stocks d\'emballages', description: 'Emballages destinés à la vente de produits ou de marchandises.' },
  { number: '1250', title: 'Stocks de fournitures', description: 'Fournitures diverses utilisées dans l\'entreprise.' },
  { number: '1260', title: 'Acomptes versés pour stocks', description: 'Acomptes versés aux fournisseurs pour l\'acquisition future de matières premières ou de marchandises.' },
  { number: '1300', title: 'Frais de publicité payés d\'avance', description: 'Charges concernant le prochain exercice mais qui ont déjà été enregistrées pendant l\'année précédente.' },
  { number: '1310', title: 'Frais de loyer payés d\'avance', description: 'Loyers concernant le prochain exercice mais qui ont déjà été enregistrés pendant l\'année précédente.' },
  { number: '1320', title: 'Frais d\'assurances payés d\'avance', description: 'Primes d\'assurances concernant le prochain exercice mais qui ont déjà été enregistrées pendant l\'année précédente.' },
  { number: '1330', title: 'Intérêts payés d\'avance', description: 'Intérêts concernant le prochain exercice mais qui ont déjà été enregistrés pendant l\'année précédente.' },
  { number: '1340', title: 'Autres frais payés d\'avance', description: 'Autres charges concernant le prochain exercice mais qui ont déjà été enregistrées pendant l\'année précédente.' },
  { number: '1400', title: 'Actions', description: 'Actions détenues comme placements financiers à long terme (plus de 12 mois).' },
  { number: '1410', title: 'Obligations', description: 'Obligations détenues comme placements financiers à long terme.' },
  { number: '1411', title: 'Comptes bloqués à titre de réserve de crise', description: 'Réserves de crise (RéCri) contribuant à réduire les variations économiques, constituées à partir des bénéfices de l\'entreprise et conservées sous forme de liquidités sur un compte bloqué.' },
  { number: '1420', title: 'Autres participations', description: 'Parts du capital d\'autres sociétés détenues à titre de placement durable et permettant d\'exercer une influence déterminante (au moins 20% des droits de vote).' },
  { number: '1430', title: 'Prêts accordés', description: 'Prêts à long terme accordés à des tiers.' },
  { number: '1440', title: 'Hypothèques', description: 'Prêts hypothécaires accordés à long terme.' },
  { number: '1450', title: 'Autres créances à long terme', description: 'Autres créances dont l\'échéance est supérieure à 12 mois.' },
  { number: '1490', title: 'Actions propres', description: 'Actions propres détenues à long terme (plus de 12 mois). La société doit affecter à une réserve séparée un montant correspondant à leur prix d\'acquisition.' },
  { number: '1500', title: 'Machines et appareils destinés à la production', description: 'Installations en machines destinées à la production. Taux d\'amortissement fiscal de 30% sur la valeur comptable.' },
  { number: '1510', title: 'Mobilier et installations', description: 'Mobilier d\'exploitation, installations d\'atelier, installations de magasins, mobilier de bureau. Taux d\'amortissement fiscal de 25% sur la valeur comptable.' },
  { number: '1520', title: 'Machines de bureau, infrastructures informatiques', description: 'Machines de bureau, infrastructures informatiques, systèmes de communication, systèmes à commande automatique. Taux d\'amortissement fiscal de 40% sur la valeur comptable.' },
  { number: '1526', title: 'Logiciels', description: 'Logiciels acquis de tiers. Peuvent être regroupés avec le matériel informatique si une séparation exacte pose des problèmes. Taux d\'amortissement fiscal de 40% sur la valeur comptable.' },
  { number: '1530', title: 'Machines', description: 'Machines et équipements techniques divers.' },
  { number: '1540', title: 'Mobilier et matériel de bureau', description: 'Mobilier et matériel de bureau divers.' },
  { number: '1550', title: 'Véhicules', description: 'Véhicules de tout genre utilisés pour les besoins de l\'entreprise (automobiles, camionnettes, camions, véhicules spéciaux). Taux d\'amortissement fiscal de 40% sur la valeur comptable.' },
  { number: '1560', title: 'Autres installations et machines', description: 'Autres équipements et installations techniques.' },
  { number: '1570', title: 'Améliorations d\'immeubles d\'autrui', description: 'Aménagements et améliorations réalisés dans des locaux ou bâtiments loués.' },
  { number: '1580', title: 'Acomptes versés pour immobilisations corporelles', description: 'Acomptes versés pour l\'acquisition future d\'immobilisations corporelles.' },
  { number: '1600', title: 'Amortissements cumulés sur immeubles', description: 'Total des amortissements pratiqués sur les immeubles d\'exploitation. Uniquement utilisé dans la méthode de l\'amortissement indirect.' },
  { number: '1610', title: 'Amortissements cumulés sur installations techniques', description: 'Total des amortissements pratiqués sur les installations techniques.' },
  { number: '1620', title: 'Amortissements cumulés sur machines', description: 'Total des amortissements pratiqués sur les machines.' },
  { number: '1630', title: 'Amortissements cumulés sur mobilier et matériel de bureau', description: 'Total des amortissements pratiqués sur le mobilier et le matériel de bureau.' },
  { number: '1640', title: 'Amortissements cumulés sur véhicules', description: 'Total des amortissements pratiqués sur les véhicules.' },
  { number: '1650', title: 'Amortissements cumulés sur autres installations et machines', description: 'Total des amortissements pratiqués sur les autres installations et machines.' },
  { number: '1660', title: 'Amortissements cumulés sur améliorations d\'immeubles d\'autrui', description: 'Total des amortissements pratiqués sur les améliorations d\'immeubles d\'autrui.' },
  { number: '1700', title: 'Brevets', description: 'Brevets acquis à titre onéreux qui servent à l\'activité. Portés à l\'actif à leur coût d\'acquisition. Taux d\'amortissement fiscal de 40% sur la valeur comptable.' },
  { number: '1710', title: 'Licences', description: 'Droits de licence acquis à titre onéreux.' },
  { number: '1720', title: 'Marques', description: 'Marques commerciales acquises à titre onéreux.' },
  { number: '1730', title: 'Fonds de commerce', description: 'Élément du goodwill lié à la localisation et à la clientèle.' },
  { number: '1740', title: 'Logiciels', description: 'Logiciels développés par l\'entreprise elle-même. Seuls ceux qui apportent un avantage mesurable pendant plusieurs années peuvent être activés.' },
  { number: '1750', title: 'Autres immobilisations incorporelles', description: 'Autres valeurs incorporelles comme les fichiers de clients, les interdictions de concurrence, les autorisations pour tenir un commerce, les contingents, etc.' },
  { number: '1760', title: 'Amortissements cumulés sur brevets', description: 'Total des amortissements pratiqués sur les brevets.' },
  { number: '1770', title: 'Amortissements cumulés sur licences', description: 'Total des amortissements pratiqués sur les licences.' },
  { number: '1780', title: 'Amortissements cumulés sur marques', description: 'Total des amortissements pratiqués sur les marques.' },
  { number: '1790', title: 'Amortissements cumulés sur fonds de commerce', description: 'Total des amortissements pratiqués sur le fonds de commerce.' },
  { number: '1800', title: 'Capital-actions non versé', description: 'Capital-actions souscrit mais non encore versé par les actionnaires.' },
  { number: '2000', title: 'Fournisseurs, dettes en francs suisses', description: 'Dettes envers les fournisseurs en francs suisses.' },
  { number: '2001', title: 'Fournisseurs, dettes en monnaies étrangères', description: 'Dettes envers les fournisseurs libellées en monnaies étrangères.' },
  { number: '2010', title: 'Effets à payer', description: 'Effets de change et billets à ordre que l\'entreprise doit honorer à leur échéance.' },
  { number: '2020', title: 'Acomptes reçus de clients', description: 'Acomptes versés par les clients pour des livraisons ou prestations futures.' },
  { number: '2030', title: 'Impôts dus', description: 'Impôts à payer aux administrations fiscales.' },
  { number: '2040', title: 'TVA due', description: 'Compte de passif qui présente le solde de l\'impôt sur les ventes soumises à l\'impôt dû à l\'AFC, découlant de la fourniture de prestations selon la classe de comptes 3.' },
  { number: '2050', title: 'Autres impôts dus', description: 'Autres impôts à payer aux administrations fiscales.' },
  { number: '2060', title: 'Salaires dus', description: 'Salaires et traitements à payer aux employés.' },
  { number: '2070', title: 'Charges sociales dues', description: 'Charges sociales à payer aux institutions de prévoyance et aux assurances sociales.' },
  { number: '2080', title: 'Commissions dues', description: 'Commissions à payer aux agents et représentants.' },
  { number: '2090', title: 'Dividendes dus', description: 'Dividendes déclarés mais non encore versés aux actionnaires.' },
  { number: '2100', title: 'Emprunts bancaires à court terme', description: 'Emprunts bancaires à rembourser dans les 12 mois.' },
  { number: '2110', title: 'Crédits hypothécaires à court terme', description: 'Crédits hypothécaires à rembourser dans les 12 mois.' },
  { number: '2120', title: 'Autres dettes à court terme', description: 'Autres dettes à payer dans les 12 mois.' },
  { number: '2200', title: 'Loyers encaissés d\'avance', description: 'Loyers encaissés d\'avance concernant l\'exercice suivant.' },
  { number: '2210', title: 'Intérêts encaissés d\'avance', description: 'Intérêts encaissés d\'avance concernant l\'exercice suivant.' },
  { number: '2220', title: 'Autres revenus encaissés d\'avance', description: 'Autres produits encaissés d\'avance concernant l\'exercice suivant.' },
  { number: '2300', title: 'Provisions pour impôts', description: 'Provisions constituées pour des impôts futurs.' },
  { number: '2310', title: 'Provisions pour risques', description: 'Provisions constituées pour des risques généraux.' },
  { number: '2320', title: 'Provisions pour litiges', description: 'Provisions constituées pour des litiges en cours.' },
  { number: '2330', title: 'Provisions pour garanties', description: 'Provisions constituées pour des garanties accordées sur les produits ou services.' },
  { number: '2340', title: 'Provisions pour restructurations', description: 'Provisions constituées pour des restructurations planifiées.' },
  { number: '2350', title: 'Autres provisions', description: 'Autres provisions non classées ailleurs.' },
  { number: '2400', title: 'Capital social', description: 'Capital-actions d\'une société anonyme ou capital social d\'une Sàrl.' },
  { number: '2410', title: 'Capital de fondation', description: 'Capital de fondation d\'une fondation.' },
  { number: '2420', title: 'Réserves légales', description: 'Réserves imposées par la loi (code des obligations).' },
  { number: '2430', title: 'Réserves facultatives', description: 'Réserves constituées volontairement par décision de l\'assemblée générale.' },
  { number: '2440', title: 'Bénéfice reporté', description: 'Bénéfice des exercices précédents non distribué.' },
  { number: '2450', title: 'Perte reportée', description: 'Pertes des exercices précédents pas encore compensées.' },
  { number: '2460', title: 'Bénéfice de l\'exercice', description: 'Bénéfice de l\'exercice en cours.' },
  { number: '2470', title: 'Perte de l\'exercice', description: 'Perte de l\'exercice en cours.' },
  { number: '2500', title: 'Emprunts bancaires à long terme', description: 'Emprunts bancaires à rembourser dans plus de 12 mois.' },
  { number: '2510', title: 'Crédits hypothécaires à long terme', description: 'Crédits hypothécaires à rembourser dans plus de 12 mois.' },
  { number: '2520', title: 'Autres dettes à long terme', description: 'Autres dettes à payer dans plus de 12 mois.' },
  { number: '3000', title: 'Ventes de marchandises', description: 'Produits de la vente de marchandises.' },
  { number: '3001', title: 'Rabais, remises, escomptes accordés', description: 'Rabais, remises et escomptes accordés aux clients.' },
  { number: '3010', title: 'Ventes de produits fabriqués', description: 'Produits de la vente de produits fabriqués par l\'entreprise.' },
  { number: '3020', title: 'Ventes de prestations de services', description: 'Produits des prestations de services.' },
  { number: '3030', title: 'Ventes d\'emballages', description: 'Produits de la vente d\'emballages.' },
  { number: '3100', title: 'Variation des stocks de produits finis', description: 'Variation de la valeur des stocks de produits finis entre le début et la fin de l\'exercice.' },
  { number: '3110', title: 'Variation des stocks de produits en cours de fabrication', description: 'Variation de la valeur des stocks de produits en cours de fabrication entre le début et la fin de l\'exercice.' },
  { number: '3120', title: 'Variation des prestations de services non facturées', description: 'Variation de la valeur des prestations de services non facturées entre le début et la fin de l\'exercice.' },
  { number: '3200', title: 'Autres produits d\'exploitation', description: 'Autres produits liés à l\'activité d\'exploitation.' },
  { number: '3210', title: 'Produits de commissions', description: 'Commissions reçues.' },
  { number: '3220', title: 'Produits de locations', description: 'Produits de locations immobilières ou mobilières.' },
  { number: '3230', title: 'Produits de participations', description: 'Dividendes et autres produits de participations.' },
  { number: '3240', title: 'Produits de titres à court terme', description: 'Produits des titres à court terme.' },
  { number: '3250', title: 'Produits de titres à long terme', description: 'Produits des titres à long terme.' },
  { number: '3260', title: 'Gains de change', description: 'Gains de change réalisés sur les opérations en monnaies étrangères.' },
  { number: '3270', title: 'Produits divers', description: 'Autres produits non classés ailleurs.' },
  { number: '4000', title: 'Achats de matières premières', description: 'Achats de matières premières destinées à la production.' },
  { number: '4010', title: 'Achats de marchandises', description: 'Achats de marchandises destinées à la revente.' },
  { number: '4020', title: 'Achats d\'emballages', description: 'Achats d\'emballages destinés à la vente.' },
  { number: '4030', title: 'Achats de fournitures', description: 'Achats de fournitures diverses.' },
  { number: '4100', title: 'Frais de transport sur achats', description: 'Frais de transport liés aux achats.' },
  { number: '4110', title: 'Droits de douane sur achats', description: 'Droits de douane payés sur les achats.' },
  { number: '4120', title: 'Autres frais sur achats', description: 'Autres frais liés aux achats.' },
  { number: '4200', title: 'Achats de prestations de services', description: 'Achats de prestations de services auprès de tiers.' },
  { number: '4900', title: 'Rabais, remises, escomptes obtenus', description: 'Rabais, remises et escomptes obtenus sur les achats.' },
  { number: '5000', title: 'Salaires', description: 'Salaires bruts versés aux employés.' },
  { number: '5010', title: 'Commissions versées', description: 'Commissions versées aux employés ou représentants.' },
  { number: '5020', title: 'Indemnités versées', description: 'Indemnités diverses versées au personnel.' },
  { number: '5030', title: 'Rémunérations des apprentis', description: 'Salaires versés aux apprentis.' },
  { number: '5100', title: 'Charges sociales', description: 'Charges sociales patronales.' },
  { number: '5110', title: 'AVS, AI, APG', description: 'Cotisations patronales à l\'AVS, l\'AI et aux APG.' },
  { number: '5120', title: 'LPP', description: 'Cotisations patronales à la prévoyance professionnelle.' },
  { number: '5130', title: 'AC', description: 'Cotisations patronales à l\'assurance-chômage.' },
  { number: '5140', title: 'Assurances accidents', description: 'Cotisations patronales aux assurances accidents.' },
  { number: '5150', title: 'Allocations familiales', description: 'Cotisations patronales aux allocations familiales.' },
  { number: '5160', title: 'Autres charges sociales', description: 'Autres charges sociales patronales.' },
  { number: '5200', title: 'Frais de personnel', description: 'Frais divers liés au personnel.' },
  { number: '5210', title: 'Frais de déplacement', description: 'Frais de déplacement du personnel.' },
  { number: '5220', title: 'Frais de formation', description: 'Frais de formation du personnel.' },
  { number: '5230', title: 'Autres frais de personnel', description: 'Autres frais liés au personnel.' },
  { number: '6000', title: 'Loyers', description: 'Loyers payés pour les locaux d\'exploitation.' },
  { number: '6010', title: 'Frais d\'entretien et de réparation d\'immeubles', description: 'Frais d\'entretien et de réparation des immeubles.' },
  { number: '6020', title: 'Frais de chauffage, d\'eau et d\'électricité', description: 'Frais de chauffage, d\'eau et d\'électricité des locaux d\'exploitation.' },
  { number: '6030', title: 'Assurances d\'immeubles', description: 'Primes d\'assurances pour les immeubles.' },
  { number: '6040', title: 'Impôts d\'immeubles', description: 'Impôts fonciers et autres impôts sur les immeubles.' },
  { number: '6050', title: 'Autres frais d\'immeubles', description: 'Autres frais liés aux immeubles.' },
  { number: '6100', title: 'Frais d\'entretien et de réparation de machines', description: 'Frais d\'entretien et de réparation des machines et appareils de production.' },
  { number: '6110', title: 'Frais d\'entretien et de réparation de véhicules', description: 'Frais d\'entretien et de réparation des véhicules.' },
  { number: '6120', title: 'Frais d\'entretien et de réparation de mobilier et matériel de bureau', description: 'Frais d\'entretien et de réparation du mobilier et du matériel de bureau.' },
  { number: '6200', title: 'Frais de véhicules', description: 'Frais divers liés aux véhicules.' },
  { number: '6210', title: 'Frais de carburant', description: 'Frais de carburant pour les véhicules.' },
  { number: '6220', title: 'Frais d\'assurances de véhicules', description: 'Primes d\'assurances pour les véhicules.' },
  { number: '6230', title: 'Impôts de véhicules', description: 'Impôts et taxes sur les véhicules.' },
  { number: '6240', title: 'Autres frais de véhicules', description: 'Autres frais liés aux véhicules.' },
  { number: '6300', title: 'Frais de publicité', description: 'Frais de publicité et de marketing.' },
  { number: '6310', title: 'Frais de marketing', description: 'Frais de marketing et de promotion.' },
  { number: '6320', title: 'Frais de foires et expositions', description: 'Frais liés à la participation à des foires et expositions.' },
  { number: '6400', title: 'Frais d\'énergie', description: 'Frais d\'énergie non liés aux immeubles.' },
  { number: '6410', title: 'Frais de téléphone', description: 'Frais de téléphone et de télécommunications.' },
  { number: '6420', title: 'Frais de port', description: 'Frais d\'affranchissement et d\'expédition.' },
  { number: '6430', title: 'Frais de papeterie', description: 'Frais de papeterie et fournitures de bureau.' },
  { number: '6440', title: 'Frais d\'informatique', description: 'Frais liés à l\'informatique.' },
  { number: '6450', title: 'Frais de documentation', description: 'Frais de documentation et d\'information.' },
  { number: '6500', title: 'Frais d\'assurances', description: 'Primes d\'assurances diverses.' },
  { number: '6510', title: 'Frais de licences', description: 'Frais de licences et redevances.' },
  { number: '6520', title: 'Frais de brevets', description: 'Frais liés aux brevets.' },
  { number: '6530', title: 'Frais de marques', description: 'Frais liés aux marques.' },
  { number: '6600', title: 'Frais de voyages', description: 'Frais de voyages et déplacements.' },
  { number: '6610', title: 'Frais de réception', description: 'Frais de réception et de représentation.' },
  { number: '6620', title: 'Frais de représentation', description: 'Frais de représentation commerciale.' },
  { number: '6700', title: 'Pertes sur créances', description: 'Pertes sur créances irrécouvrables.' },
  { number: '6710', title: 'Amortissements', description: 'Charges d\'amortissements des immobilisations.' },
  { number: '6720', title: 'Corrections de valeur', description: 'Corrections de valeur sur des actifs.' },
  { number: '6800', title: 'Frais financiers', description: 'Frais financiers divers.' },
  { number: '6810', title: 'Intérêts passifs', description: 'Intérêts payés sur les dettes.' },
  { number: '6820', title: 'Commissions bancaires', description: 'Commissions et frais bancaires.' },
  { number: '6830', title: 'Pertes de change', description: 'Pertes de change réalisées sur les opérations en monnaies étrangères.' },
  { number: '6840', title: 'Autres frais financiers', description: 'Autres frais financiers non classés ailleurs.' },
  { number: '6900', title: 'Impôts', description: 'Impôts divers.' },
  { number: '6910', title: 'Impôts sur le bénéfice', description: 'Impôts sur le bénéfice de l\'entreprise.' },
  { number: '6920', title: 'Impôts sur le capital', description: 'Impôts sur le capital de l\'entreprise.' },
  { number: '6930', title: 'Autres impôts', description: 'Autres impôts non classés ailleurs.' },
  { number: '7000', title: 'Produits financiers', description: 'Produits financiers divers.' },
  { number: '7010', title: 'Intérêts actifs', description: 'Intérêts reçus sur les placements et créances.' },
  { number: '7020', title: 'Produits de participations', description: 'Dividendes et autres produits de participations.' },
  { number: '7030', title: 'Gains de change', description: 'Gains de change réalisés sur les opérations en monnaies étrangères.' },
  { number: '7100', title: 'Produits extraordinaires', description: 'Produits hors exploitation ou extraordinaires.' },
  { number: '7110', title: 'Charges extraordinaires', description: 'Charges hors exploitation ou extraordinaires.' },
  { number: '7200', title: 'Prélèvements privés', description: 'Prélèvements privés de l\'exploitant (raison individuelle).' },
  { number: '7210', title: 'Apports privés', description: 'Apports privés de l\'exploitant (raison individuelle).' },
  { number: '8000', title: 'Bénéfice de l\'exercice précédent', description: 'Bénéfice reporté de l\'exercice précédent.' },
  { number: '8001', title: 'Perte de l\'exercice précédent', description: 'Perte reportée de l\'exercice précédent.' },
  { number: '8100', title: 'Solde du compte de résultat', description: 'Solde du compte de résultat de l\'exercice.' },
  { number: '8200', title: 'Transfert au bilan', description: 'Transfert du résultat au bilan.' },
  { number: '8300', title: 'Transfert du bilan', description: 'Transfert du bilan au compte de résultat.' },
  { number: '8400', title: 'Clôture du compte de résultat', description: 'Compte technique pour la clôture du compte de résultat.' },
  { number: '8500', title: 'Clôture du bilan', description: 'Compte technique pour la clôture du bilan.' },
  { number: '9000', title: 'Compte de clôture', description: 'Compte technique de clôture des comptes.' }
];
