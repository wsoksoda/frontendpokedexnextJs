import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AllTheProviders } from "../../jest.setup";
import WeatherDetailRain from "@/components/WeatherDetailRain";

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

describe("Rain", () => {
  it("renders the time for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryAllByText("12:00");

    expect(day).toHaveLength(2);
  });
  it("renders the time for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryAllByText("1:00");

    expect(day).toHaveLength(2);
  });
  it("renders the time for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryAllByText("2:00");

    expect(day).toHaveLength(2);
  });
  it("renders the time for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryAllByText("3:00");

    expect(day).toHaveLength(2);
  });
  it("renders the time for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryAllByText("4:00");

    expect(day).toHaveLength(2);
  });
  it("renders the time for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryAllByText("5:00");

    expect(day).toHaveLength(2);
  });
  it("renders the time for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryAllByText("6:00");

    expect(day).toHaveLength(2);
  });
  it("renders the time for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryAllByText("7:00");

    expect(day).toHaveLength(2);
  });
  it("renders the time for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryAllByText("8:00");

    expect(day).toHaveLength(2);
  });
  it("renders the time for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryAllByText("9:00");

    expect(day).toHaveLength(2);
  });
  it("renders the time for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryAllByText("10:00");

    expect(day).toHaveLength(2);
  });
  it("renders the time for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryAllByText("11:00");

    expect(day).toHaveLength(2);
  });
  it("renders the rain chance for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("70");
  });

  it("renders the rain for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("20");

    expect(day).toBeInTheDocument;
  });
  it("renders the rain for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("21");

    expect(day).toBeInTheDocument;
  });
  it("renders the rain for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("22");

    expect(day).toBeInTheDocument;
  });
  it("renders the rain for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("23");

    expect(day).toBeInTheDocument;
  });
  it("renders the rain for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("24");

    expect(day).toBeInTheDocument;
  });
  it("renders the rain for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("25");

    expect(day).toBeInTheDocument;
  });
  it("renders the rain for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("26");

    expect(day).toBeInTheDocument;
  });
  it("renders the rain for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("27");

    expect(day).toBeInTheDocument;
  });
  it("renders the rain for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("28");

    expect(day).toBeInTheDocument;
  });
  it("renders the rain for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("29");

    expect(day).toBeInTheDocument;
  });
  it("renders the rain for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("30");

    expect(day).toBeInTheDocument;
  });
  it("renders the rain for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("31");

    expect(day).toBeInTheDocument;
  });
  it("renders the rain for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("32");

    expect(day).toBeInTheDocument;
  });
  it("renders the rain for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("33");

    expect(day).toBeInTheDocument;
  });
  it("renders the rain for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("34");

    expect(day).toBeInTheDocument;
  });
  it("renders the rain for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("35");

    expect(day).toBeInTheDocument;
  });
  it("renders the rain for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("36");

    expect(day).toBeInTheDocument;
  });
  it("renders the rain for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("37");

    expect(day).toBeInTheDocument;
  });
  it("renders the rain for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("38");

    expect(day).toBeInTheDocument;
  });
  it("renders the rain for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("39");

    expect(day).toBeInTheDocument;
  });
  it("renders the rain for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("40");

    expect(day).toBeInTheDocument;
  });
  it("renders the rain for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("41");

    expect(day).toBeInTheDocument;
  });
  it("renders the rain for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("42");

    expect(day).toBeInTheDocument;
  });

  it("renders the rain for that block", () => {
    render(
      <AllTheProviders>
        <WeatherDetailRain day={0} data={data} />
      </AllTheProviders>
    );
    const day = screen.queryByText("43");

    expect(day).toBeInTheDocument;
  });
});
