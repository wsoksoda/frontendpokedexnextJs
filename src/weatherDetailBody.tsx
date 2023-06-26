import { HStack, Button, Text, Image } from "@chakra-ui/react";
import React from "react";

interface Props {
  data: any;
  day: number;
  setWeatherType: (weatherType: number) => void;
}

function WeatherDetailBody(props: Props) {
  return (
    <>
      <Text fontSize={"xl"}>
        {props.data.forecast.forecastday[props.day].day.condition.text}
      </Text>
      <Image
        style={{
          display: "block",
          marginRight: "auto",
          marginLeft: "auto",
        }}
        src={props.data.forecast.forecastday[props.day].day.condition.icon}
      />
      <Text fontSize={"xl"}>
        Low: {props.data.forecast.forecastday[props.day].day.mintemp_f}° High:{" "}
        {props.data.forecast.forecastday[props.day].day.maxtemp_f}°
      </Text>
      <HStack
        style={{
          display: "block",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <Button
          onClick={() => props.setWeatherType(1)}
          colorScheme="yellow"
          style={{ margin: "1rem" }}
        >
          Temperature
        </Button>
        <Button
          onClick={() => props.setWeatherType(2)}
          colorScheme="yellow"
          style={{ margin: "1rem" }}
        >
          Wind
        </Button>
        <Button
          onClick={() => props.setWeatherType(3)}
          colorScheme="yellow"
          style={{ margin: "1rem" }}
        >
          Humidity
        </Button>
        <Button
          onClick={() => props.setWeatherType(4)}
          colorScheme="yellow"
          style={{ margin: "1rem" }}
        >
          Chance of Rain
        </Button>
      </HStack>
    </>
  );
}

export default WeatherDetailBody;
