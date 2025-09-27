import React from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { ICategory } from "@/types/general";

interface CategoryTableProps {
  data: ICategory[];
}

export const CategoryTable: React.FC<CategoryTableProps> = ({ data }) => {
  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell className="text-center px-4 w-20">#</TableCell>
            <TableCell className="text-left px-8">Category Name</TableCell>
            <TableCell className="text-center px-8 w-20">Actions</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((category, index) => (
            <TableRow key={category.catId}>
              <TableCell className="text-center px-4">{index + 1}</TableCell>
              <TableCell className="text-left px-8">{category.name}</TableCell>
              <TableCell className="text-center px-8">
                <div className="flex gap-2 justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Category</DialogTitle>
                      </DialogHeader>
                      <div className="py-4">Edit UI for category <b></b> goes here.</div>
                    </DialogContent>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Delete Category</DialogTitle>
                      </DialogHeader>
                      <div className="py-4">Are you sure you want to delete <b>{ }</b>?</div>
                    </DialogContent>
                  </Dialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};