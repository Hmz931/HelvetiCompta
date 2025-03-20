
import { Course } from './types';

export const provisionsCourse: Course = {
  id: 'provisions',
  title: 'Les pertes sur créances et les comptes de provision',
  description: 'Gérer comptablement les risques liés aux créances clients',
  sections: [
    {
      id: 'credit-risks',
      title: 'Risques liés aux créances clients',
      content: 'Toute entreprise qui vend à crédit s\'expose à des risques d\'impayés. La gestion comptable de ces risques passe par la constitution de provisions et la comptabilisation des pertes effectives.'
    },
    {
      id: 'provisions',
      title: 'Les provisions pour dépréciation',
      content: 'Les provisions pour dépréciation des créances (ducroire) permettent d\'anticiper les pertes probables. Elles peuvent être calculées forfaitairement ou individuellement, selon l\'analyse des risques spécifiques à chaque client.'
    },
    {
      id: 'credit-losses',
      title: 'Comptabilisation des pertes',
      content: 'Lorsqu\'une créance devient définitivement irrécouvrable, la perte est comptabilisée et la provision correspondante est reprise. Cette section détaille les écritures comptables correspondantes.'
    }
  ]
};
