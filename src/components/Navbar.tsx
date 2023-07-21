import { Flex, Box, Link, useColorModeValue, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MotionSmall } from "./motion";

function Navbar() {
  const router = useRouter();

  const firstValue = router.query.firstValue as string;

  const secondValue = router.query.secondValue as string;

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h="16" alignItems="center" justifyContent="space-around">
        <MotionSmall>
          <Box>
            <Link href="/">Pick a Theme</Link>
          </Box>
        </MotionSmall>
        <MotionSmall>
          <Box>
            <Link
              href={`/pokedex?firstValue=${firstValue}&secondValue=${secondValue}`}
            >
              Pokedex
            </Link>
          </Box>
        </MotionSmall>
        <MotionSmall>
          <Box>
            <Link
              href={`/quiz?firstValue=${firstValue}&secondValue=${secondValue}`}
            >
              <Button colorScheme="blue">What Pokemon am I</Button>
            </Link>
          </Box>
        </MotionSmall>
      </Flex>
    </Box>
  );
}

export default Navbar;
