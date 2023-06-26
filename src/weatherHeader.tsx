import { Text } from "@chakra-ui/react";
import React from "react";

interface Prop {
  day: string;
}

function WeatherHeader(props: Prop) {
  return (
    <>
      <Text
        fontSize={"2xl"}
        style={{ marginTop: "2rem", marginBottom: "1rem" }}
      >
        {props.day}
      </Text>
    </>
  );
}

export default WeatherHeader;
