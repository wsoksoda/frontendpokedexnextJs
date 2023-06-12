import React, { useEffect } from "react";
import axios from "axios";
import PokemonNavbar from "../src/pokemonNavbar";
import PokemonCard from "../src/pokemonCard";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/navbar";

function Home() {
  let pokemons: pokemon[] = [];

  const [post, setPost] = React.useState<pokemon[]>(pokemons);

  const [pages, setPages] = React.useState(1);

  // const pageable = useParams();

  const router = useRouter();

  console.log(router.query);

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
    //todo error handling
    if (offset < pages) {
      let currentPage = offset + 1;
      router.push(`/?offset=${currentPage}`);
    } else {
    }
  }

  function back() {
    if (offset > 1) {
      let currentPage = offset - 1;

      router.push(`/?offset=${currentPage}`);
    } else {
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
