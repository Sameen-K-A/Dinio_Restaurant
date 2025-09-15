export interface IsidebarItems {
   title: string;
   url: string;
   icon: React.ElementType;
   onClick: () => void;
   isAvailable: boolean,
};

export interface ICategory {
   catId: string;
   name: string;
};

export interface IFood {
   foodId: string;
   image: string;
   name: string;
   description: string;
   category: ICategory;
   amount: number;
   isVisible: boolean;
};

export interface IRestaurant {
   id: string;
   restaurantName: string;
   ownerName: string;
   contact: string;
   numberOfTables: number;
   subscriptionExpiryDate: string;
   address: string;
   totalOrders: number;
   avgRating: number;
};