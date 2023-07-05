import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { AllTheProviders } from "../jest.setup";
import mockRouter from "next-router-mock";
import WeatherDetail from "../pages/weather/forecast";

jest.mock("next/router", () => require("next-router-mock"));

describe("Weather", () => {
  it("renders a heading", async () => {
    mockRouter.push("/weatherDetail?positon=4&day=0");

    render(
      <AllTheProviders>
        <WeatherDetail />
      </AllTheProviders>
    );

    await waitForElementToBeRemoved(() => screen.getByText("Loading...")).then(
      () => {
        const heading = screen.getByText("Fargo");

        expect(heading).toBeInTheDocument();
      }
    );
  });
});
