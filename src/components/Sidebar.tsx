import { Flex, Button } from "@chakra-ui/react";
import { SideTitles } from "../Data/globalData";

export default function Sidebar() {
  return (
    <Flex w="15%" h="100%">
      <Button isActive _active={{bg: "mainbg", color:"mainclr"}} w="100%" h="5%"  rounded="none">
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
