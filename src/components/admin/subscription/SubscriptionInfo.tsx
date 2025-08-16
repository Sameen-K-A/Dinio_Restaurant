import { Badge } from "@/components/ui/badge"
import { PaymentHistoryTable } from "./PaymentHistoryTable"
import SubscriptionPlans from "./SubscriptionPlans"

const subscriptionData = {
  isActive: true,
  description: "Unlock subscription to make your restaurant futuristic.",
  endDate: "2024-12-31",
}

export function SubscriptionInfo() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="w-full">
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border p-4 rounded-md bg-muted/20">
              <div>
                <Badge className={`mb-3 text-white ${subscriptionData.isActive ? "bg-green-500" : "bg-red-500"}`}>
                  {subscriptionData.isActive ? "Subscription active" : "Subscription expired"}
                </Badge>
                <p>{subscriptionData.description}</p>
                <p className="text-sm text-muted-foreground">
                  Subscription ends at: {new Date(subscriptionData.endDate).toLocaleDateString()}
                </p>
              </div>
              <SubscriptionPlans />
            </div>
          </div>
        </div>
      </div>
      <PaymentHistoryTable />
    </div>
  )
};