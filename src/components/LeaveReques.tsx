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
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useDisclosure } from "@chakra-ui/react";

type Manager = {
  firsName: string;
  lastName: string;
}
    
export default function LeaveReques() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const {data, isFetching} = useQuery({
    queryKey: ["leaveType"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8000/api/vacation/leaveType")
      const data = response.json()
      return data;
    }
  })

  const {data: managers} = useQuery({
    queryKey: ["managers"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8000/api/vacation/manager?role=Менежер")
      const data = await response.json()
      return data as Manager[];
    }
  })
    
  const getDisplayName = ({firsName, lastName}: Manager) => `${lastName[0] ?? ""}. ${firsName}`;

  return (
    <>
      <Button onClick={onOpen} bg="#6A994E" colorScheme="green">
        Чөлөө авах
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader  fontSize="2xl">Чөлөөний хүсэлт</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl 
              display="grid"
              gridTemplateColumns="50% 50%"
              alignItems="center"
              
            >
              <FormLabel fontSize="lg">Чөлөөний төрөл:</FormLabel>
              
              <Select variant="outline" size="md">
              <option>Чөлөөний төрөл оруулна уу! </option>
                {
                  data?.map((type: string)=>
                  {
                    return(
                      <>
                        <option value={type}>{type}</option>
                      </>
                    )
                  })
                }
              </Select>
            </FormControl>

            <FormControl
              my="1.25rem"
              display="grid"
              gridTemplateColumns="50% 50%"
              alignItems="center"
            >
              <FormLabel fontSize="lg">Чөлөө авах огноо:</FormLabel>
              <Input type="date" size="md" />
            </FormControl>

            <FormControl
              my="1.25rem"
              display="grid"
              gridTemplateColumns="50% 50%"
              alignItems="center"
            >
              <FormLabel fontSize="lg">Чөлөө авах цаг:</FormLabel>
              <NumberInput defaultValue={0} min={0} max={20} size="md">
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl
              display="grid"
              gridTemplateColumns="50% 50%"
              alignItems="center"
            >
              <FormLabel fontSize="lg">Чөлөөний хүсэлт илгээх менежер:</FormLabel>
              <Select variant="outline" size="md">
              <option>Менежер сонгоно уу! </option>
                {
                  managers?.map((manager, index) => (
                    <option key={index} value={manager.lastName}>{getDisplayName(manager)}</option>
                  ))
                }
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter display="flex" justifyContent="center">
            <Button colorScheme="red" mr={3} onClick={onClose} size="md">
              Болих
            </Button>
            <Button colorScheme="green" bg="#6A994E" size="md">
              Хадгалах
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
