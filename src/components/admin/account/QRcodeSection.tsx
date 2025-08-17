import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Download, MoreVertical, Trash2 } from "lucide-react";

interface IQRcodeSectionProps {
  numberOfTables: number;
};

export default function QRcodeSection({ numberOfTables }: IQRcodeSectionProps) {
  return (
    <Card className="shadow-none p-4">
      <CardHeader className="p-0">
        <div className="flex items-center justify-between">
          <CardTitle>Table QR Codes</CardTitle>
          <Button className="flex items-center gap-1 cursor-pointer">
            <Download className="h-4 w-4" />
            Download All
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          QR codes for all tables. Customers can scan these to access the menu.
        </p>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-[50dvh] overflow-y-auto custom-scrollbar">
          {Array.from({ length: numberOfTables }).map((_, i) => {
            const tableNumber = i + 1;
            const isLastTable = tableNumber === numberOfTables;

            return (
              <div key={i} className="flex flex-col items-center justify-center p-2 border rounded-lg">
                <img
                  src={`qr code url from s3 bucket`}
                  alt={`QR Code for Table ${i + 1}`}
                  className="w-full h-auto mb-2 aspect-square rounded-sm"
                  onError={(e) => e.currentTarget.src = "/placeholder/placeholder.svg"}
                />
                <div className="flex justify-between items-center w-full">
                  <p className="text-sm font-medium text-center">Table {i + 1}</p>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <MoreVertical className="h-4 w-4 cursor-pointer" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </DropdownMenuItem>
                      {isLastTable && (
                        <DropdownMenuItem
                          className="text-destructive focus:text-destructive"
                        >
                          <Trash2 className="mr-2 h-4 w-4 text-red-500" />
                          Remove table
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  );
}