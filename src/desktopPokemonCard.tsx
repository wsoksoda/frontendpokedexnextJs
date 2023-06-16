import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  CardBody,
  CardHeader,
  HStack,
  Box,
  Card,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { PokemonChart } from "./pokemonChart";
import { statColor } from "./pokemonInterface";
import { useRouter } from "next/router";

interface Props {
  data: any;
}

function DesktopPokemonCard(props: Props) {
  let thisPokemon = {} as pokemon;
  let thisStat = {} as stat;

  const [pokemon, setPokemon] = React.useState(thisPokemon);
  const [stats, setStats] = React.useState(thisStat);

  const router = useRouter();

  useEffect(() => {
    if (props.data) {
      setPokemon(props.data);
      setStats(props.data.stats);
    }
  }, [props.data]);

  return (
    <Box style={{ minHeight: "100rem" }}>
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
                <Button onClick={() => router.back()}>
                  <ArrowBackIcon />
                </Button>
              </Box>
              <Box>
                <HStack spacing={"none"}>
                  <Box>
                    <Text fontSize={"2xl"}>{pokemon.name} &nbsp;</Text>
                  </Box>
                  <Box>
                    <Text fontSize={"2xl"} style={{ color: "gray" }}>
                      {" "}
                      #{pokemon.id}
                    </Text>
                  </Box>
                </HStack>
              </Box>
              <Box>
                {pokemon.type?.map((type, typeIndex) => (
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
                    key={type.id}
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
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            ></Image>
            <div>
              <HStack>
                <Text fontSize="2xl">Height: {pokemon.height} </Text>{" "}
                <Text fontSize="xs">M</Text>
              </HStack>
              <HStack>
                <Text fontSize="2xl">Weight: {pokemon.weight}</Text>
                <Text fontSize="xs">Kg</Text>
              </HStack>
              <Text fontSize="2xl">Abilities:</Text>
              {pokemon.ability?.map((ability: abilityInterface, index) => (
                <Text key={ability.id}>&emsp;{ability.ability}</Text>
              ))}
              <Text fontSize="2xl">Egg Groups:</Text>
              {pokemon.eggGroup?.map((eggGroup: eggGroupInterface, index) => (
                <Text key={eggGroup.id}>&emsp;{eggGroup.eggGroup}</Text>
              ))}
            </div>
          </HStack>
          <Box style={{ height: "20rem" }}>
            <PokemonChart
              id={stats.id}
              hp={stats.hp}
              attack={stats.attack}
              defense={stats.defense}
              speed={stats.speed}
              specialAttack={stats.specialAttack}
              specialDefense={stats.specialDefense}
            ></PokemonChart>
          </Box>
          <Text fontSize="3xl">{pokemon.genus}</Text>
          <Text>{pokemon.description}</Text>
        </CardBody>
      </Card>
    </Box>
  );
}

export default DesktopPokemonCard;
