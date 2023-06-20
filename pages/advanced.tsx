import Ability from "@/ability";
import AbilityFilter from "@/abilityFilter";
import SearchFilter from "@/searchFilter";
import TypeFilter from "@/typeFilter";
import Navbar from "@/navbar";
import Search from "@/search";
import { Box, Grid, Select } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Egg from "@/egg";
import EggFilter from "@/eggFilter";
import Type from "@/type";

interface DropdownProp {
  typeOfSearch: string;
  setSearchInput: (chosen: string) => void;
}

interface FilteredPokemonProp {
  typeOfSearch: string;
  searchInputValue: string;
  offset: number;
  setPages: (pages: number) => void;
}

function Dropdown(props: DropdownProp) {
  if (props.typeOfSearch == "1") {
    return <Search optionChoice={props.setSearchInput} />;
  } else if (props.typeOfSearch == "2") {
    return <Type optionChoice={props.setSearchInput} />;
  } else if (props.typeOfSearch == "3") {
    return <Ability optionChoice={props.setSearchInput} />;
  } else if (props.typeOfSearch == "4") {
    return <Egg optionChoice={props.setSearchInput} />;
  } else {
    return <></>;
  }
}

function FilteredPokemonList(props: FilteredPokemonProp) {
  if (props.typeOfSearch == "1") {
    return (
      <SearchFilter
        choice={props.searchInputValue}
        offset={props.offset}
        setPages={props.setPages}
      />
    );
  } else if (props.typeOfSearch == "2") {
    return (
      <TypeFilter
        choice={props.searchInputValue}
        offset={props.offset}
        setPages={props.setPages}
      />
    );
  } else if (props.typeOfSearch == "3") {
    return (
      <AbilityFilter
        choice={props.searchInputValue}
        offset={props.offset}
        setPages={props.setPages}
      />
    );
  } else if (props.typeOfSearch == "4") {
    return (
      <EggFilter
        choice={props.searchInputValue}
        offset={props.offset}
        setPages={props.setPages}
      />
    );
  } else {
    return <></>;
  }
}

function Advanced() {
  const [typeOfSearch, setTypeOfSearch] = useState("1");
  const [SearchInputValue, setSearchInputValue] = useState("");

  const [pages, setPages] = React.useState(1);

  const router = useRouter();

  const offset = parseInt((router.query.offset as string) ?? "1");

  function setSearchInput(chosen: string): void {
    setSearchInputValue(chosen);
  }

  function forward() {
    if (offset < pages) {
      const currentPage = offset + 1;
      router.push(`advanced/?offset=${currentPage}`);
    }
  }

  function back() {
    if (offset > 1) {
      const currentPage = offset - 1;
      router.push(`advanced/?offset=${currentPage}`);
    }
  }
  return (
    <Box
      bgGradient="linear(to-l,#41295a,#2F0743)"
      style={{ minHeight: "100rem" }}
    >
      <Navbar goBack={back} goForward={forward} />
      <div className="body" style={{ paddingTop: "2rem", color: "white" }}>
        <Grid templateColumns="repeat(2,1fr)" gap={6}>
          <Select
            aria-label="Floating label select example"
            onChange={(e) => setTypeOfSearch(e.target.value)}
            value={typeOfSearch}
          >
            <option value="1">Search by name</option>
            <option value="2">Type</option>
            <option value="3">Ability</option>
            <option value="4">Egg Group</option>
          </Select>
          <Dropdown
            typeOfSearch={typeOfSearch}
            setSearchInput={setSearchInput}
          />
        </Grid>
        <FilteredPokemonList
          typeOfSearch={typeOfSearch}
          offset={offset}
          searchInputValue={SearchInputValue}
          setPages={setPages}
        />
      </div>
    </Box>
  );
}

export default Advanced;
