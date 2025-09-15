import { MoreVertical, CircleHelp } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { IFood } from "@/types/general";

interface IFoodsTableProps {
  foods: IFood[];

}
const FoodsTable = ({ foods }: IFoodsTableProps) => {
  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center px-8">SL</TableHead>
            <TableHead className="text-left max-w-xs px-8">Food</TableHead>
            <TableHead className="text-center px-8">Category</TableHead>
            <TableHead className="text-center px-8">Amount</TableHead>
            <TableHead className="text-center flex items-center justify-center gap-1">
              Visible
              <Popover>
                <PopoverTrigger asChild>
                  <CircleHelp className="cursor-pointer pt-0.5" size={13} />
                </PopoverTrigger>
                <PopoverContent className="w-64 text-sm">
                  If <b>Visible</b> is enabled, this food item will appear in the
                  user's menu list. If not, it will stay hidden but remain in the
                  database.
                </PopoverContent>
              </Popover>
            </TableHead>
            <TableHead className="text-center px-8">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {foods.map((food, index) => (
            <TableRow key={food.foodId}>

              <TableCell className="text-center font-medium px-8">
                {index + 1}
              </TableCell>

              <TableCell className="w-full max-w-2xs overflow-hidden px-8">
                <div className="flex items-center gap-3">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-14 h-14 rounded-md object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium">{food.name}</span>
                    <span className="text-sm text-muted-foreground line-clamp-1">
                      {food.description}
                    </span>
                  </div>
                </div>
              </TableCell>

              <TableCell className="text-center px-8">{food.category.name}</TableCell>
              <TableCell className="text-center px-8">₹{food.amount.toFixed(2)}</TableCell>
              <TableCell className="text-center px-8">
                {food.isVisible ? (
                  <Badge variant="outline" className="bg-green-500/10 border border-green-500 px-3 text-green-500">Yes</Badge>
                ) : (
                  <Badge variant="outline" className="bg-red-500/10 border border-red-500 px-3 text-red-500">No</Badge>
                )}
              </TableCell>
              <TableCell className="text-center px-8">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="hover:bg-background p-2 cursor-pointer">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default FoodsTable;