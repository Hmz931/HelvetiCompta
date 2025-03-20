
import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import AccountingQuiz from '../components/quiz/AccountingQuiz';
import { Award, BookOpen, Brain, HelpCircle } from 'lucide-react';

const Quiz = () => {
  return (
    <div className="animate-fade-in">
      <Breadcrumb />
      <h1 className="text-3xl font-bold mb-6">Quiz et Tests</h1>
      
      <div className="glass rounded-xl p-6 shadow-card mb-10">
        <div className="flex items-start">
          <div className="mr-4 bg-swiss-blue/10 p-2 rounded-md text-swiss-blue mt-1">
            <Brain size={24} />
          </div>
          <div>
            <p className="text-lg mb-2">
              Testez vos connaissances en comptabilité suisse avec nos quiz interactifs.
            </p>
            <p className="text-swiss-text-secondary">
              Ces quiz vous permettent d'évaluer votre compréhension des concepts clés, d'identifier vos points forts et les domaines à améliorer. Chaque question est accompagnée d'une explication détaillée pour approfondir vos connaissances.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Award size={24} className="mr-3 text-swiss-blue" />
          Quiz - Comptabilité Générale
        </h2>
        
        <AccountingQuiz title="Quiz - Comptabilité Générale" />
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass rounded-xl p-6 shadow-card flex flex-col h-full">
          <div className="flex items-center mb-4">
            <div className="rounded-full bg-yellow-100 p-2 mr-3">
              <HelpCircle size={20} className="text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold">Conseil pour réussir</h3>
          </div>
          <p className="text-swiss-text-secondary flex-grow">
            Prenez votre temps pour répondre aux questions. Pour chaque réponse incorrecte, lisez attentivement l'explication fournie - c'est un excellent moyen d'approfondir vos connaissances.
          </p>
        </div>
        
        <div className="glass rounded-xl p-6 shadow-card flex flex-col h-full">
          <div className="flex items-center mb-4">
            <div className="rounded-full bg-green-100 p-2 mr-3">
              <BookOpen size={20} className="text-green-600" />
            </div>
            <h3 className="text-xl font-semibold">Plus de Quiz à venir</h3>
          </div>
          <p className="text-swiss-text-secondary flex-grow">
            Nous enrichissons régulièrement notre plateforme avec de nouveaux quiz sur diverses thématiques: TVA, fiscalité, salaires, etc. Revenez bientôt pour découvrir de nouveaux tests!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
