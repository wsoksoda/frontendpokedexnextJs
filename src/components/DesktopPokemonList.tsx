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
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MotionSmall } from "./motion";
import LoadMoreButton from "./LoadMoreButton";
import { useInView } from "react-intersection-observer";

interface Props {
  post: pokemon[];
  fetchNextPokemonPage: () => void;
  morePokemon: boolean | undefined;
}

function DesktopPokemonList({
  post,
  fetchNextPokemonPage,
  morePokemon,
}: Props) {
  const router = useRouter();

  const offset = parseInt((router.query.offset as string) ?? "1");

  const firstValue = router.query.firstValue as string;

  const secondValue = router.query.secondValue as string;

  const { ref: LoadMoreButtonRef, inView: ElementVisible } = useInView();

  if (ElementVisible) {
    fetchNextPokemonPage();
  }

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
                    <Center>
                      <HStack gap="4">
                        {post.type.map((type) => (
                          <Text
                            width="5rem"
                            backgroundColor={typeColor[type.type]}
                            display="block"
                            float="left"
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
                      </HStack>
                    </Center>
                  </CardBody>
                </MotionSmall>
              </Link>
            </Card>
          ))}
        </Box>
      </Center>
      <Center ref={LoadMoreButtonRef}>
        <LoadMoreButton
          morePokemon={morePokemon}
          fetchNextPokemonPage={fetchNextPokemonPage}
        />
      </Center>
    </>
  );
}

export default DesktopPokemonList;
