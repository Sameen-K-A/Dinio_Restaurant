import { Sheet, SheetContent, SheetHeader, SheetClose, SheetTrigger } from '@/components/ui/sheet';
import type { IsidebarItems } from '@/types/admin';
import { ChevronLeft, Menu } from 'lucide-react';

interface MobileSheetProps {
  sidebarData: IsidebarItems[];
}

export function MobileSheet({ sidebarData }: MobileSheetProps) {
  return (
    <Sheet>
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
          {sidebarData.map((item) => (
            <button
              key={item.title}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted text-left transition-colors"
              onClick={item.onClick}
            >
              {item.icon && <item.icon />}
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};