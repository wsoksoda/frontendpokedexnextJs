import { Image, Text } from "@chakra-ui/react";
import { MotionSmall } from "./motion";

interface Props {
  day: number;
  militaryHour: number;
  normalHour: string;
  data: any;
}

function WeatherHourBlockRain({ day, militaryHour, normalHour, data }: Props) {
  return (
    <MotionSmall>
      <Text fontSize="xl">{normalHour}</Text>
      <Image
        src={data.forecast.forecastday[day].hour[militaryHour].condition.icon}
      ></Image>
      <Text fontSize="xl">
        {data.forecast.forecastday[day].hour[militaryHour].chance_of_rain}%
      </Text>
    </MotionSmall>
  );
}

export default WeatherHourBlockRain;
