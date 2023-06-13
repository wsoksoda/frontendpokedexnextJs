import { SearchIcon } from "@chakra-ui/icons";
import { Button, FormControl, Input } from "@chakra-ui/react";

import React, { useState } from "react";
import { Form, redirect } from "react-router-dom";
import SearchForm from "./searchForm";
interface Prop {
  optionChoice: (chosen: string) => string;
}

function Search(props: Prop) {
  const handleSearch = (query: string) => {
    props.optionChoice(query);
  };

  return <SearchForm onSearch={handleSearch}></SearchForm>;
}

export default Search;
