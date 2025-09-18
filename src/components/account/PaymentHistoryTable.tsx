import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { format } from "date-fns";

const paymentHistory = [
  {
    id: 1,
    transactionId: "TXN1001",
    date: "2024-05-24",
  },
  {
    id: 2,
    transactionId: "TXN1002",
    date: "2024-04-22",
  },
  {
    id: 3,
    transactionId: "TXN1003",
    date: "2024-03-08",
  },
  {
    id: 4,
    transactionId: "TXN1004",
    date: "2024-02-15",
  },
  {
    id: 5,
    transactionId: "TXN1005",
    date: "2024-01-12",
  },
];

export function PaymentHistoryTable() {
  return (
    <div className="w-full">
      <h3 className="font-semibold text-foreground mb-2">Payment History</h3>
      <div>
        <div className="overflow-x-auto rounded-lg border bg-background">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-background">
                <TableHead className="text-muted-foreground px-4">Date</TableHead>
                <TableHead className="text-muted-foreground text-center px-4 w-36">Transaction ID</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paymentHistory.map((payment) => (
                <TableRow
                  key={payment.id}
                  className="hover:bg-muted/50 not-odd:bg-muted/50"
                >
                  <TableCell className="px-4 font-semibold text-foreground">
                    {payment.transactionId}
                  </TableCell>
                  <TableCell className="font-medium text-center px-4 text-foreground">
                    {format(new Date(payment.date), "MMM dd, yyyy")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}