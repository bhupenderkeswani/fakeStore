import { render, screen } from "@testing-library/react";
import ProductPrice from "./ProductPrice";

describe("ProductPrice Component", () => {
  it("Check if price is getting displayed", () => {
    render(<ProductPrice value={1.22} />);
    const priceElement = screen.queryByText("$1.22");
    expect(priceElement).toBeInTheDocument();
  });

  it("Check if price is showing in correct format", () => {
    render(<ProductPrice value={20} />);
    const priceElement = screen.queryByText("$20.00");
    expect(priceElement).toBeInTheDocument();
  });
});
