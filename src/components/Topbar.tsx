import {
  Box,
  Flex,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

import { Logout, HeaderContainer } from "../themes/customComponents";
import { TopTitles } from "../Data/globalData";

export default function Topbar() {
  const navigate = useNavigate();
  interface Profile {
    email: string;
    firstName: string;
    firstWorkDay: string;
    lastName: string;
    password: string;
    position: string;
    team: string;
    role: string;
  }

  const info: Profile | null = sessionStorage.getItem("token")
    ? JSON.parse(sessionStorage.getItem("token") as string)
    : null;
  const firstLetter = info?.firstName?.slice(0, 1);
  const fullName = firstLetter ? firstLetter + "." + info?.lastName : "";

  return (
    <HeaderContainer
    justify="space-between"
    >
      <Image src="src/assets/erin1bless.png" w="11%" />
      <Flex align="center">
        <Box w="6rem">
          <Text noOfLines={1}>{fullName}</Text>
          <Text textAlign="center" color="headerRole">
            {info?.role}
          </Text>
        </Box>
        <Menu>
          <MenuButton>
            <ChevronDownIcon w="icon" h="icon" />
          </MenuButton>
          <Flex justify="center" align="center">
            <Logout>
              <MenuItem
                bg="white"
                onClick={() => {
                  sessionStorage.removeItem("token");
                  navigate("/login");
                }}
              >
                {TopTitles.logout}
              </MenuItem>
            </Logout>
          </Flex>
        </Menu>
      </Flex>
    </HeaderContainer>
  );
}
