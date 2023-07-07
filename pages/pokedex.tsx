import axios from "axios";
import { useRouter } from "next/router";
import { Box, Spinner } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import { useInfiniteQuery } from "@tanstack/react-query";
import MobilePokemonList from "@/components/MobilePokemonList";
import DesktopPokemonList from "@/components/DesktopPokemonList";

function Pokedex() {
  const router = useRouter();

  const firstValue = router.query.firstValue as string;

  const secondValue = router.query.secondValue as string;

  const theme = `linear(to-l,#${firstValue},#${secondValue})`;

  const fetch = ({ pageParam: offset = 1 }) => {
    return axios.get(
      `http://localhost:8081/api/pokemon?offset=${offset}&pageSize=24`
    );
  };

  const { isLoading, error, data, fetchNextPage } = useInfiniteQuery(
    ["content"],
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
    console.log("clicked");
  }

  return (
    <Box bgGradient={theme} minH="70rem">
      <Navbar />
      <Box mt="2rem">
        <Box display={["none", null, "block"]}>
          <DesktopPokemonList post={pokemon} morePokemon={morePokemon} />
        </Box>
        <Box display={["block", null, "none"]}>
          <MobilePokemonList post={pokemon} morePokemon={morePokemon} />
        </Box>
      </Box>
    </Box>
  );
}

export default Pokedex;
