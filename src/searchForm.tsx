import { Button, Input } from "@chakra-ui/react";

import React, { useState } from "react";
import { Form, redirect } from "react-router-dom";
interface Prop {
  onSearch: (query: string) => void;
}

const SearchForm: React.FC<Prop> = ({ onSearch }) => {
  const [filterValue, setFilterValue] = useState("");

  // props.optionChoice(filterValue);

  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your search query"
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchForm;
