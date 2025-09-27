import React from "react";
import { CategoryTable } from "@/components/category/CategoryTable";
import { mockCategories } from "../constants/category";
import { Button } from "@/components/ui/button";

const Categories: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-between pb-4">
        <h3 className="text-xl md:text-2xl font-bold">Categories</h3>
        <Button
          variant="default"
          className="font-semibold px-6 py-2 rounded-lg transition-all duration-200 bg-accent-foreground text-accent cursor-pointer border-0"
        >
          + Add Category
        </Button>
      </div>
      <CategoryTable data={mockCategories} />
    </>
  );
};

export default Categories;