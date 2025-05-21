import { render, screen } from "@testing-library/react";
import ProductRow from "./ProductRow";
import { ProductType } from "@src/types";

const dummyProduct: ProductType = {
  id: 1,
  title: "Dummy Product",
  price: 20,
  description: "Dummy Description",
  category: "Electronics",
  image: "https://picsum.photos/id/237/200/300",
  rating: {
    rate: 3.4,
    count: 50,
  },
};

describe("ProductRow Component", () => {
  it("Check if Product Row is displaying title", () => {
    render(<ProductRow {...dummyProduct} />);
    const titleElement = screen.queryByText("Dummy Product");
    expect(titleElement).toBeInTheDocument();
  });

  it("Check if Product Row is showing description", () => {
    render(<ProductRow {...dummyProduct} />);
    const descriptionElement = screen.queryByText("Dummy Description");
    expect(descriptionElement).toBeInTheDocument();
  });
});
