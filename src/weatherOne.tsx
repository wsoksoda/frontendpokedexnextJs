import { Spinner, Text, Image, Box, HStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BlockList } from "net";
import React from "react";

function WeatherOne() {
  const { isLoading, error, data } = useQuery(["dayOne"], async () => {
    const response = await axios.get(
      "http://api.weatherapi.com/v1/forecast.json?key=d5559d652c3543a6ab7144421231906&q=fargo&days=7&aqi=no&alerts=no"
    );

    const data = await response.data;
    return data;
  });

  if (isLoading) return <Spinner />;

  if (error) return "An error has occured";

  return (
    <Box
      style={{
        display: "block",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: "2rem",
        width: "50%",
      }}
    >
      <HStack style={{ textAlign: "center" }}>
        <Box>
          <Text fontSize={"xl"}>12:00</Text>
          <Image
            src={data.forecast.forecastday[0].hour[0].condition.icon}
          ></Image>
          <Text fontSize={"xl"}>
            {data.forecast.forecastday[0].hour[0].temp_f}°
          </Text>
        </Box>
        <Box>
          <Text fontSize={"xl"}>1:00</Text>
          <Image
            src={data.forecast.forecastday[0].hour[1].condition.icon}
          ></Image>
          <Text fontSize={"xl"}>
            {data.forecast.forecastday[0].hour[1].temp_f}°
          </Text>
        </Box>
        <Box>
          <Text fontSize={"xl"}>2:00</Text>
          <Image
            src={data.forecast.forecastday[0].hour[2].condition.icon}
          ></Image>
          <Text fontSize={"xl"}>
            {data.forecast.forecastday[0].hour[2].temp_f}°
          </Text>
        </Box>
        <Box>
          <Text fontSize={"xl"}>3:00</Text>
          <Image
            src={data.forecast.forecastday[0].hour[3].condition.icon}
          ></Image>
          <Text fontSize={"xl"}>
            {data.forecast.forecastday[0].hour[3].temp_f}°
          </Text>
        </Box>
        <Box>
          <Text fontSize={"xl"}>4:00</Text>
          <Image
            src={data.forecast.forecastday[0].hour[4].condition.icon}
          ></Image>
          <Text fontSize={"xl"}>
            {data.forecast.forecastday[0].hour[4].temp_f}°
          </Text>
        </Box>
        <Box>
          <Text fontSize={"xl"}>5:00</Text>
          <Image
            src={data.forecast.forecastday[0].hour[5].condition.icon}
          ></Image>
          <Text fontSize={"xl"}>
            {data.forecast.forecastday[0].hour[5].temp_f}°
          </Text>
        </Box>
        <Box>
          <Text fontSize={"xl"}>6:00</Text>
          <Image
            src={data.forecast.forecastday[0].hour[6].condition.icon}
          ></Image>
          <Text fontSize={"xl"}>
            {data.forecast.forecastday[0].hour[6].temp_f}°
          </Text>
        </Box>
        <Box>
          <Text fontSize={"xl"}>7:00</Text>
          <Image
            src={data.forecast.forecastday[0].hour[7].condition.icon}
          ></Image>
          <Text fontSize={"xl"}>
            {data.forecast.forecastday[0].hour[7].temp_f}°
          </Text>
        </Box>
        <Box>
          <Text fontSize={"xl"}>8:00</Text>
          <Image
            src={data.forecast.forecastday[0].hour[8].condition.icon}
          ></Image>
          <Text fontSize={"xl"}>
            {data.forecast.forecastday[0].hour[8].temp_f}°
          </Text>
        </Box>
        <Box>
          <Text fontSize={"xl"}>9:00</Text>
          <Image
            src={data.forecast.forecastday[0].hour[9].condition.icon}
          ></Image>
          <Text fontSize={"xl"}>
            {data.forecast.forecastday[0].hour[9].temp_f}°
          </Text>
        </Box>
        <Box>
          <Text fontSize={"xl"}>10:00</Text>
          <Image
            src={data.forecast.forecastday[0].hour[10].condition.icon}
          ></Image>
          <Text fontSize={"xl"}>
            {data.forecast.forecastday[0].hour[10].temp_f}°
          </Text>
        </Box>
        <Box>
          <Text fontSize={"xl"}>11:00</Text>
          <Image
            src={data.forecast.forecastday[0].hour[11].condition.icon}
          ></Image>
          <Text fontSize={"xl"}>
            {data.forecast.forecastday[0].hour[11].temp_f}°
          </Text>
        </Box>
      </HStack>
      <HStack style={{ textAlign: "center", marginTop: "2rem" }}>
        <Box>
          <Text fontSize={"xl"}>12:00</Text>
          <Image
            src={data.forecast.forecastday[0].hour[12].condition.icon}
          ></Image>
          <Text fontSize={"xl"}>
            {data.forecast.forecastday[0].hour[12].temp_f}°
          </Text>
        </Box>
        <Box>
          <Text fontSize={"xl"}>1:00</Text>
          <Image
            src={data.forecast.forecastday[0].hour[13].condition.icon}
          ></Image>
          <Text fontSize={"xl"}>
            {data.forecast.forecastday[0].hour[13].temp_f}°
          </Text>
        </Box>
        <Box>
          <Text fontSize={"xl"}>2:00</Text>
          <Image
            src={data.forecast.forecastday[0].hour[14].condition.icon}
          ></Image>
          <Text fontSize={"xl"}>
            {data.forecast.forecastday[0].hour[14].temp_f}°
          </Text>
        </Box>
        <Box>
          <Text fontSize={"xl"}>3:00</Text>
          <Image
            src={data.forecast.forecastday[0].hour[15].condition.icon}
          ></Image>
          <Text fontSize={"xl"}>
            {data.forecast.forecastday[0].hour[15].temp_f}°
          </Text>
        </Box>
        <Box>
          <Text fontSize={"xl"}>4:00</Text>
          <Image
            src={data.forecast.forecastday[0].hour[16].condition.icon}
          ></Image>
          <Text fontSize={"xl"}>
            {data.forecast.forecastday[0].hour[16].temp_f}°
          </Text>
        </Box>
        <Box>
          <Text fontSize={"xl"}>5:00</Text>
          <Image
            src={data.forecast.forecastday[0].hour[17].condition.icon}
          ></Image>
          <Text fontSize={"xl"}>
            {data.forecast.forecastday[0].hour[17].temp_f}°
          </Text>
        </Box>
        <Box>
          <Text fontSize={"xl"}>6:00</Text>
          <Image
            src={data.forecast.forecastday[0].hour[18].condition.icon}
          ></Image>
          <Text fontSize={"xl"}>
            {data.forecast.forecastday[0].hour[18].temp_f}°
          </Text>
        </Box>
        <Box>
          <Text fontSize={"xl"}>7:00</Text>
          <Image
            src={data.forecast.forecastday[0].hour[19].condition.icon}
          ></Image>
          <Text fontSize={"xl"}>
            {data.forecast.forecastday[0].hour[19].temp_f}°
          </Text>
        </Box>
        <Box>
          <Text fontSize={"xl"}>8:00</Text>
          <Image
            src={data.forecast.forecastday[0].hour[20].condition.icon}
          ></Image>
          <Text fontSize={"xl"}>
            {data.forecast.forecastday[0].hour[20].temp_f}°
          </Text>
        </Box>
        <Box>
          <Text fontSize={"xl"}>9:00</Text>
          <Image
            src={data.forecast.forecastday[0].hour[21].condition.icon}
          ></Image>
          <Text fontSize={"xl"}>
            {data.forecast.forecastday[0].hour[21].temp_f}°
          </Text>
        </Box>
        <Box>
          <Text fontSize={"xl"}>10:00</Text>
          <Image
            src={data.forecast.forecastday[0].hour[22].condition.icon}
          ></Image>
          <Text fontSize={"xl"}>
            {data.forecast.forecastday[0].hour[22].temp_f}°
          </Text>
        </Box>
        <Box>
          <Text fontSize={"xl"}>11:00</Text>
          <Image
            src={data.forecast.forecastday[0].hour[23].condition.icon}
          ></Image>
          <Text fontSize={"xl"}>
            {data.forecast.forecastday[0].hour[23].temp_f}°
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}

export default WeatherOne;
