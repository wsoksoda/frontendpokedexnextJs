import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AllTheProviders } from "../../jest.setup";
import WeatherDetailWind from "@/components/WeatherDetailWind";

jest.mock("next/router", () => require("next-router-mock"));

const data = {
  forecast: {
    forecastday: [
      {
        day: {
          maxtemp_f: 0,
          mintemp_f: 0,
          avghumidity: 0,
          daily_chance_of_rain: 0,
          condition: {
            text: "Moderate rain",
            icon: "//cdn.weatherapi.com/weather/64x64/day/302.png",
            code: 1189,
          },
        },
        hour: [
          {
            temp_f: 0,
            condition: {
              text: "Clear",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
              code: 1003,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
              code: 1003,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
              code: 1003,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/119.png",
              code: 1006,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/119.png",
              code: 1006,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
              code: 1003,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
              code: 1003,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
              code: 1003,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Clear",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Clear",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
        ],
      },
      {
        day: {
          maxtemp_f: 0,
          mintemp_f: 0,
          avghumidity: 0,
          daily_chance_of_rain: 0,
          condition: {
            text: "Moderate rain",
            icon: "//cdn.weatherapi.com/weather/64x64/day/302.png",
            code: 1189,
          },
        },
        hour: [
          {
            temp_f: 0,
            condition: {
              text: "Clear",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
              code: 1003,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
              code: 1003,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
              code: 1003,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/119.png",
              code: 1006,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/119.png",
              code: 1006,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
              code: 1003,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
              code: 1003,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
              code: 1003,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Clear",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Clear",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
        ],
      },
      {
        day: {
          maxtemp_f: 0,
          mintemp_f: 0,
          avghumidity: 0,
          daily_chance_of_rain: 0,
          condition: {
            text: "Moderate rain",
            icon: "//cdn.weatherapi.com/weather/64x64/day/302.png",
            code: 1189,
          },
        },
        hour: [
          {
            temp_f: 0,
            condition: {
              text: "Clear",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
              code: 1003,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
              code: 1003,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
              code: 1003,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/119.png",
              code: 1006,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/119.png",
              code: 1006,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
              code: 1003,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
              code: 1003,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
              code: 1003,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Clear",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
          {
            temp_f: 0,
            condition: {
              text: "Clear",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000,
            },
            wind_mph: 0,
            humidity: 0,
            chance_of_rain: 0,
          },
        ],
      },
    ],
  },
};

describe("Wind", () => {
  it("renders the time for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryAllByText("12:00");

    expect(day).toHaveLength(2);
  });
  it("renders the time for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryAllByText("1:00");

    expect(day).toHaveLength(2);
  });
  it("renders the time for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryAllByText("2:00");

    expect(day).toHaveLength(2);
  });
  it("renders the time for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryAllByText("3:00");

    expect(day).toHaveLength(2);
  });
  it("renders the time for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryAllByText("4:00");

    expect(day).toHaveLength(2);
  });
  it("renders the time for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryAllByText("5:00");

    expect(day).toHaveLength(2);
  });
  it("renders the time for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryAllByText("6:00");

    expect(day).toHaveLength(2);
  });
  it("renders the time for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryAllByText("7:00");

    expect(day).toHaveLength(2);
  });
  it("renders the time for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryAllByText("8:00");

    expect(day).toHaveLength(2);
  });
  it("renders the time for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryAllByText("9:00");

    expect(day).toHaveLength(2);
  });
  it("renders the time for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryAllByText("10:00");

    expect(day).toHaveLength(2);
  });
  it("renders the time for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryAllByText("11:00");

    expect(day).toHaveLength(2);
  });
  it("renders the rain chance for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("70");
  });
  it("renders the temp for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("70");

    expect(day).toBeInTheDocument;
  });
  it("renders the temp for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("71");

    expect(day).toBeInTheDocument;
  });
  it("renders the temp for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("72");

    expect(day).toBeInTheDocument;
  });
  it("renders the temp for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("73");

    expect(day).toBeInTheDocument;
  });
  it("renders the temp for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("74");

    expect(day).toBeInTheDocument;
  });
  it("renders the temp for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("75");

    expect(day).toBeInTheDocument;
  });
  it("renders the temp for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("76");

    expect(day).toBeInTheDocument;
  });
  it("renders the temp for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("77");

    expect(day).toBeInTheDocument;
  });
  it("renders the temp for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("78");

    expect(day).toBeInTheDocument;
  });
  it("renders the temp for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("79");

    expect(day).toBeInTheDocument;
  });
  it("renders the temp for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("80");

    expect(day).toBeInTheDocument;
  });
  it("renders the temp for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("81");

    expect(day).toBeInTheDocument;
  });
  it("renders the temp for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("82");

    expect(day).toBeInTheDocument;
  });
  it("renders the temp for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("83");

    expect(day).toBeInTheDocument;
  });
  it("renders the temp for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("84");

    expect(day).toBeInTheDocument;
  });
  it("renders the temp for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("85");

    expect(day).toBeInTheDocument;
  });
  it("renders the temp for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("86");

    expect(day).toBeInTheDocument;
  });
  it("renders the temp for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("87");

    expect(day).toBeInTheDocument;
  });
  it("renders the temp for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const wind = screen.queryByText("88mph");

    expect(wind).toBeInTheDocument;
  });
  it("renders the temp for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("l");

    expect(day).toBeInTheDocument;
  });
  it("renders the temp for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("9mph");

    expect(day).toBeInTheDocument;
  });
  it("renders the temp for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("91");

    expect(day).toBeInTheDocument;
  });
  it("renders the temp for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("92");

    expect(day).toBeInTheDocument;
  });

  it("renders the temp for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailWind day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("1000847");

    expect(day).toBeInTheDocument;
  });
});
