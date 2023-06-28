import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Weather from "../pages/Weather";
import { AllTheProviders } from "../jest.setup";

describe("Weather", () => {
  it("renders a heading", async () => {
    render(
      <AllTheProviders>
        <Weather />
      </AllTheProviders>
    );

    await waitForElementToBeRemoved(() => screen.getByText("Loading...")).then(
      () => {
        const heading = screen.getByText("Fargo");

        expect(heading).toBeInTheDocument();
      }
    );
  });
  it("renders the links", async () => {
    render(
      <AllTheProviders>
        <Weather />
      </AllTheProviders>
    );

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(8);
  });
});
