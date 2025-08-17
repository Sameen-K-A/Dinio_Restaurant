import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";

export default function QRcodeSection() {
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
          {Array.from({ length: 10 }).map((_, i) => {
            return (
              <div key={i} className="flex flex-col items-center justify-center p-2 border rounded-lg">
                <img
                  src={`qr code url from s3 bucket`}
                  alt={`QR Code for Table ${i + 1}`}
                  className="w-full h-auto mb-2 aspect-square rounded-sm"
                  onError={(e) => e.currentTarget.src = "/placeholder/placeholder.svg"}
                />
                <p className="text-sm font-medium text-center">Table {i + 1}</p>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  );
}