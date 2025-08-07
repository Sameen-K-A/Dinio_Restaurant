import type { Order } from '@/types/admin';

interface OrderGridProps {
  orders: Order[];
}

export function OrderGrid({ orders }: OrderGridProps) {
  return (
    <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(280px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
      {orders.map((order) => (
        <div
          key={order.orderId}
          className="relative rounded-2xl border bg-background p-6 flex flex-col group"
        >

          <span className="absolute top-4 left-4 bg-muted text-muted-foreground text-xs font-mono px-2 py-1 rounded border select-none">
            #{order.orderId}
          </span>

          <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full select-none">
            Table {order.tableNo}
          </span>

          <div className="flex items-center justify-center gap-1 mt-8 mb-3 min-h-[56px]">
            {order.items.slice(0, 2).map((item, idx) => (
              <img
                key={idx}
                src={item.image}
                alt={item.name}
                className="h-14 w-14 rounded-lg object-cover"
              />
            ))}
            {order.items.length > 2 && (
              <span className="h-14 w-14 rounded-lg flex items-center justify-center bg-muted text-base text-muted-foreground border font-semibold">
                +{order.items.length - 2}
              </span>
            )}
          </div>

          <div className="text-center text-lg text-foreground font-bold mb-2">
            {order.items[0]?.name}
            {order.items.length > 1 && (
              <span className="text-muted-foreground font-normal ml-1">and {order.items.length - 1} more</span>
            )}
          </div>

          <button
            className="mt-auto w-full py-2 rounded-lg bg-primary text-primary-foreground font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer text-base hover:scale-[1.03]"
          >
            <span>Next</span>
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary-foreground"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      ))}
    </div>
  );
}