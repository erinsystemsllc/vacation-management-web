import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { info } from "../utils/Data/Profile";

export default function Personal() {


  return (
    <Flex flexDirection="column" w="100%" px="2%" py="1%">
      <Text fontSize="28px" as="b" color="#386641">Хувийн мэдээлэл</Text>
      <SimpleGrid columns={2} mt="2rem">
        <SimpleGrid columns={2} spacingY="14px" w="35rem">
          <Text as="b">Овог</Text>
          <Text>{info?.firstName}</Text>
          <Text as="b">Нэр:</Text>
          <Text>{info?.lastName}</Text>
          <Text as="b">Цахим хаяг:</Text>
          <Text>{info?.email}</Text>
        </SimpleGrid>
        <SimpleGrid columns={2}>
          <Text  as="b">Ажилд орсон огно:</Text>
          <Text >{info?.firstWorkDay}</Text>
          <Text  as="b">Албан тушаал:</Text>
          <Text >{info?.position}</Text>
          <Text  as="b">Баг:</Text>
          <Text >{info?.team}</Text>
        </SimpleGrid>
      </SimpleGrid>
    </Flex>
  );
}
