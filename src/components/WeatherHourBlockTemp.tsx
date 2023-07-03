import { Image, Text } from "@chakra-ui/react";
import { MotionSmall } from "./motion";

interface Props {
  day: number;
  militaryHour: number;
  normalHour: string;
  data: any;
}

function WeatherHourBlockTemp(props: Props) {
  return (
    <MotionSmall>
      <Text fontSize="xl">{props.normalHour}</Text>
      <Image
        src={
          props.data.forecast.forecastday[props.day].hour[props.militaryHour]
            .condition.icon
        }
      ></Image>
      <Text fontSize="xl">
        {
          props.data.forecast.forecastday[props.day].hour[props.militaryHour]
            .temp_f
        }
        °
      </Text>
    </MotionSmall>
  );
}

export default WeatherHourBlockTemp;
