import { Download } from "lucide-react";
import { Button } from "../ui/button";

export default function AccountInfo() {
  return (
    <div className="w-full flex flex-col">

      <div className="bg-background w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="/images/dinioInstaQR.png"
              alt="Profile"
              className="w-20 h-20 rounded-sm border border-primary object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold">Restaurant Name</h2>
              <p className="text-muted-foreground">
                Here add restaurant address.
              </p>
            </div>
          </div>

          <Button className="flex items-center gap-1 cursor-pointer">
            <Download className="h-4 w-4" />
            Download QR code
          </Button>
        </div>

        <div className="mt-5 space-y-6">
          <div>
            <h3 className="font-semibold">Experience</h3>
            <p className="text-muted-foreground mt-1">
              I specialise in UX/UI design, brand strategy, and Webflow
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}