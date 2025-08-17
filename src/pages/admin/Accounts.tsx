import RestaurantDetailsInfo from "@/components/admin/account/AccountInfo";
import QRcodeSection from "@/components/admin/account/QRcodeSection";

export default function Account() {
  const dummyAccountDetails = {
    id: 'res_2',
    restaurantName: "Sunset Grill",
    ownerName: "Emily Johnson",
    contact: "+1 555-987-6543",
    numberOfTables: 10,
    subscriptionExpiryDate: "2025-08-09",
    address: "45 Ocean Ave, Miami, FL",
    totalOrders: 2311,
    avgRating: 4.5,
  };

  return (
    <>
      <h3 className="text-xl md:text-2xl pb-4 font-bold">Account</h3>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <RestaurantDetailsInfo restaurant={dummyAccountDetails} />
        <QRcodeSection />
      </div>
    </>
  );
};