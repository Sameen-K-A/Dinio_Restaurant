import { LayoutGrid, List } from 'lucide-react';

interface Category {
  label: string;
  count: number;
}

interface CategoriesTabsProps {
  categories: Category[];
  active: string;
  setActive: (label: string) => void;
  view: 'grid' | 'table';
  setView: (view: 'grid' | 'table') => void;
}

export function CategoriesTabs({ categories, active, setActive, view, setView }: CategoriesTabsProps) {
  return (
    <div className="flex w-full items-center justify-between mb-4 gap-2">
      <div className="flex-1 min-w-0">
        <div className="flex gap-2 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-muted/40 scrollbar-track-transparent pr-2">
          {categories.map((cat) => (
            <button
              key={cat.label}
              className={`relative px-2 py-1 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${active === cat.label ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
              onClick={() => setActive(cat.label)}
            >
              {cat.label}
              <span className={`ml-1 text-xs rounded px-1 ${active === cat.label ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>{cat.count}</span>
              {active === cat.label && <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary rounded" />}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-shrink-0 flex gap-1">
        <button onClick={() => setView('grid')} className={`p-2 rounded border cursor-pointer ${view === 'grid' ? 'bg-muted' : ''}`}><LayoutGrid size={18} /></button>
        <button onClick={() => setView('table')} className={`p-2 rounded border cursor-pointer ${view === 'table' ? 'bg-muted' : ''}`}><List size={18} /></button>
      </div>
    </div>
  );
};