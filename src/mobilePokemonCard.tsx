import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  CardBody,
  CardHeader,
  HStack,
  Box,
  Card,
  Button,
  Link,
  Text,
  Image,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { PokemonChart } from "./pokemonChart";
import { statColor } from "./pokemonInterface";
import MobileFooter from "./mobileFooter";
import { useRouter } from "next/router";

interface Props {
  data: any;
}

function MobilePokemonCard(props: Props) {
  let thisPokemon = {} as pokemon;
  let thisStat = {} as stat;

  const [post, setPost] = React.useState(thisPokemon);
  const [stats, setStats] = React.useState(thisStat);

  const router = useRouter();

  useEffect(() => {
    if (props.data) {
      setPost(props.data);
      setStats(props.data.stats);
    }
  }, [props.data]);

  return (
    <Box style={{ minHeight: "70rem" }}>
      <Card
        style={{
          width: "18rem",
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
                    key={type.id}
                  >
                    {type.type}
                  </Text>
                ))}
              </Box>
            </HStack>
          </CardHeader>
          <Image
            style={{ maxWidth: "10rem" }}
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
              <Text key={ability.id}>&emsp;{ability.ability}</Text>
            ))}
            <Text fontSize="2xl">Egg Groups:</Text>
            {post.eggGroup?.map((eggGroup: eggGroupInterface, index) => (
              <Text key={eggGroup.id}>&emsp;{eggGroup.eggGroup}</Text>
            ))}
          </div>
          <Box style={{ height: "16rem" }}>
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
          <Text fontSize="3xl">{post.genus}</Text>
          <Text>{post.description}</Text>
        </CardBody>
      </Card>
    </Box>
  );
}

export default MobilePokemonCard;
