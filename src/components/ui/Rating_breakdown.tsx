import { cn } from "@/lib/utils";

interface RatingBreakdownProps {
  distribution: {
    excellent: { count: number; percentage: number };
    good: { count: number; percentage: number };
    average: { count: number; percentage: number };
    belowAverage: { count: number; percentage: number };
    poor: { count: number; percentage: number };
  };
  className?: string;
}

export function RatingBreakdown({ distribution, className }: RatingBreakdownProps) {
  const items = [
    { label: "Excellent", data: distribution.excellent, color: "bg-green-500" },
    { label: "Good", data: distribution.good, color: "bg-[#A6D52B]" },
    { label: "Average", data: distribution.average, color: "bg-yellow-500" },
    { label: "Below Average", data: distribution.belowAverage, color: "bg-orange-500" },
    { label: "Poor", data: distribution.poor, color: "bg-red-500" },
  ];

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-3">
          <div className="w-28 text-sm text-muted-foreground flex-shrink-0">
            {item.label}
          </div>
          <div className="flex-1 relative">
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <div
                className={cn("h-full transition-all duration-500 ease-out", item.color)}
                style={{ width: `${item.data.percentage}%` }}
              />
            </div>
          </div>
          <div className="w-8 text-sm text-muted-foreground text-right flex-shrink-0">
            {item.data.count}
          </div>
        </div>
      ))}
    </div>
  );
}