import { Card, CardHeader, CardBody, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import { typeColor } from "./pokemonInterface";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

interface Props {
  post: pokemon[];
}

function DesktopPokemonList(props: Props) {
  const router = useRouter();

  const offset = parseInt((router.query.offset as string) ?? "1");

  const firstValue = router.query.firstValue as string;

  const secondValue = router.query.secondValue as string;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {props.post.map((post) => (
        <Card
          className="m-1 "
          style={{
            width: "17rem",
            height: "25rem",
            margin: ".5rem",
          }}
          key={post.id}
        >
          <Link
            style={{ color: "black", textDecoration: "none" }}
            href={`/pokemon?id=${post.id}&offset=${offset}&firstValue=${firstValue}&secondValue=${secondValue}`}
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
                      style={{
                        width: "5rem",
                        backgroundColor: typeColor[type.type],
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
                </div>
              </CardBody>
            </motion.div>
          </Link>
        </Card>
      ))}
    </div>
  );
}

export default DesktopPokemonList;
