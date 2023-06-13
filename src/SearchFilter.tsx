import React from "react";
import { useEffect } from "react";
import axios from "axios";
import PokemonCard from "./pokemonCard";

interface Props {
  choice: string;
}

function SearchFilter(props: Props) {
  let pokemons: pokemon[] = [];
  let searchId: any;

  const [searchInput, setSearchInput] = React.useState(String);

  const [post, setPost] = React.useState<pokemon[]>(pokemons);

  const [pages, setPages] = React.useState(1);

  const offset = 1;

  useEffect(() => {
    axios
      .get(
        `http://localhost:8081/api/pokemon/name?name=${props.choice}&offset=${offset}&pageSize=24`
      )
      .then((response) => {
        setPost(response.data["content"]);
        setPages(response.data["totalPages"]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchInput]);

  const handleChange = (e: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  const {} = props;

  return <PokemonCard offset={offset} post={post} />;
}

export default SearchFilter;
