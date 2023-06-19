import axios from "axios";
import React from "react";
import Navbar from "@/navbar";
import { Box, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import MobileFooter from "@/mobileFooter";
import DesktopPokemonCard from "@/desktopPokemonCard";
import MobilePokemonCard from "@/mobilePokemonCard";

function Pokemon() {
  let router = useRouter();

  const pokemonId = parseInt((router.query.id as string) ?? "1");

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
    <Box bgGradient="linear(to-l,#41295a,#2F0743)">
      <Navbar goBack={back} goForward={forward} />
      <Box display={["none", null, "block"]}>
        <DesktopPokemonCard data={data} />
      </Box>
      <Box display={["block", null, "none"]}>
        <MobilePokemonCard data={data} />
        <MobileFooter goBack={back} goForward={forward} />
      </Box>
    </Box>
  );
}

export default Pokemon;
