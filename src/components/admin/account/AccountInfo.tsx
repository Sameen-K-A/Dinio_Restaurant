import { Building2, CreditCard, MapPin, Phone, UserRound, Utensils } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { IRestaurant } from "@/types/admin"
import { renderSubscriptionStatus } from "@/utils/renderSubscriptionStatus"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { ROUTE } from "@/routes/router"

interface IRestaurantDetailsInooProps {
  restaurant: IRestaurant
};

export default function RestaurantDetailsInfo({ restaurant }: IRestaurantDetailsInooProps) {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <Card className="shadow-none p-4">
        <CardHeader className="p-0">
          <CardTitle className="flex items-center gap-2 mt-1">
            Restaurant Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-0">
          <div className="flex items-start gap-3">
            <Building2 className="h-4 w-4 mt-1 text-muted-foreground" />
            <div>
              <label className="text-sm font-medium text-muted-foreground">Restaurant Name / ID</label>
              <p className="text-base font-medium">{restaurant.restaurantName}, <span className="font-mono bg-muted p-1 px-2 rounded-md">{restaurant.id}</span></p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <UserRound className="h-4 w-4 mt-1 text-muted-foreground" />
            <div>
              <label className="text-sm font-medium text-muted-foreground">Owner Name</label>
              <p className="text-base font-medium">{restaurant.ownerName}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Utensils className="h-4 w-4 mt-1 text-muted-foreground" />
            <div>
              <label className="text-sm font-medium text-muted-foreground">Number of Tables</label>
              <p className="text-base font-medium">{restaurant.numberOfTables}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="h-4 w-4 mt-1 text-muted-foreground" />
            <div>
              <label className="text-sm font-medium text-muted-foreground">Contact Number</label>
              <p className="text-base font-medium">{restaurant.contact}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
            <div>
              <label className="text-sm font-medium text-muted-foreground">Address</label>
              <p className="text-base">{restaurant.address}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-none p-4">
        <CardHeader className="p-0">
          <CardTitle className="mt-1">
            Subscription Details
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 flex justify-between items-center">
          {renderSubscriptionStatus(restaurant.subscriptionExpiryDate)}
          <Button
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => navigate(ROUTE.ADMIN.SUBSCRIPTION)}
          >
            <CreditCard className="h-4 w-4" />
            <span className="mb-0.5">View more details</span>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
};