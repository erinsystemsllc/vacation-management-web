import { Flex, Button } from "@chakra-ui/react";

export default function Sidebar() {
  return (
    <Flex w="10%" h="100%">
      <Button isActive _active={{bg: "#a7c957", color:"#16400c"}} w="100%" h="5%"  rounded="none">
        <Flex
          fontWeight="semibold"
          justify="start"
          align="center"
          pl="10px"
        >
          Амралт, чөлөө
        </Flex>
      </Button>
    </Flex>
  );
}
