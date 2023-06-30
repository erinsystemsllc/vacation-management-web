import {
  Flex,
  Table,
  Text,
  Tr,
  Thead,
  Th,
  Tbody,
  Td,
  
} from "@chakra-ui/react";
import useLists, { AbsenceList } from "../hooks/useLists";
import { ListInfo } from "../Data/globalData";
import { ExtendedTableContainer, RequestButton,  SearchInput} from "../themes/customComponents"
import DeleteRequest from './DeleteRequest';
import useInfo from "../hooks/useInfo";
import LeaveRequest from "./LeaveRequest";

export default function AbsenceList() {
  const { lists, setLists, data} = useLists();
  const info  = useInfo();
  const handleDelete = (id: string) => {
    setLists(lists.filter((list) => list.id !== id));
  }
  const handleSearchLast = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target).value;

    const found = data.filter((list: AbsenceList) => {
      if (info.lastName.toLowerCase().includes(value.toLowerCase())) {
        return list;
      }
    });

    setLists(found);
    if (value === "") {
      setLists(data);
    }
  };

  const handleSearchFirst = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueFirst = (event.target).value;
    const found = data.filter((list: AbsenceList) => {
      if (info.firstName.toLowerCase().includes(valueFirst.toLowerCase())) {
        return list;
      }
    });

    setLists(found);
    if (valueFirst === "") {
      setLists(data.record.lists);
    }
  };
  const handleSearchTeam = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueFirst = (event.target).value;

    const found = data.filter((list: AbsenceList) => {
      if (info.team.toLowerCase().includes(valueFirst.toLowerCase())) {
        return list;
      }
    });

    setLists(found);
    if (valueFirst === "") {
      setLists(data);
    }
  };

  const handleSearchType = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target).value;

    const found = data.filter((list: AbsenceList) => {
      if (list.type.displayName.toLowerCase().includes(value.toLowerCase())) {
        return list;
      }
    });

    setLists(found);
    if (value === "") {
      setLists(data);
    }
  };

  const handleSearchCreatedDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target).value;

    const found = data.filter((list: AbsenceList) => {
      if (list.createdDate.toLowerCase().includes(value.toLowerCase())) {
        return list;
      }
    });

    setLists(found);
    if (value === "") {
      setLists(data);
    }
  };

  const handleSearchHour = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target).value;
    const number = parseInt(value)
    const found = data.filter((list: AbsenceList) => {
      if (list.hour === number) {
        return list;
      }
    });

    setLists(found);
    if (value === "") {
      setLists(data);
    }
  };

  const handleSearchApprovedBy = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target).value;

    const found = data.filter((list: AbsenceList) => {
      if (list.approvedBy.toLowerCase().includes(value.toLowerCase())) {
        return list;
      }
    });

    setLists(found);
    if (value === "") {
      setLists(data);
    }
  };

  const handleSearchModifiedDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target).value;

    const found = data.filter((list: AbsenceList) => {
      if (list.modifiedDate.toLowerCase().includes(value.toLowerCase())) {
        return list;
      }
    });

    setLists(found);
    if (value === "") {
      setLists(data);
    }
  };

  const handleSearchState = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value= (event.target).value;

    const found = data.filter((list: AbsenceList) => {
      if (list.state.toLowerCase().includes(value.toLowerCase())) {
        return list;
      }
    });

    setLists(found);
    if (value === "") {
      setLists(data);
    }
  };
  //render section
  return (
    <>
      <Flex flexDirection="column" w="85vw" px="2%" py="2.3%">
        <Flex justifyContent="space-between">
          <Text fontSize="28px" as="b" color="personalHeader">
            Чөлөөний түүх
          </Text>
          <LeaveRequest />
        </Flex>
      </Flex>
      <ExtendedTableContainer overflowY="scroll" mx="2rem" my="1rem" overflowX="hidden">
        <Table size="sm" variant="collapse" position="relative">
          <Thead backgroundColor="#A7C957" position='sticky' top={0}>
            <Tr color="#16400C" fontSize="14px">
              <Th>{ListInfo.Num}</Th>
              <Th>{ListInfo.lastName}</Th>
              <Th>{ListInfo.firstName}</Th>
              <Th>{ListInfo.team}</Th>
              <Th>{ListInfo.leaveType}</Th>
              <Th>{ListInfo.createdDate}</Th>
              <Th>{ListInfo.leaveHour}</Th>
              <Th>{ListInfo.approvedBy}</Th>
              <Th>{ListInfo.modifiedDate}</Th>
              <Th>{ListInfo.state}</Th>
              <Th></Th>
            </Tr>
            <Tr>
              <Th></Th>
              <Th>
                <SearchInput
                  type="text"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleSearchLast(event)
                  }
                />
              </Th>
              <Th>
                <SearchInput
                  type="text"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleSearchFirst(event)
                  }
                />
              </Th>
              <Th>
                <SearchInput
                  type="text"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleSearchTeam(event)
                  }
                />
              </Th>
              <Th>
                <SearchInput
                  type="text"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleSearchType(event)
                  }
                />
              </Th>
              <Th>
                <SearchInput
                  type="text"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleSearchCreatedDate(event)
                  }
                />
              </Th>
              <Th>
                <SearchInput
                  type="number"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleSearchHour(event)
                  }
                />
              </Th>
              <Th>
                <SearchInput
                  type="text"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleSearchApprovedBy(event)
                  }
                />
              </Th>
              <Th>
                <SearchInput
                  type="text"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleSearchModifiedDate(event)
                  }
                />
              </Th>
              <Th>
                <SearchInput
                  type="text"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleSearchState(event)
                  }
                />
              </Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {lists?.map((d: AbsenceList, i: number) => {
              return (
                <Tr
                  borderBottom="1px solid #E2E8F0"
                  _last={{ borderBottom: "none" }}
                  key={i}
                >
                  <Td>{i + 1}</Td>
                  <Td textAlign="center">{info?.lastName}</Td>
                  <Td textAlign="center">{info?.firstName}</Td>
                  <Td textAlign="center">{info?.team}</Td>
                  <Td textAlign="center">{d.type.displayName}</Td>
                  <Td textAlign="center">{d.createdDate}</Td>
                  <Td textAlign="center">{d.hour}</Td>
                  <Td textAlign="center">{d.managerName}</Td>
                  <Td textAlign="center">{d.date}</Td>
                  <Td textAlign="center">{d.state}</Td>
                  <Td><DeleteRequest state={d.state} id={d.id} remove={handleDelete}/></Td>
                </Tr>
              );
            })} 
          </Tbody>
        </Table>
      </ExtendedTableContainer>
    </>
  );
}
