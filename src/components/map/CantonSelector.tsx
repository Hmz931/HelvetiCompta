
import React from 'react';
import { MapPin } from 'lucide-react';

const CantonSelector: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center p-6">
      <div className="bg-swiss-blue/10 rounded-full p-4 mb-4">
        <MapPin className="w-10 h-10 text-swiss-blue" />
      </div>
      <h3 className="text-lg font-semibold mb-2">Sélectionnez un canton</h3>
      <p className="text-swiss-text-secondary">
        Cliquez sur un canton sur la carte pour afficher ses informations détaillées et fiscales.
      </p>
    </div>
  );
};

export default CantonSelector;
