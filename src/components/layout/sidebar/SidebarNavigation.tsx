
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SidebarSectionItem from './SidebarSectionItem';
import getIcon from './SidebarIconProvider';
import { navItems } from './SidebarData';

const SidebarNavigation: React.FC = () => {
  const location = useLocation();
  
  // State to track which sections are expanded
  const [expandedSections, setExpandedSections] = useState<string[]>(() => {
    // Initialize with sections that should be expanded based on current route
    const path = location.pathname;
    return navItems
      .filter(item => item.subitems && path.startsWith(item.path))
      .map(item => item.path);
  });
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const toggleSection = (path: string) => {
    setExpandedSections(prev => {
      if (prev.includes(path)) {
        return prev.filter(p => p !== path);
      } else {
        return [...prev, path];
      }
    });
  };

  const isSectionExpanded = (path: string) => {
    return expandedSections.includes(path);
  };

  return (
    <nav className="space-y-1">
      {navItems.map((item) => (
        <SidebarSectionItem 
          key={item.name}
          item={item} 
          isActive={isActive} 
          getIcon={getIcon} 
          isSectionExpanded={isSectionExpanded}
          toggleSection={toggleSection}
        />
      ))}
    </nav>
  );
};

export default SidebarNavigation;
