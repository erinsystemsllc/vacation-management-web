import {
  Box,
  Checkbox,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Tr,
  Text,
  Thead,
  CheckboxGroup,
} from "@chakra-ui/react";
import {
  ExtendedTableContainer,
  InputStyle,
  TextHeader,
} from "../themes/customComponents";
import DeleteRequest from "../components/DeleteRequest";
import useGetAbsenceHistory from "../hooks/useGetAbsenceHistory";
import { useState } from "react";

export default function History() {

  const {data, absenceList, setAbsenceLists, allData} = useGetAbsenceHistory();
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckBox = () => {
      if(isChecked){
        setAbsenceLists(data)
        setIsChecked(!isChecked)
      }else{
        setAbsenceLists(allData)
        setIsChecked(!isChecked)
      }
  }

  return (
    <Flex direction="column">
      <Flex direction="column" my="3rem" mx="3rem">
        <Text color="personalHeader" fontSize="3xl" fontWeight="bold">
          sad
        </Text>
          <Flex justifyContent="center">
            <CheckboxGroup border="1px solid green" rounded="lg" colorScheme="green" size="lg">
            <Text>Бүх хүсэлтийг харах</Text>
            <Checkbox onChange={()=>handleCheckBox()}/>
            </CheckboxGroup>
          </Flex>
        <ExtendedTableContainer overflowY="scroll" overflowX="hidden" my="3rem">
          <Table size="sm" variant="collapse" position="relative">
            <Thead position="sticky" top={0}>
              <Tr bg="mainBackground">
                <Th>
                  <TextHeader>#</TextHeader>
                </Th>
                <Th>
                  <TextHeader>Овог</TextHeader>
                </Th>
                <Th>
                  <TextHeader>Нэр</TextHeader>
                </Th>
                <Th>
                  <TextHeader>Баг</TextHeader>
                </Th>
                <Th>
                  <TextHeader>Төрөл</TextHeader>
                </Th>
                <Th>
                  <TextHeader>Үүссэн огноо</TextHeader>
                </Th>
                <Th>
                  <TextHeader>Авсан цаг</TextHeader>
                </Th>
                <Th>
                  <TextHeader>Батлах менежер</TextHeader>
                </Th>
                <Th>
                  <TextHeader>Авсан огноо</TextHeader>
                </Th>
                <Th>
                  <TextHeader>Төлөв</TextHeader>
                </Th>
                <Th></Th>
              </Tr>
              <Tr bg="mainBackground">
                <Th></Th>
                <Th>
                  <InputStyle />
                </Th>
                <Th>
                  <InputStyle />
                </Th>
                <Th>
                  <InputStyle />
                </Th>
                <Th>
                  <InputStyle />
                </Th>
                <Th>
                  <InputStyle />
                </Th>
                <Th>
                  <InputStyle />
                </Th>
                <Th>
                  <InputStyle />
                </Th>
                <Th>
                  <InputStyle />
                </Th>
                <Th>
                  <InputStyle />
                </Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                absenceList.map((list: any, index: number) => {
                  return(
                    <Tr
                borderBottom="2px solid #f3f6f9"
                _last={{ borderBottom: "none" }}
              >
                <Td>{index + 1}</Td>
                <Td textAlign="center">{list.employeeId}</Td>
                <Td textAlign="center">{list.employeeId}</Td>
                <Td textAlign="center">{list.employeeId}</Td>
                <Td textAlign="center">{list.type.displayName}</Td>
                <Td textAlign="center">{list.createdDate}</Td>
                <Td textAlign="center">{list.hour}</Td>
                <Td textAlign="center">{list.managerName}</Td>
                <Td textAlign="center">{list.date}</Td>
                <Td textAlign="center">{list.state}</Td>
                <Td textAlign="center">
                  <DeleteRequest state={list.state}/>
                </Td>
              </Tr>
                  )
                })
              }
            </Tbody>
          </Table>
        </ExtendedTableContainer>
      </Flex>
    </Flex>
  );
}
