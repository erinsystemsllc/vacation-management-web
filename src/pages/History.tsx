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
import { ABSENCE_HISTORY } from "../Data/globalData";
import { useState } from "react";

export default function History() {

  const {data, absenceList, setAbsenceLists, allData} = useGetAbsenceHistory();
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckBox = () => {
    if(isChecked){
      setAbsenceLists(data)
    }else{
      setAbsenceLists(allData)
    }
    setIsChecked(!isChecked)
  }


  return (
    <Flex direction="column" w="100vw">
      <Flex direction="column" my="3rem" mx="3rem">
        <Text color="personalHeader" fontSize="3xl" fontWeight="bold">
          {ABSENCE_HISTORY.header}
        </Text>
          <Flex justifyContent="end"  w="90%">
            <CheckboxGroup border="1px solid green" rounded="lg" colorScheme="green" size="lg">
            <Text color="mainColor" fontSize="xl" mx="12px">{ABSENCE_HISTORY.checkBox}</Text>
            <Checkbox onChange={()=>handleCheckBox()}/>
            </CheckboxGroup>
          </Flex>
          </Flex>

        <ExtendedTableContainer overflowY="scroll" mb="3rem" mx="3rem">
          <Table size="sm" variant="collapse" position="relative">
            <Thead position="sticky" top={0}>
              <Tr bg="mainBackground">
                <Th>
                  <TextHeader>{ABSENCE_HISTORY.orderHeader}</TextHeader>
                </Th>
                <Th>
                  <TextHeader>{ABSENCE_HISTORY.lastNameHeader}</TextHeader>
                </Th>
                <Th>
                  <TextHeader>{ABSENCE_HISTORY.firstNameHeader}</TextHeader>
                </Th>
                <Th>
                  <TextHeader>{ABSENCE_HISTORY.teamHeader}</TextHeader>
                </Th>
                <Th>
                  <TextHeader>{ABSENCE_HISTORY.typeHeader}</TextHeader>
                </Th>
                <Th>
                  <TextHeader>{ABSENCE_HISTORY.createdDateHeader}</TextHeader>
                </Th>
                <Th>
                  <TextHeader>{ABSENCE_HISTORY.hourHeader}</TextHeader>
                </Th>
                <Th>
                  <TextHeader>{ABSENCE_HISTORY.managerNameHeader}</TextHeader>
                </Th>
                <Th>
                  <TextHeader>{ABSENCE_HISTORY.dateHeader}</TextHeader>
                </Th>
                <Th>
                  <TextHeader>{ABSENCE_HISTORY.stateHeader}</TextHeader>
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
                    key={index+1}
                borderBottom="2px solid #f3f6f9"
                _last={{ borderBottom: "none" }}
              >
                <Td>{index + 1}</Td>
                <Td textAlign="center">{list.employeeLastName}</Td>
                <Td textAlign="center">{list.employeeFirstName}</Td>
                <Td textAlign="center">{list.team}</Td>
                <Td textAlign="center">{list.type.displayName}</Td>
                <Td textAlign="center">{list.createdDate}</Td>
                <Td textAlign="center">{list.hour}</Td>
                <Td textAlign="center">{list.managerName}</Td>
                <Td textAlign="center">{list.date}</Td>
                <Td textAlign="center">{list.state}</Td>
                <Td textAlign="center">
                  <DeleteRequest/>
                </Td>
              </Tr>
                  )
                })
              }
            </Tbody>
          </Table>
        </ExtendedTableContainer>
      </Flex>
  );
}
