import { StarRating } from "@/components/ui/Star_rating";
import type { IReview } from "@/types/general";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  review: IReview;
  className?: string;
}

export function ReviewCard({ review, className }: ReviewCardProps) {
  return (
    <div className={cn("p-4 rounded-lg bg-card border", className)}>
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <h4 className="font-medium text-sm">{review.name}</h4>
          <StarRating rating={review.rating} size="sm" className="mt-1" />
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {review.review}
      </p>
    </div>
  );
}