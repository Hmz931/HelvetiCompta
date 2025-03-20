
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronRight } from 'lucide-react';
import SidebarSubItems from './SidebarSubItems';

interface SidebarSectionItemProps {
  item: {
    name: string;
    path: string;
    icon: string;
    subitems?: Array<{
      name: string;
      path: string;
      icon?: string;
    }>;
  };
  isActive: (path: string) => boolean;
  getIcon: (name: string) => React.ReactNode;
  isSectionExpanded: (path: string) => boolean;
  toggleSection: (path: string) => void;
}

const SidebarSectionItem: React.FC<SidebarSectionItemProps> = ({
  item,
  isActive,
  getIcon,
  isSectionExpanded,
  toggleSection,
}) => {
  if (item.subitems) {
    return (
      <div className="mb-1">
        <button
          onClick={() => toggleSection(item.path)}
          className={cn(
            "flex items-center justify-between gap-3 rounded-md px-3 py-2 text-sm font-medium w-full",
            isActive(item.path) && !isSectionExpanded(item.path)
              ? "bg-swiss-blue text-white"
              : "text-sidebar-foreground hover:bg-swiss-blue/10 hover:text-swiss-blue"
          )}
        >
          <div className="flex items-center gap-3">
            {getIcon(item.icon)}
            {item.name}
          </div>
          {isSectionExpanded(item.path) ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </button>
        
        {isSectionExpanded(item.path) && (
          <SidebarSubItems 
            subitems={item.subitems} 
            isActive={isActive} 
            getIcon={getIcon}
          />
        )}
      </div>
    );
  }

  return (
    <Link
      to={item.path}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
        isActive(item.path)
          ? "bg-swiss-blue text-white"
          : "text-sidebar-foreground hover:bg-swiss-blue/10 hover:text-swiss-blue"
      )}
    >
      {getIcon(item.icon)}
      {item.name}
    </Link>
  );
};

export default SidebarSectionItem;
