import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Star, Check } from "lucide-react"
import { useState } from "react"

const subscriptionOptions = [
  {
    id: "yearly",
    name: "Yearly",
    price: 'XXX',
    description: "Pay for a full year",
    addedDays: 365,
    popular: true,
  },
  {
    id: "monthly",
    name: "Monthly",
    price: 'XXXX',
    description: "Pay monthly",
    addedDays: 30,
    popular: false,
  },
]

export default function SubscriptionPlans() {
  const [selectedPlan, setSelectedPlan] = useState("yearly")
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  const handleMakePayment = () => {
    setIsPopoverOpen(false)
  };

  return (
    <div className="flex-shrink-0">
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger asChild>
          <Button className="bg-primary cursor-pointer hover:bg-primary/90 text-primary-foreground">
            Renew Subscription
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-4" align="end">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">Choose your plan</h3>
              <p className="text-sm text-muted-foreground">Select the best option for your restaurant</p>
            </div>

            <div className="space-y-3">
              {subscriptionOptions.map((option) => (
                <div
                  key={option.id}
                  className={`relative rounded-lg border-2 p-4 cursor-pointer transition-all ${selectedPlan === option.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}
                  onClick={() => setSelectedPlan(option.id)}
                >
                  {option.popular && (
                    <div className="absolute -top-2 right-3">
                      <Badge className="bg-primary text-primary-foreground">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedPlan === option.id ? "border-primary bg-primary" : "border-muted-foreground"}`}>
                        {selectedPlan === option.id && <Check className="w-2 h-2 text-primary-foreground" />}
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{option.name}</div>
                        <div className="text-sm text-muted-foreground">{option.description}</div>
                        <div className="text-xs text-muted-foreground">+{option.addedDays} days</div>
                      </div>
                    </div>
                    <div className="text-xl text-right font-bold text-foreground">
                      ${option.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button
              onClick={handleMakePayment}
              className="w-full cursor-pointer"
            >
              Make Payment
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}