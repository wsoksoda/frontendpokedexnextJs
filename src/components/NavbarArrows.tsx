import { Box, Flex, Link, Button, useColorModeValue } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { MotionSmall } from "./motion";

interface Prop {
  goBack: () => void;
  goForward: () => void;
}

export default function NavbarArrows({ goBack, goForward }: Prop) {
  let router = useRouter();

  const firstValue = router.query.firstValue as string;

  const secondValue = router.query.secondValue as string;

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <MotionSmallBoxButton>
          <Button onClick={goBack}>
            <ChevronLeftIcon />
          </Button>
        </MotionSmallBoxButton>
        <MotionSmallBox>
          <Link href="/">Pick a Theme</Link>
        </MotionSmallBox>
        <MotionSmallBox>
          <Link
            href={`/pokedex?firstValue=${firstValue}&secondValue=${secondValue}`}
          >
            Pokedex
          </Link>
        </MotionSmallBox>
        <MotionSmallBox>
          <Link
            href={`/advanced?firstValue=${firstValue}&secondValue=${secondValue}`}
          >
            Advanced Search
          </Link>
        </MotionSmallBox>
        <MotionSmallBox>
          <Link
            href={`/quiz?firstValue=${firstValue}&secondValue=${secondValue}`}
          >
            What Pokemon am I
          </Link>
        </MotionSmallBox>
        <MotionSmallBoxButton>
          <Button onClick={goForward}>
            <ChevronRightIcon />
          </Button>
        </MotionSmallBoxButton>
      </Flex>
    </Box>
  );
}

const MotionSmallBox = ({ children }: { children?: React.ReactNode }) => (
  <MotionSmall>
    <Box>{children}</Box>
  </MotionSmall>
);

const MotionSmallBoxButton = ({ children }: { children?: React.ReactNode }) => (
  <MotionSmall>
    <Box display={["none", null, "block"]}>{children}</Box>
  </MotionSmall>
);
