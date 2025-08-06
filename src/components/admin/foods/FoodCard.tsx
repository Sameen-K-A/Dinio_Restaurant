import React from "react";

interface FoodCardProps {
  name: string;
  amount: number;
  quantity: number;
  image: string;
}

export const FoodCard: React.FC<FoodCardProps> = ({ name, amount, quantity, image }) => {
  return (
    <div className="relative flex items-center bg-muted/40 rounded-2xl shadow-lg p-3">
      <img
        src={image}
        alt={name}
        className="flex-shrink-0 w-21 h-21 rounded-lg bg-muted object-cover"
        onError={(e) => { e.currentTarget.src = "/placeholder/placeholder.svg" }}
      />

      <div className="flex-1 ml-4">
        <div className="flex items-center justify-between mb-1">
          <div className="font-semibold text-base leading-tight line-clamp-1">{name}</div>
          <button className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-muted-foreground/10 transition" aria-label="Edit">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground" viewBox="0 0 24 24">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
            </svg>
          </button>
        </div>
        <span className="text-muted-foreground">₹{amount.toFixed(2)}</span>

        <div className="flex items-center gap-0.5 mt-2">
          <button
            className="w-8 h-8 flex items-center justify-center rounded-sm bg-muted hover:bg-muted/80 transition cursor-pointer"
            aria-label="Decrease quantity"
            type="button"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <input
            type="text"
            value={quantity}
            className="w-20 text-center border border-muted rounded-sm bg-background text-base font-semibold text-primary px-2 py-1 focus:outline-none shadow"
          />
          <button
            className="w-8 h-8 flex items-center justify-center rounded-sm bg-muted text-white hover:bg-muted/80 transition cursor-pointer"
            aria-label="Increase quantity"
            type="button"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};