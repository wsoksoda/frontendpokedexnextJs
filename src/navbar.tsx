import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";
import { NavbarProps } from "react-bootstrap";
import { useRouter } from "next/router";

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

interface navbarProp {
  goBack: () => void;
  goForward: () => void;
}

export default function Navbar(props: navbarProp) {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Button onClick={props.goBack}>
            <ChevronLeftIcon />
          </Button>
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link href="http://localhost:3000/?offset=1">Pokedex</Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link href={"/advanced?previous=" + router.asPath}>
                Advanced Search
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button onClick={props.goForward}>
              <ChevronRightIcon />
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
