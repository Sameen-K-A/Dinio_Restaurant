import { Sheet, SheetContent, SheetHeader, SheetClose, SheetTrigger } from '@/components/ui/sheet';
import type { IsidebarItems } from '@/types/admin';
import { ChevronLeft, Menu } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import * as React from 'react';

interface MobileSheetProps {
  sidebarData: IsidebarItems[];
}

export function MobileSheet({ sidebarData }: MobileSheetProps) {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  const handleItemClick = (item: IsidebarItems) => {
    item.onClick();
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="p-2 rounded-md border bg-background"
          aria-label="Open menu"
        >
          <Menu size={18} />
        </button>
      </SheetTrigger>
      <SheetContent side="right" showCloseIcon={false} className="p-0 w-screen max-w-full">
        <SheetHeader className="flex flex-row px-4 pt-4">
          <SheetClose asChild>
            <button className="p-2 rounded-md border bg-background hover:bg-muted transition-colors" aria-label="Back">
              <ChevronLeft size={18} />
            </button>
          </SheetClose>
        </SheetHeader>
        <div className="px-4 flex flex-col gap-2">
          {sidebarData.map((item) => {
            const isActive = location.pathname === item.url;
            return (
              <button
                key={item.title}
                className={`flex items-center gap-2 p-2 rounded-lg text-left transition-colors hover:bg-muted ${isActive ? 'bg-muted font-semibold text-primary' : ''} ${item.isAvailable ? "hover:bg-muted" : "bg-muted/20 cursor-not-allowed hover:bg-muted/20 text-muted-foreground hover:text-muted-foreground line-through"}`}
                onClick={() => item.isAvailable && handleItemClick(item)}
              >
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};