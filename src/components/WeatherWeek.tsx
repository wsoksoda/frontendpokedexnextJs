import { Box, Center, HStack } from "@chakra-ui/react";
import WeatherDayBlock from "./WeatherDayBlock";

interface Prop {
  startDay: number;
  data: any;
}

function WeatherWeek({ startDay, data }: Prop) {
  return (
    <Box display="block" mr="auto" ml="auto" textAlign="center">
      <Center>
        <HStack direction="row">
          <Box mr="5">
            <WeatherDayBlock
              day={(startDay + 1) % 7}
              position={1}
              data={data}
            />
          </Box>
          <Box ml="5">
            <WeatherDayBlock
              day={(startDay + 2) % 7}
              position={2}
              data={data}
            />
          </Box>
        </HStack>
      </Center>
    </Box>
  );
}

export default WeatherWeek;
