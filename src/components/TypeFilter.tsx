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

function TypeFilter(props: Props) {
  let pokemons: pokemon[] = [];

  const [pokemon, setPokemon] = useState<pokemon[]>(pokemons);

  const { isLoading, error, data } = useQuery(
    ["ability", props.offset, props.choice],
    async () => {
      const response = await axios.get(
        `http://localhost:8081/api/pokemon/type?type=${props.choice}&offset=${props.offset}&pageSize=24`
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

  if (error) return "No Pokemon with that type";

  return (
    <div className="body">
      <DesktopPokemonList post={pokemon} />
    </div>
  );
}

export default TypeFilter;
