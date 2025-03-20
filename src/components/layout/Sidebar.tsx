
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { X } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

import { 
  Book, 
  Database, 
  Laptop,
  BookOpen, 
  FileText, 
  List, 
  HelpCircle, 
  Map, 
  Building,
  Award,
  FileSpreadsheet
} from 'lucide-react';

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar = ({ onClose }: SidebarProps) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const getIcon = (name: string) => {
    const size = 20;
    switch (name) {
      case 'formation': return <Book size={size} />;
      case 'abacus': return <Database size={size} />;
      case 'yooz': return <Laptop size={size} />;
      case 'lexique': return <BookOpen size={size} />;
      case 'ressources': return <HelpCircle size={size} />;
      case 'templates': return <FileText size={size} />;
      case 'plan-comptable': return <List size={size} />;
      case 'carte': return <Map size={size} />;
      case 'administrations': return <Building size={size} />;
      case 'quiz': return <Award size={size} />;
      case 'excel-converter': return <FileSpreadsheet size={size} />;
      default: return null;
    }
  };

  const navItems = [
    { name: 'Formation', path: '/formation', icon: 'formation', 
      subitems: [
        { name: 'Aperçu', path: '/formation' },
        { name: 'Introduction à la comptabilité', path: '/formation/intro', icon: 'formation' },
        { name: 'Les comptes et leur classification', path: '/formation/chart-of-accounts', icon: 'plan-comptable' },
        { name: 'Les écritures comptables et le journal', path: '/formation/journal', icon: 'formation' },
        { name: 'Les charges, produits et le résultat', path: '/formation/income-expenses', icon: 'formation' },
        { name: 'Le calcul des intérêts', path: '/formation/interests', icon: 'formation' },
        { name: 'Les actifs et passifs transitoires', path: '/formation/transitional', icon: 'formation' },
        { name: 'Pertes sur créances et provisions', path: '/formation/provisions', icon: 'formation' },
        { name: 'Balance et clôture', path: '/formation/closing', icon: 'formation' },
        { name: 'La TVA', path: '/formation/tax', icon: 'formation' },
        { name: 'Les formes juridiques', path: '/formation/legal-forms', icon: 'formation' },
        { name: 'Sociétés de personnes', path: '/formation/partnerships', icon: 'formation' },
        { name: 'Sociétés anonymes (SA)', path: '/formation/corporations', icon: 'formation' },
        { name: 'Sociétés à responsabilité limitée (Sàrl)', path: '/formation/llc', icon: 'formation' },
        { name: 'Les amortissements', path: '/formation/depreciation', icon: 'formation' },
        { name: 'Ratios et indicateurs financiers', path: '/formation/financial-ratios', icon: 'formation' },
        { name: 'Quiz', path: '/formation/quiz', icon: 'quiz' }
      ]
    },
    { name: 'Abacus', path: '/abacus', icon: 'abacus', 
      subitems: [
        { name: 'Documentation', path: '/abacus' },
        { name: 'Excel Converter', path: '/abacus/excel-converter', icon: 'excel-converter' }
      ] 
    },
    { name: 'Yooz', path: '/yooz', icon: 'yooz' },
    { name: 'Lexique', path: '/lexique', icon: 'lexique' },
    { name: 'Ressources', path: '/ressources', icon: 'ressources',
      subitems: [
        { name: 'Templates', path: '/templates', icon: 'templates' },
        { name: 'Administrations', path: '/ressources/administrations', icon: 'administrations' },
        { name: 'Carte Suisse', path: '/ressources/carte', icon: 'carte' }
      ]
    },
  ];

  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      {isMobile && (
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          <h2 className="font-semibold">Navigation</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-7 w-7"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Fermer le menu</span>
          </Button>
        </div>
      )}
      <ScrollArea className="h-[calc(100vh-12rem)] md:h-[calc(100vh-8rem)]">
        <div className="py-4 px-3">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <React.Fragment key={item.name}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                    isActive(item.path) && !item.subitems
                      ? "bg-swiss-blue text-white"
                      : "text-sidebar-foreground hover:bg-swiss-blue/10 hover:text-swiss-blue"
                  )}
                >
                  {getIcon(item.icon)}
                  {item.name}
                </Link>
                {item.subitems && (
                  <div className="ml-6 mt-1 space-y-1">
                    {item.subitems.map((subitem) => (
                      <Link
                        key={subitem.name}
                        to={subitem.path}
                        className={cn(
                          "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                          isActive(subitem.path)
                            ? "bg-swiss-blue text-white"
                            : "text-sidebar-foreground hover:bg-swiss-blue/10 hover:text-swiss-blue"
                        )}
                      >
                        {subitem.icon && getIcon(subitem.icon)}
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;
