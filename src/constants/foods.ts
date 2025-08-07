import type { IFood } from "@/types/admin";

export const foods: IFood[] = [
  {
    foodId: "1",
    name: "Margherita Pizza",
    amount: 12.99,
    quantity: 10,
    image: "/images/foods/margherita.jpg"
  },
  {
    foodId: "2",
    name: "Veggie Burger",
    amount: 9.49,
    quantity: 15,
    image: "/images/foods/veggie-burger.jpg"
  },
  {
    foodId: "3",
    name: "Caesar Salad",
    amount: 7.99,
    quantity: 20,
    image: "/images/foods/caesar-salad.jpg"
  },
  {
    foodId: "4",
    name: "Grilled Sandwich",
    amount: 8.99,
    quantity: 12,
    image: "/images/foods/grilled-sandwich.jpg"
  },
  {
    foodId: "5",
    name: "Pasta Alfredo",
    amount: 11.49,
    quantity: 8,
    image: "/images/foods/pasta-alfredo.jpg"
  }
];
