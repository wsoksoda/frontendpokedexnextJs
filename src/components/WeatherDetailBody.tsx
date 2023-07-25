import { HStack, Button, Text, Image } from "@chakra-ui/react";

interface Props {
  data: any;
  day: number;
  setWeatherType: (weatherType: number) => void;
}

function WeatherDetailBody({ day, data, setWeatherType }: Props) {
  return (
    <>
      <Text fontSize="xl">
        {data.forecast.forecastday[day].day.condition.text}
      </Text>
      <Image
        display="block"
        mr="auto"
        ml="auto"
        src={data.forecast.forecastday[day].day.condition.icon}
        alt={`${data.forecast.forecastday[day].day.condition.text} weather image`}
      />
      <Text fontSize="xl">
        Low: {data.forecast.forecastday[day].day.mintemp_f}° High:{" "}
        {data.forecast.forecastday[day].day.maxtemp_f}°
      </Text>
      <HStack display="block" mr="auto" ml="auto">
        <Button onClick={() => setWeatherType(1)} colorScheme="yellow" m="1rem">
          Temperature
        </Button>
        <Button onClick={() => setWeatherType(2)} colorScheme="yellow" m="1rem">
          Wind
        </Button>
        <Button onClick={() => setWeatherType(3)} colorScheme="yellow" m="1rem">
          Humidity
        </Button>
        <Button onClick={() => setWeatherType(4)} colorScheme="yellow" m="1rem">
          Chance of Rain
        </Button>
      </HStack>
    </>
  );
}

export default WeatherDetailBody;
