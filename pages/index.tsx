import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Box, ChakraProvider, Spinner } from "@chakra-ui/react";
import Navbar from "@/navbar";
import { useQuery } from "@tanstack/react-query";
import { DesktopOnly, MobileOnly } from "@/breakpointVisibility";
import MobileFooter from "@/mobileFooter";
import MobilePokemonList from "@/mobilePokemonList";
import PokemonList from "../src/pokemonList";

function Home() {
  let pokemons: pokemon[] = [];

  const [post, setPost] = React.useState<pokemon[]>(pokemons);

  const [pages, setPages] = React.useState(1);

  const router = useRouter();

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
      setPost(data.content);
      setPages(data.totalPages);
    }
  }, [offset, data]);

  if (isLoading) return <Spinner />;

  if (error) return "An error has occured";

  function next() {
    if (offset < pages) {
      const currentPage = offset + 1;
      router.push(`/?offset=${currentPage}`);
    }
  }

  function back() {
    if (offset > 1) {
      const currentPage = offset - 1;
      router.push(`/?offset=${currentPage}`);
    }
  }

  return (
    <ChakraProvider>
      <Box
        bgGradient="linear(to-l,#41295a,#2F0743)"
        style={{ minHeight: "70rem" }}
      >
        <Navbar goBack={back} goForward={next}></Navbar>
        <DesktopOnly>
          <PokemonList post={post} />
        </DesktopOnly>
        <MobileOnly>
          <MobilePokemonList post={post} />
          <MobileFooter goBack={back} goForward={next} />
        </MobileOnly>
      </Box>
    </ChakraProvider>
  );
}

export default Home;
