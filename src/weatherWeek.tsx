import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import WeatherDayBlock from "./weatherDayBlock";

interface Prop {
  startDay: number;
  data: any;
}

function WeatherWeek(props: Prop) {
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
          <WeatherDayBlock
            day={(props.startDay + 1) % 7}
            position={1}
            data={props.data}
          />
          <WeatherDayBlock
            day={(props.startDay + 2) % 7}
            position={2}
            data={props.data}
          />
          <WeatherDayBlock
            day={(props.startDay + 3) % 7}
            position={3}
            data={props.data}
          />
        </Box>
        <Box
          style={{
            display: "block",
            marginRight: "auto",
            marginLeft: "auto",
            textAlign: "center",
          }}
        >
          <WeatherDayBlock
            day={(props.startDay + 4) % 7}
            position={4}
            data={props.data}
          />
          <WeatherDayBlock
            day={(props.startDay + 5) % 7}
            position={5}
            data={props.data}
          />
          <WeatherDayBlock
            day={(props.startDay + 6) % 7}
            position={6}
            data={props.data}
          />
        </Box>
      </HStack>
    </>
  );
}

export default WeatherWeek;
