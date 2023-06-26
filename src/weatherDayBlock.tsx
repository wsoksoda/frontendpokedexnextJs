import { Text, Image, Box, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

interface Props {
  day: number;
  position: number;
  data: any;
}

function WeatherDayBlock(props: Props) {
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
    <motion.div whileHover={{ scale: 1.2 }}>
      <Link href={`/weatherDetail?position=${props.position}&day=${props.day}`}>
        <Box
          style={{
            display: "block",
            marginRight: "auto",
            marginLeft: "auto",
            textAlign: "center",
          }}
        >
          <Text fontSize={"2xl"} style={{ marginTop: "3rem" }}>
            {week[props.day]}
          </Text>
          <Image
            style={{
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
            }}
            src={
              props.data.forecast.forecastday[props.position].day.condition.icon
            }
          ></Image>
          <Text fontSize={"xl"}>
            Low: {props.data.forecast.forecastday[props.position].day.mintemp_f}
            ° High:{" "}
            {props.data.forecast.forecastday[props.position].day.maxtemp_f}°
          </Text>
        </Box>
      </Link>
    </motion.div>
  );
}

export default WeatherDayBlock;
