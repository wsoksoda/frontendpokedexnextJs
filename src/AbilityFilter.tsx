import axios from "axios";
import React, { useEffect } from "react";
import PokemonCard from "./pokemonCard";

interface Props {
  choice: string;
  offset: number;
}

function AbilityFilter(props: Props) {
  let pokemons: pokemon[] = [];

  const [post, setPost] = React.useState<pokemon[]>(pokemons);

  const [pages, setPages] = React.useState(1);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8081/api/pokemon/ability?ability=${props.choice}&offset=${props.offset}&pageSize=24`
      )
      .then((response) => {
        setPost(response.data["content"]);
        setPages(response.data["totalPages"]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <PokemonCard post={post} />;
}

export default AbilityFilter;
