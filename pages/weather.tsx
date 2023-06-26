import WeatherBody from "@/weatherBody";
import WeatherHeader from "@/weatherHeader";
import WeatherOne from "@/weatherOne";
import WeatherWeek from "@/weatherWeek";
import { Box, CloseButton, Link, Spinner, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";
import React from "react";

function Weather() {
  const { isLoading, error, data } = useQuery(["week"], async () => {
    const response = await axios.get(
      "http://api.weatherapi.com/v1/forecast.json?key=d5559d652c3543a6ab7144421231906&q=fargo&days=7&aqi=no&alerts=no"
    );

    const data = await response.data;

    return data;
  });

  if (isLoading) return <Spinner />;

  if (error) return "An error has occured";

  const dt = new Date();
  const day = dt.getDay();

  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <Box
      style={{ minHeight: "100vh", paddingTop: "1rem" }}
      bgGradient="linear(to-b,#2980B9 ,#6DD5FA 90%,#FFFFFF )"
    >
      <Link href="/">
        <CloseButton size="lg" style={{ marginLeft: "2rem" }} />
      </Link>
      <Box style={{ textAlign: "center" }}>
        <Text fontSize={"3xl"}>Fargo</Text>

        <motion.div whileHover={{ scale: 1 }}>
          <Link href={`/weatherDetail?position=0&day=${day}`}>
            <WeatherHeader day={week[day]} />
            <WeatherBody data={data} />
          </Link>
        </motion.div>
      </Box>
      <WeatherOne day={0} data={data} choice={1} />
      <WeatherWeek startDay={day} data={data} />
    </Box>
  );
}

export default Weather;
