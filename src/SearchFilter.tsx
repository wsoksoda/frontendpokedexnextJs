import React, { useEffect } from "react";
import axios from "axios";
import PokemonList from "./pokemonList";
import { Spinner } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

interface Props {
  choice: string;
  offset: number;
}

function SearchFilter(props: Props) {
  let pokemons: pokemon[] = [];

  const [post, setPost] = React.useState<pokemon[]>(pokemons);

  const [pages, setPages] = React.useState(1);

  const { isLoading, error, data } = useQuery(
    ["ability", props.offset, props.choice],
    async () => {
      const response = await axios.get(
        `http://localhost:8081/api/pokemon/name?name=${props.choice}&offset=${props.offset}&pageSize=24`
      );
      const data = await response.data;
      return data;
    }
  );

  useEffect(() => {
    if (data) {
      setPost(data.content);
      setPages(data.totalPages);
    }
  }, [data]);

  if (isLoading) return <Spinner />;

  if (error) return "No Pokemon with that name";

  return <PokemonList post={post} />;
}

export default SearchFilter;
