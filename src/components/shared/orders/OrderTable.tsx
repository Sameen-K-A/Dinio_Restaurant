import type { Order } from '@/types/admin';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface OrderTableProps {
  orders: Order[];
}

export function OrderTable({ orders }: OrderTableProps) {
  const navigate = useNavigate();
  return (
    <div className="w-full overflow-x-auto rounded-lg border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left px-4 py-2 whitespace-nowrap w-[80px]">Order ID</TableHead>
            <TableHead className="text-left px-4 py-2 whitespace-nowrap">Items</TableHead>
            <TableHead className="text-end px-4 py-2 whitespace-nowrap">Table No</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order.orderId}
              className="not-odd:bg-muted/50 hover:bg-muted transition-colors duration-200 cursor-pointer"
              onClick={() => navigate(`/orders/${order.orderId}`)}
            >
              <TableCell className="text-left px-4 py-2 whitespace-nowrap font-mono text-xs text-muted-foreground">{order.orderId}</TableCell>
              <TableCell className="text-left px-4 py-2 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex gap-2 min-w-[156px] h-12 items-center">
                    {order.items.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-center min-w-[48px]">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-12 w-12 rounded-md object-cover border border-muted"
                          style={{ zIndex: 10 - idx }}
                        />
                      </div>
                    ))}
                    {order.items.length > 2 && (
                      <span className="h-12 w-12 rounded-md flex items-center justify-center bg-muted text-base text-muted-foreground border font-semibold">
                        +{order.items.length - 2}
                      </span>
                    )}
                  </div>
                  <div className="pl-4 flex-1 flex items-center h-12">
                    <span className="text-base text-foreground font-bold leading-tight">
                      {order.items[0]?.name}
                      {order.items.length > 1 && (
                        <span className="text-base text-muted-foreground font-normal ml-1"> and {order.items.length - 1} more</span>
                      )}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-end px-4 py-2 whitespace-nowrap">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-accent-foreground text-base text-accent border border-muted font-semibold">
                  {order.tableNo}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}