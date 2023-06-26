import WeatherDetailBody from "@/weatherDetailBody";
import WeatherHeader from "@/weatherHeader";
import WeatherOne from "@/weatherOne";
import { Box, CloseButton, Link, Spinner, Stack, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

function WeatherDetail() {
  const [weatherType, setWeatherType] = useState(1);

  const { isLoading, error, data } = useQuery(["week"], async () => {
    const response = await axios.get(
      "http://api.weatherapi.com/v1/forecast.json?key=d5559d652c3543a6ab7144421231906&q=fargo&days=7&aqi=no&alerts=no"
    );

    const data = await response.data;

    return data;
  });

  if (isLoading) return <Spinner />;

  if (error) return "An error has occured";

  const router = useRouter();

  const day = parseInt((router.query.day as string) ?? "1");

  const position = parseInt((router.query.position as string) ?? "1");

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
      style={{ minHeight: "100vh", paddingTop: "10rem" }}
      bgGradient="linear(to-b,#2980B9 ,#6DD5FA 90%,#FFFFFF )"
    >
      <Box style={{ textAlign: "center" }}>
        <Stack
          direction="row"
          spacing={6}
          style={{
            textAlign: "center",
            display: "block",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <Link href="/weather">
            <CloseButton size="lg" style={{ marginLeft: "22rem" }} />
          </Link>
          <Text fontSize={"3xl"}>Fargo</Text>
        </Stack>
        <WeatherHeader day={week[day]} />
        <WeatherDetailBody
          data={data}
          setWeatherType={setWeatherType}
          day={position}
        />
      </Box>
      <WeatherOne day={position} data={data} choice={weatherType} />
    </Box>
  );
}

export default WeatherDetail;
