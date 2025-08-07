import type { Order } from '../types/admin';

export const orders: Order[] = [
  {
    orderId: 'ORD001',
    items: [
      { name: 'Pizza', image: '/placeholder/placeholder.svg', quantity: 2 },
      { name: 'Burger', image: '/placeholder/placeholder.svg', quantity: 1 },
      { name: 'Fries', image: '/placeholder/placeholder.svg', quantity: 3 },
    ],
    tableNo: '12',
    status: 'All Orders',
  },
  {
    orderId: 'ORD002',
    items: [
      { name: 'Pasta', image: '/placeholder/placeholder.svg', quantity: 1 },
    ],
    tableNo: '7',
    status: 'Pending',
  },
  {
    orderId: 'ORD003',
    items: [
      { name: 'Salad', image: '/placeholder/placeholder.svg', quantity: 2 },
      { name: 'Soup', image: '/placeholder/placeholder.svg', quantity: 1 },
    ],
    tableNo: '3',
    status: 'Pending',
  },
  {
    orderId: 'ORD004',
    items: [
      { name: 'Steak', image: '/placeholder/placeholder.svg', quantity: 1 },
    ],
    tableNo: '5',
    status: 'Pending',
  },
  {
    orderId: 'ORD005',
    items: [
      { name: 'Fish', image: '/placeholder/placeholder.svg', quantity: 2 },
      { name: 'Chips', image: '/placeholder/placeholder.svg', quantity: 1 },
      { name: 'Cola', image: '/placeholder/placeholder.svg', quantity: 2 },
      { name: 'Ice Cream', image: '/placeholder/placeholder.svg', quantity: 1 },
    ],
    tableNo: '8',
    status: 'Cancelled',
  },
];