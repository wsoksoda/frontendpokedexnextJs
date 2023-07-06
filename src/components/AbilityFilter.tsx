import { Spinner } from "@chakra-ui/react";
import DesktopPokemonList from "./DesktopPokemonList";
import { useAbilityInfiniteQuery } from "@/utils/APICalls";

interface Props {
  choice: string;
}

function AbilityFilter({ choice }: Props) {
  const { isLoading, error, data, fetchNextPage } =
    useAbilityInfiniteQuery(choice);

  const pokemon = data?.pages.flatMap(({ data }) => data.content) ?? [];

  if (isLoading) return <Spinner />;

  if (error) return "An error has occured";

  return (
    <DesktopPokemonList post={pokemon} fetchNextPokemonPage={fetchNextPage} />
  );
}

export default AbilityFilter;
