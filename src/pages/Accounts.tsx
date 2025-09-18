import AccountInfo from "@/components/account/AccountInfo";
import { PasswordChangeForm } from "@/components/account/PasswordChangingForm";
import { PaymentHistoryTable } from "@/components/account/PaymentHistoryTable";
import { SubscriptionInfo } from "@/components/account/SubscriptionInfo";

export default function Account() {
  // const dummyAccountDetails = {
  //   id: 'res_2',
  //   restaurantName: "Sunset Grill",
  //   ownerName: "Emily Johnson",
  //   contact: "+1 555-987-6543",
  //   numberOfTables: 10,
  //   subscriptionExpiryDate: "2025-08-09",
  //   address: "45 Ocean Ave, Miami, FL",
  //   totalOrders: 2311,
  //   avgRating: 4.5,
  // };

  return (
    <div className="space-y-6">
      <AccountInfo />
      <SubscriptionInfo />
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="w-full md:w-1/2">
          <PaymentHistoryTable />
        </div>
        <div className="w-full md:w-1/2">
          <PasswordChangeForm />
        </div>
      </div>
    </div>
  );
};