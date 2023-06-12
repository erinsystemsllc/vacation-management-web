// style components
import { Box, Flex, Button, useColorMode } from "@chakra-ui/react";

// react
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Flex
      w="100vw"
      h="3rem"
      justify="space-evenly"
      align="center"
      bg={{ base: "red.600", md: "blue.500" }}
    >
      <Box>
        <Link to="/">Home</Link>
      </Box>
      <Box>
        <Link to="/about">About</Link>
      </Box>
      <Box>
        <Link to="/contact">Contact</Link>
      </Box>
      <Example />
    </Flex>
  );
}

enum Theme {
  Light = "light",
  Dark = "dark",
}

function Example() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === Theme.Light ? Theme.Dark : Theme.Light}
      </Button>
    </header>
  );
}
