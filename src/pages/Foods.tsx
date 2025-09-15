import FoodsTable from "@/components/foods/FoodTable";
import { Button } from "@/components/ui/button";
import { foods } from "@/constants/foods";

export default function Foods() {
  return (
    <>
      <div className="flex items-center justify-between pb-4">
        <h3 className="text-xl md:text-2xl font-bold">Foods Items</h3>
        <Button
          variant="default"
          className="font-semibold px-6 py-2 rounded-lg transition-all duration-200 bg-accent-foreground text-accent cursor-pointer border-0"
        >
          + Add Items
        </Button>
      </div>
      <FoodsTable foods={foods} />
    </>
  );
}