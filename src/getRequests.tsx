import axios from "axios";

const fetchPokemon = async (off: string) => {
  const res = await axios.get(
    "http://localhost:8081/api/pokemon?offset=" + off + "&pageSize=24"
  );
  return {
    post: res.data.content,
    pages: res.data.pages,
  };
};
