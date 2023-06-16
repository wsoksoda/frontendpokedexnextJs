import axios from "axios";
import React from "react";
import Navbar from "@/navbar";
import { Box, ChakraProvider, Spinner } from "@chakra-ui/react";
import { PokemonChart } from "@/pokemonChart";
import { statColor } from "@/pokemonInterface";
import { useRouter } from "next/router";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useQuery } from "@tanstack/react-query";
import { DesktopOnly, MobileOnly } from "@/breakpointVisibility";
import MobileFooter from "@/mobileFooter";
import DesktopPokemonCard from "@/desktopPokemonCard";
import MobilePokemonCard from "@/mobilePokemonCard";

function Pokemon() {
  let router = useRouter();

  const id = parseInt((router.query.id as string) ?? "1");

  const pokemonSize = 553;

  const { isLoading, error, data } = useQuery(["id", id], async () => {
    const response = await axios.get(`http://localhost:8081/api/pokemon/${id}`);
    const data = await response.data;
    return data;
  });

  if (isLoading) return <Spinner />;

  if (error) return "An error has occured";

  function next(): void {
    if (id < pokemonSize) {
      let currentPage = id + 1;
      router.push(`/pokemon?id=${currentPage}`);
    }
  }

  function back(): void {
    if (id > 1) {
      let currentPage = id - 1;
      router.push(`/pokemon?id=${currentPage}`);
    }
  }

  return (
    <ChakraProvider>
      <Box bgGradient="linear(to-l,#41295a,#2F0743)">
        <Navbar goBack={back} goForward={next} />
        <DesktopOnly>
          <DesktopPokemonCard data={data} />
        </DesktopOnly>
        <MobileOnly>
          <MobilePokemonCard data={data} />
          <MobileFooter goBack={back} goForward={next} />
        </MobileOnly>
      </Box>
    </ChakraProvider>
  );
}

export default Pokemon;
