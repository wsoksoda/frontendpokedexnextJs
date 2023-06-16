import axios from "axios";
import React, { useEffect } from "react";
import PokemonCard from "./desktopPokemonList";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@chakra-ui/react";

interface Props {
  choice: string;
  offset: number;
  setPages: (pages: number) => void;
}

function EggFilter(props: Props) {
  let pokemons: pokemon[] = [];

  const [pokemon, setPokemon] = React.useState<pokemon[]>(pokemons);

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

  return (
    <div className="body">
      <PokemonCard post={pokemon} />
    </div>
  );
}

export default EggFilter;
