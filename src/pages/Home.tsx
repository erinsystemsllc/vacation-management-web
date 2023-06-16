
import { Flex } from "@chakra-ui/react";

import Personal from "../components/Personal";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <>
      <Flex w="100%" h="100%">
        <Sidebar />
        <Personal />
      </Flex>
    </>
  );
}
