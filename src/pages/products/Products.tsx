import { useGetProductListQuery } from "@api/products";
import ProductsContainer from "./components/ProductsContainer";
import withLoading from "@src/hoc/withLoading";

const ProductsContainerWithLoading = withLoading(ProductsContainer);

export default function Products() {
  const { data, isLoading, isError } = useGetProductListQuery();

  return (
    <>
      <h1>Products</h1>
      <div className="py-8">
        {isError && <div>Error occurred in fetching products</div>}
        <ProductsContainerWithLoading loading={isLoading} data={data} />
      </div>
    </>
  );
}
