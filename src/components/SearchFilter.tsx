import { Spinner } from "@chakra-ui/react";
import DesktopPokemonList from "./DesktopPokemonList";
import { useSearchInfiniteQuery } from "@/utils/APICalls";

interface Props {
  choice: string;
}

function SearchFilter({ choice }: Props) {
  const { isLoading, error, data, fetchNextPage } =
    useSearchInfiniteQuery(choice);

  const pokemon = data?.pages.flatMap(({ data }) => data.content) ?? [];

  if (isLoading) return <Spinner />;

  if (error) return "An error has occured";

  return (
    <DesktopPokemonList post={pokemon} fetchNextPokemonPage={fetchNextPage} />
  );
}

export default SearchFilter;
