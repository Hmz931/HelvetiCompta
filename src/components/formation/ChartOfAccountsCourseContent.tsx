
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ChartOfAccounts from './chart-of-accounts/ChartOfAccounts';

const ChartOfAccountsCourseContent = () => {
  return (
    <div className="space-y-8">
      <Card className="shadow-md border-0 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-swiss-blue/15 to-swiss-blue/5 border-b border-gray-200">
          <CardTitle className="text-2xl font-bold text-swiss-dark">Plan Comptable Suisse</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="prose max-w-none">
            <p>
              Le plan comptable suisse est un référentiel standardisé de numérotation et d'organisation des comptes 
              utilisés par les entreprises en Suisse. Il est structuré selon les classes 1 à 9, chacune représentant 
              un type spécifique d'actifs, passifs, produits ou charges.
            </p>
            
            <p>
              Ce plan facilite l'harmonisation des pratiques comptables et permet une meilleure comparabilité 
              des états financiers entre les entreprises suisses. Il constitue un outil essentiel pour la tenue 
              de la comptabilité et la préparation des rapports financiers conformes aux exigences légales suisses.
            </p>
          </div>
        </CardContent>
      </Card>
      
      <ChartOfAccounts />
    </div>
  );
};

export default ChartOfAccountsCourseContent;
