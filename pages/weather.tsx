import WeatherBody from "@/components/WeatherBody";
import WeatherHeader from "@/components/WeatherHeader";
import WeatherOne from "@/components/WeatherOne";
import WeatherWeek from "@/components/WeatherWeek";
import { MotionSmall } from "@/components/motion";
import {
  Center,
  Box,
  CloseButton,
  Link,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Weather() {
  const { isLoading, error, data } = useQuery(["weather"], async () => {
    const response = await axios.get(
      "http://api.weatherapi.com/v1/forecast.json?key=d5559d652c3543a6ab7144421231906&q=fargo&days=7&aqi=no&alerts=no"
    );

    const data = await response.data;

    return data;
  });

  if (isLoading) return <Spinner />;

  if (error) return "An error has occured";

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
          <Link href={`/forecast?position=0&day=${day}`}>
            <WeatherHeader day={week[day]} />
            <WeatherBody data={data} />
          </Link>
        </MotionSmall>
      </Box>
      <Center>
        <WeatherOne day={0} data={data} choice={1} />
      </Center>
      {/* <WeatherWeek startDay={day} data={data} /> */}
    </Box>
  );
}

export default Weather;
