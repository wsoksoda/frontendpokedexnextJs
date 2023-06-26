import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Box, Spinner } from "@chakra-ui/react";
import Navbar from "@/navbar";
import { useQuery } from "@tanstack/react-query";
import MobileFooter from "@/mobileFooter";
import MobilePokemonList from "@/mobilePokemonList";
import DesktopPokemonList from "@/desktopPokemonList";

function Pokedex() {
  let pokemonArray: pokemon[] = [];

  const [pokemon, setPokemon] = React.useState<pokemon[]>(pokemonArray);

  const [pages, setPages] = React.useState(1);

  const router = useRouter();

  const firstValue = router.query.firstValue as string;

  const secondValue = router.query.secondValue as string;

  const theme = `linear(to-l,#${firstValue},#${secondValue})`;

  let offset = parseInt((router.query.offset as string) ?? "1");

  const { isLoading, error, data } = useQuery(["content", offset], async () => {
    const response = await axios.get(
      `http://localhost:8081/api/pokemon?offset=${offset}&pageSize=24`
    );
    const data = await response.data;
    return data;
  });

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
    <Box bgGradient={theme} style={{ minHeight: "70rem" }}>
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
