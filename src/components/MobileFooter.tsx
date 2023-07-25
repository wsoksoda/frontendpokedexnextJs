import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useColorModeValue, Flex, Box, Button } from "@chakra-ui/react";

interface Props {
  goBack: () => void;
  goForward: () => void;
}

function MobileFooter({ goBack, goForward }: Props) {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        as="footer"
        position="fixed"
        left="0"
        bottom="0"
        w="100%"
      >
        <Button onClick={goBack}>
          <ChevronLeftIcon />
        </Button>
        <Button onClick={goForward}>
          <ChevronRightIcon />
        </Button>
      </Flex>
    </Box>
  );
}

export default MobileFooter;
