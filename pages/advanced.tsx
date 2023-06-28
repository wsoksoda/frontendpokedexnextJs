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
  const router = useRouter();
  const offset = parseInt((router.query.offset as string) ?? "1");
  const firstValue = router.query.firstValue as string;
  const secondValue = router.query.secondValue as string;
  const theme = `linear(to-l,#${firstValue},#${secondValue})`;
  const [typeOfSearch, setTypeOfSearch] = useState("1");
  const [SearchInputValue, setSearchInputValue] = useState("");
  const [pages, setPages] = useState(1);

  function setSearchInput(chosen: string): void {
    setSearchInputValue(chosen);
  }

  function forward() {
    if (offset < pages) {
      const currentPage = offset + 1;
      router.push(
        `advanced/?offset=${currentPage}&firstValue=${firstValue}&secondValue=${secondValue}`
      );
    }
  }

  function back() {
    if (offset > 1) {
      const currentPage = offset - 1;
      router.push(
        `advanced/?offset=${currentPage}&firstValue=${firstValue}&secondValue=${secondValue}`
      );
    }
  }
  return (
    <Box bgGradient={theme} minH="100rem">
      <Navbar goBack={back} goForward={forward} />
      <Box color="white" pt="2rem">
        <Grid templateColumns="repeat(2,1fr)" gap="6">
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
      </Box>
    </Box>
  );
}

export default Advanced;
