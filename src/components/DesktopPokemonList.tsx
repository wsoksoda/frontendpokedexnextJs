import { typeColor } from "@/utils/PokemonInterface";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Image,
  Box,
  Button,
  Center,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MotionBig, MotionSmall } from "./motion";

interface Props {
  post: pokemon[];
  fetchNextPokemonPage: () => void;
}

function DesktopPokemonList({ post, fetchNextPokemonPage }: Props) {
  const router = useRouter();

  const offset = parseInt((router.query.offset as string) ?? "1");

  const firstValue = router.query.firstValue as string;

  const secondValue = router.query.secondValue as string;

  return (
    <>
      <Center>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          {post.map((post) => (
            <Card
              className="m-1 "
              width="17rem"
              height="25rem"
              margin=".5rem"
              key={post.id}
            >
              <Link
                color="black"
                style={{ textDecoration: "none" }}
                href={`/pokemon?id=${post.id}&offset=${offset}&firstValue=${firstValue}&secondValue=${secondValue}`}
              >
                <MotionSmall>
                  <CardBody>
                    <CardHeader>{post.name}</CardHeader>
                    <Image
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${post.id}.png`}
                      alt={`An image of ${post.name}`}
                    ></Image>
                    <div className="display">
                      {post.type.map((type) => (
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
                    </div>
                  </CardBody>
                </MotionSmall>
              </Link>
            </Card>
          ))}
        </Box>
      </Center>
      <Center>
        <MotionBig>
          <Box m="2rem">
            <Button onClick={fetchNextPokemonPage}>Load More</Button>
          </Box>
        </MotionBig>
      </Center>
    </>
  );
}

export default DesktopPokemonList;
