import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { FoodFormDialog } from "@/components/shared/foods/FoodFormDialog";

export function AddFoodPopover() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dialog, setDialog] = useState<"none" | "manual" | "csv">("none");

  const handleManual = () => {
    setDialog("manual");
  };

  const handleCSV = () => {
    setDialog("csv");
    setTimeout(() => fileInputRef.current?.click(), 100);
  };

  const closeDialog = () => setDialog("none");

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="default"
            className="font-semibold px-6 py-2 rounded-lg transition-all duration-200 bg-accent-foreground text-accent cursor-pointer border-0"
          >
            + Add Items
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" className="p-0 w-[370px] max-w-full border shadow-2xl rounded-2xl border-muted-foreground/50">
          <div className="bg-muted/10 rounded-2xl p-6">
            <h4 className="text-lg font-bold mb-1 text-center text-foreground">Add New Items</h4>
            <p className="text-sm text-muted-foreground mb-5 text-center">Choose how you want to add new food items to your menu.</p>
            <div className="flex gap-3 items-stretch">
              <button
                className="flex-1 flex flex-col items-center bg-muted hover:bg-muted/80 rounded-xl p-5 transition cursor-pointer border border-muted-foreground/10 group"
                type="button"
                aria-label="Add food item manually"
                onClick={handleManual}
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 mb-2 group-hover:bg-primary/20 transition-colors duration-200">
                  <span className="text-xl leading-none mb-0.5">📝</span>
                </span>
                <span className="font-semibold text-primary mb-1 text-base">Add Manually</span>
                <span className="text-xs text-muted-foreground text-center">Fill out a form to add a single food item.</span>
              </button>
              <div className="w-px bg-muted-foreground/20 mx-1" />
              <button
                className="flex-1 flex flex-col items-center bg-muted hover:bg-muted/80 rounded-xl p-5 transition cursor-pointer border border-muted-foreground/10 group"
                type="button"
                aria-label="Upload food items using CSV"
                onClick={handleCSV}
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 mb-2 group-hover:bg-primary/20 transition-colors duration-200">
                  <span className="text-xl mb-0.5 leading-none">📁</span>
                </span>
                <span className="font-semibold text-primary mb-1 text-base">Upload CSV</span>
                <span className="text-xs text-muted-foreground text-center">Import multiple items at once using a CSV file.</span>
              </button>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      {/* Manual Add Dialog */}
      <FoodFormDialog open={dialog === "manual"} onOpenChange={closeDialog} mode="add" />

      {/* CSV Upload Dialog */}
      <Dialog open={dialog === "csv"} onOpenChange={(v: boolean) => !v && closeDialog()}>
        <DialogContent className="max-w-md w-full bg-popover">
          <DialogHeader>
            <DialogTitle>Upload Food Items via CSV</DialogTitle>
            <DialogDescription>Select a CSV file to bulk upload food items.</DialogDescription>
          </DialogHeader>
          <div className="text-sm h-40 border border-dashed border-muted-foreground rounded-md text-center text-muted-foreground flex items-center justify-center">
            [CSV Upload UI Goes Here]
          </div>
          <div className="flex gap-2 pt-2">
            <DialogClose asChild>
              <Button type="button" variant="outline" className="flex-1 cursor-pointer">
                Close
              </Button>
            </DialogClose>
            <Button type="submit" className="flex-1 cursor-pointer">
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};