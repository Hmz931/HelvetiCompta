
import { Section } from '../types';

export const introSection: Section = {
  id: 'intro',
  title: 'Introduction aux ratios financiers',
  content: 'Les ratios financiers sont des outils d\'analyse essentiels pour évaluer la performance, la santé financière et la gestion d\'une entreprise. Ils permettent de transformer des données comptables brutes en indicateurs significatifs pour la prise de décision.',
  subsections: [
    {
      title: 'Définition et utilité',
      content: `
<h3>Définition et utilité</h3>
<p>Les ratios financiers sont des rapports entre différentes valeurs comptables qui permettent d'évaluer rapidement certains aspects de la situation financière d'une entreprise.</p>
<p>Ils sont particulièrement utiles pour:</p>
<ul>
<li>Comparer les performances d'une entreprise dans le temps (analyse temporelle)</li>
<li>Comparer les performances d'une entreprise par rapport à ses concurrents (analyse sectorielle)</li>
<li>Identifier les forces et faiblesses d'une entreprise</li>
<li>Guider les décisions de gestion et d'investissement</li>
<li>Évaluer les risques financiers</li>
</ul>
`
    },
    {
      title: 'Catégories de ratios',
      content: `
<h3>Catégories de ratios</h3>
<p>Les ratios financiers peuvent être classés en quatre grandes catégories:</p>
<ul>
<li><strong>Ratios de liquidité</strong>: évaluent la capacité de l'entreprise à faire face à ses engagements à court terme</li>
<li><strong>Ratios de rentabilité</strong>: mesurent la capacité de l'entreprise à générer des profits</li>
<li><strong>Ratios de solvabilité</strong>: évaluent la structure financière et la capacité de l'entreprise à faire face à ses engagements à long terme</li>
<li><strong>Ratios d'efficacité</strong>: mesurent l'efficacité avec laquelle l'entreprise utilise ses ressources</li>
</ul>
<p>Chaque catégorie de ratios offre une perspective différente sur la santé financière de l'entreprise.</p>
`
    }
  ]
};
