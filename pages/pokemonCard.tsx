import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import { pokemon, statColor, typeInterface } from "./pokemonInterface";

interface Props {
  offset: number;
  post: pokemon[];
}

function PokemonCard(props: Props) {
  const {} = props;

  return (
    <div className="display">
      {props.post.map((post, index) => (
        <Card className="m-2 " style={{ width: "17rem" }} key={index}>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            href={`pokemon/${post.id}`}
          >
            <CardBody>
              <CardHeader>{post.name}</CardHeader>
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${post.id}.png`}
              ></Image>
              <div className="display">
                {post.type.map((type: typeInterface, typeIndex) => (
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
