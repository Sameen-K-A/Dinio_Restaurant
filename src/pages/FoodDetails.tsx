import { useParams } from "react-router-dom";
import { useState } from "react";
import { getAverageRating, getRatingDistribution } from "@/lib/utils";
import type { IFood } from "@/types/general";
import { Badge } from "../components/ui/badge";
import { StarRating } from "../components/ui/Star_rating";
import { ReviewCard } from "../components/ui/ReviewCard";
import { RatingBreakdown } from "../components/ui/Rating_breakdown";
import { foods } from "@/constants/foods";

export default function FoodDetails() {
  const { id } = useParams();
  const [food] = useState<IFood | null>(foods.find((f) => f.foodId === id) || null);

  if (!food) return <div className="p-4 md:p-8">Failed to collect food details...</div>;

  const averageRating = getAverageRating(food.reviews);
  const ratingDistribution = getRatingDistribution(food.reviews);

  return (
    <div className="md:p-4">
      <div className="space-y-6">
        <div className="relative max-w-xs mx-auto md:mx-0">
          <img
            src={food.image}
            alt={food.name}
            className="w-full aspect-square object-cover rounded-xl shadow-lg"
          />
          <Badge
            variant="secondary"
            className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm border-0 shadow-md"
          >
            {food.category.name}
          </Badge>
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-6">
          <div className="space-y-6 w-full">
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-2xl font-bold mb-2">{food.name}</h2>
              <p className="text-3xl font-bold text-primary mb-4">₹{food.amount.toFixed(2)}</p>
              <Badge className="mb-4" variant={food.isSpecial ? "destructive" : "default"}>{food.isSpecial ? "Special" : "Normal"}</Badge>
              <p className="text-muted-foreground text-sm leading-relaxed">{food.description}</p>
            </div>
            <div className="pt-6 border-t">
              <div className="text-4xl font-bold mb-2">{averageRating.toFixed(1)}</div>
              <StarRating rating={averageRating} size="lg" className="justify-start mb-2" />
              <p className="text-sm text-muted-foreground">
                based on {food.reviews.length} review{food.reviews.length !== 1 ? "s" : ""}
              </p>
            </div>
            {food.reviews.length > 0 && (
              <div className="mt-6">
                <RatingBreakdown distribution={ratingDistribution} />
              </div>
            )}
          </div>
          <div className="space-y-6 w-full">
            {food.reviews.length > 0 ? (
              <div>
                <h4 className="text-sm font-semibold mb-4 text-muted-foreground">Customer Reviews</h4>
                <div className="space-y-3">
                  {food.reviews.map((review, index) => (
                    <ReviewCard key={index} review={review} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center h-full max-h-[28rem] flex flex-col items-center justify-center py-8 text-muted-foreground bg-card w-full rounded-2xl">
                <p>No reviews yet</p>
                <p className="text-sm">Be the first to review this item!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}