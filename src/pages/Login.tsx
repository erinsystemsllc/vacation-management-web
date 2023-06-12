// chack style
import { Flex, Box, Button, Text, useToast } from "@chakra-ui/react";
import {
  FormControl,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import {ViewIcon, ViewOffIcon} from '@chakra-ui/icons'
import style from '../styles/Login.module.css'

import { useState } from "react";

export enum Style {
  placeHolder = '#6d6d6d',
  mainColor = '#317334',
  headerColor = '#30804b'
}

enum loginErr {
  email = 'There is no such email',
  passLen = 'password must be greater than 8',
  passMatch = 'password do not match'
}


export default function Login() {

  const [isOpen, setIsOpen] = useState(false);

  const toast = useToast()

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const tempEmail = 't.erdemee@gmail.com'
    const tempPass = '123456789'
    const email = e.target[0].value
    const password = e.target[1].value
    if(email !== tempEmail){
      toast({
        title: loginErr.email,
        status: 'error',
        isClosable: true,
      })
    }
    else if(password.length <= 8){
      toast({
        title: loginErr.passLen,
        status: 'error',
        isClosable: true,
      })
    }
    else if(password !== tempPass){
      toast({
        title: loginErr.passMatch,
        status: 'error',
        isClosable: true,
      })
    }
  }


  return (
    <>
      <Flex justify="center" align="center" w="100vw" h="100vh">
        <Flex
          bg="RGBA(0, 0, 0, 0.10)"
          w={{xl: '30%', lg: '40%', md: '50%', sm: '30em'}}
          h="60%"
          rounded="md"
          justify="center"
          align="center"
          shadow="lg"
        >
          <form className={style.form} onSubmit={(e: React.FormEvent<HTMLFormElement>)=>handleLogin(e)}>
              <Box borderBottom="14px solid" fontWeight="bold" borderColor={Style.headerColor}>
                <Text fontSize="5xl" color={Style.headerColor} display="inline">
                  Erin
                </Text>
                <Text fontSize="5xl" fontWeight="bold" color="black" display="inline">
                  Systems
                </Text>
              </Box>

              <FormControl isRequired>
                <Input
                  type="email"
                  variant="flushed"
                  placeholder="email address"
                  _placeholder={{ color: Style.placeHolder }}
                  borderBottom={`5px solid ${Style.placeHolder}`}
                  p="12px"
                />
              </FormControl>

              <FormControl isRequired position="relative">
                <Input
                  type={isOpen ? "text" : "password"}
                  variant="flushed"
                  placeholder="password"
                  _placeholder={{ color: Style.placeHolder }}
                  borderBottom={`5px solid ${Style.placeHolder}`}
                  p="12px"
                />
                <FormHelperText
                  cursor="pointer"
                  position="absolute"
                  top="-1"
                  right={4}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {!isOpen ? <ViewIcon w={6} h={6}/> : <ViewOffIcon w={6} h={6}/>} 
                </FormHelperText>
              </FormControl>

              <Button
                w="40%"
                fontSize="md"
                p="1.5rem"
                type="submit"
                bg={Style.mainColor}
                rounded="xl"
                color="white"
                _hover={{ backgroundColor: "green.500", color: "gray.300" }}
              >
                Нэвтрэх
              </Button>
          </form>
        </Flex>
      </Flex>
    </>
  );
}
