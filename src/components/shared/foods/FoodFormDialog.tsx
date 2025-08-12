
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState, type FC } from "react";
import type { IFood } from "@/types/admin";

interface FoodFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode?: "add" | "edit";
  initialValues?: IFood;
};

export const FoodFormDialog: FC<FoodFormDialogProps> = ({ open, onOpenChange, mode = "add", initialValues }) => {
  const [form, setForm] = useState({
    name: initialValues?.name || "",
    amount: initialValues?.amount ?? "",
    quantity: initialValues?.quantity ?? "",
    image: initialValues?.image || undefined,
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setForm((prev) => ({ ...prev, image: url }));
    }
  };

  const handleSave = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-full">
        <DialogHeader>
          <DialogTitle>{mode === "edit" ? "Edit Food Item" : "Add Food Item Manually"}</DialogTitle>
          <DialogDescription>
            {mode === "edit"
              ? "Update the details of this food item."
              : "Fill out the form below to add a new food item."}
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col md:flex-row gap-2 py-2" onSubmit={e => { e.preventDefault(); handleSave(); }}>

          <div className="flex flex-col items-center md:items-start md:w-1/3 w-full">
            <div className="w-32 h-32 rounded-xl bg-muted flex items-center justify-center overflow-hidden mb-3 border">
              <img
                src={form.image ?? "/placeholder/placeholder.svg"}
                alt={form.name}
                className="object-cover w-full h-full"
                onError={e => (e.currentTarget.src = "/placeholder/placeholder.svg")}
              />
            </div>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="food-image-upload"
              onChange={handleImageChange}
            />
            <Button
              type="button"
              className="w-32"
              onClick={() => document.getElementById('food-image-upload')?.click()}
            >
              Upload Image
            </Button>
          </div>

          <div className="flex-1 space-y-2">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="food-name">Name</label>
              <input
                id="food-name"
                name="name"
                value={form.name}
                className="w-full border rounded px-3 py-2 bg-background text-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="food-amount">Price</label>
              <input
                id="food-amount"
                name="amount"
                type="number"
                value={form.amount}
                className="w-full border rounded px-3 py-2 bg-background text-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="food-quantity">Quantity</label>
              <input
                id="food-quantity"
                name="quantity"
                type="number"
                value={form.quantity}
                className="w-full border rounded px-3 py-2 bg-background text-foreground"
              />
            </div>
            <div className="flex gap-2 pt-2">
              <Button type="button" variant="outline" className="flex-1" onClick={() => onOpenChange(false)}>
                Close
              </Button>
              <Button type="submit" className="flex-1">
                Save
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};