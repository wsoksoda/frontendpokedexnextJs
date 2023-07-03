import axios from "axios";
import { Spinner } from "@chakra-ui/react";
import DesktopPokemonList from "./DesktopPokemonList";
import { useInfiniteQuery } from "@tanstack/react-query";

interface Props {
  choice: string;
}

function TypeFilter(props: Props) {
  const fetch = ({ pageParam: offset = 1 }) =>
    axios.get(
      `http://localhost:8081/api/pokemon/type?type=${props.choice}&offset=${offset}&pageSize=24`
    );

  const { isLoading, error, data, fetchNextPage } = useInfiniteQuery(
    ["content", props.choice],
    fetch,
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.data.last) {
          return undefined;
        }
        return lastPage.data.pageable.pageNumber + 2;
      },
      keepPreviousData: true,
    }
  );

  const pokemon = data?.pages.flatMap(({ data }) => data.content) ?? [];

  if (isLoading) return <Spinner />;

  if (error) return "An error has occured";

  return (
    <DesktopPokemonList post={pokemon} fetchNextPokemonPage={fetchNextPage} />
  );
}

export default TypeFilter;
