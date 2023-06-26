import { Box, Image, Spinner, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

interface Props {
  day: number;
  militaryHour: number;
  normalHour: string;
  data: any;
}

function WeatherHourBlockHumidity(props: Props) {
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
            .humidity
        }
        %
      </Text>
    </motion.div>
  );
}

export default WeatherHourBlockHumidity;
