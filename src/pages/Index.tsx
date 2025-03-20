
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, FileText, PieChart, Calculator } from 'lucide-react';

const Index = () => {
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-swiss-dark text-white -mt-10">
        <div className="absolute inset-0 bg-gradient-to-r from-swiss-dark to-swiss-blue opacity-90 z-0"></div>
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2
          }}
        ></div>
        <div className="relative z-10 py-20 px-6 md:py-28 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight animate-slide-down">
              Formation et Documentation en Comptabilité Suisse
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 animate-fade-in">
              Ressources complètes pour maîtriser la comptabilité suisse et les logiciels associés
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-slide-up">
              <Link 
                to="/formation" 
                className="bg-white text-swiss-dark px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 flex items-center space-x-2 shadow-lg button-hover-effect"
              >
                <span>Explorer les cours</span>
                <ArrowRight size={18} />
              </Link>
              <Link 
                to="/templates" 
                className="bg-transparent text-white border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:bg-opacity-10 transition-all duration-300 flex items-center button-hover-effect"
              >
                Accéder aux templates
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-swiss-light/80 to-transparent z-10"></div>
      </section>

      {/* Features Section */}
      <section ref={animationRef} className="py-10">
        <div className="text-center mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl font-bold mb-4">Nos ressources comptables suisses</h2>
          <p className="text-swiss-text-secondary max-w-2xl mx-auto">
            Découvrez notre écosystème complet de formation et documentation pour les professionnels de la comptabilité en Suisse
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass rounded-xl p-6 shadow-card card-hover animate-on-scroll opacity-0 staggered-item">
            <div className="bg-swiss-blue/10 text-swiss-blue p-3 rounded-lg inline-block mb-4">
              <BookOpen size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Formation Comptable</h3>
            <p className="text-swiss-text-secondary mb-4">
              Cours complets sur la comptabilité financière suisse, normes, et pratiques
            </p>
            <Link 
              to="/formation" 
              className="inline-flex items-center text-swiss-blue hover:underline"
            >
              <span>Explorer</span>
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="glass rounded-xl p-6 shadow-card card-hover animate-on-scroll opacity-0 staggered-item">
            <div className="bg-swiss-blue/10 text-swiss-blue p-3 rounded-lg inline-block mb-4">
              <PieChart size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Documentation Abacus</h3>
            <p className="text-swiss-text-secondary mb-4">
              Guides d'utilisation et astuces pour l'ERP Abacus
            </p>
            <Link 
              to="/abacus" 
              className="inline-flex items-center text-swiss-blue hover:underline"
            >
              <span>Consulter</span>
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="glass rounded-xl p-6 shadow-card card-hover animate-on-scroll opacity-0 staggered-item">
            <div className="bg-swiss-blue/10 text-swiss-blue p-3 rounded-lg inline-block mb-4">
              <FileText size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Documentation Yooz</h3>
            <p className="text-swiss-text-secondary mb-4">
              Ressources pour la GED Yooz et son intégration
            </p>
            <Link 
              to="/yooz" 
              className="inline-flex items-center text-swiss-blue hover:underline"
            >
              <span>Consulter</span>
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="glass rounded-xl p-6 shadow-card card-hover animate-on-scroll opacity-0 staggered-item">
            <div className="bg-swiss-blue/10 text-swiss-blue p-3 rounded-lg inline-block mb-4">
              <Calculator size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Templates et Documents</h3>
            <p className="text-swiss-text-secondary mb-4">
              Modèles de dossiers de clôture et autres documents comptables
            </p>
            <Link 
              to="/templates" 
              className="inline-flex items-center text-swiss-blue hover:underline"
            >
              <span>Télécharger</span>
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Updates Section */}
      <section className="py-10 animate-on-scroll opacity-0">
        <div className="glass rounded-xl p-8 shadow-card">
          <h2 className="text-2xl font-bold mb-6">Dernières mises à jour</h2>
          <div className="space-y-4">
            <div className="flex items-start p-4 rounded-lg hover:bg-swiss-muted transition-colors">
              <div className="bg-swiss-blue text-white text-xs font-semibold px-2 py-1 rounded mt-0.5 mr-4">
                18.03.2025
              </div>
              <div>
                <h3 className="font-medium">Lancement du site de formation en comptabilité suisse</h3>
                <p className="text-swiss-text-secondary text-sm mt-1">
                  Découvrez notre nouvelle plateforme dédiée à la comptabilité suisse et aux logiciels associés.
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-4 rounded-lg hover:bg-swiss-muted transition-colors">
              <div className="bg-swiss-blue text-white text-xs font-semibold px-2 py-1 rounded mt-0.5 mr-4">
                15.03.2025
              </div>
              <div>
                <h3 className="font-medium">Ajout des templates de dossiers de clôture</h3>
                <p className="text-swiss-text-secondary text-sm mt-1">
                  Nouveaux modèles Excel pour faciliter vos clôtures comptables annuelles et semestrielles.
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-4 rounded-lg hover:bg-swiss-muted transition-colors">
              <div className="bg-swiss-blue text-white text-xs font-semibold px-2 py-1 rounded mt-0.5 mr-4">
                10.03.2025
              </div>
              <div>
                <h3 className="font-medium">Mise à jour des guides Abacus suite à la dernière version</h3>
                <p className="text-swiss-text-secondary text-sm mt-1">
                  Nos guides ont été actualisés pour correspondre aux nouvelles fonctionnalités d'Abacus 2025.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center animate-on-scroll opacity-0">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Prêt à améliorer vos compétences comptables?</h2>
          <p className="text-swiss-text-secondary mb-8">
            Explorez nos cours et ressources conçus spécifiquement pour les comptables en Suisse.
          </p>
          <Link 
            to="/formation" 
            className="bg-swiss-blue text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 shadow-lg inline-flex items-center space-x-2 button-hover-effect"
          >
            <span>Commencer maintenant</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
