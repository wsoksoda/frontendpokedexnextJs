import { Text, Image } from "@chakra-ui/react";
import React from "react";

interface Prop {
  data: any;
}
function WeatherBody(props: Prop) {
  return (
    <>
      <Text fontSize={"xl"}>{props.data.current.temp_f}°</Text>
      <Text fontSize={"xl"}>{props.data.current.condition.text}</Text>
      <Image
        style={{
          display: "block",
          marginRight: "auto",
          marginLeft: "auto",
        }}
        src={props.data.current.condition.icon}
      />
      <Text fontSize={"xl"}>
        Low: {props.data.forecast.forecastday[0].day.mintemp_f}° High:{" "}
        {props.data.forecast.forecastday[0].day.maxtemp_f}°
      </Text>
    </>
  );
}

export default WeatherBody;
