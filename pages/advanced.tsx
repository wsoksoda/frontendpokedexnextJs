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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { off } from "process";
import React from "react";
import { useState } from "react";

interface DropdownProp {
  filterValue: string;
  optionChoice: (chosen: string) => void;
}

interface FilteredPokemonProp {
  filterValue: string;
  choice: string;
  offset: number;
}

function Dropdown(props: DropdownProp) {
  if (props.filterValue == "1") {
    return <Search optionChoice={props.optionChoice} />;
  } else if (props.filterValue == "2") {
    return <Type optionChoice={props.optionChoice} />;
  } else if (props.filterValue == "3") {
    return <Ability optionChoice={props.optionChoice} />;
  } else if (props.filterValue == "4") {
    return <Egg optionChoice={props.optionChoice} />;
  } else {
    return <></>;
  }
}

function FilteredPokemonList(props: FilteredPokemonProp) {
  if (props.filterValue == "1") {
    return <SearchFilter choice={props.choice} offset={props.offset} />;
  } else if (props.filterValue == "2") {
    return <TypeFilter choice={props.choice} offset={props.offset} />;
  } else if (props.filterValue == "3") {
    return <AbilityFilter choice={props.choice} offset={props.offset} />;
  } else if (props.filterValue == "4") {
    return <EggFilter choice={props.choice} offset={props.offset} />;
  } else {
    return <></>;
  }
}

function PokemonSearch() {
  const [filterValue, setFilterValue] = useState("1");
  const [choice, setChoice] = useState("");

  const router = useRouter();

  const offset = parseInt((router.query.offset as string) ?? "1");

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
              onChange={(e) => setFilterValue(e.target.value)}
              value={filterValue}
            >
              <option value="1">Search by name</option>
              <option value="2">Type</option>
              <option value="3">Ability</option>
              <option value="4">Egg Group</option>
            </Select>
            <Dropdown filterValue={filterValue} optionChoice={optionChoice} />
          </Grid>
          <FilteredPokemonList
            filterValue={filterValue}
            offset={offset}
            choice={choice}
          />
        </div>
      </Box>
    </ChakraProvider>
  );
}

export default PokemonSearch;
