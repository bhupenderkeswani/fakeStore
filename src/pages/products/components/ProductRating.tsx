import Rating from "@components/Ratings";
import { RatingType } from "@src/types";

export default function ProductRating(props: RatingType) {
  return (
    <div title={`${props.rate} Star (${props.count})`} className="flex gap-2">
      <Rating value={props.rate} />
      <span>({props.count})</span>
    </div>
  );
}
