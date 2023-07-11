import { Image, Text } from "@chakra-ui/react";
import { MotionSmall } from "./motion";
interface Props {
  day: number;
  militaryHour: number;
  normalHour: string;
  data: any;
}

function WeatherHourBlockHumidity({
  day,
  militaryHour,
  normalHour,
  data,
}: Props) {
  return (
    <MotionSmall>
      <Text fontSize="xl">{normalHour}</Text>
      <Image
        src={data.forecast.forecastday[day].hour[militaryHour].condition.icon}
        alt={data.forecast.forecastday[day].hour[militaryHour].condition.text}
      />
      <Text fontSize="xl">
        {data.forecast.forecastday[day].hour[militaryHour].humidity}%
      </Text>
    </MotionSmall>
  );
}

export default WeatherHourBlockHumidity;
