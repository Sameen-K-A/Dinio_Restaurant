import type { IFood } from "@/types/admin";

export const foods: IFood[] = [
  {
    foodId: "1",
    name: "Margherita Pizza",
    amount: 12.99,
    quantity: 10,
    image: "https://cb.scene7.com/is/image/Crate/frame-margherita-pizza-1?wid=800&qlt=70&op_sharpen=1"
  },
  {
    foodId: "2",
    name: "Veggie Burger",
    amount: 9.49,
    quantity: 15,
    image: "https://www.realsimple.com/thmb/z3cQCYXTyDQS9ddsqqlTVE8fnpc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/real-simple-mushroom-black-bean-burgers-recipe-0c365277d4294e6db2daa3353d6ff605.jpg"
  },
  {
    foodId: "3",
    name: "Caesar Salad",
    amount: 7.99,
    quantity: 20,
    image: "https://cdn.loveandlemons.com/wp-content/uploads/2024/12/caesar-salad.jpg"
  },
  {
    foodId: "4",
    name: "Grilled Sandwich",
    amount: 8.99,
    quantity: 12,
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2014/01/grilled-sandwich-4.jpg"
  },
  {
    foodId: "5",
    name: "Pasta Alfredo",
    amount: 11.49,
    quantity: 8,
    image: "https://s3.amazonaws.com/static.realcaliforniamilk.com/media/recipes_2/fettuccine-alfredo-with-creme-fraiche.jpg"
  }
];
