import { HStack, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

interface Props {
  day: number;
  militaryHour: number;
  normalHour: string;
  data: any;
}

function WeatherHourBlockWind(props: Props) {
  return (
    <motion.div whileHover={{ scale: 1.2 }}>
      <Text fontSize={"xl"}>{props.normalHour}</Text>
      <Image
        src={
          props.data.forecast.forecastday[props.day].hour[props.militaryHour]
            .condition.icon
        }
      ></Image>
      <HStack>
        <Text fontSize={"xl"}>
          {
            props.data.forecast.forecastday[props.day].hour[props.militaryHour]
              .wind_mph
          }
        </Text>
        <Text fontSize={"3xs"}>Mph</Text>
      </HStack>
    </motion.div>
  );
}

export default WeatherHourBlockWind;
