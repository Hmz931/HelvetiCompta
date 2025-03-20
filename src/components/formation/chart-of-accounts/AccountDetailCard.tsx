
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { AccountItem } from '@/data/courses/fullChartOfAccounts';

interface AccountDetailCardProps {
  account: AccountItem;
  onBack: () => void;
}

const AccountDetailCard = ({ account, onBack }: AccountDetailCardProps) => {
  // Déterminer la couleur de la catégorie
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      '1': 'bg-blue-100 text-blue-700',
      '2': 'bg-green-100 text-green-700',
      '3': 'bg-purple-100 text-purple-700',
      '4': 'bg-orange-100 text-orange-700',
      '5': 'bg-pink-100 text-pink-700',
      '6': 'bg-yellow-100 text-yellow-700',
      '7': 'bg-indigo-100 text-indigo-700',
      '8': 'bg-red-100 text-red-700',
      '9': 'bg-gray-100 text-gray-700',
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <Card className="shadow-md border-0 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-swiss-blue/15 to-swiss-blue/5 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            className="p-0 h-8 w-8 rounded-full" 
            onClick={onBack}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <CardTitle className="text-2xl font-bold text-swiss-dark">
            Détail du compte
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex flex-col space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-sm text-gray-500">Numéro de compte</div>
              <div className="text-2xl font-mono font-bold">{account.number}</div>
            </div>
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(account.category)}`}>
              Classe {account.category}
            </div>
          </div>
          
          <div>
            <div className="text-sm text-gray-500">Titre du compte</div>
            <div className="text-xl font-medium">{account.title}</div>
          </div>
          
          {account.description && (
            <div>
              <div className="text-sm text-gray-500">Description</div>
              <div className="text-base mt-1 text-gray-700">{account.description}</div>
            </div>
          )}
          
          <div className="pt-4 border-t border-gray-200">
            <h3 className="font-medium text-gray-900 mb-2">Utilisation typique</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-3 rounded-md">
                <div className="font-medium text-green-800 mb-1">Au débit</div>
                <p className="text-sm text-gray-700">
                  {account.category === '1' ? 'Augmentation des actifs' : 
                   account.category === '2' ? 'Diminution des passifs' : 
                   account.category === '3' ? 'Contre-passations, annulations' :
                   'Enregistrement des charges'}
                </p>
              </div>
              <div className="bg-red-50 p-3 rounded-md">
                <div className="font-medium text-red-800 mb-1">Au crédit</div>
                <p className="text-sm text-gray-700">
                  {account.category === '1' ? 'Diminution des actifs' : 
                   account.category === '2' ? 'Augmentation des passifs' : 
                   account.category === '3' ? 'Enregistrement des produits' :
                   'Contre-passations, annulations'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountDetailCard;
