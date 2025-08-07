import { EmployeeTable } from "@/components/admin/employees/EmployeeTable";
import { Button } from "@/components/ui/button";
import { employees } from "@/constants/employees";

export default function Employees() {
  return (
    <>
      <div className="flex items-center justify-between pb-4">
        <h3 className="text-xl md:text-2xl font-bold">Employees</h3>
        <Button
          variant="default"
          className="font-semibold px-6 py-2 rounded-lg transition-all duration-200 bg-accent-foreground text-accent cursor-pointer border-0"
        >
          + Add Employee
        </Button>
      </div>
      <EmployeeTable employees={employees} />
    </>
  );
}