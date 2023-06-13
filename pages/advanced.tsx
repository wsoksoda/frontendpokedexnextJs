import Ability from "@/Ability";
import AbilityFilter from "@/AbilityFilter";
import Egg from "@/Egg";
import EggFilter from "@/EggFilter";
import SearchFilter from "@/SearchFilter";
import Type from "@/Type";
import TypeFilter from "@/TypeFilter";
import Search from "@/search";
import {
  Box,
  Button,
  ChakraProvider,
  Grid,
  GridItem,
  Link,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";

function PokemonSearch() {
  const [filterValue, setFilterValue] = useState("1");
  const [choice, setChoice] = useState("");

  function Dropdown() {
    if (filterValue == "1") {
      return <Search optionChoice={optionChoice} />;
    } else if (filterValue == "2") {
      return <Type optionChoice={optionChoice} />;
    } else if (filterValue == "3") {
      return <Ability />;
    } else if (filterValue == "4") {
      return <Egg />;
    } else {
      return <></>;
    }
  }

  function FilteredPokemonList() {
    if (filterValue == "1") {
      return <SearchFilter choice="choice" />;
    } else if (filterValue == "2") {
      return <TypeFilter choice="choice" />;
    } else if (filterValue == "3") {
      return <AbilityFilter choice="choice" />;
    } else if (filterValue == "4") {
      return <EggFilter choice="choice" />;
    } else {
      return <></>;
    }
  }

  function optionChoice(chosen: string): string {
    setChoice(chosen);
    return choice;
  }

  return (
    <ChakraProvider>
      <Box
        bgGradient="linear(to-l,#41295a,#2F0743)"
        style={{ minHeight: "100rem" }}
      >
        <div className="body" style={{ paddingTop: "2rem", color: "white" }}>
          <Link href="http://localhost:3000">
            <Button size="lg" variant="light" style={{ marginLeft: "2rem" }}>
              Back
            </Button>
          </Link>
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
