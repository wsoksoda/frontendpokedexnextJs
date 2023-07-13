import { Text } from "@chakra-ui/react";

interface Prop {
  day: string;
}

function WeatherHeader({ day }: Prop) {
  return (
    <>
      <Text fontSize="2xl" mt="2rem" mb="1rem">
        {day}
      </Text>
    </>
  );
}

export default WeatherHeader;
