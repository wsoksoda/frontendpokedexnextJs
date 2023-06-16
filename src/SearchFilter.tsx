import React, { useEffect } from "react";
import axios from "axios";
import PokemonList from "./desktopPokemonList";
import { Spinner } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

interface Props {
  choice: string;
  offset: number;
  setPages: (pages: number) => void;
}

function SearchFilter(props: Props) {
  let pokemons: pokemon[] = [];

  const [pokemon, setPokemon] = React.useState<pokemon[]>(pokemons);

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
      setPokemon(data.content);
      props.setPages(data.totalPages);
    }
  }, [data]);

  if (isLoading) return <Spinner />;

  if (error) return "No Pokemon with that name";

  return <PokemonList post={pokemon} />;
}

export default SearchFilter;
