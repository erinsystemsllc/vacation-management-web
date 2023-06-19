
import {
  Box,
  Flex,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";


export default function Topbar() {

  const navigate = useNavigate();
  interface Profile{
    email: string,
    firstName: string,
    firstWorkDay: string,
    lastName: string,
    password: string,
    position: string,
    team: string,
    role: string,
  }
  
  const info: Profile | null = sessionStorage.getItem('token') ? JSON.parse(sessionStorage.getItem('token') as string) : null;
const firstLetter = info?.firstName?.slice(0, 1);
const fullName = firstLetter ? firstLetter + "." + info?.lastName : "";
  
  return (
    <Flex
      w="100%"
      border="1px solid #f2f2f2"
      justify="space-between"
      align="center"
      px="2rem"
    >
        <Image src="src/assets/erin1bless.png" w="14%"/>
      <Flex align="center">
        <Box w="5.1rem">
          <Text noOfLines={1}>{fullName}</Text>
          <Text textAlign="center" color="#4D4D4D">{info?.role}</Text>
        </Box>
        <Menu>
          <MenuButton>
            <ChevronDownIcon w="4.5rem" h="4.5rem" />
          </MenuButton>
          <Flex justify="center" align="center">
            <MenuList
              border="none"
              shadow="2xl"
              bg="white"
              boxShadow="1px 11px 8px -1px rgba(74,62,62,0.75);"
              minW="0"
              w="5rem"
            >
              <MenuItem bg="white" onClick={()=>{sessionStorage.removeItem('token'); navigate('/login')}}>Гарах</MenuItem>
            </MenuList>
          </Flex>
        </Menu>
      </Flex>
    </Flex>
  );
}
