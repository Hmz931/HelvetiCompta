
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { FileQuestion, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <div className="flex justify-center mb-6">
          <FileQuestion size={80} className="text-swiss-blue/70" />
        </div>
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-xl text-swiss-text-secondary mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="inline-flex items-center bg-swiss-blue text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 button-hover-effect shadow-subtle"
        >
          <ArrowLeft size={18} className="mr-2" />
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
