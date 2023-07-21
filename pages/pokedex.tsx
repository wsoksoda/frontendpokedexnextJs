import Ability from "@/components/Ability";
import AbilityFilter from "@/components/AbilityFilter";
import SearchFilter from "@/components/SearchFilter";
import TypeFilter from "@/components/TypeFilter";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import { Box, Grid, Select } from "@chakra-ui/react";
import { useState } from "react";
import Egg from "@/components/Egg";
import EggFilter from "@/components/EggFilter";
import Type from "@/components/Type";
import useLocalStorage from "use-local-storage";
import useTheme from "@/hooks/useTheme";

function Pokedex() {
  const { backgroundGradient } = useTheme();
  console.log(backgroundGradient);

  const [SearchInputValue, setSearchInputValue] = useState("");
  const [typeOfSearch, setTypeOfSearch] = useState("1");

  const typeOfDropdown = {
    "1": <Search optionChoice={setSearchInputValue} />,
    "2": <Type optionChoice={setSearchInputValue} />,
    "3": <Ability optionChoice={setSearchInputValue} />,
    "4": <Egg optionChoice={setSearchInputValue} />,
  };

  const pokemonList = {
    "1": <SearchFilter choice={SearchInputValue} />,
    "2": <TypeFilter choice={SearchInputValue} />,
    "3": <AbilityFilter choice={SearchInputValue} />,
    "4": <EggFilter choice={SearchInputValue} />,
  };

  return (
    <Box bgGradient={backgroundGradient} minH="100rem">
      <Navbar />
      <Box color="white" pt="2rem">
        <Grid templateColumns="repeat(2,1fr)" gap="6" mb="2rem" mx="2rem">
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
          {typeOfSearch == "1" && typeOfDropdown["1"]}
          {typeOfSearch == "2" && typeOfDropdown["2"]}
          {typeOfSearch == "3" && typeOfDropdown["3"]}
          {typeOfSearch == "4" && typeOfDropdown["4"]}
        </Grid>
        {typeOfSearch == "1" && pokemonList["1"]}
        {typeOfSearch == "2" && pokemonList["2"]}
        {typeOfSearch == "3" && pokemonList["3"]}
        {typeOfSearch == "4" && pokemonList["4"]}
      </Box>
    </Box>
  );
}

export default Pokedex;
