import React, { useEffect } from "react";
import axios from "axios";
import PokemonCard from "../src/pokemonCard";
import { useRouter } from "next/router";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/navbar";
import { BrowserRouter } from "react-router-dom";

function Home() {
  let pokemons: pokemon[] = [];

  const [post, setPost] = React.useState<pokemon[]>(pokemons);

  const [pages, setPages] = React.useState(1);

  const router = useRouter();

  const offset = parseInt((router.query.offset as string) ?? "1");

  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/pokemon?offset=${offset}&pageSize=24`)
      .then((response) => {
        setPost(response.data["content"]);
        setPages(response.data["totalPages"]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [offset]);

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
      <Box bgGradient="linear(to-l,#41295a,#2F0743)">
        <Navbar goBack={back} goForward={next}></Navbar>
        <PokemonCard offset={offset} post={post} />
      </Box>
    </ChakraProvider>
  );
}

export default Home;
