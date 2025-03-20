
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';
import { courseStructure } from '../data/courseStructure';
import { Book, Award, ArrowRight, BookOpen } from 'lucide-react';

type CourseContentProps = {
  courseId: string;
};

const CourseContent = ({ courseId }: CourseContentProps) => {
  const course = courseStructure[courseId];
  
  if (!course) {
    return <div>Cours non trouvé</div>;
  }
  
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">{course.title}</h1>
      {course.description && (
        <p className="text-swiss-text-secondary mb-8 text-lg">{course.description}</p>
      )}
      
      <div className="space-y-6">
        {course.sections.map((section) => (
          <div key={section.id} className="glass rounded-xl p-6 shadow-card">
            <h2 className="text-xl font-bold mb-3">{section.title}</h2>
            <p className="text-swiss-text-secondary">
              {section.content || "Contenu à venir..."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

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

const Formation = () => {
  const location = useLocation();

  return (
    <div>
      <Breadcrumb />
      <Routes>
        <Route path="/" element={<FormationOverview />} />
        <Route path="/overview" element={<CourseContent courseId="overview" />} />
        <Route path="/financial" element={<CourseContent courseId="financial" />} />
        <Route path="/salary" element={<CourseContent courseId="salary" />} />
        <Route path="/analytics" element={<CourseContent courseId="analytics" />} />
        <Route path="/tax" element={<CourseContent courseId="tax" />} />
        <Route path="/closing" element={<CourseContent courseId="closing" />} />
        <Route path="/exercises" element={<CourseContent courseId="exercises" />} />
      </Routes>
    </div>
  );
};

export default Formation;
