import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns";

const paymentHistory = [
  {
    id: 1,
    date: "2024-05-24",
    type: "Monthly",
    amount: 300,
    method: "Card",
  },
  {
    id: 2,
    date: "2024-04-22",
    type: "Monthly",
    amount: 300,
    method: "UPI",
  },
  {
    id: 3,
    date: "2024-03-08",
    type: "Monthly",
    amount: 300,
    method: "UPI",
  },
  {
    id: 4,
    date: "2024-02-15",
    type: "Yearly",
    amount: 1440,
    method: "Card",
  },
  {
    id: 5,
    date: "2024-01-12",
    type: "Monthly",
    amount: 300,
    method: "UPI",
  },
]

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
                <TableHead className="text-muted-foreground text-center px-4">Type</TableHead>
                <TableHead className="text-muted-foreground text-center px-4">Amount</TableHead>
                <TableHead className="text-muted-foreground text-center px-4">Method</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paymentHistory.map((payment) => (
                <TableRow key={payment.id} className="hover:bg-muted/50 not-odd:bg-muted/50">
                  <TableCell className="font-medium px-4 text-foreground">{format(payment.date, "MMM-dd-yyyy")}</TableCell>
                  <TableCell className="text-center px-4 ">
                    <Badge variant="secondary" className="text-xs">
                      {payment.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-semibold px-4 text-foreground text-center">₹{payment.amount.toFixed(2)}</TableCell>
                  <TableCell className="text-muted-foreground px-4 text-center">{payment.method}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
};