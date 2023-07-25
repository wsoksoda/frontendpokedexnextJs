import { Text, Image } from "@chakra-ui/react";

interface Prop {
  data: any;
}
function WeatherBody({ data }: Prop) {
  return (
    <>
      <Text fontSize="xl">{data.current.temp_f}°</Text>
      <Text fontSize="xl">{data.current.condition.text}</Text>
      <Image
        display="block"
        mr="auto"
        ml="auto"
        src={data.current.condition.icon}
        alt={`${data.current.condition.text} weather image`}
      />
      <Text fontSize="xl">
        Low: {data.forecast.forecastday[0].day.mintemp_f}° High:{" "}
        {data.forecast.forecastday[0].day.maxtemp_f}°
      </Text>
    </>
  );
}

export default WeatherBody;
