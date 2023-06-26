import { Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

interface Props {
  day: number;
  militaryHour: number;
  normalHour: string;
  data: any;
}

function WeatherHourBlockRain(props: Props) {
  return (
    <motion.div whileHover={{ scale: 1.2 }}>
      <Text fontSize={"xl"}>{props.normalHour}</Text>
      <Image
        src={
          props.data.forecast.forecastday[props.day].hour[props.militaryHour]
            .condition.icon
        }
      ></Image>
      <Text fontSize={"xl"}>
        {
          props.data.forecast.forecastday[props.day].hour[props.militaryHour]
            .chance_of_rain
        }
        %
      </Text>
    </motion.div>
  );
}

export default WeatherHourBlockRain;
