import Ability from "@/Ability";
import AbilityFilter from "@/AbilityFilter";
import Egg from "@/Egg";
import EggFilter from "@/EggFilter";
import SearchFilter from "@/SearchFilter";
import Type from "@/Type";
import TypeFilter from "@/TypeFilter";
import Navbar from "@/navbar";
import Search from "@/search";
import { Box, ChakraProvider, Grid, Select } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";

function PokemonSearch() {
  const [filterValue, setFilterValue] = useState("1");
  const [choice, setChoice] = useState("");

  const router = useRouter();

  const offset = parseInt((router.query.offset as string) ?? "1");

  function Dropdown() {
    if (filterValue == "1") {
      return <Search optionChoice={optionChoice} />;
    } else if (filterValue == "2") {
      return <Type optionChoice={optionChoice} />;
    } else if (filterValue == "3") {
      return <Ability optionChoice={optionChoice} />;
    } else if (filterValue == "4") {
      return <Egg optionChoice={optionChoice} />;
    } else {
      return <></>;
    }
  }

  function FilteredPokemonList() {
    if (filterValue == "1") {
      return <SearchFilter choice={choice} offset={offset} />;
    } else if (filterValue == "2") {
      return <TypeFilter choice={choice} offset={offset} />;
    } else if (filterValue == "3") {
      return <AbilityFilter choice={choice} offset={offset} />;
    } else if (filterValue == "4") {
      return <EggFilter choice={choice} offset={offset} />;
    } else {
      return <></>;
    }
  }

  function optionChoice(chosen: string): void {
    setChoice(chosen);
  }

  function next() {
    const currentPage = offset + 1;
    router.push(`advanced/?offset=${currentPage}`);
  }

  function back() {
    if (offset > 1) {
      const currentPage = offset - 1;
      router.push(`advanced/?offset=${currentPage}`);
    }
  }

  return (
    <ChakraProvider>
      <Box
        bgGradient="linear(to-l,#41295a,#2F0743)"
        style={{ minHeight: "100rem" }}
      >
        <Navbar goBack={back} goForward={next} />
        <div className="body" style={{ paddingTop: "2rem", color: "white" }}>
          <Grid templateColumns="repeat(2,1fr)" gap={6}>
            <Select
              aria-label="Floating label select example"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
            >
              <option value="1">Search by name</option>
              <option value="2">Type</option>
              <option value="3">Ability</option>
              <option value="4">Egg Group</option>
            </Select>
            <Dropdown />
          </Grid>
          <FilteredPokemonList />
        </div>
      </Box>
    </ChakraProvider>
  );
}

export default PokemonSearch;
