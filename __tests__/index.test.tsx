import { render, screen } from "@testing-library/react";
import Index from "../pages/Index";
import { AllTheProviders } from "../jest.setup";

describe("Index", () => {
  it("renders a heading", () => {
    render(
      <AllTheProviders>
        <Index />
      </AllTheProviders>
    );

    const heading = screen.getByText("Welcome to the Pokedex");
    expect(heading).toBeInTheDocument();
  });
  it("renders a checkBox Form", () => {
    render(
      <AllTheProviders>
        <Index />
      </AllTheProviders>
    );

    const checkBox = screen.getByRole("radiogroup");
    expect(checkBox).toBeInTheDocument();
  });
  it("renders two buttons", () => {
    render(
      <AllTheProviders>
        <Index />
      </AllTheProviders>
    );

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
  });
});
