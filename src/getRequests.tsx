import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const client = axios.create({ baseURL: "http://localhost:8081" });

export function useRequestProcessor() {
  const queryClient = useQueryClient();

  function getAllPokemon(key: pokemon[], queryFunction: any, options = {}) {
    return useQuery({
      queryKey: key,
      queryFn: queryFunction,
      ...options,
    });
  }

  return getAllPokemon;
}
