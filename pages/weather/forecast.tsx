import WeatherDetailBody from "@/components/WeatherDetailBody";
import WeatherHeader from "@/components/WeatherHeader";
import WeatherOne from "@/components/WeatherOne";
import { useWeather } from "@/utils/APICalls";
import {
  Box,
  Center,
  CloseButton,
  Link,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

function Forecast() {
  const router = useRouter();
  const [weatherType, setWeatherType] = useState(1);

  const day = parseInt((router.query.day as string) ?? "1");

  const position = parseInt((router.query.position as string) ?? "1");

  const { isLoading, error, data } = useWeather();

  if (isLoading) return <Spinner />;
  if (error) return "Error ....";

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
      pt="10rem"
      bgGradient="linear(to-b,#2980B9 ,#6DD5FA 90%,#FFFFFF )"
    >
      <Box textAlign="center">
        <Stack
          direction="row"
          spacing={6}
          textAlign="center"
          display="block"
          marginRight="auto"
          marginLeft="auto"
        >
          <Link href="/weather">
            <CloseButton size="lg" marginLeft="22rem" />
          </Link>
          <Text fontSize="3xl">Fargo</Text>
        </Stack>
        <WeatherHeader day={week[day]} />
        <WeatherDetailBody
          data={data}
          setWeatherType={setWeatherType}
          day={position}
        />
      </Box>
      <Center>
        <WeatherOne day={position} data={data} choice={weatherType} />
      </Center>
    </Box>
  );
}

export default Forecast;
