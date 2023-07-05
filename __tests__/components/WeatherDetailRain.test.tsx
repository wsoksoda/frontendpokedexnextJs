import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AllTheProviders } from "../../jest.setup";
import WeatherDetailRain from "@/components/WeatherDetailRain";

jest.mock("next/router", () => require("next-router-mock"));

const data = {
  current: {
    temp_f: 64.9,
    condition: {
      text: "Partly cloudy",
      icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
      code: 1003,
    },
    wind_mph: 15.0,
    humidity: 54,
  },
  forecast: {
    forecastday: [
      {
        date: "2023-07-05",
        date_epoch: 1688515200,
        day: {
          maxtemp_c: 21.8,
          maxtemp_f: 71.2,
          mintemp_c: 11.1,
          mintemp_f: 52.0,
          condition: {
            text: "Sunny",
            icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
            code: 1000,
          },
        },
        hour: [
          {
            temp_f: 56.5,
            condition: {
              text: "Clear",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000,
            },
            wind_mph: 11.0,
            humidity: 70,
            chance_of_rain: 70,
          },
          {
            temp_f: 54.3,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
              code: 1003,
            },
            wind_mph: 11.6,
            humidity: 71,
            chance_of_rain: 0,
          },
          {
            temp_f: 54.1,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
              code: 1003,
            },
            wind_mph: 8.7,
            humidity: 72,
            chance_of_rain: 0,
          },
          {
            temp_f: 53.4,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
              code: 1003,
            },
            wind_mph: 7.4,
            humidity: 73,
            chance_of_rain: 0,
          },
          {
            temp_f: 53.1,
            condition: {
              text: "Cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/119.png",
              code: 1006,
            },
            wind_mph: 7.6,
            humidity: 74,
            chance_of_rain: 0,
          },
          {
            temp_f: 53.4,
            condition: {
              text: "Cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/119.png",
              code: 1006,
            },
            wind_mph: 8.7,
            humidity: 75,
            chance_of_rain: 0,
          },
          {
            temp_f: 53.4,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
              code: 1003,
            },
            wind_mph: 9.2,
            humidity: 76,
            chance_of_rain: 0,
          },
          {
            temp_f: 54.0,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
              code: 1003,
            },
            wind_mph: 8.5,
            humidity: 77,
            chance_of_rain: 0,
          },
          {
            temp_f: 52.0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 9.8,
            humidity: 78,
            chance_of_rain: 0,
          },
          {
            temp_f: 54.5,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 11.0,
            humidity: 79,
            chance_of_rain: 0,
          },
          {
            temp_f: 57.7,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 11.2,
            humidity: 80,
            chance_of_rain: 0,
          },
          {
            temp_f: 61.9,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 10.7,
            humidity: 81,
            chance_of_rain: 0,
          },
          {
            temp_f: 64.2,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 11.2,
            humidity: 82,
            chance_of_rain: 0,
          },
          {
            temp_f: 66.6,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 11.9,
            humidity: 83,
            chance_of_rain: 0,
          },
          {
            temp_f: 68.4,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 10.7,
            humidity: 84,
            chance_of_rain: 0,
          },
          {
            temp_f: 67.6,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
              code: 1003,
            },
            wind_mph: 8.9,
            humidity: 85,
            chance_of_rain: 0,
          },
          {
            temp_f: 69.6,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 8.3,
            humidity: 86,
            chance_of_rain: 0,
          },
          {
            temp_f: 68.9,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 8.3,
            humidity: 87,
            chance_of_rain: 0,
          },
          {
            temp_f: 71.2,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 6.9,
            humidity: 88,
            chance_of_rain: 0,
          },
          {
            temp_f: 68.7,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 5.6,
            humidity: 89,
            chance_of_rain: 0,
          },
          {
            temp_f: 64.9,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 5.1,
            humidity: 90,
            chance_of_rain: 0,
          },
          {
            temp_f: 60.6,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            wind_mph: 5.6,
            humidity: 91,
            chance_of_rain: 0,
          },
          {
            temp_f: 58.8,
            condition: {
              text: "Clear",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000,
            },
            wind_mph: 4.9,
            humidity: 92,
            chance_of_rain: 0,
          },
          {
            temp_f: 57.4,
            condition: {
              text: "Clear",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000,
            },
            wind_mph: 4.3,
            humidity: 93,
            chance_of_rain: 0,
          },
        ],
      },
      {
        date: "2023-07-06",
        date_epoch: 1688601600,
        day: {
          maxtemp_c: 26.2,
          maxtemp_f: 79.2,
          mintemp_c: 7.9,
          mintemp_f: 46.2,
          condition: {
            text: "Sunny",
            icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
            code: 1000,
          },
        },
      },
      {
        date: "2023-07-07",
        date_epoch: 1688688000,
        day: {
          maxtemp_c: 22.8,
          maxtemp_f: 73.0,
          mintemp_c: 12.2,
          mintemp_f: 54.0,
          avghumidity: 77.0,
          daily_chance_of_rain: 81,
          condition: {
            text: "Moderate rain",
            icon: "//cdn.weatherapi.com/weather/64x64/day/302.png",
            code: 1189,
          },
        },
      },
    ],
  },
};

function testFunction(): void {}

describe("Humidity", () => {
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
});
