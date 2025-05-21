import { ProductType } from "@src/types";
import { formatAmount } from "../products.utils";
import ProductRating from "./ProductRating";

export default function ProductCard(props: ProductType) {
  const { title, price, image, rating } = props;
  const titleToShow = `${title.substring(0, 10)}...`;

  return (
    <li
      className="flex flex-col items-center px-2 gap-1.5 hover:scale-95 cursor-pointer shadow-md py-4"
      title={title}
    >
      <div className="font-medium">{titleToShow}</div>
      <img
        src={image}
        alt={`${title} image`}
        className="h-40 object-contain mb-4 mx-auto"
        height={50}
        width={100}
      />
      <div>$ {formatAmount(price)}</div>
      <ProductRating {...rating} />
    </li>
  );
}
