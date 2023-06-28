import DesktopPokemonCard from "@/components/DesktopPokemonCard";
import MobilePokemonCard from "@/components/MobilePokemonCard";
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
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";

function Quiz() {
  const [firstNameValue, setFirstNameValue] = useState("");
  const [pokemonValue, setPokemonValue] = useState("1");
  const [typeValue, setTypeValue] = useState("1");
  const [colorValue, setColorValue] = useState("1");
  const [sliderValue, setSliderValue] = useState(1);
  const [submit, setSubmit] = useState("1");

  const router = useRouter();

  const firstValue = router.query.firstValue as string;

  const secondValue = router.query.secondValue as string;

  const theme = `linear(to-l,#${firstValue},#${secondValue})`;

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
        <Box px="4">
          <Flex h="16" alignItems="center" justifyContent="space-around">
            <Box>
              <Link href="http://localhost:3000">Pick a Theme</Link>
            </Box>
            <Box>
              <Link
                href={`http://localhost:3000/pokedex?firstValue=${firstValue}&secondValue=${secondValue}`}
              >
                Pokedex
              </Link>
            </Box>
            <Box>
              <Link
                href={`/advanced?firstValue=${firstValue}&secondValue=${secondValue}`}
              >
                Advanced Search
              </Link>
            </Box>
            <Box>
              <Link
                href={`/quiz?firstValue=${firstValue}&secondValue=${secondValue}`}
              >
                What Pokemon am I
              </Link>
            </Box>
          </Flex>
        </Box>
        <Box bgGradient={theme} minH="100rem" color="white">
          <Text fontSize="3xl" textAlign="center" paddingTop="2rem">
            Pokemon Quiz
          </Text>
          <FormControl
            width="50rem"
            display="block"
            mr="auto"
            ml="auto"
            mt="2rem"
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
            width="50rem"
            display="block"
            mr="auto"
            ml="auto"
            mt="2rem"
          >
            <FormLabel mb="2rem">What level Pokemon Trainer are you?</FormLabel>
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
            width="50rem"
            display="block"
            mr="auto"
            ml="auto"
            mt="2rem"
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
            width="50rem"
            display="block"
            mr="auto"
            ml="auto"
            mt="2rem"
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
            width="50rem"
            display="block"
            mr="auto"
            ml="auto"
            mt="2rem"
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
            width="50rem"
            display="block"
            mr="auto"
            ml="auto"
            mt="2rem"
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
          <motion.div whileHover={{ scale: 1.5 }}>
            <Button
              onClick={() => setSubmit("2")}
              display="block"
              mr="auto"
              ml="auto"
              mt="2rem"
            >
              See what Pokemon I am
            </Button>
          </motion.div>
        </Box>
      </>
    );
  } else {
    return (
      <Box bgGradient={theme} minH="60rem" color="white" paddingTop="2rem">
        <motion.div whileHover={{ scale: 1.5 }}>
          <Button
            onClick={() => setSubmit("1")}
            display="block"
            mr="auto"
            ml="auto"
            mt="2rem"
          >
            Retake Quiz
          </Button>
        </motion.div>
        <Text mt="2rem" textAlign="center">
          Congrats {firstNameValue} you are:
        </Text>
        <Box display={["none", null, "block"]}>
          <DesktopPokemonCard data={data} />
        </Box>
        <Box display={["block", null, "none"]}>
          <MobilePokemonCard data={data} />
        </Box>
      </Box>
    );
  }
}

export default Quiz;
