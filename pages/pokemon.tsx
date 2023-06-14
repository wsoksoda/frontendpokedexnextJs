import axios from "axios";
import React, { useEffect } from "react";
import Navbar from "@/navbar";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  ChakraProvider,
  Image,
  Text,
  HStack,
  Link,
} from "@chakra-ui/react";
import { PokemonChart } from "@/pokemonChart";
import { statColor } from "@/pokemonInterface";
import { useRouter } from "next/router";
import { ArrowBackIcon } from "@chakra-ui/icons";

function Pokemon() {
  let thisPokemon = {} as pokemon;
  let thisStat = {} as stat;

  const [post, setPost] = React.useState(thisPokemon);
  const [stats, setStats] = React.useState(thisStat);

  let router = useRouter();

  const id = parseInt((router.query.id as string) ?? "1");

  const pokemonSize = 553;

  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/pokemon/${id}`)
      .then((response) => {
        setPost(response.data);
        setStats(response.data["stats"]);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  function next(): void {
    if (id < pokemonSize) {
      let currentPage = id + 1;
      router.push(`/pokemon?id=${currentPage}`);
    }
  }

  function back(): void {
    if (id > 1) {
      let currentPage = id - 1;
      router.push(`/pokemon?id=${currentPage}`);
    }
  }

  return (
    <ChakraProvider>
      <Box
        bgGradient="linear(to-l,#41295a,#2F0743)"
        style={{ minHeight: "130rem" }}
      >
        <Navbar goBack={back} goForward={next} />
        <Card
          style={{
            width: "50rem",
            display: "block",
            margin: "auto",
            marginTop: "2rem",
            marginBottom: "10rem",
          }}
        >
          <CardBody>
            <CardHeader>
              <HStack spacing="1rem">
                <Box>
                  <Button>
                    <Link href="http://localhost:3000">
                      <ArrowBackIcon />
                    </Link>
                  </Button>
                </Box>
                <Box>
                  {post.type?.map((type, typeIndex) => (
                    <Text
                      style={{
                        width: "5rem",
                        backgroundColor: statColor[type.type],
                        display: "block",
                        float: "left",
                        marginLeft: "1rem",
                        paddingTop: ".25rem",
                        textAlign: "center",
                        height: "2rem",
                        borderRadius: "1rem",
                        marginTop: ".5rem",
                      }}
                      key={id}
                    >
                      {type.type}
                    </Text>
                  ))}
                </Box>
              </HStack>
            </CardHeader>
            <HStack spacing="1rem">
              <Image
                style={{ maxWidth: "20rem" }}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${post.id}.png`}
              ></Image>
              <div>
                <HStack>
                  <Text fontSize="2xl">Height: {post.height} </Text>{" "}
                  <Text fontSize="xs">M</Text>
                </HStack>
                <HStack>
                  <Text fontSize="2xl">Weight: {post.weight}</Text>
                  <Text fontSize="xs">Kg</Text>
                </HStack>
                <Text fontSize="2xl">Abilities:</Text>
                {post.ability?.map((ability: abilityInterface, index) => (
                  <Text key={id}>&emsp;{ability.ability}</Text>
                ))}
                <Text fontSize="2xl">Egg Groups:</Text>
                {post.eggGroup?.map((eggGroup: eggGroupInterface, index) => (
                  <Text key={id}>&emsp;{eggGroup.eggGroup}</Text>
                ))}
              </div>
            </HStack>
            <PokemonChart
              id={stats.id}
              hp={stats.hp}
              attack={stats.attack}
              defense={stats.defense}
              speed={stats.speed}
              specialAttack={stats.specialAttack}
              specialDefense={stats.specialDefense}
            ></PokemonChart>
            <Text fontSize="3xl">{post.genus}</Text>
            <Text>{post.description}</Text>
          </CardBody>
        </Card>
      </Box>
    </ChakraProvider>
  );
}

export default Pokemon;
