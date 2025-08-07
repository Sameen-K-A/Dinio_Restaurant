import { useParams, useNavigate } from 'react-router-dom';
import { orders } from '@/constants/orders';
import { foods } from '@/constants/foods';
import { useState } from 'react';
import type { IFood } from '@/types/admin';
import { Button } from '@/components/ui/button';
import { ChevronLeft, X } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function OrderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const order = orders.find(o => o.orderId === id);
  const [items, setItems] = useState(order ? [...order.items] : []);

  if (!order) return <div className="p-8">Order not found</div>;

  const handleAddItem = (food: IFood) => {
    setItems(prev => [
      ...prev,
      {
        name: food.name,
        image: food.image || '',
        quantity: 1
      }
    ]);
  };

  const handleRemoveItem = (idx: number) => {
    setItems(prev => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1">
        <div className='flex items-center gap-2'>
          <button
            className="p-2 rounded-md cursor-pointer border bg-background hover:bg-muted transition-colors"
            aria-label="Back"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft size={18} />
          </button>
          <h2 className="text-2xl font-bold">Order #{order.orderId}</h2>
        </div>
        <div className="mb-2 ml-11 text-muted-foreground">Table No: <span className="font-semibold">{order.tableNo}</span></div>
        <Separator className="my-2 mb-5" />
        <div className="lg:flex md:gap-2">
          <div className="lg:w-2/3 w-full mb-2 lg:mb-0">
            <h3 className="font-semibold mb-2">Choosed items</h3>
            <div className="rounded-lg border bg-background">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="px-4 w-8"></TableHead>
                    <TableHead className='pe-4'>Item</TableHead>
                    <TableHead className="text-end px-4 pe-15">Quantity</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {items.map((item, idx) => (
                    <TableRow key={idx} className='not-odd:bg-muted/50'>
                      <TableCell>
                        <button
                          className="w-6 h-6 flex items-center justify-center rounded-sm text-destructive hover:bg-destructive/10 transition cursor-pointer"
                          aria-label="Remove item"
                          type="button"
                          onClick={() => handleRemoveItem(idx)}
                        >
                          <X size={15} />
                        </button>
                      </TableCell>
                      <TableCell className='flex items-center gap-2 pe-4'>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-14 h-14 rounded-lg object-cover border bg-muted"
                          onError={e => { e.currentTarget.src = '/placeholder/placeholder.svg'; }}
                        />
                        <span className='text-sm font-bold line-clamp-1'>{item.name}</span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-0.5 mt-2 justify-end">
                          <button
                            className="w-8 h-8 border flex items-center justify-center rounded-sm bg-muted hover:bg-muted-foreground/10 transition cursor-pointer"
                            aria-label="Decrease quantity"
                            type="button"
                            onClick={() => setItems(prev => prev.map((it, i) => i === idx ? { ...it, quantity: Math.max(1, it.quantity - 1) } : it))}
                          >
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" >
                              <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                          </button>
                          <input
                            type="text"
                            value={item.quantity}
                            className="w-20 text-center border rounded-sm bg-background text-base font-semibold text-primary px-2 py-1 focus:outline-none shadow-none"
                            readOnly
                          />
                          <button
                            className="w-8 h-8 border flex items-center justify-center rounded-sm bg-muted hover:bg-muted-foreground/10 transition cursor-pointer"
                            aria-label="Increase quantity"
                            type="button"
                            onClick={() => setItems(prev => prev.map((it, i) => i === idx ? { ...it, quantity: it.quantity + 1 } : it))}
                          >
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                              <line x1="12" y1="5" x2="12" y2="19" />
                              <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
          <div className="lg:w-1/3 w-full flex flex-col">
            <h3 className="font-semibold mb-2">Add items</h3>
            <div className="mb-4">
              <Command className="rounded-lg border w-full ">
                <CommandInput placeholder="Search food..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  {foods.filter(food => !items.some(item => item.name === food.name)).length > 0 && (
                    <CommandGroup heading="Menu">
                      {foods.filter(food => !items.some(item => item.name === food.name)).map(food => (
                        <CommandItem
                          key={food.foodId}
                          onSelect={() => handleAddItem(food)}
                          className="cursor-pointer"
                        >
                          <img
                            src={food.image}
                            alt={food.name}
                            className="w-14 h-14 rounded-lg object-cover border bg-muted"
                            onError={e => { e.currentTarget.src = '/placeholder/placeholder.svg'; }}
                          />
                          <span>{food.name}</span>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  )}
                </CommandList>
              </Command>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky bottom-0 left-0 w-full bg-background z-10 flex gap-1 py-2 pt-2 sm:pt-4 border-t justify-end">
        <Button className="w-1/2 sm:w-[130px]" variant="destructive" onClick={() => navigate(-1)}>Decline</Button>
        <Button className="w-1/2 sm:w-[130px]" onClick={() => {/* approve logic */ }}>Approve</Button>
      </div>
    </div>
  );
}