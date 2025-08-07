import { FoodCard } from "@/components/admin/foods/FoodCard";
import { foods } from "@/constants/foods";
import { AddFoodPopover } from "@/components/admin/foods/AddFoodPopover";
import type { IFood } from "@/types/admin";

export default function Foods() {
  return (
    <>
      <div className="flex items-center justify-between pb-4">
        <h3 className="text-xl md:text-2xl font-bold">Foods page</h3>
        <AddFoodPopover />
      </div>
      <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(280px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
        {foods.map((food: IFood) => (
          <FoodCard key={food.foodId} {...food} />
        ))}
      </div>
    </>
  );
}