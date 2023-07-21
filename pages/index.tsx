import { MotionBig } from "@/components/motion";
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
  InputGroup,
  InputLeftAddon,
  Center,
  useEditable,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import useTheme, { backgroundColor } from "@/hooks/useTheme";

function Index() {
  const { backgroundGradient, theme, setTheme } = useTheme();

  return (
    <Box bgGradient={backgroundGradient} minH="80rem" textAlign="center">
      <Text fontSize="3xl" color="white" pt="2rem">
        Welcome to the Pokedex
      </Text>
      <Text fontSize="2xl" color="white" pt="2rem">
        Choose a Theme
      </Text>
      <RadioGroup onChange={setTheme} value={theme} color="white">
        <Stack direction="row" m="2rem" display="block" mr="auto" ml="auto">
          {Object.keys(backgroundColor).map((color) => (
            <Radio key={color} value={color}>
              {color}
            </Radio>
          ))}
          {/* <Radio
            value={backgroundColor.red}
          >
            Red
          </Radio>
          <Radio
            ml="1rem"
            value={backgroundColor.orange}
          >
            Orange
          </Radio>
          <Radio
            ml="1rem"
            value={backgroundColor.green}
          >
            Green
          </Radio>
          <Radio
            ml="1rem"
            value={backgroundColor.blue}
          >
            Blue
          </Radio>
          <Radio
            ml="1rem"
            value={backgroundColor.purple}
          >
            Purple
          </Radio>
          <Radio
            ml="1rem"
            value={backgroundColor.pink}
          >
            Pink
          </Radio> */}
        </Stack>
        <Radio value="custom">Customize(Hex)</Radio>
      </RadioGroup>
      {/* <Center>
        <Stack direction="row" m="1rem">
          <InputGroup size="sm">
            <InputLeftAddon children="#" />
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
            <InputLeftAddon children="#" />
            <Input
              width="10rem"
              placeholder="Second color"
              _placeholder={{ color: "white" }}
              size="sm"
              onChange={(e) => {
                setSecondColor(e.target.value);
              }}
            />
          </InputGroup>
        </Stack>
      </Center> */}

      <MotionBig>
        <Link href={"/pokedex"}>
          <Button mt="2rem">Continue to Pokedex</Button>
        </Link>
      </MotionBig>
      <Image
        m="2rem"
        display="block"
        mr="auto"
        ml="auto"
        src="https://gifdb.com/images/high/pokemon-funny-pikachu-palpitating-eye-twitching-yhwpxv8qqozoungs.gif"
        alt="funny Pikachu image"
      />

      <MotionBig>
        <Link href={"/weather"}>
          <Button mt="2rem" height="3.5rem">
            Check if it's safe to
            <br />
            go Pokemon hunting
          </Button>
        </Link>
      </MotionBig>
    </Box>
  );
}

export default Index;
