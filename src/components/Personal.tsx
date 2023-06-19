import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import useInfo from '../hooks/useInfo'
import { PersonalInfo } from "../Data/globalData";

export default function Personal() {

  const info = useInfo()

  return (
    <Flex flexDirection="column" w="100%" px="2%" py="0.6%">
      <Text fontSize="28px" as="b" color="pheader">Хувийн мэдээлэл</Text>
      <SimpleGrid columns={2} mt="2rem">
        <SimpleGrid columns={2} spacingY="14px" templateColumns="0.4fr 1fr">
          <Text as="b">{PersonalInfo.fname}</Text>
          <Text>{info?.firstName}</Text>
          <Text as="b">{PersonalInfo.lname}</Text>
          <Text>{info?.lastName}</Text>
          <Text as="b">{PersonalInfo.email}</Text>
          <Text>{info?.email}</Text>
        </SimpleGrid>
        <SimpleGrid columns={2} spacingY="14px">
          <Text  as="b">{PersonalInfo.firstWorkDay}</Text>
          <Text >{info?.firstWorkDay}</Text>
          <Text  as="b">{PersonalInfo.position}</Text>
          <Text >{info?.position}</Text>
          <Text  as="b">{PersonalInfo.team}</Text>
          <Text >{info?.team}</Text>
        </SimpleGrid>
      </SimpleGrid>
    </Flex>
  );
}
