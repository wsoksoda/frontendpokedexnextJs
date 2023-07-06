import axios from "axios";
import { Box, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import MobileFooter from "@/components/MobileFooter";
import DesktopPokemonCard from "@/components/DesktopPokemonCard";
import MobilePokemonCard from "@/components/MobilePokemonCard";
import NavbarArrows from "@/components/NavbarArrows";
import { useSinglePokemonQuery } from "@/utils/APICalls";

function Pokemon() {
  let router = useRouter();

  const pokemonId = parseInt((router.query.id as string) ?? "1");

  const firstValue = router.query.firstValue as string;

  const secondValue = router.query.secondValue as string;

  const theme = `linear(to-l,#${firstValue},#${secondValue})`;

  const pokemonSize = 553;

  const { isLoading, error, data } = useSinglePokemonQuery(String(pokemonId));

  if (isLoading) return <Spinner />;

  if (error) return "An error has occured";

  function forward(): void {
    if (pokemonId < pokemonSize) {
      let currentPage = pokemonId + 1;
      router.replace(
        `/pokemon?id=${currentPage}&firstValue=${firstValue}&secondValue=${secondValue}`
      );
    }
  }

  function back(): void {
    if (pokemonId > 1) {
      let currentPage = pokemonId - 1;
      router.replace(
        `/pokemon?id=${currentPage}&firstValue=${firstValue}&secondValue=${secondValue}`
      );
    }
  }

  return (
    <Box bgGradient={theme}>
      <NavbarArrows goBack={back} goForward={forward} />
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
