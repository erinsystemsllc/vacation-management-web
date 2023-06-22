
import { Flex } from "@chakra-ui/react";

import Personal from "../components/Personal";

import AbsenceList from "../components/AbsenceList";

export default function Home() {
  return (
      <Flex direction="column" w="100%" h="100%">
        <Personal />
        <AbsenceList />
      </Flex>
  );
}
