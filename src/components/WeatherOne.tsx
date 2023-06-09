import WeatherDetailHumidity from "./WeatherDetailHumidity";
import WeatherDetailRain from "./WeatherDetailRain";
import WeatherDetailTemp from "./WeatherDetailTemp";
import WeatherDetailWind from "./WeatherDetailWind";

interface Prop {
  day: number;
  data: any;
  choice: number;
}

function WeatherOne(props: Prop) {
  if (props.choice == 1) {
    return <WeatherDetailTemp data={props.data} day={props.day} />;
  }
  if (props.choice == 2) {
    return <WeatherDetailWind data={props.data} day={props.day} />;
  }
  if (props.choice == 3) {
    return <WeatherDetailHumidity data={props.data} day={props.day} />;
  }
  if (props.choice == 4) {
    return <WeatherDetailRain data={props.data} day={props.day} />;
  }
}

export default WeatherOne;
