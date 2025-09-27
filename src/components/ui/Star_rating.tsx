import { FaStar } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showNumber?: boolean;
  className?: string;
}

export function StarRating({
  rating,
  maxRating = 5,
  size = "md",
  showNumber = false,
  className
}: StarRatingProps) {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  };

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex items-center">
        {Array.from({ length: maxRating }).map((_, index) => {
          const starValue = index + 1;
          const isFilled = starValue <= rating;
          const isPartial = starValue > rating && starValue - 1 < rating;

          return (
            <div key={index} className="relative">
              <FaStar
                className={cn(
                  sizeClasses[size],
                  "text-muted-foreground/40 transition-colors duration-200"
                )}
              />
              {(isFilled || isPartial) && (
                <FaStar
                  className={cn(
                    sizeClasses[size],
                    "text-amber-400 absolute top-0 left-0 transition-colors duration-200"
                  )}
                  style={{
                    clipPath: isPartial
                      ? `inset(0 ${100 - ((rating - (starValue - 1)) * 100)}% 0 0)`
                      : undefined
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
      {showNumber && (
        <span className={cn("font-medium text-foreground", textSizeClasses[size])}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}