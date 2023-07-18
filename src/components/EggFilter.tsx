import { Spinner } from "@chakra-ui/react";
import DesktopPokemonList from "./DesktopPokemonList";
import { useEggInfiniteQuery } from "@/utils/APICalls";

interface Props {
  choice: string;
}

function EggFilter({ choice }: Props) {
  const { isLoading, error, data, fetchNextPage, hasNextPage } =
    useEggInfiniteQuery(choice);

  const pokemon = data?.pages.flatMap(({ data }) => data.content) ?? [];

  if (isLoading) return <Spinner />;

  if (error) return "An error has occured";

  return (
    <DesktopPokemonList
      post={pokemon}
      fetchNextPokemonPage={fetchNextPage}
      morePokemon={hasNextPage}
    />
  );
}

export default EggFilter;
