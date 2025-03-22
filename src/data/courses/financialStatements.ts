
import { Course } from './types';

export const financialStatementsCourse: Course = {
  id: 'financial-statements',
  title: 'Les états financiers',
  description: 'Comprendre, analyser et interpréter les états financiers suisses',
  introduction: `
    <p>Les états financiers sont un ensemble de documents comptables qui présentent la situation financière et les performances d'une entreprise. En Suisse, ils comprennent principalement le bilan, le compte de résultat, le tableau des flux de trésorerie et l'annexe.</p>
    <p>Ces documents sont essentiels pour les dirigeants, les investisseurs, les créanciers et les autorités fiscales, car ils permettent d'évaluer la santé financière d'une entreprise, sa rentabilité et sa capacité à générer des liquidités.</p>
    <p>Dans ce cours, nous allons explorer en détail chacun de ces états financiers, leur structure, leur contenu et les principes comptables qui les régissent selon le droit suisse.</p>
  `,
  sections: [
    {
      id: 'balance-sheet',
      title: 'Le bilan',
      content: `
<h2>Le bilan</h2>
<p>Le bilan (ou état de la situation financière) est un document comptable qui présente l'ensemble des ressources (actifs) et des moyens de financement (passifs) d'une entreprise à un moment précis, généralement à la fin de l'exercice comptable.</p>

<h3>Structure du bilan suisse</h3>
<p>Selon le droit comptable suisse (Code des Obligations), le bilan doit être structuré comme suit:</p>

<h4>ACTIFS</h4>
<p><strong>Actifs circulants:</strong></p>
<ul>
<li>Trésorerie et actifs cotés en bourse détenus à court terme (comptes 10XX)</li>
<li>Créances résultant de la vente de biens et de prestations de services (11XX)</li>
<li>Autres créances à court terme (11XX)</li>
<li>Stocks et prestations de services non facturées (12XX)</li>
<li>Actifs de régularisation (13XX)</li>
</ul>

<p><strong>Actifs immobilisés:</strong></p>
<ul>
<li>Immobilisations financières (14XX)</li>
<li>Participations (14XX)</li>
<li>Immobilisations corporelles (15XX et 16XX)</li>
<li>Immobilisations incorporelles (17XX)</li>
<li>Capital non libéré (18XX)</li>
</ul>

<h4>PASSIFS</h4>
<p><strong>Capitaux étrangers à court terme:</strong></p>
<ul>
<li>Dettes résultant de l'achat de biens et de prestations de services (20XX)</li>
<li>Dettes à court terme portant intérêt (21XX)</li>
<li>Autres dettes à court terme (22XX)</li>
<li>Passifs de régularisation (23XX)</li>
<li>Provisions à court terme (24XX)</li>
</ul>

<p><strong>Capitaux étrangers à long terme:</strong></p>
<ul>
<li>Dettes à long terme portant intérêt (25XX)</li>
<li>Autres dettes à long terme (26XX)</li>
<li>Provisions et postes analogues prévus par la loi (27XX)</li>
</ul>

<p><strong>Capitaux propres:</strong></p>
<ul>
<li>Capital social ou capital de fondation (28XX)</li>
<li>Réserve légale issue du capital (28XX)</li>
<li>Réserve légale issue du bénéfice (28XX)</li>
<li>Réserves facultatives issues du bénéfice (28XX)</li>
<li>Propres parts du capital (28XX)</li>
<li>Bénéfice ou perte reporté (29XX)</li>
<li>Bénéfice ou perte de l'exercice (29XX)</li>
</ul>

<h3>Principes fondamentaux du bilan</h3>
<ul>
<li><strong>Principe d'équilibre</strong>: Le total des actifs doit toujours être égal au total des passifs</li>
<li><strong>Principe de liquidité</strong>: Les actifs sont classés par ordre de liquidité décroissante</li>
<li><strong>Principe d'exigibilité</strong>: Les passifs sont classés par ordre d'exigibilité croissante</li>
<li><strong>Principe de permanence</strong>: Les méthodes de présentation et d'évaluation doivent rester constantes d'un exercice à l'autre</li>
</ul>
      `
    },
    {
      id: 'income-statement',
      title: 'Le compte de résultat',
      content: `
<h2>Le compte de résultat</h2>
<p>Le compte de résultat (ou état du résultat global) est un document comptable qui présente les produits et les charges d'une entreprise sur une période donnée, généralement un exercice comptable. Il permet de déterminer si l'entreprise a réalisé un bénéfice ou une perte.</p>

<h3>Structure du compte de résultat suisse</h3>
<p>Selon le droit comptable suisse, le compte de résultat peut être présenté selon la méthode de l'affectation des charges par nature ou par fonction:</p>

<h4>Présentation par nature des charges</h4>
<ol>
<li><strong>Produits nets des ventes de biens et de prestations de services</strong> (comptes 3XXX)</li>
<li><strong>Variation des stocks de produits finis et semi-finis et variation des prestations de services non facturées</strong></li>
<li><strong>Charges de matières et de marchandises</strong> (comptes 4XXX)</li>
<li><strong>Charges de personnel</strong> (comptes 5XXX)</li>
<li><strong>Autres charges d'exploitation</strong> (comptes 6XXX)</li>
<li><strong>Amortissements et corrections de valeur sur les postes de l'actif immobilisé</strong></li>
<li><strong>Charges et produits financiers</strong> (comptes 68XX, 69XX)</li>
<li><strong>Charges et produits hors exploitation</strong> (comptes 7XXX)</li>
<li><strong>Charges et produits exceptionnels, uniques ou hors période</strong> (comptes 8XXX)</li>
<li><strong>Impôts directs</strong> (comptes 89XX)</li>
<li><strong>Bénéfice ou perte de l'exercice</strong></li>
</ol>

<h4>Présentation par fonction des charges</h4>
<ol>
<li><strong>Produits nets des ventes de biens et de prestations de services</strong></li>
<li><strong>Coûts d'acquisition ou de production des biens et prestations de services vendus</strong></li>
<li><strong>Résultat brut</strong></li>
<li><strong>Charges de distribution et d'administration</strong></li>
<li><strong>Autres produits et charges d'exploitation</strong></li>
<li><strong>Résultat d'exploitation</strong></li>
<li><strong>Charges et produits financiers</strong></li>
<li><strong>Charges et produits hors exploitation</strong></li>
<li><strong>Charges et produits exceptionnels, uniques ou hors période</strong></li>
<li><strong>Impôts directs</strong></li>
<li><strong>Bénéfice ou perte de l'exercice</strong></li>
</ol>

<h3>Principes fondamentaux du compte de résultat</h3>
<ul>
<li><strong>Principe de prudence</strong>: Ne pas surévaluer les produits et sous-évaluer les charges</li>
<li><strong>Principe de rattachement</strong>: Les charges doivent être rattachées aux produits correspondants</li>
<li><strong>Principe de périodicité</strong>: Les produits et charges doivent être comptabilisés dans la période à laquelle ils se rapportent</li>
<li><strong>Principe de spécialisation des exercices</strong>: Les opérations doivent être enregistrées dans l'exercice auquel elles se rattachent</li>
</ul>
      `
    },
    {
      id: 'cash-flow',
      title: 'Le tableau des flux de trésorerie',
      content: `
<h2>Le tableau des flux de trésorerie</h2>
<p>Le tableau des flux de trésorerie est un document comptable qui présente les mouvements d'argent (entrées et sorties) d'une entreprise sur une période donnée. Il est complémentaire au bilan et au compte de résultat et permet de comprendre comment l'entreprise génère et utilise sa trésorerie.</p>

<h3>Structure du tableau des flux de trésorerie suisse</h3>
<p>Le tableau des flux de trésorerie est structuré en trois parties distinctes:</p>

<h4>1. Flux de trésorerie liés à l'activité opérationnelle</h4>
<p>Cette section présente les flux de trésorerie générés par les activités principales de l'entreprise.</p>

<p><strong>Méthode directe:</strong></p>
<ul>
<li>Encaissements provenant des clients</li>
<li>Paiements aux fournisseurs</li>
<li>Paiements aux employés</li>
<li>Autres paiements/encaissements opérationnels</li>
<li>Impôts payés</li>
<li>Intérêts payés/reçus</li>
</ul>

<p><strong>Méthode indirecte:</strong></p>
<ul>
<li>Résultat de l'exercice</li>
<li>Ajustements pour éléments sans incidence sur la trésorerie (amortissements, provisions)</li>
<li>Variation du besoin en fonds de roulement</li>
</ul>

<h4>2. Flux de trésorerie liés aux activités d'investissement</h4>
<p>Cette section présente les flux de trésorerie liés à l'acquisition et à la cession d'actifs à long terme:</p>
<ul>
<li>Acquisition d'immobilisations corporelles et incorporelles</li>
<li>Cession d'immobilisations corporelles et incorporelles</li>
<li>Acquisition/cession d'immobilisations financières</li>
<li>Acquisition/cession de filiales</li>
</ul>

<h4>3. Flux de trésorerie liés aux activités de financement</h4>
<p>Cette section présente les flux de trésorerie liés au financement de l'entreprise:</p>
<ul>
<li>Augmentation/diminution de capital</li>
<li>Émission/remboursement d'emprunts</li>
<li>Dividendes versés</li>
</ul>

<h3>Importance du tableau des flux de trésorerie</h3>
<p>Ce document est essentiel car il permet:</p>
<ul>
<li>D'évaluer la capacité de l'entreprise à générer des liquidités</li>
<li>D'analyser les besoins de financement</li>
<li>De comprendre la différence entre le résultat comptable et la variation de trésorerie</li>
<li>D'anticiper les problèmes de liquidité</li>
</ul>
      `
    },
    {
      id: 'notes',
      title: 'L\'annexe aux comptes',
      content: `
<h2>L'annexe aux comptes</h2>
<p>L'annexe (ou notes aux états financiers) est un document qui complète le bilan, le compte de résultat et le tableau des flux de trésorerie. Elle fournit des informations supplémentaires pour permettre une meilleure compréhension des états financiers.</p>

<h3>Contenu de l'annexe selon le droit suisse</h3>
<p>Selon l'article 959c du Code des Obligations, l'annexe doit contenir les informations suivantes:</p>

<h4>Informations obligatoires pour toutes les entreprises:</h4>
<ol>
<li>Les principes comptables appliqués</li>
<li>Les informations, la structure et les commentaires concernant les postes du bilan et du compte de résultat</li>
<li>Le montant total des réserves de remplacement et des réserves latentes dissoutes</li>
<li>Les autres informations prescrites par la loi</li>
</ol>

<h4>Informations supplémentaires pour les entreprises soumises à un contrôle ordinaire:</h4>
<ol>
<li>Les dettes à long terme portant intérêt</li>
<li>Les honoraires versés à l'organe de révision</li>
<li>Le nombre d'emplois à plein temps en moyenne annuelle</li>
<li>Les participations directes ou indirectes</li>
<li>Les augmentations et diminutions des réserves de réévaluation</li>
<li>Les événements importants survenus après la date du bilan</li>
<li>Les motifs ayant conduit à la démission anticipée de l'organe de révision</li>
</ol>

<h3>Importance de l'annexe</h3>
<p>L'annexe est essentielle car elle:</p>
<ul>
<li>Fournit des explications sur les méthodes comptables utilisées</li>
<li>Détaille les postes significatifs du bilan et du compte de résultat</li>
<li>Présente des informations qui ne figurent pas dans les autres états financiers</li>
<li>Permet une meilleure compréhension de la situation financière de l'entreprise</li>
</ul>
      `
    },
    {
      id: 'analysis',
      title: 'Analyse des états financiers',
      content: `
<h2>Analyse des états financiers</h2>
<p>L'analyse des états financiers consiste à étudier les informations contenues dans le bilan, le compte de résultat, le tableau des flux de trésorerie et l'annexe pour évaluer la situation financière et la performance d'une entreprise.</p>

<h3>Méthodes d'analyse</h3>
<h4>1. Analyse horizontale</h4>
<p>L'analyse horizontale consiste à comparer les états financiers sur plusieurs exercices pour identifier les tendances et les évolutions.</p>

<h4>2. Analyse verticale</h4>
<p>L'analyse verticale consiste à exprimer chaque poste du bilan en pourcentage du total du bilan et chaque poste du compte de résultat en pourcentage du chiffre d'affaires.</p>

<h4>3. Analyse par les ratios</h4>
<p>L'analyse par les ratios consiste à calculer différents indicateurs financiers pour évaluer:</p>
<ul>
<li>La liquidité: capacité à faire face aux engagements à court terme</li>
<li>La solvabilité: capacité à faire face aux engagements à long terme</li>
<li>La rentabilité: capacité à générer des bénéfices</li>
<li>L'efficacité: capacité à utiliser efficacement les ressources</li>
</ul>

<p>Pour une analyse détaillée des ratios financiers, consultez le cours <a href="/formation/financial-ratios">Ratios et indicateurs financiers</a>.</p>

<h3>Interprétation des résultats</h3>
<p>L'interprétation des résultats de l'analyse doit tenir compte:</p>
<ul>
<li>Du secteur d'activité de l'entreprise</li>
<li>De la taille de l'entreprise</li>
<li>De la phase de développement de l'entreprise</li>
<li>Du contexte économique général</li>
<li>Des spécificités suisses (notamment fiscales)</li>
</ul>

<h3>Limites de l'analyse des états financiers</h3>
<ul>
<li>Les états financiers sont basés sur des coûts historiques</li>
<li>Les méthodes comptables peuvent varier d'une entreprise à l'autre</li>
<li>Certaines informations importantes peuvent ne pas être reflétées dans les états financiers</li>
<li>Les états financiers peuvent faire l'objet de manipulations (comptabilité créative)</li>
</ul>
      `
    }
  ]
};
