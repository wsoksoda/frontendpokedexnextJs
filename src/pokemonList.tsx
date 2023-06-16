import { Card, CardHeader, CardBody, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import { statColor } from "./pokemonInterface";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { EmptyObject } from "chart.js/dist/types/basic";

interface Props {
  post: pokemon[];
}

function PokemonList(props: Props) {
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
            href={`/pokemon?id=${post.id}`}
          >
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
              </div>
            </CardBody>
          </Link>
        </Card>
      ))}
    </div>
  );
}

export default PokemonList;
