
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface SidebarSubItemsProps {
  subitems: Array<{
    name: string;
    path: string;
    icon?: string;
  }>;
  isActive: (path: string) => boolean;
  getIcon: (name: string) => React.ReactNode;
}

const SidebarSubItems: React.FC<SidebarSubItemsProps> = ({ 
  subitems, 
  isActive, 
  getIcon 
}) => {
  return (
    <div className="ml-6 mt-1 space-y-1">
      {subitems.map((subitem) => (
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
  );
};

export default SidebarSubItems;
