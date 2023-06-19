import DesktopPokemonCard from "@/desktopPokemonCard";
import MobilePokemonCard from "@/mobilePokemonCard";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Link,
  Radio,
  RadioGroup,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Spinner,
  Stack,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

function Quiz() {
  const [firstNameValue, setFirstNameValue] = React.useState("");
  const [pokemonValue, setPokemonValue] = React.useState("1");
  const [typeValue, setTypeValue] = React.useState("1");
  const [colorValue, setColorValue] = React.useState("1");
  const [sliderValue, setSliderValue] = React.useState(1);
  const [submit, setSubmit] = React.useState("1");

  const { isLoading, error, data } = useQuery(["quiz", submit], async () => {
    let queryval = String(
      (Number(pokemonValue) +
        Number(typeValue) +
        sliderValue +
        Number(colorValue)) %
        553
    );
    console.log(pokemonValue);
    console.log(typeValue);
    const response = await axios.get(
      `http://localhost:8081/api/pokemon/${queryval}`
    );
    const data = await response.data;
    return data;
  });

  if (isLoading) return <Spinner />;

  if (error) return "An error has occured";

  if (submit == "1") {
    return (
      <>
        <Box px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-around"}>
            <Box>
              <Link href="http://localhost:3000/?offset=1">Pokedex</Link>
            </Box>
            <Box>
              <Link href={"/advanced"}>Advanced Search</Link>
            </Box>
            <Box>
              <Link href={"/quiz"}>What Pokemon am I</Link>
            </Box>
          </Flex>
        </Box>
        <Box
          bgGradient="linear(to-l,#41295a,#2F0743)"
          style={{ minHeight: "100rem", color: "white" }}
        >
          <Text
            fontSize={"3xl"}
            style={{ textAlign: "center", paddingTop: "2rem" }}
          >
            Pokemon Quiz
          </Text>
          <FormControl
            style={{
              width: "50rem",
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "2rem",
            }}
          >
            <FormLabel>First name</FormLabel>
            <Input
              placeholder="First name"
              onChange={(e) => {
                setFirstNameValue(e.target.value);
              }}
            />
          </FormControl>
          <FormControl
            style={{
              width: "50rem",
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "2rem",
            }}
          >
            <FormLabel style={{ marginBottom: "2rem" }}>
              What level Pokemon Trainer are you?
            </FormLabel>
            <Slider
              min={0}
              max={120}
              value={sliderValue}
              onChange={setSliderValue}
            >
              <SliderMark
                value={sliderValue}
                textAlign="center"
                bg="blue.500"
                color="white"
                mt="-10"
                ml="-6"
                w="12"
              >
                {sliderValue}
              </SliderMark>
              <SliderTrack bg="blue.100">
                <Box position="relative" right={10} />
                <SliderFilledTrack bg="blue.500" />
              </SliderTrack>
              <SliderThumb boxSize={6} />
            </Slider>
          </FormControl>{" "}
          <FormControl
            style={{
              width: "50rem",
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "2rem",
            }}
          >
            <RadioGroup onChange={setColorValue} value={colorValue}>
              <FormLabel>What is your favorite color?</FormLabel>
              <Stack direction="row">
                <Radio value="184">Red</Radio>
                <Radio value="294">Blue</Radio>
                <Radio value="61">Green</Radio>
                <Radio value="4">Yellow</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <FormControl
            style={{
              width: "50rem",
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "2rem",
            }}
          >
            <RadioGroup onChange={setTypeValue} value={typeValue}>
              <FormLabel>What is your favorite Pokemon Type?</FormLabel>
              <Stack direction="row">
                <Radio value="106">Fire</Radio>
                <Radio value="453">Electric</Radio>
                <Radio value="281">Water</Radio>
                <Radio value="118">Fighting</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <FormControl
            style={{
              width: "50rem",
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "2rem",
            }}
          >
            <RadioGroup onChange={setPokemonValue} value={pokemonValue}>
              <FormLabel>Who is your favorite Pokemon?</FormLabel>
              <Stack direction="row">
                <Radio value="143">Pikachu</Radio>
                <Radio value="222">Magikarp</Radio>
                <Radio value="307">Jigglypuff</Radio>
                <Radio value="34">Regigigas</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <FormControl
            style={{
              width: "50rem",
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "2rem",
            }}
          >
            <FormLabel htmlFor="super-cool" mb="0">
              Are you super cool?
            </FormLabel>
            <HStack>
              <Text>No</Text>
              <Switch id="super-cool" />
              <Text>Yes</Text>
            </HStack>
          </FormControl>
          <Button
            onClick={() => setSubmit("2")}
            colorScheme="blue"
            style={{
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "2rem",
            }}
          >
            See what Pokemon I am
          </Button>
        </Box>
      </>
    );
  } else {
    return (
      <>
        <Button
          onClick={() => setSubmit("1")}
          style={{
            display: "block",
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "2rem",
          }}
        >
          Retake Quiz
        </Button>
        <Text
          style={{
            marginTop: "2rem",
            textAlign: "center",
          }}
        >
          Congrats {firstNameValue} you are:
        </Text>
        <Box display={["none", null, "block"]}>
          <DesktopPokemonCard data={data} />
        </Box>
        <Box display={["block", null, "none"]}>
          <MobilePokemonCard data={data} />
        </Box>
      </>
    );
  }
}

export default Quiz;
