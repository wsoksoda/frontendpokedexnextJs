import axios from "axios";
import { Spinner } from "@chakra-ui/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import DesktopPokemonList from "./DesktopPokemonList";

interface Props {
  choice: string;
}

function SearchFilter(props: Props) {
  const fetch = ({ pageParam: offset = 1 }) => {
    return axios.get(
      `http://localhost:8081/api/pokemon/name?name=${props.choice}&offset=${offset}&pageSize=24`
    );
  };

  const { isLoading, error, data, fetchNextPage } = useInfiniteQuery(
    ["content", props.choice],
    fetch,
    {
      getNextPageParam: (lastPage, pages) => {
        if (!lastPage.data.last) {
          return lastPage.data.pageable.pageNumber + 2;
        } else {
          return undefined;
        }
      },
      keepPreviousData: true,
    }
  );

  const pokemon = data?.pages.flatMap(({ data }) => data.content) ?? [];

  if (isLoading) return <Spinner />;

  if (error) return "An error has occured";

  function morePokemon() {
    fetchNextPage();
  }

  return <DesktopPokemonList post={pokemon} morePokemon={morePokemon} />;
}

export default SearchFilter;
