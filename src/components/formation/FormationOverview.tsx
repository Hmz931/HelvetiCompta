import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Award, ArrowRight, BookOpen } from 'lucide-react';
import { courseStructure } from '@/data/courses';

const FormationOverview = () => {
  return (
    <div className="animate-fade-in">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Formation en Comptabilité Suisse</h1>
        <div className="glass rounded-xl p-6 shadow-card">
          <p className="text-lg">
            Bienvenue dans notre section de formation complète sur la comptabilité suisse. 
            Vous trouverez ici des cours détaillés couvrant tous les aspects de la comptabilité 
            selon les normes et pratiques suisses. Que vous soyez débutant ou comptable expérimenté, 
            nos ressources vous aideront à développer vos compétences.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.values(courseStructure).map((course, index) => (
          <div 
            key={course.id} 
            className="glass rounded-xl p-6 shadow-card card-hover staggered-item"
          >
            <div className="flex items-center mb-4">
              <div className="bg-swiss-blue/10 text-swiss-blue p-2 rounded-lg mr-3">
                {index % 3 === 0 && <Book size={20} />}
                {index % 3 === 1 && <BookOpen size={20} />}
                {index % 3 === 2 && <Award size={20} />}
              </div>
              <h3 className="text-xl font-semibold">{course.title}</h3>
            </div>
            <p className="text-swiss-text-secondary mb-6 min-h-[60px]">
              {course.description || "Cours détaillé sur ce sujet important de la comptabilité suisse."}
            </p>
            <Link 
              to={`/formation/${course.id}`} 
              className="inline-flex items-center text-swiss-blue hover:underline mt-auto"
            >
              <span>Accéder au cours</span>
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormationOverview;
