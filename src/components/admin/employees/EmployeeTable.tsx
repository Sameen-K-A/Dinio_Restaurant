import type { Employee } from "@/types/admin";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreVertical } from "lucide-react";

interface EmployeeTableProps {
  employees: Employee[];
}

export function EmployeeTable({ employees }: EmployeeTableProps) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border bg-background">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-background">
            <TableHead className="text-left px-4 whitespace-nowrap">Emp ID</TableHead>
            <TableHead className="text-left px-4 whitespace-nowrap">Name</TableHead>
            <TableHead className="text-center px-4 whitespace-nowrap">Phone</TableHead>
            <TableHead className="text-center px-4 whitespace-nowrap">Joining Date</TableHead>
            <TableHead className="text-center px-4 whitespace-nowrap">Status</TableHead>
            <TableHead className="text-right px-4 whitespace-nowrap"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((emp) => (
            <TableRow
              key={emp.empId}
              className="not-odd:bg-muted/50 hover:bg-muted transition-colors duration-200"
            >
              <TableCell className="text-left px-4 whitespace-nowrap font-mono text-xs text-muted-foreground">{emp.empId}</TableCell>
              <TableCell className="text-left px-4 whitespace-nowrap font-medium text-foreground">{emp.name}</TableCell>
              <TableCell className="text-center px-4 whitespace-nowrap text-muted-foreground">{emp.phone}</TableCell>
              <TableCell className="text-center px-4 whitespace-nowrap text-muted-foreground">{emp.joiningDate}</TableCell>
              <TableCell className="text-center px-4 whitespace-nowrap">
                <span
                  className={
                    (emp.status === "Working"
                      ? "bg-primary/10 text-primary"
                      : "bg-red-500/10 text-red-500") +
                    " px-2 py-1 rounded text-xs font-medium inline-block min-w-[90px] text-center"
                  }
                >
                  {emp.status}
                </span>
              </TableCell>
              <TableCell className="text-right px-4 whitespace-nowrap">
                <button className="p-1 rounded hover:bg-background cursor-pointer">
                  <span className="sr-only">More</span>
                  <MoreVertical size={20} className="text-muted-foreground" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};