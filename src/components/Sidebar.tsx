import { Flex} from "@chakra-ui/react";
import { SideTitles } from "../Data/globalData";
import useInfo from "../hooks/useInfo";
import { SideButton } from "./SideButton";

export default function Sidebar() {
  const info = useInfo();
  return (
    <Flex direction="column" w="15rem" h="100%">
      <SideButton value={SideTitles.first.title} url={SideTitles.first.path} />
      {info?.role === "Менежер" ? (
        <>
          <SideButton value={SideTitles.second.title} url={SideTitles.second.path} />
          <SideButton value={SideTitles.third.title} url={SideTitles.third.path} />
        </>
      ) : null}
    </Flex>
  );
}
