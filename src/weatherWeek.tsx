import { Spinner, Text, Image, Box, HStack } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useQuery } from "@tanstack/react-query";

function WeatherWeek() {
  const { isLoading, error, data } = useQuery(["week"], async () => {
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
    <>
      <HStack>
        <Box
          style={{
            display: "block",
            marginRight: "auto",
            marginLeft: "auto",
            textAlign: "center",
          }}
        >
          <Box
            style={{
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
              textAlign: "center",
            }}
          >
            <Text fontSize={"2xl"} style={{ marginTop: "3rem" }}>
              {week[(day + 1) % 7]}
            </Text>
            <Image
              style={{
                display: "block",
                marginRight: "auto",
                marginLeft: "auto",
              }}
              src={data.forecast.forecastday[1].day.condition.icon}
            ></Image>
            <Text fontSize={"xl"}>
              Low: {data.forecast.forecastday[1].day.mintemp_f}° High:{" "}
              {data.forecast.forecastday[1].day.maxtemp_f}°
            </Text>
          </Box>
          <Box
            style={{
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
              textAlign: "center",
            }}
          >
            <Text fontSize={"2xl"} style={{ marginTop: "3rem" }}>
              {week[(day + 2) % 7]}
            </Text>
            <Image
              style={{
                display: "block",
                marginRight: "auto",
                marginLeft: "auto",
              }}
              src={data.forecast.forecastday[2].day.condition.icon}
            ></Image>
            <Text fontSize={"xl"}>
              Low: {data.forecast.forecastday[2].day.mintemp_f}° High:{" "}
              {data.forecast.forecastday[2].day.maxtemp_f}°
            </Text>
          </Box>
          <Box
            style={{
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
              textAlign: "center",
            }}
          >
            <Text fontSize={"2xl"} style={{ marginTop: "3rem" }}>
              {week[(day + 3) % 7]}
            </Text>
            <Image
              style={{
                display: "block",
                marginRight: "auto",
                marginLeft: "auto",
              }}
              src={data.forecast.forecastday[3].day.condition.icon}
            ></Image>
            <Text fontSize={"xl"}>
              Low: {data.forecast.forecastday[3].day.mintemp_f}° High:{" "}
              {data.forecast.forecastday[3].day.maxtemp_f}°
            </Text>
          </Box>
        </Box>
        <Box
          style={{
            display: "block",
            marginRight: "auto",
            marginLeft: "auto",
            textAlign: "center",
          }}
        >
          <Box
            style={{
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
              textAlign: "center",
            }}
          >
            <Text fontSize={"2xl"} style={{ marginTop: "3rem" }}>
              {week[(day + 4) % 7]}
            </Text>
            <Image
              style={{
                display: "block",
                marginRight: "auto",
                marginLeft: "auto",
              }}
              src={data.forecast.forecastday[4].day.condition.icon}
            ></Image>
            <Text fontSize={"xl"}>
              Low: {data.forecast.forecastday[4].day.mintemp_f}° High:{" "}
              {data.forecast.forecastday[4].day.maxtemp_f}°
            </Text>
          </Box>
          <Box
            style={{
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
              textAlign: "center",
            }}
          >
            <Text fontSize={"2xl"} style={{ marginTop: "3rem" }}>
              {week[(day + 5) % 7]}
            </Text>
            <Image
              style={{
                display: "block",
                marginRight: "auto",
                marginLeft: "auto",
              }}
              src={data.forecast.forecastday[5].day.condition.icon}
            ></Image>
            <Text fontSize={"xl"}>
              Low: {data.forecast.forecastday[5].day.mintemp_f}° High:{" "}
              {data.forecast.forecastday[5].day.maxtemp_f}°
            </Text>
          </Box>
          <Box
            style={{
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
              textAlign: "center",
            }}
          >
            <Text fontSize={"2xl"} style={{ marginTop: "3rem" }}>
              {week[(day + 6) % 7]}
            </Text>
            <Image
              style={{
                display: "block",
                marginRight: "auto",
                marginLeft: "auto",
              }}
              src={data.forecast.forecastday[6].day.condition.icon}
            ></Image>
            <Text fontSize={"xl"}>
              Low: {data.forecast.forecastday[6].day.mintemp_f}° High:{" "}
              {data.forecast.forecastday[6].day.maxtemp_f}°
            </Text>
          </Box>
        </Box>
      </HStack>
    </>
  );
}

export default WeatherWeek;
