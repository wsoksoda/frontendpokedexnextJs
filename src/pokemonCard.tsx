import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import { statColor } from "./pokemonInterface";

interface Props {
  offset: number;
  post: pokemon[];
}

function PokemonCard(props: Props) {
  const {} = props;

  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {props.post.map((post, index) => (
        <Card
          className="m-1 "
          style={{
            width: "17rem",
            height: "25rem",
            margin: ".5rem",
          }}
          key={index}
        >
          <Link
            style={{ color: "black", textDecoration: "none" }}
            href={`/example`}
          >
            <CardBody>
              <CardHeader>{post.name}</CardHeader>
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${post.id}.png`}
              ></Image>
              <div className="display">
                {post.type.map((type, typeIndex) => (
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
                    key={typeIndex}
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

export default PokemonCard;
