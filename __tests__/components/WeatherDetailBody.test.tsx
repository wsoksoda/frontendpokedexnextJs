import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AllTheProviders } from "../../jest.setup";
import WeatherDetailBody from "@/components/WeatherDetailBody";

jest.mock("next/router", () => require("next-router-mock"));

const data = {
  current: {
    last_updated_epoch: 1688399100,
    last_updated: "2023-07-03 10:45",
    temp_c: 23.9,
    temp_f: 75.0,
    is_day: 1,
    condition: {
      text: "Sunny",
      icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
      code: 1000,
    },
  },
  forecast: {
    forecastday: [
      {
        day: {
          maxtemp_f: 88.7,
          mintemp_f: 64.4,
          condition: {
            text: "Patchy rain possible",
            icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
            code: 1063,
          },
        },
      },
    ],
  },
};

function testFunction(): void {}

describe("Weather Detail Body", () => {
  it("renders a temp", () => {
    render(
      <AllTheProviders>
        <WeatherDetailBody data={data} day={0} setWeatherType={testFunction} />
      </AllTheProviders>
    );
    const day = screen.queryByText("Patchy rain possible");

    expect(day).toBeInTheDocument;
  });
  it("renders a max temp", () => {
    render(
      <AllTheProviders>
        <WeatherDetailBody data={data} day={0} setWeatherType={testFunction} />
      </AllTheProviders>
    );
    const high = screen.queryByText("88.7");

    expect(high).toBeInTheDocument;
  });
  it("renders a min temp", () => {
    render(
      <AllTheProviders>
        <WeatherDetailBody data={data} day={0} setWeatherType={testFunction} />
      </AllTheProviders>
    );
    const low = screen.queryByText("64.4");

    expect(low).toBeInTheDocument;
  });
  it("has four buttons", () => {
    render(
      <AllTheProviders>
        <WeatherDetailBody data={data} day={0} setWeatherType={testFunction} />
      </AllTheProviders>
    );
    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(4);
  });
});
