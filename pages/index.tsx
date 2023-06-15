import React, { useEffect } from "react";
import axios from "axios";
import PokemonCard from "../src/pokemonCard";
import { useRouter } from "next/router";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/navbar";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { useRequestProcessor } from "@/getRequests";

function Home() {
  let pokemons: pokemon[] = [];

  const [post, setPost] = React.useState<pokemon[]>(pokemons);

  const [pages, setPages] = React.useState(1);

  const router = useRouter();

  const offset = parseInt((router.query.offset as string) ?? "1");

  const { data, isLoading, isError } = useQuery(["content"], () => {
    axios
      .get(`http://localhost:8081/api/pokemon?offset=${offset}&pageSize=24`)
      .then((res) => res.data);
  });

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
    <QueryClientProvider client={new QueryClient()}>
      <ChakraProvider>
        <Box
          bgGradient="linear(to-l,#41295a,#2F0743)"
          style={{ minHeight: "70rem" }}
        >
          <Navbar goBack={back} goForward={next}></Navbar>
          <PokemonCard post={data} />
        </Box>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default Home;
