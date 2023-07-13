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
  Center,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { PokemonChart } from "./PokemonChart";
import { useRouter } from "next/router";
import { typeColor } from "@/utils/PokemonInterface";
import CsvDownload from "./CsvDownload";

interface Props {
  data: any;
}

function DesktopPokemonCard({ data }: Props) {
  let thisPokemon = {} as pokemon;
  let thisStat = {} as stat;

  const [pokemon, setPokemon] = useState(thisPokemon);
  const [stats, setStats] = useState(thisStat);

  const router = useRouter();

  useEffect(() => {
    if (data) {
      setPokemon(data);
      setStats(data.stats);
    }
  }, [data]);

  return (
    <Box minH="100rem">
      <Card width="50rem" display="block" m="auto" mt="2rem" mb="10rem">
        <CardBody>
          <CardHeader>
            <HStack spacing="1rem">
              <Box>
                <Button onClick={() => router.back()}>
                  <ArrowBackIcon />
                </Button>
              </Box>
              <Box>
                <HStack spacing="none">
                  <Box>
                    <Text fontSize="2xl">{pokemon.name} &nbsp;</Text>
                  </Box>
                  <Box>
                    <Text fontSize="2xl" color="gray">
                      {" "}
                      #{pokemon.id}
                    </Text>
                  </Box>
                </HStack>
              </Box>
              <Box>
                {pokemon.type?.map((type, typeIndex) => (
                  <Text
                    width="5rem"
                    backgroundColor={typeColor[type.type]}
                    display="block"
                    float="left"
                    ml="1rem"
                    pt=".25rem"
                    textAlign="center"
                    height="2rem"
                    borderRadius="1rem"
                    mt=".5rem"
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
              maxWidth="20rem"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              alt={`An image of ${pokemon.name}`}
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
          <Box height="20rem">
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
          <Center>
            <CsvDownload data={props.data} />
          </Center>
        </CardBody>
      </Card>
    </Box>
  );
}

export default DesktopPokemonCard;
