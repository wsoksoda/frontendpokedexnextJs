import { Text, Image, Box, Link } from "@chakra-ui/react";
import { MotionSmall } from "./motion";

interface Props {
  day: number;
  position: number;
  data: any;
}

function WeatherDayBlock({ day, position, data }: Props) {
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
      <Link href={`/weather/forecast?position=${position}&day=${day}`}>
        <Box display="block" mr="auto" ml="auto" textAlign="center">
          <Text fontSize="2xl" mt="3rem">
            {week[day]}
          </Text>
          <Image
            display="block"
            mr="auto"
            ml="auto"
            src={data.forecast.forecastday[position].day.condition.icon}
            alt={`${data.forecast.forecastday[position].day.condition.text} weather image`}
          ></Image>
          <Text fontSize="xl">
            Low: {data.forecast.forecastday[position].day.mintemp_f}° High:{" "}
            {data.forecast.forecastday[position].day.maxtemp_f}°
          </Text>
        </Box>
      </Link>
    </MotionSmall>
  );
}

export default WeatherDayBlock;
