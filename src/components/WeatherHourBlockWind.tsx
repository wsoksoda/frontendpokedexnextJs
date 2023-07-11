import { HStack, Image, Text } from "@chakra-ui/react";
import { MotionSmall } from "./motion";

interface Props {
  day: number;
  militaryHour: number;
  normalHour: string;
  data: any;
}

function WeatherHourBlockWind({ day, militaryHour, normalHour, data }: Props) {
  return (
    <MotionSmall>
      <Text fontSize="xl">{normalHour}</Text>
      <Image
        src={data.forecast.forecastday[day].hour[militaryHour].condition.icon}
        alt={`${data.forecast.forecastday[day].hour[militaryHour].condition.text} weather image`}
      />
      <HStack>
        <Text fontSize="xl">
          {data.forecast.forecastday[day].hour[militaryHour].wind_mph}
        </Text>
        <Text fontSize="3xs">Mph</Text>
      </HStack>
    </MotionSmall>
  );
}

export default WeatherHourBlockWind;
