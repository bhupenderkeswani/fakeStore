import { ProductType } from "@src/types";
import { formatAmount } from "../products.utils";

export default function ProductPrice({
  value,
}: {
  value: ProductType["price"];
}) {
  return <div className="text-red-500">${formatAmount(value)}</div>;
}
