import { Flex, Table, Thead, Tbody, Tr, Th, Td, Text } from "@chakra-ui/react";
import { EmployeeInfo, User } from "../Data/globalData";
import useSearchEmployee from "../hooks/useSearchEmployee";


import {
  TextHeader,
  InputStyle,
  ExtendedTableContainer,
} from "../themes/customComponents";
import React from "react";
import DeleteRequest from '../components/DeleteRequest';

export default function Info() {

  const {searchByLastName, searchByFirstName, searchByEmail,searchByRole, searchByPosition, searchByFirstWork, searchByTeam, lists} = useSearchEmployee();
  const handleDelete = () => {
    window.location.reload();
  }

  return (
    <Flex direction="column" my="3rem" mx="3rem">
      <Text color="personalHeader" fontSize="3xl" fontWeight="bold">
        {EmployeeInfo.header}
      </Text>
      <ExtendedTableContainer overflowY="scroll" my="3rem">
        <Table size="sm" variant="collapse" position="relative">
          <Thead position="sticky" top={0}>
            <Tr bg="mainBackground">
              <Th>
                <TextHeader>{EmployeeInfo.hashTag}</TextHeader>
              </Th>
              <Th>
                <TextHeader>{EmployeeInfo.firstName}</TextHeader>
              </Th>
              <Th>
                <TextHeader>{EmployeeInfo.lastName}</TextHeader>
              </Th>
              <Th>
                <TextHeader>{EmployeeInfo.email}</TextHeader>
              </Th>
              <Th>
                <TextHeader>{EmployeeInfo.role}</TextHeader>
              </Th>
              <Th>
                <TextHeader>{EmployeeInfo.team}</TextHeader>
              </Th>
              <Th>
                <TextHeader>{EmployeeInfo.position}</TextHeader>
              </Th>
              <Th>
                <TextHeader>{EmployeeInfo.firstWorkDay}</TextHeader>
              </Th>
              <Th></Th>
            </Tr>
            <Tr bg="mainBackground">
              <Th></Th>
              <Th>
                <InputStyle onChange={(event: React.ChangeEvent<HTMLInputElement>)=>searchByLastName(event)} />
              </Th>
              <Th>
                <InputStyle onChange={(event: React.ChangeEvent<HTMLInputElement>)=>searchByFirstName(event)}/>
              </Th>
              <Th>
                <InputStyle onChange={(event: React.ChangeEvent<HTMLInputElement>)=>searchByEmail(event)}/>
              </Th>
              <Th>
                <InputStyle onChange={(event: React.ChangeEvent<HTMLInputElement>)=>searchByRole(event)}/>
              </Th>
              <Th>
                <InputStyle onChange={(event: React.ChangeEvent<HTMLInputElement>)=>searchByTeam(event)}/>
              </Th>
              <Th>
                <InputStyle onChange={(event: React.ChangeEvent<HTMLInputElement>)=>searchByPosition(event)}/>
              </Th>
              <Th>
                <InputStyle onChange={(event: React.ChangeEvent<HTMLInputElement>)=>searchByFirstWork(event)}/>
              </Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {lists?.map((user: User, index: number) => {
              return (
                <Tr
                key={user.id}
                  borderBottom="2px solid #f3f6f9"
                  _last={{ borderBottom: "none" }}
                >
                  <Td>{index+1}</Td>
                  <Td textAlign="center">{user.lastName}</Td>
                  <Td textAlign="center">{user.firstName}</Td>
                  <Td textAlign="center">{user.email}</Td>
                  <Td textAlign="center">{user.role}</Td>
                  <Td textAlign="center">{user.team}</Td>
                  <Td textAlign="center">{user.position}</Td>
                  <Td textAlign="center">{user.firstWorkDay}</Td>
                  <Td textAlign="center">
                    <DeleteRequest state="null" id={user.id} remove={handleDelete}/>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </ExtendedTableContainer>
    </Flex>
  );
}

export const MoreVert = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="40"
      viewBox="0 -960 960 960"
      width="40"
    >
      {" "}
      <path d="M480.465-119.667q-30.465 0-51.131-21.013t-20.666-50.52q0-29.433 20.608-51.283 20.608-21.849 50.259-21.849 30.465 0 51.131 21.78t20.666 51.166q0 29.386-20.558 50.552-20.558 21.167-50.309 21.167Zm0-289.001q-30.465 0-51.131-20.608t-20.666-50.259q0-30.465 20.608-51.131t50.259-20.666q30.465 0 51.131 20.558t20.666 50.309q0 30.465-20.558 51.131t-50.309 20.666Zm0-287q-30.465 0-51.131-21.489t-20.666-51.666q0-30.177 20.608-51.177 20.608-20.999 50.259-20.999 30.465 0 51.131 21.056 20.666 21.057 20.666 51.026 0 30.381-20.558 51.815-20.558 21.434-50.309 21.434Z" />
    </svg>
  );
};
