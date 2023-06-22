import {
  ArrowBackIcon,
  ArrowDownIcon,
  ArrowUpDownIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormLabel,
  FormControl,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";

export default function LeaveReques() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} bg="#6A994E" colorScheme="green">
        Чөлөө авах
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="2xl">Чөлөөний хүсэлт</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl
              display="grid"
              gridTemplateColumns="50% 50%"
              alignItems="center"
            >
              <FormLabel fontSize="xl">Чөлөөний төрөл:</FormLabel>

              <Select variant="outline" size="lg">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>

            <FormControl
              my="1.5rem"
              display="grid"
              gridTemplateColumns="50% 50%"
              alignItems="center"
            >
              <FormLabel fontSize="xl">Чөлөөний авах огноо:</FormLabel>
              <Input type="date" size="lg" />
            </FormControl>

            <FormControl
              my="1.5rem"
              display="grid"
              gridTemplateColumns="50% 50%"
              alignItems="center"
            >
              <FormLabel fontSize="xl">Чөлөө авах цаг:</FormLabel>
              <NumberInput defaultValue={0} min={0} max={20}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <Input my="2rem" placeholder="Өдрөө оруулна уу" isRequired />
          </ModalBody>

          <ModalFooter display="flex" justifyContent="center">
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Болих
            </Button>
            <Button colorScheme="green" bg="#6A994E">
              Хадгалах
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
