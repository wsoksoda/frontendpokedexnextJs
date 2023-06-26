import {
  Box,
  Button,
  Link,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Image,
  Input,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

var theme = {
  red: "linear(to-l,#ED213A,#93291E)",
  orange: "linear(to-l,#f12711,#f5af19)",
  green: "linear(to-l,#000000, #0f9b0f)",
  blue: "linear(to-l,#373B44,#4286f4)",
  purple: "linear(to-l,#41295a,#2F0743)",
  pink: "linear(to-l,#f953c6,#b91d73 )",
};

function Index() {
  const [value, setValue] = React.useState(theme.red);
  const [firstColor, setFirstColor] = React.useState("#000000");
  const [secondColor, setSecondColor] = React.useState("#000000");

  var firstValue = "";
  var secondValue = "";

  if (value == theme.red) {
    firstValue = "ED213A";
    secondValue = "93291E";
  } else if (value == theme.orange) {
    firstValue = "f12711";
    secondValue = "f5af19";
  } else if (value == theme.green) {
    firstValue = "000000";
    secondValue = "0f9b0f";
  } else if (value == theme.blue) {
    firstValue = "373B44";
    secondValue = "4286f4";
  } else if (value == theme.purple) {
    firstValue = "41295a";
    secondValue = "2F0743";
  } else if (value == theme.pink) {
    firstValue = "f953c6";
    secondValue = "b91d73";
  } else if (value == "custom") {
    firstValue = firstColor;
    secondValue = secondColor;
  }

  return (
    <Box bgGradient={value} style={{ minHeight: "80rem", textAlign: "center" }}>
      <Text fontSize={"3xl"} style={{ color: "white", paddingTop: "2rem" }}>
        Welcome to the Pokedex
      </Text>
      <Text fontSize={"2xl"} style={{ color: "white", paddingTop: "2rem" }}>
        Choose a Theme
      </Text>
      <RadioGroup
        onChange={setValue}
        value={value}
        style={{
          color: "white",
        }}
      >
        <Stack
          direction="row"
          style={{
            margin: "2rem",
            display: "block",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <Radio value={theme.red}>Red</Radio>
          <Radio style={{ marginLeft: "1rem" }} value={theme.orange}>
            Orange
          </Radio>
          <Radio style={{ marginLeft: "1rem" }} value={theme.green}>
            Green
          </Radio>
          <Radio style={{ marginLeft: "1rem" }} value={theme.blue}>
            Blue
          </Radio>
          <Radio style={{ marginLeft: "1rem" }} value={theme.purple}>
            Purple
          </Radio>
          <Radio style={{ marginLeft: "1rem" }} value={theme.pink}>
            Pink
          </Radio>
        </Stack>
        <Radio value={"custom"}>Customize</Radio>
      </RadioGroup>
      <Stack
        direction="row"
        style={{
          margin: "1rem",
          display: "block",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <Input
          style={{ width: "10rem", marginRight: ".5rem" }}
          placeholder="First color"
          _placeholder={{ color: "white" }}
          size="sm"
          onChange={(e) => {
            setFirstColor(e.target.value);
          }}
        />
        <Input
          style={{ width: "10rem" }}
          placeholder="Second color"
          _placeholder={{ color: "white" }}
          size="sm"
          onChange={(e) => {
            setSecondColor(e.target.value);
          }}
        />
      </Stack>

      <motion.div whileHover={{ scale: 1.5 }}>
        <Link
          href={`/pokedex?firstValue=${firstValue}&secondValue=${secondValue}`}
        >
          <Button style={{ marginTop: "2rem" }}>Continue to Pokedex</Button>
        </Link>
      </motion.div>
      <Image
        style={{
          margin: "2rem",
          display: "block",
          marginRight: "auto",
          marginLeft: "auto",
        }}
        src="https://gifdb.com/images/high/pokemon-funny-pikachu-palpitating-eye-twitching-yhwpxv8qqozoungs.gif"
      />

      <motion.div whileHover={{ scale: 1.5 }}>
        <Link href={`/weather`}>
          <Button style={{ marginTop: "2rem", height: "3.5rem" }}>
            Check if it's safe to
            <br />
            go Pokemon hunting
          </Button>
        </Link>
      </motion.div>
    </Box>
  );
}

export default Index;
