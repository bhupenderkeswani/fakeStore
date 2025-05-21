import { ProductType } from "@src/types";
import { formatAmount } from "../products.utils";
import ProductRating from "./ProductRating";

export default function ProductRow(props: ProductType) {
  const { title, price, image, rating } = props;
  const titleToShow = `${title.substring(0, 20)}...`;

  return (
    <li
      className="flex items-center justify-between px-4 shadow-md hover:scale-105 cursor-pointer"
      title={title}
    >
      <img
        src={image}
        alt={`${title} image`}
        className="h-40 object-contain mb-4 "
        width={100}
      />
      <div>{titleToShow}</div>
      <div className="price">$ {formatAmount(price)}</div>
      <ProductRating {...rating} />
    </li>
  );
}
