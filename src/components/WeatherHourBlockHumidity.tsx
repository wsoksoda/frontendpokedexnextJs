import { Image, Text } from "@chakra-ui/react";
import { MotionSmall } from "./motion";
interface Props {
  day: number;
  militaryHour: number;
  normalHour: string;
  data: any;
}

function WeatherHourBlockHumidity(props: Props) {
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
            .humidity
        }
        %
      </Text>
    </MotionSmall>
  );
}

export default WeatherHourBlockHumidity;
