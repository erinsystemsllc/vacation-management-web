import { Flex, Button } from "@chakra-ui/react";
import { SideTitles } from "../Data/globalData";

export default function Sidebar() {
  return (
    <Flex w="12.5vw" h="100%">
      <Button isActive _active={{bg: "mainBackground", color:"mainColor"}} w="100%" h="6%"  rounded="none">
        <Flex
          fontWeight="semibold"
          justify="start"
          align="center"
        >
          {SideTitles.first}
        </Flex>
      </Button>
    </Flex>
  );
}
