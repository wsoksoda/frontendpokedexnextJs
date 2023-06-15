import axios from "axios";
import React, { useEffect } from "react";
import PokemonCard from "./pokemonCard";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@chakra-ui/react";

interface Props {
  choice: string;
  offset: number;
}

function AbilityFilter(props: Props) {
  let pokemons: pokemon[] = [];

  const [post, setPost] = React.useState<pokemon[]>(pokemons);

  const [pages, setPages] = React.useState(1);

  const { isLoading, error, data } = useQuery(
    ["ability", props.choice],
    async () => {
      const response = await axios.get(
        `http://localhost:8081/api/pokemon/ability?ability=${props.choice}&offset=${props.offset}&pageSize=24`
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

  if (error) return "No Pokemon with that ability";

  return <PokemonCard post={post} />;
}

export default AbilityFilter;