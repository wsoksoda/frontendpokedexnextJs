import React, { useEffect } from "react";
import axios from "axios";
import PokemonCard from "./pokemonCard";

interface Props {
  choice: string;
  offset: number;
}

function SearchFilter(props: Props) {
  let pokemons: pokemon[] = [];

  const [post, setPost] = React.useState<pokemon[]>(pokemons);

  const [pages, setPages] = React.useState(1);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8081/api/pokemon/name?name=${props.choice}&offset=${props.offset}&pageSize=24`
      )
      .then((response) => {
        setPost(response.data["content"]);
        setPages(response.data["totalPages"]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [props.choice]);

  return <PokemonCard post={post} />;
}

export default SearchFilter;
