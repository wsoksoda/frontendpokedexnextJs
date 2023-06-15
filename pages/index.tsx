import React, { useEffect } from "react";
import axios from "axios";
import PokemonCard from "../src/pokemonCard";
import { useRouter } from "next/router";
import { Box, ChakraProvider, Spinner } from "@chakra-ui/react";
import Navbar from "@/navbar";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

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
        <PokemonCard post={post} />
      </Box>
    </ChakraProvider>
  );
}

export default Home;
