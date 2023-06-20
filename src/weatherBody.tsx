import { Spinner, Text, Image } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

function WeatherBody() {
  const { isLoading, error, data } = useQuery(["forecast"], async () => {
    const response = await axios.get(
      "http://api.weatherapi.com/v1/forecast.json?key=d5559d652c3543a6ab7144421231906&q=fargo&days=7&aqi=no&alerts=no"
    );

    const data = await response.data;
    return data;
  });

  if (isLoading) return <Spinner />;

  if (error) return "An error has occured";
  return (
    <>
      <Text fontSize={"xl"}>
        Low: {data.forecast.forecastday[0].day.mintemp_f}° High:{" "}
        {data.forecast.forecastday[0].day.maxtemp_f}°
      </Text>
    </>
  );
}

export default WeatherBody;
