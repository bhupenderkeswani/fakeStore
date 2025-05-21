import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home Component", () => {
  it("renders initial component", () => {
    render(<Home />);
    const headerElement = screen.queryByText("Home Page");
    expect(headerElement).toBeInTheDocument();
  });
});
