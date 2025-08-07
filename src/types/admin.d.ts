export type Employee = {
   empId: string;
   name: string;
   phone: string;
   joiningDate: string;
   status: 'Working' | 'Terminated';
};

export interface IsidebarItems {
   title: string;
   url: string;
   icon: React.ElementType;
   onClick: () => void;
};

export interface IFood {
   foodId: string;
   name: string;
   amount: number;
   quantity: number;
   image: string | undefined;
};

export type OrderItem = {
   name: string;
   image: string;
   quantity: number;
};

export type Order = {
   orderId: string;
   items: OrderItem[];
   tableNo: string;
   status: 'All Orders' | 'Pending' | 'Cancelled';
};