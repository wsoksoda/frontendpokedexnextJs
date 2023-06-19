import axios from "axios";
import React from "react";
import Navbar from "@/navbar";
import { Box, ChakraProvider, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { DesktopOnly, MobileOnly } from "@/breakpointVisibility";
import MobileFooter from "@/mobileFooter";
import DesktopPokemonCard from "@/desktopPokemonCard";
import MobilePokemonCard from "@/mobilePokemonCard";

function Pokemon() {
  let router = useRouter();

  const pokemonId = parseInt((router.query.id as string) ?? "1");
  const offset = parseInt((router.query.id as string) ?? "1");

  const pokemonSize = 553;

  const { isLoading, error, data } = useQuery(["id", pokemonId], async () => {
    const response = await axios.get(
      `http://localhost:8081/api/pokemon/${pokemonId}`
    );
    const data = await response.data;
    return data;
  });

  if (isLoading) return <Spinner />;

  if (error) return "An error has occured";

  function forward(): void {
    if (pokemonId < pokemonSize) {
      let currentPage = pokemonId + 1;
      router.replace(`/pokemon?id=${currentPage}`);
    }
  }

  function back(): void {
    if (pokemonId > 1) {
      let currentPage = pokemonId - 1;
      router.replace(`/pokemon?id=${currentPage}`);
    }
  }

  return (
    <ChakraProvider>
      <Box bgGradient="linear(to-l,#41295a,#2F0743)">
        <Navbar goBack={back} goForward={forward} />
        <DesktopOnly>
          <DesktopPokemonCard data={data} />
        </DesktopOnly>
        <MobileOnly>
          <MobilePokemonCard data={data} />
          <MobileFooter goBack={back} goForward={forward} />
        </MobileOnly>
      </Box>
    </ChakraProvider>
  );
}

export default Pokemon;
