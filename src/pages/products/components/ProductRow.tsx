import { ProductType } from "@src/types";
import ProductRating from "./ProductRating";
import ProductPrice from "./ProductPrice";

export default function ProductRow(props: ProductType) {
  const { title, price, image, rating, description, category } = props;
  const titleToShow = `${title.substring(0, 20)}...`;

  return (
    <li
      className="flex items-center justify-between px-4 shadow-md hover:scale-105 cursor-pointer gap-6"
      title={title}
    >
      <img
        src={image}
        alt={`${title} image`}
        className="h-40 object-contain mb-4 "
        width={100}
      />
      <div className="font-semibold min-w-32">{titleToShow}</div>
      <div className="font-light">{description}</div>
      <div>{category}</div>
      <ProductPrice value={price} />
      <ProductRating {...rating} />
    </li>
  );
}
