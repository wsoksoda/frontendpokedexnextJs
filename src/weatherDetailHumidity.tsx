import { Box, HStack, Spinner } from "@chakra-ui/react";
import React from "react";
import WeatherHourBlockHumidity from "./weatherHourBlockHumidity";

interface Prop {
  day: number;
  data: any;
}

function WeatherDetailHumidity(props: Prop) {
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
        <WeatherHourBlockHumidity
          day={props.day}
          normalHour={"12:00"}
          militaryHour={0}
          data={props.data}
        />
        <WeatherHourBlockHumidity
          day={props.day}
          normalHour={"1:00"}
          militaryHour={1}
          data={props.data}
        />
        <WeatherHourBlockHumidity
          day={props.day}
          normalHour={"2:00"}
          militaryHour={2}
          data={props.data}
        />
        <WeatherHourBlockHumidity
          day={props.day}
          normalHour={"3:00"}
          militaryHour={3}
          data={props.data}
        />
        <WeatherHourBlockHumidity
          day={props.day}
          normalHour={"4:00"}
          militaryHour={4}
          data={props.data}
        />
        <WeatherHourBlockHumidity
          day={props.day}
          normalHour={"5:00"}
          militaryHour={5}
          data={props.data}
        />
        <WeatherHourBlockHumidity
          day={props.day}
          normalHour={"6:00"}
          militaryHour={6}
          data={props.data}
        />
        <WeatherHourBlockHumidity
          day={props.day}
          normalHour={"7:00"}
          militaryHour={7}
          data={props.data}
        />
        <WeatherHourBlockHumidity
          day={props.day}
          normalHour={"8:00"}
          militaryHour={8}
          data={props.data}
        />
        <WeatherHourBlockHumidity
          day={props.day}
          normalHour={"9:00"}
          militaryHour={9}
          data={props.data}
        />
        <WeatherHourBlockHumidity
          day={props.day}
          normalHour={"10:00"}
          militaryHour={10}
          data={props.data}
        />
        <WeatherHourBlockHumidity
          day={props.day}
          normalHour={"11:00"}
          militaryHour={11}
          data={props.data}
        />
      </HStack>
      <HStack style={{ textAlign: "center", marginTop: "2rem" }}>
        <WeatherHourBlockHumidity
          day={props.day}
          normalHour={"12:00"}
          militaryHour={12}
          data={props.data}
        />
        <WeatherHourBlockHumidity
          day={props.day}
          normalHour={"1:00"}
          militaryHour={13}
          data={props.data}
        />
        <WeatherHourBlockHumidity
          day={props.day}
          normalHour={"2:00"}
          militaryHour={14}
          data={props.data}
        />
        <WeatherHourBlockHumidity
          day={props.day}
          normalHour={"3:00"}
          militaryHour={15}
          data={props.data}
        />
        <WeatherHourBlockHumidity
          day={props.day}
          normalHour={"4:00"}
          militaryHour={16}
          data={props.data}
        />
        <WeatherHourBlockHumidity
          day={props.day}
          normalHour={"5:00"}
          militaryHour={17}
          data={props.data}
        />
        <WeatherHourBlockHumidity
          day={props.day}
          normalHour={"6:00"}
          militaryHour={18}
          data={props.data}
        />
        <WeatherHourBlockHumidity
          day={props.day}
          normalHour={"7:00"}
          militaryHour={19}
          data={props.data}
        />
        <WeatherHourBlockHumidity
          day={props.day}
          normalHour={"8:00"}
          militaryHour={20}
          data={props.data}
        />
        <WeatherHourBlockHumidity
          day={props.day}
          normalHour={"9:00"}
          militaryHour={21}
          data={props.data}
        />
        <WeatherHourBlockHumidity
          day={props.day}
          normalHour={"10:00"}
          militaryHour={22}
          data={props.data}
        />
        <WeatherHourBlockHumidity
          day={props.day}
          normalHour={"11:00"}
          militaryHour={23}
          data={props.data}
        />
      </HStack>
    </Box>
  );
}

export default WeatherDetailHumidity;
