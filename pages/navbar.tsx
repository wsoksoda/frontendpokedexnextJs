import {
  Box,
  Button,
  ButtonGroup,
  ChakraProvider,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Logo } from "./logo";
import { Search2Icon } from "@chakra-ui/icons";

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <ChakraProvider>
      <Box as="section" pb={{ base: "12", md: "24" }}>
        <Box as="nav" bg="bg.surface" boxShadow="sm">
          <Container py={{ base: "4", lg: "5" }}>
            <HStack spacing="10" justify="space-between">
              <Logo />
              {isDesktop ? (
                <Flex justify="space-between" flex="1">
                  <ButtonGroup variant="text" colorScheme="gray" spacing="8">
                    {["Product", "Pricing", "Resources", "Support"].map(
                      (item) => (
                        <Button key={item}>{item}</Button>
                      )
                    )}
                  </ButtonGroup>
                  <HStack spacing="3">
                    <Button variant="tertiary">Sign in</Button>
                    <Button variant="primary">Sign up</Button>
                  </HStack>
                </Flex>
              ) : (
                <IconButton
                  variant="tertiary"
                  icon={<Search2Icon></Search2Icon>}
                  aria-label="Open Menu"
                />
              )}
            </HStack>
          </Container>
        </Box>
      </Box>
    </ChakraProvider>
  );
};
