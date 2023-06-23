import { useNavigate } from "react-router-dom";
import { SideBtn } from "../themes/customComponents";
import { Text } from '@chakra-ui/react'

type SideButtonProps = {
    value: string;
    url: string;
  };
  
  export function SideButton({ value, url }: SideButtonProps) {
    const navigate = useNavigate();
    return (
      <>
        <SideBtn
          isActive={location.pathname === url ? true : false}
          onClick={() => navigate(url)}
        >
          <Text textAlign="start" w="100%">
            {value}
          </Text>
        </SideBtn>
      </>
    );
  }