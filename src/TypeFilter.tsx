import axios from "axios";
import React, { useEffect } from "react";
import PokemonCard from "./pokemonList";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@chakra-ui/react";

interface Props {
  choice: string;
  offset: number;
}

function TypeFilter(props: Props) {
  let pokemons: pokemon[] = [];

  const [post, setPost] = React.useState<pokemon[]>(pokemons);

  const [pages, setPages] = React.useState(1);

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
      setPost(data.content);
      setPages(data.totalPages);
    }
  }, [data]);

  if (isLoading) return <Spinner />;

  if (error) return "No Pokemon with that type";

  return (
    <div className="body">
      <PokemonCard post={post} />
    </div>
  );
}

export default TypeFilter;
