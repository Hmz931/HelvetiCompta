
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useMobile } from '@/hooks/use-mobile';
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
  BuildingLibrary,
  Award,
  FileSpreadsheet
} from 'lucide-react';

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar = ({ onClose }: SidebarProps) => {
  const location = useLocation();
  const isMobile = useMobile();
  
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
      case 'administrations': return <BuildingLibrary size={size} />;
      case 'quiz': return <Award size={size} />;
      case 'excel-converter': return <FileSpreadsheet size={size} />;
      default: return null;
    }
  };

  const navItems = [
    { name: 'Formation', path: '/formation', icon: 'formation' },
    { name: 'Abacus', path: '/abacus', icon: 'abacus', 
      subitems: [
        { name: 'Documentation', path: '/abacus' },
        { name: 'Excel Converter', path: '/abacus/excel-converter', icon: 'excel-converter' }
      ] 
    },
    { name: 'Yooz', path: '/yooz', icon: 'yooz' },
    { name: 'Lexique', path: '/lexique', icon: 'lexique' },
    { name: 'Plan Comptable', path: '/plan-comptable', icon: 'plan-comptable' },
    { name: 'Ressources', path: '/ressources', icon: 'ressources',
      subitems: [
        { name: 'Templates', path: '/templates', icon: 'templates' },
        { name: 'Administrations', path: '/ressources/administrations', icon: 'administrations' },
        { name: 'Carte Suisse', path: '/ressources/carte', icon: 'carte' }
      ]
    },
    { name: 'Quiz', path: '/formation/quiz', icon: 'quiz' },
  ];

  return (
    <div className={cn(
      "w-full md:w-64 flex-shrink-0 bg-sidebar-background border-r border-sidebar-border",
      "md:relative md:h-auto overflow-hidden",
      isMobile ? "fixed inset-0 z-50" : "hidden md:block"
    )}>
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
      <ScrollArea className="h-[calc(100vh-5rem)] md:h-[calc(100vh-8rem)]">
        <div className="py-4 px-3">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <React.Fragment key={item.name}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                    isActive(item.path) && !item.subitems
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
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
                            ? "bg-sidebar-accent text-sidebar-accent-foreground"
                            : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
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
