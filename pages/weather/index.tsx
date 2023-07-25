import WeatherBody from "@/components/WeatherBody";
import WeatherHeader from "@/components/WeatherHeader";
import WeatherOne from "@/components/WeatherOne";
import WeatherWeek from "@/components/WeatherWeek";
import { MotionSmall } from "@/components/motion";
import { useWeather } from "@/utils/APICalls";
import {
  Center,
  Box,
  CloseButton,
  Link,
  Text,
  Spinner,
} from "@chakra-ui/react";

function WeatherIndex() {
  const { isLoading, error, data } = useWeather();

  if (isLoading) return <Spinner />;
  if (error) return "Error ....";

  const dt = new Date();
  const day = dt.getDay();

  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  console.log(data);
  return (
    <Box
      minH="100vh"
      pt="1rem"
      bgGradient="linear(to-b,#2980B9 ,#6DD5FA 90%,#FFFFFF )"
    >
      <Link href="/">
        <CloseButton size="lg" ml="2rem" />
      </Link>
      <Box textAlign="center">
        <Text fontSize="3xl">Fargo</Text>

        <MotionSmall>
          <Link href={`/weather/forecast?position=0&day=${day}`}>
            <WeatherHeader day={week[day]} />
            <WeatherBody data={data} />
          </Link>
        </MotionSmall>
      </Box>
      <Center>
        <WeatherOne day={0} data={data} choice={1} />
      </Center>
      <WeatherWeek startDay={day} data={data} />
    </Box>
  );
}

export default WeatherIndex;
