import axios from "axios";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@chakra-ui/react";
import DesktopPokemonList from "./DesktopPokemonList";

interface Props {
  choice: string;
  offset: number;

  setPages: (pages: number) => void;
}

function AbilityFilter(props: Props) {
  let pokemonArray: pokemon[] = [];

  const [pokemon, setPokemon] = useState<pokemon[]>(pokemonArray);

  const { isLoading, error, data } = useQuery(
    ["ability", props.offset, props.choice],
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
      setPokemon(data.content);
      props.setPages(data.totalPages);
    }
  }, [data]);

  if (isLoading) return <Spinner />;

  if (error) return "No Pokemon with that ability";

  return <DesktopPokemonList post={pokemon} />;
}

export default AbilityFilter;
