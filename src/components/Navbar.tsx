import {
  Box,
  Flex,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

enum Pro {
  name = "С.Нямхүү",
  position = "Эрхлэгч",
}

export default function Navbar() {
  return (
    <Flex
      w="100%"
      border="1px solid #f2f2f2"
      justify="space-between"
      align="center"
      px="2rem"
    >
      <Flex justify="center" align="center">
        <Image src="src/assets/erin-logo.png" w="4rem" h="4rem" />
        <Text fontWeight="extrabold" fontSize="24px" ml="1rem">
          Erin Systems
        </Text>
      </Flex>
      <Flex align="center">
        <Box w="5rem">
          <Text noOfLines={1}>{Pro.name}</Text>
          <Text color="#4D4D4D">{Pro.position}</Text>
        </Box>
        <Menu>
          <MenuButton>
            <ChevronDownIcon w="4.5rem" h="4.5rem" />
          </MenuButton>
          <Flex justify="center" align="center">
            <MenuList
              border="none"
              shadow="2xl"
              bg="white"
              boxShadow="1px 11px 8px -1px rgba(74,62,62,0.75);"
              minW="0"
              w="5rem"
            >
              <MenuItem bg="white">Гарах</MenuItem>
            </MenuList>
          </Flex>
        </Menu>
      </Flex>
    </Flex>
  );
}
