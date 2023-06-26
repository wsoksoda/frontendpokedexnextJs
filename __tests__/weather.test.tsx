import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Weather from "../pages/weather";

describe("Weather", () => {
  it("renders a heading", () => {
    render(<Weather />);

    const heading = screen.getByText("Fargo");
    expect(heading).toBeInTheDocument();
  });
});
