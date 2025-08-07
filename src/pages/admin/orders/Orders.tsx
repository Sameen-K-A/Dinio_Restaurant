import { useState } from 'react';
import { orders } from '@/constants/orders';
import { OrderTable } from '@/components/admin/orders/OrderTable';
import { OrderGrid } from '@/components/admin/orders/OrderGrid';
import { CategoriesTabs } from '@/components/admin/orders/CategoriesTabs';

const categories = [
  { label: 'All Orders', count: 224 },
  { label: 'Pending', count: 64 },
  { label: 'Cancelled', count: 12 },
];

export default function Orders() {
  const [view, setView] = useState<'grid' | 'table'>('table');
  const [active, setActive] = useState('All Orders');

  return (
    <div>
      <h3 className="text-xl md:text-2xl font-bold mb-2">Orders</h3>
      <CategoriesTabs
        categories={categories}
        active={active}
        setActive={setActive}
        view={view}
        setView={setView}
      />
      {view === 'table' ? (
        <OrderTable orders={orders.filter(o => active === 'All Orders' ? true : o.status === active)} />
      ) : (
        <OrderGrid orders={orders.filter(o => active === 'All Orders' ? true : o.status === active)} />
      )}
    </div>
  );
}