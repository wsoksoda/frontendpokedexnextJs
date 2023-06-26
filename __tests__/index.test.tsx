import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Index from "../pages";

describe("Index", () => {
  it("renders a heading", () => {
    render(<Index />);

    const heading = screen.getByText("Welcome to the Pokedex");
    expect(heading).toBeInTheDocument();
  });
});
