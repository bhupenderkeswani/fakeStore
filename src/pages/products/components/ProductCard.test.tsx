import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
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

const dummyProduct2: ProductType = {
  id: 1,
  title: "Dummy Product with big tittle text",
  price: 20,
  description: "Dummy Description",
  category: "Electronics",
  image: "https://picsum.photos/id/237/200/300",
  rating: {
    rate: 3.4,
    count: 50,
  },
};

describe("ProductCard Component", () => {
  it("Check if Product Card is displaying title", () => {
    render(<ProductCard {...dummyProduct} />);
    const titleElement = screen.queryByText("Dummy Product");
    expect(titleElement).toBeInTheDocument();
  });

  it("Check if Product Card is not showing description", () => {
    render(<ProductCard {...dummyProduct} />);
    const descriptionElement = screen.queryByText("Dummy Description");
    expect(descriptionElement).not.toBeInTheDocument();
  });

  it("Check if Product Card is displaying title in proper format", () => {
    render(<ProductCard {...dummyProduct2} />);
    const titleElement = screen.queryByText("Dummy Product wi...");
    expect(titleElement).toBeInTheDocument();
  });
});
