import WeatherBody from "@/weatherBody";
import WeatherHeader from "@/weatherHeader";
import WeatherOne from "@/weatherOne";
import WeatherWeek from "@/weatherWeek";
import { Box, Spinner, Text, Image } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

function Weather() {
  const { isLoading, error, data } = useQuery(["weather"], async () => {
    const response = await axios.get(
      "http://api.weatherapi.com/v1/current.json?key=d5559d652c3543a6ab7144421231906&q=fargo&aqi=yes"
    );
    const data = await response.data;
    return data;
  });

  if (isLoading) return <Spinner />;

  if (error) return "An error has occured";

  return (
    <Box
      style={{ minHeight: "100vh" }}
      bgGradient="linear(to-b,#2980B9 ,#6DD5FA 90%,#FFFFFF )"
    >
      <Box style={{ textAlign: "center" }}>
        <Text fontSize={"3xl"}>Fargo</Text>
        <WeatherHeader />
        <WeatherBody />
      </Box>
      <WeatherOne />
      <WeatherWeek />
    </Box>
  );
}

export default Weather;
