import { Flex, Box, Text, InputRightElement } from "@chakra-ui/react";
import { FormControl, InputGroup } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { useState } from "react";
import useLoginForm from "../hooks/fetch/useLoginForm";
import { FormInput, Submit, Form } from "../themes/customComponents";

import { LoginPage } from "../Data/globalData";

export default function Login() {
  const [isOpen, setIsOpen] = useState(false);
  const { handleLogin, loginMutation } = useLoginForm();

  return (
    <>
      <Flex justify="center" align="center" w="100vw" h="100vh">
        <Flex
          bg="loginForm"
          w={{ xl: "30%", lg: "40%", md: "50%", sm: "30em" }}
          h="60%"
          rounded="md"
          justify="center"
          align="center"
          shadow="lg"
        >
          <Form
            as="form"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleLogin(e)}
          >
            <Box
              borderBottom="14px solid"
              fontWeight="bold"
              borderColor="loginHeader"
            >
              <Text fontSize="5xl" color="loginHeader" display="inline">
                {LoginPage.title}
              </Text>
              <Text
                fontSize="5xl"
                fontWeight="bold"
                color="black"
                display="inline"
              >
                {LoginPage.subTitle}
              </Text>
            </Box>

            <FormControl isRequired>
              <FormInput
                type="email"
                variant="flushed"
                placeholder="email address"
              />
            </FormControl>

            <FormControl isRequired>
              <InputGroup>
                <FormInput
                  type={isOpen ? "text" : "password"}
                  variant="flushed"
                  placeholder="password"
                />
                <InputRightElement
                  cursor="pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {!isOpen ? (
                    <ViewIcon w={6} h={6} />
                  ) : (
                    <ViewOffIcon w={6} h={6} />
                  )}
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Submit isLoading={loginMutation.isLoading} type="submit">
              {LoginPage.submit}
            </Submit>
          </Form>
        </Flex>
      </Flex>
    </>
  );
}
