import type { IReview } from "@/types/general";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export function getAverageRating(reviews: IReview[]): number {
  if (!reviews.length) return 0;
  const total = reviews.reduce((sum, r) => sum + r.rating, 0);
  return total / reviews.length;
}

export function getRatingDistribution(reviews: IReview[]) {
  const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

  reviews.forEach(review => {
    const rating = Math.round(review.rating);
    if (rating >= 1 && rating <= 5) {
      distribution[rating as keyof typeof distribution]++;
    }
  });

  const total = reviews.length;

  return {
    excellent: { count: distribution[5], percentage: total > 0 ? (distribution[5] / total) * 100 : 0 },
    good: { count: distribution[4], percentage: total > 0 ? (distribution[4] / total) * 100 : 0 },
    average: { count: distribution[3], percentage: total > 0 ? (distribution[3] / total) * 100 : 0 },
    belowAverage: { count: distribution[2], percentage: total > 0 ? (distribution[2] / total) * 100 : 0 },
    poor: { count: distribution[1], percentage: total > 0 ? (distribution[1] / total) * 100 : 0 },
  };
}