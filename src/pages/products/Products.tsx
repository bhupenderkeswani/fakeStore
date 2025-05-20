import { useGetProductListQuery } from "@src/api/products";
import { useEffect } from "react";

export default function Products() {
  const { data, isLoading, isError } = useGetProductListQuery();

  useEffect(() => {
    console.log({ data });
  }, [data]);

  return (
    <>
      <h1>Product List Page</h1>
      {isError && <div>Error occurred in fetching products</div>}
      {isLoading && <div>Loading...</div>}
      <ul>
        {data?.map((product, key) => (
          <li key={product.id}>
            {key + 1} - {product.title}
          </li>
        ))}
      </ul>
    </>
  );
}
