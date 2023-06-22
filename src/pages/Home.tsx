
import { Box } from "@chakra-ui/react";

import Personal from "../components/Personal";
import LeaveReques from "../components/LeaveReques";

export default function Home() {
  return (
      <Box>
        <Personal />
        <LeaveReques/>
      </Box>
  );
}
