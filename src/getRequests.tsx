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

const client = axios.create({ baseURL: "http://localhost:8081" });

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer token`;
  const onSuccess = (response: any) => response;
  const onError = (error: any) => {};
  return client(options).then(onSuccess).catch(onError);
};
