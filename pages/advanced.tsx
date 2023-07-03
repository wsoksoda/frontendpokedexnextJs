import Ability from "@/components/Ability";
import AbilityFilter from "@/components/AbilityFilter";
import SearchFilter from "@/components/SearchFilter";
import TypeFilter from "@/components/TypeFilter";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import { Box, Grid, Select } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import Egg from "@/components/Egg";
import EggFilter from "@/components/EggFilter";
import Type from "@/components/Type";

interface DropdownProp {
  typeOfSearch: string;
  setSearchInput: (chosen: string) => void;
}

interface FilteredPokemonProp {
  typeOfSearch: string;
  searchInputValue: string;
  offset: number;
}

function Dropdown(props: DropdownProp) {
  if (props.typeOfSearch == "1") {
    return <Search optionChoice={props.setSearchInput} />;
  }
  if (props.typeOfSearch == "2") {
    return <Type optionChoice={props.setSearchInput} />;
  }
  if (props.typeOfSearch == "3") {
    return <Ability optionChoice={props.setSearchInput} />;
  }
  if (props.typeOfSearch == "4") {
    return <Egg optionChoice={props.setSearchInput} />;
  }
  return <></>;
}

function FilteredPokemonList(props: FilteredPokemonProp) {
  if (props.typeOfSearch == "1") {
    return <SearchFilter choice={props.searchInputValue} />;
  }
  if (props.typeOfSearch == "2") {
    return <TypeFilter choice={props.searchInputValue} />;
  }
  if (props.typeOfSearch == "3") {
    return <AbilityFilter choice={props.searchInputValue} />;
  }
  if (props.typeOfSearch == "4") {
    return <EggFilter choice={props.searchInputValue} />;
  }
  return <></>;
}

function Advanced() {
  const router = useRouter();
  const offset = parseInt((router.query.offset as string) ?? "1");
  const firstValue = router.query.firstValue as string;
  const secondValue = router.query.secondValue as string;
  const theme = `linear(to-l,#${firstValue},#${secondValue})`;
  const [typeOfSearch, setTypeOfSearch] = useState("1");
  const [SearchInputValue, setSearchInputValue] = useState("");

  function setSearchInput(chosen: string): void {
    setSearchInputValue(chosen);
  }

  return (
    <Box bgGradient={theme} minH="100rem">
      <Navbar />
      <Box color="white" pt="2rem">
        <Grid templateColumns="repeat(2,1fr)" gap="6" mb="2rem">
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
        />
      </Box>
    </Box>
  );
}

export default Advanced;
