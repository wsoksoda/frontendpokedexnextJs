import { ReactNode } from "react";
import { Box, Flex, Link, Button, useColorModeValue } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

interface navbarProp {
  goBack: () => void;
  goForward: () => void;
}

export default function Navbar(props: navbarProp) {
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box display={["none", null, "block"]}>
            <Button onClick={props.goBack}>
              <ChevronLeftIcon />
            </Button>
          </Box>
          <Box>
            <Link href="http://localhost:3000/?offset=1">Pokedex</Link>
          </Box>
          <Box>
            <Link href={"/advanced"}>Advanced Search</Link>
          </Box>
          <Box>
            <Link href={"/quiz"}>What Pokemon am I</Link>
          </Box>
          <Box display={["none", null, "block"]}>
            <Button onClick={props.goForward}>
              <ChevronRightIcon />
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
