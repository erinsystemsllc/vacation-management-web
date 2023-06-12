// chack style
import {Flex, Box} from '@chakra-ui/react'
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input
} from '@chakra-ui/react'

export default function Login() {
  return (
    <>
      <Flex justify="center" align="center" w="100vw" h="100vh">
        <Flex bg="RGBA(0, 0, 0, 0.16)" w="25%" h="50%" rounded="md" justify="center" align="center">
          <FormControl>
            <Input placeholder='email address' _placeholder={{color: 'black'}}/>
            <Input placeholder='password' _placeholder={}/>
          </FormControl>
        </Flex>
      </Flex>
    </>
  )
}
