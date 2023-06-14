import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonCard from "./pokemonCard";

interface Props {
  choice: string;
  offset: number;
}

function EggFilter(props: Props) {
  let pokemons: pokemon[] = [];

  const [post, setPost] = React.useState<pokemon[]>(pokemons);

  const [pages, setPages] = React.useState(1);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8081/api/pokemon/egg?eggGroup=${props.choice}&offset=${props.offset}&pageSize=24`
      )
      .then((response) => {
        setPost(response.data["content"]);
        setPages(response.data["totalPages"]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [props.choice]);

  return (
    <div className="body">
      <PokemonCard post={post} />
    </div>
  );
}

export default EggFilter;
