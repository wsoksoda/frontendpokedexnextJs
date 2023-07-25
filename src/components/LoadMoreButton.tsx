import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { MotionBig } from "./motion";

interface Props {
  morePokemon: boolean | undefined;
  fetchNextPokemonPage: () => void;
}

function LoadMoreButton({ morePokemon, fetchNextPokemonPage }: Props) {
  if (morePokemon) {
    return (
      <MotionBig>
        <Box m="2rem">
          <Button onClick={fetchNextPokemonPage}>Load More</Button>
        </Box>
      </MotionBig>
    );
  } else {
    return <></>;
  }
}

export default LoadMoreButton;
