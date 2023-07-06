import { useRouter } from "next/router";
import { Box, Spinner } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import MobilePokemonList from "@/components/MobilePokemonList";
import DesktopPokemonList from "@/components/DesktopPokemonList";
import { usePokemonInfiniteQuery } from "@/utils/APICalls";

function Pokedex() {
  const router = useRouter();

  const firstValue = router.query.firstValue as string;

  const secondValue = router.query.secondValue as string;

  const theme = `linear(to-l,#${firstValue},#${secondValue})`;

  const { isLoading, error, data, fetchNextPage } = usePokemonInfiniteQuery();

  const pokemon = data?.pages.flatMap(({ data }) => data.content) ?? [];

  if (isLoading) return <Spinner />;

  if (error) return "An error has occured";

  return (
    <Box bgGradient={theme} minH="70rem">
      <Navbar />
      <Box mt="2rem">
        <Box display={["none", null, "block"]}>
          <DesktopPokemonList
            post={pokemon}
            fetchNextPokemonPage={fetchNextPage}
          />
        </Box>
        <Box display={["block", null, "none"]}>
          <MobilePokemonList
            post={pokemon}
            fetchNextPokemonPage={fetchNextPage}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Pokedex;
