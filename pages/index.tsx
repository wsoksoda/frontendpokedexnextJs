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
import { useState } from "react";

const theme = {
  red: ["#ED213A", "#93291E"],
  orange: ["#f12711", "#f5af19"],
  green: ["#000000", "#0f9b0f"],
  blue: ["#373B44", "#4286f4"],
  purple: ["#41295a", "#2F0743"],
  pink: ["#f953c6", "#b91d73"],
};

function Index() {
  const [value, setValue] = useState(
    `linear(to-l,${theme.red[0]},${theme.red[1]})`
  );
  const [firstColor, setFirstColor] = useState("#000000");
  const [secondColor, setSecondColor] = useState("#000000");

  let firstValue = "";
  let secondValue = "";

  if (value == `linear(to-l,${theme.red[0]},${theme.red[1]})`) {
    firstValue = "ED213A";
    secondValue = "93291E";
  } else if (value == `linear(to-l,${theme.orange[0]},${theme.orange[1]})`) {
    firstValue = "f12711";
    secondValue = "f5af19";
  } else if (value == `linear(to-l,${theme.green[0]},${theme.green[1]})`) {
    firstValue = "000000";
    secondValue = "0f9b0f";
  } else if (value == `linear(to-l,${theme.blue[0]},${theme.blue[1]})`) {
    firstValue = "373B44";
    secondValue = "4286f4";
  } else if (value == `linear(to-l,${theme.purple[0]},${theme.purple[1]})`) {
    firstValue = "41295a";
    secondValue = "2F0743";
  } else if (value == `linear(to-l,${theme.pink[0]},${theme.pink[1]})`) {
    firstValue = "f953c6";
    secondValue = "b91d73";
  } else if (value == "custom") {
    firstValue = firstColor;
    secondValue = secondColor;
  }

  return (
    <Box bgGradient={value} minH="80rem" textAlign="center">
      <Text fontSize="3xl" color="white" pt="2rem">
        Welcome to the Pokedex
      </Text>
      <Text fontSize="2xl" color="white" pt="2rem">
        Choose a Theme
      </Text>
      <RadioGroup onChange={setValue} value={value} color="white">
        <Stack direction="row" m="2rem" display="block" mr="auto" ml="auto">
          <Radio value={`linear(to-l,${theme.red[0]},${theme.red[1]})`}>
            Red
          </Radio>
          <Radio
            ml="1rem"
            value={`linear(to-l,${theme.orange[0]},${theme.orange[1]})`}
          >
            Orange
          </Radio>
          <Radio
            ml="1rem"
            value={`linear(to-l,${theme.green[0]},${theme.green[1]})`}
          >
            Green
          </Radio>
          <Radio
            ml="1rem"
            value={`linear(to-l,${theme.blue[0]},${theme.blue[1]})`}
          >
            Blue
          </Radio>
          <Radio
            ml="1rem"
            value={`linear(to-l,${theme.purple[0]},${theme.purple[1]})`}
          >
            Purple
          </Radio>
          <Radio
            ml="1rem"
            value={`linear(to-l,${theme.pink[0]},${theme.pink[1]})`}
          >
            Pink
          </Radio>
        </Stack>
        <Radio value="custom">Customize</Radio>
      </RadioGroup>
      <Stack direction="row" m="1rem" display="block" mr="auto" ml="auto">
        <Input
          width="10rem"
          mr=".5rem"
          placeholder="First color"
          _placeholder={{ color: "white" }}
          size="sm"
          onChange={(e) => {
            setFirstColor(e.target.value);
          }}
        />
        <Input
          width="10rem"
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
          <Button mt="2rem">Continue to Pokedex</Button>
        </Link>
      </motion.div>
      <Image
        m="2rem"
        display="block"
        mr="auto"
        ml="auto"
        src="https://gifdb.com/images/high/pokemon-funny-pikachu-palpitating-eye-twitching-yhwpxv8qqozoungs.gif"
      />

      <motion.div whileHover={{ scale: 1.5 }}>
        <Link href={`/weather`}>
          <Button mt="2rem" height="3.5rem">
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
