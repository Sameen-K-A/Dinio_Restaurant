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