import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonCard from "./pokemonCard";

interface Props {
  choice: string;
  offset: number;
}

function TypeFilter(props: Props) {
  let pokemons: pokemon[] = [];

  const [post, setPost] = React.useState<pokemon[]>(pokemons);

  const [pages, setPages] = React.useState(1);

  const { pageable } = useParams();

  useEffect(() => {
    axios
      .get(
        `http://localhost:8081/api/pokemon/type?type=${props.choice}&offset=${props.offset}&pageSize=24`
      )
      .then((response) => {
        setPost(response.data["content"]);
        setPages(response.data["totalPages"]);
        console.log(props.choice);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="body">
      <PokemonCard post={post} />
    </div>
  );
}

export default TypeFilter;
