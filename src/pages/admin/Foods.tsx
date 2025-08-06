import { FoodCard } from "@/components/admin/foods/FoodCard";
import { foods } from "@/constants/foods";

export default function Foods() {
  return (
    <>
      <h3 className="text-xl md:text-2xl pb-4 font-bold">Foods page</h3>
      <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(280px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
        {foods.map((food) => (
          <FoodCard key={food.name} {...food} />
        ))}
      </div>
    </>
  );
}