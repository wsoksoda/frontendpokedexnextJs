import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import DesktopPokemonList from "./DesktopPokemonList";

interface Props {
  choice: string;
  offset: number;
  setPages: (pages: number) => void;
}

function SearchFilter(props: Props) {
  let pokemons: pokemon[] = [];

  const [pokemon, setPokemon] = useState<pokemon[]>(pokemons);

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

  return <DesktopPokemonList post={pokemon} />;
}

export default SearchFilter;
