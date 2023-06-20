import { Spinner, Text, Image } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

function WeatherHeader() {
  const { isLoading, error, data } = useQuery(["weather"], async () => {
    const response = await axios.get(
      "http://api.weatherapi.com/v1/current.json?key=d5559d652c3543a6ab7144421231906&q=fargo&aqi=yes"
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
    <>
      <Text
        fontSize={"2xl"}
        style={{ marginTop: "2rem", marginBottom: "1rem" }}
      >
        {week[day]}
      </Text>
      <Text fontSize={"xl"}>{data.current.temp_f}°</Text>
      <Text fontSize={"xl"}>{data.current.condition.text}</Text>
      <Image
        style={{
          display: "block",
          marginRight: "auto",
          marginLeft: "auto",
        }}
        src={data.current.condition.icon}
      />
    </>
  );
}

export default WeatherHeader;
