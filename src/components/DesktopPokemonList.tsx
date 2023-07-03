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
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  post: pokemon[];
  fetchNextPokemonPage: () => void;
}

function DesktopPokemonList(props: Props) {
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
          {props.post.map((post) => (
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
                href={`/Pokemon?id=${post.id}&offset=${offset}&firstValue=${firstValue}&secondValue=${secondValue}`}
              >
                <motion.div whileHover={{ scale: 1.2 }}>
                  <CardBody>
                    <CardHeader>{post.name}</CardHeader>
                    <Image
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${post.id}.png`}
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
                </motion.div>
              </Link>
            </Card>
          ))}
        </Box>
      </Center>
      <Center>
        <motion.div whileHover={{ scale: 1.5 }}>
          <Box m="2rem">
            <Button onClick={props.fetchNextPokemonPage}>Load More</Button>
          </Box>
        </motion.div>
      </Center>
    </>
  );
}

export default DesktopPokemonList;
