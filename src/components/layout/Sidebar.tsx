
import React from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useIsMobile } from '@/hooks/use-mobile';
import SidebarNavigation from './sidebar/SidebarNavigation';

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar = ({ onClose }: SidebarProps) => {
  const isMobile = useIsMobile();

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
          <SidebarNavigation />
        </div>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;
