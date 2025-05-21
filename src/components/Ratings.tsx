import React from "react";

type RatingPropsType = {
  value: number; // rating value (e.g., 3.5)
  max?: number; // max stars (default = 5)
  size?: number; // star size in px
  color?: string; // fill color
};

const Rating: React.FC<RatingPropsType> = ({
  value,
  max = 5,
  size = 24,
  color = "#facc15", // Tailwind yellow-400
}) => {
  const stars = [];

  for (let i = 1; i <= max; i++) {
    const isHalf = value >= i - 0.5 && value < i;
    const isFull = value >= i;

    stars.push(
      <svg
        key={i}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={isFull ? color : isHalf ? `url(#half-${i})` : "none"}
        stroke={color}
        strokeWidth="1"
      >
        {isHalf && (
          <defs>
            <linearGradient id={`half-${i}`} x1="0" x2="100%" y1="0" y2="0">
              <stop offset="50%" stopColor={color} />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
        )}
        <path d="M12 2l2.9 6.1L22 9.3l-5 4.9L18.8 22 12 18.3 5.2 22l1.8-7.8-5-4.9 7.1-1.2L12 2z" />
      </svg>
    );
  }

  return <div className="flex items-center gap-1">{stars}</div>;
};

export default Rating;
