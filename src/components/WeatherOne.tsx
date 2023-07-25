import WeatherDetailHumidity from "./WeatherDetailHumidity";
import WeatherDetailRain from "./WeatherDetailRain";
import WeatherDetailTemp from "./WeatherDetailTemp";
import WeatherDetailWind from "./WeatherDetailWind";

interface Prop {
  day: number;
  data: any;
  choice: number;
}

function WeatherOne({ day, data, choice }: Prop) {
  if (choice == 1) {
    return <WeatherDetailTemp data={data} day={day} />;
  }
  if (choice == 2) {
    return <WeatherDetailWind data={data} day={day} />;
  }
  if (choice == 3) {
    return <WeatherDetailHumidity data={data} day={day} />;
  }
  if (choice == 4) {
    return <WeatherDetailRain data={data} day={day} />;
  }
}

export default WeatherOne;
