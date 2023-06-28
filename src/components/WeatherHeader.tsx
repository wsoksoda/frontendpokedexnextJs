import { Text } from "@chakra-ui/react";

interface Prop {
  day: string;
}

function WeatherHeader(props: Prop) {
  return (
    <>
      <Text fontSize="2xl" mt="2rem" mb="1rem">
        {props.day}
      </Text>
    </>
  );
}

export default WeatherHeader;
