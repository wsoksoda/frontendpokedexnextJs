import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Box, Spinner } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import { useInfiniteQuery } from "@tanstack/react-query";
import MobileFooter from "@/components/MobileFooter";
import MobilePokemonList from "@/components/MobilePokemonList";
import DesktopPokemonList from "@/components/DesktopPokemonList";

function Pokedex() {
  const [pokemon, setPokemon] = useState<pokemon[]>([]);

  const [pages, setPages] = useState(1);

  const router = useRouter();

  const firstValue = router.query.firstValue as string;

  const secondValue = router.query.secondValue as string;

  const theme = `linear(to-l,#${firstValue},#${secondValue})`;

  let offset = parseInt((router.query.offset as string) ?? "1");

  const { isLoading, error, data } = useInfiniteQuery(
    ["content", offset],
    async () => {
      const response = await axios.get(
        `http://localhost:8081/api/pokemon?offset=${offset}&pageSize=24`
      );
      const data = await response.data;
      return data;
    }
  );

  useEffect(() => {
    if (data) {
      setPokemon(data.content);
      setPages(data.totalPages);
    }
  }, [offset, data]);

  if (isLoading) return <Spinner />;

  if (error) return "An error has occured";

  function forward() {
    if (offset < pages) {
      const currentPage = offset + 1;
      router.push(
        `/pokedex?offset=${currentPage}&firstValue=${firstValue}&secondValue=${secondValue}`
      );
    }
  }

  function back() {
    if (offset > 1) {
      const currentPage = offset - 1;
      router.push(
        `/pokedex?offset=${currentPage}&firstValue=${firstValue}&secondValue=${secondValue}`
      );
    }
  }

  return (
    <Box bgGradient={theme} minH="70rem">
      <Navbar goBack={back} goForward={forward}></Navbar>
      <Box display={["none", null, "block"]}>
        <DesktopPokemonList post={pokemon} />
      </Box>
      <Box display={["block", null, "none"]}>
        <MobilePokemonList post={pokemon} />
        <MobileFooter goBack={back} goForward={forward} />
      </Box>
    </Box>
  );
}

export default Pokedex;
