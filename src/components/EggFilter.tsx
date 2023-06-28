import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@chakra-ui/react";
import DesktopPokemonList from "./DesktopPokemonList";

interface Props {
  choice: string;
  offset: number;
  setPages: (pages: number) => void;
}

function EggFilter(props: Props) {
  let pokemons: pokemon[] = [];

  const [pokemon, setPokemon] = useState<pokemon[]>(pokemons);

  const { isLoading, error, data } = useQuery(
    ["eggGroup", props.offset, props.choice],
    async () => {
      const response = await axios.get(
        `http://localhost:8081/api/pokemon/egg?eggGroup=${props.choice}&offset=${props.offset}&pageSize=24`
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

  if (error) return "No Pokemon with that egg group";

  return <DesktopPokemonList post={pokemon} />;
}

export default EggFilter;
