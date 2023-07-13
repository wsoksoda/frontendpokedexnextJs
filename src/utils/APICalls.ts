import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

export const useWeather = () => {
  return useQuery(
    ["Weather"],
    async () => {
      return axios.get(
        "http://api.weatherapi.com/v1/forecast.json?key=d5559d652c3543a6ab7144421231906&q=fargo&days=7&aqi=no&alerts=no"
      );
    },
    {
      select: (data) => {
        return data.data;
      },
    }
  );
};

export const usePokemonInfiniteQuery = () => {
  return useInfiniteQuery(
    ["Pokemon"],
    ({ pageParam: offset = 1 }) =>
      axios.get(
        `http://localhost:8081/api/pokemon?offset=${offset}&pageSize=24`
      ),
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage.data.last) {
          return lastPage.data.pageable.pageNumber + 2;
        }
        return undefined;
      },
      keepPreviousData: true,
    }
  );
};

export const useSinglePokemonQuery = (pokemonId: string) => {
  return useQuery(["id", pokemonId], async () => {
    const response = await axios.get(
      `http://localhost:8081/api/pokemon/${pokemonId}`
    );
    const data = await response.data;
    return data;
  });
};

export const useAbilityInfiniteQuery = (choice: string) => {
  return useInfiniteQuery(
    ["content", choice],
    ({ pageParam: offset = 1 }) =>
      axios.get(
        `http://localhost:8081/api/pokemon/ability?ability=${choice}&offset=${offset}&pageSize=24`
      ),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.data.last) {
          return undefined;
        }
        return lastPage.data.pageable.pageNumber + 2;
      },
      keepPreviousData: true,
    }
  );
};

export const useEggInfiniteQuery = (choice: string) => {
  return useInfiniteQuery(
    ["content", choice],
    ({ pageParam: offset = 1 }) =>
      axios.get(
        `http://localhost:8081/api/pokemon/egg?eggGroup=${choice}&offset=${offset}&pageSize=24`
      ),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.data.last) {
          return undefined;
        }
        return lastPage.data.pageable.pageNumber + 2;
      },
      keepPreviousData: true,
    }
  );
};

export const useSearchInfiniteQuery = (choice: string) => {
  return useInfiniteQuery(
    ["content", choice],
    ({ pageParam: offset = 1 }) =>
      axios.get(
        `http://localhost:8081/api/pokemon/name?name=${choice}&offset=${offset}&pageSize=24`
      ),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.data.last) {
          return undefined;
        }
        return lastPage.data.pageable.pageNumber + 2;
      },
      keepPreviousData: true,
    }
  );
};

export const useTypeInfiniteQuery = (choice: string) => {
  return useInfiniteQuery(
    ["content", choice],
    ({ pageParam: offset = 1 }) =>
      axios.get(
        `http://localhost:8081/api/pokemon/type?type=${choice}&offset=${offset}&pageSize=24`
      ),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.data.last) {
          return undefined;
        }
        return lastPage.data.pageable.pageNumber + 2;
      },
      keepPreviousData: true,
    }
  );
};
