import { Flex, Box, Link, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import React from "react";

interface Props {}

function Navbar(props: Props) {
  const router = useRouter();

  const firstValue = router.query.firstValue as string;

  const secondValue = router.query.secondValue as string;

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h="16" alignItems="center" justifyContent="space-around">
        <motion.div whileHover={{ scale: 1.2 }}>
          <Box>
            <Link href="http://localhost:3000">Pick a Theme</Link>
          </Box>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <Box>
            <Link
              href={`http://localhost:3000/pokedex?firstValue=${firstValue}&secondValue=${secondValue}`}
            >
              Pokedex
            </Link>
          </Box>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <Box>
            <Link
              href={`/advanced?firstValue=${firstValue}&secondValue=${secondValue}`}
            >
              Advanced Search
            </Link>
          </Box>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <Box>
            <Link
              href={`/quiz?firstValue=${firstValue}&secondValue=${secondValue}`}
            >
              What Pokemon am I
            </Link>
          </Box>
        </motion.div>
      </Flex>
    </Box>
  );
}

export default Navbar;
