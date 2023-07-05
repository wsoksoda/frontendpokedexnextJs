import { Text, Image, Box, Link } from "@chakra-ui/react";
import { MotionSmall } from "./motion";

interface Props {
  day: number;
  position: number;
  data: any;
}

function WeatherDayBlock(props: Props) {
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <MotionSmall>
      <Link
        href={`/weather/forecast?position=${props.position}&day=${props.day}`}
      >
        <Box display="block" mr="auto" ml="auto" textAlign="center">
          <Text fontSize="2xl" mt="3rem">
            {week[props.day]}
          </Text>
          <Image
            display="block"
            mr="auto"
            ml="auto"
            src={
              props.data.forecast.forecastday[props.position].day.condition.icon
            }
          ></Image>
          <Text fontSize="xl">
            Low: {props.data.forecast.forecastday[props.position].day.mintemp_f}
            ° High:{" "}
            {props.data.forecast.forecastday[props.position].day.maxtemp_f}°
          </Text>
        </Box>
      </Link>
    </MotionSmall>
  );
}

export default WeatherDayBlock;
