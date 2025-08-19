import type { Order } from '../types/admin';

export const orders: Order[] = [
  {
    orderId: 'ORD001',
    items: [
      { name: 'Pizza', image: 'https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/26/d112a6d7-d173-4ca7-a5ee-40f845719d18_710674.JPG', quantity: 2 },
      { name: 'Burger', image: 'https://cb.scene7.com/is/image/Crate/frame-margherita-pizza-1?wid=800&qlt=70&op_sharpen=1', quantity: 1 },
      { name: 'Fries', image: 'https://www.recipetineats.com/tachyon/2022/09/Crispy-Fries_8.jpg', quantity: 3 },
    ],
    tableNo: '12',
    status: 'All Orders',
  },
  {
    orderId: 'ORD002',
    items: [
      { name: 'Pasta', image: 'https://s3.amazonaws.com/static.realcaliforniamilk.com/media/recipes_2/fettuccine-alfredo-with-creme-fraiche.jpg', quantity: 1 },
    ],
    tableNo: '7',
    status: 'Pending',
  },
  {
    orderId: 'ORD003',
    items: [
      { name: 'Salad', image: 'https://cdn.loveandlemons.com/wp-content/uploads/2024/12/caesar-salad.jpg', quantity: 2 },
      { name: 'Soup', image: 'https://www.allrecipes.com/thmb/p4F_knUDCrUNusNOTyjY_dCp8d4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/13338-quick-and-easy-vegetable-soup-DDMFS-4x3-402702f59e7a41519515cecccaba1b80.jpg', quantity: 1 },
    ],
    tableNo: '3',
    status: 'Pending',
  },
  {
    orderId: 'ORD004',
    items: [
      { name: 'Steak', image: 'https://justcook.butcherbox.com/wp-content/uploads/2019/11/Perfect-Pan-Seared-Ribeye-Steak.jpg', quantity: 1 },
    ],
    tableNo: '5',
    status: 'Pending',
  },
  {
    orderId: 'ORD005',
    items: [
      { name: 'Fish', image: 'https://www.thetakeiteasychef.com/wp-content/uploads/2017/12/KFF-FI1-Compressed.jpg', quantity: 2 },
      { name: 'Chips', image: 'https://www.justspices.co.uk/media/recipe/oven-chips-with-homemade-ketchup.jpg', quantity: 1 },
      { name: 'Margherita Pizza', image: 'https://cb.scene7.com/is/image/Crate/frame-margherita-pizza-1?wid=800&qlt=70&op_sharpen=1', quantity: 2 },
      { name: 'Edamame', image: 'https://beinspired.au/wp-content/uploads/2022/05/Edamame-w-Furikake.jpeg', quantity: 1 },
    ],
    tableNo: '8',
    status: 'Cancelled',
  },
];