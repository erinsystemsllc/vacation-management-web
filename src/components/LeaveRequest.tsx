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
import { useMutation, useQuery } from "@tanstack/react-query";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { useToast } from '@chakra-ui/react'

type Manager = {
  id: string,
  firsName: string;
  lastName: string;
};
type LeaveType = {
  typeName : string;
  maxHour : number;
  displayName:string ;

}
export default function LeaveRequest() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [jsonData, setJsonData] = useState("");
  const handleClick = () => {

    toast({
      title: 'Account created.',
      description: "We've created your account for you.",
      status: 'success',
      duration: 9000,
      isClosable: true,
})
  }
  const toast = useToast()
  const { data: leaveTypes } = useQuery({
    queryKey: ["leaveTypes"],
    queryFn: async () => {
      const response = await fetch(
        "http://localhost:8000/api/vacation/leaveType"
      );
      const data = await response.json();
      return data as LeaveType[];
    },
  });
  const { data: managers } = useQuery({
    queryKey: ["managers"],
    queryFn: async () => {
      const response = await fetch(
        "http://localhost:8000/api/user/approvedby?role=Менежер"
      );
      const data = await response.json();
      console.log(data)
      return data as Manager[];
    },
  });
  const saveMutation = useMutation({
    mutationFn: async (jsonData: saveReq) => {
      const response = await fetch(
        "http://localhost:8000/api/vacation/save", {
          method: "POST",
          body: JSON.stringify(jsonData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data)
      return data as Request[];
    },onSuccess: () => {
    }
  })
interface saveReq{
  employeeId: string,
  managerId: string,
  type: string,
  date: Date,
  hour: number
}  
  const getDisplayName = ({ firsName, lastName }: Manager) =>
    `${lastName[0] ?? ""}. ${firsName}`;

    const handleFetch = (event: React.FormEvent) => {
      event.preventDefault()
      const d = new Date();
      const year = d.getFullYear();
      const date1 = d.getDate();
      const m = d.getMonth() + 1;
      const month = m < 10 ? "0" + m : m;
      const hours = d.getHours();
      const minutes = d.getMinutes();
      const seconds = d.getSeconds();
      const currentDate =year + "-" + month + "-" + date1 + "-" + hours + "-" + minutes + "-" + seconds;
      const stringComp = event.target[2].value.localeCompare(currentDate);
      const date = stringComp >= 0 ? event.target[2].value : null;
      const type = event.target[1].value;
      const hour = parseInt(event.target[3].value);
      const managerId = event.target[4].value;
       const token = sessionStorage.getItem('token')
       const typeName = event.target[1].name
      //  const requestedUserId = JSON.parse(token).id;
      // saveMutation.mutate({type, date, hour,managerId})
      console.log({type,hour, date, managerId})
    }

  return (
    <>
      <Button onClick={onOpen} bg="#6A994E" colorScheme="green">
        Чөлөө авах
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />
        <ModalContent as="form" onSubmit={(event: React.FormEvent)=>handleFetch(event)}>
          <ModalHeader as="form" onSubmit={(event: React.FormEvent)=>handleFetch(event)}e="2xl">Чөлөөний хүсэлт</ModalHeader>
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
                {leaveTypes?.map((leaveType)=>{
                  return(
                    <>
                    <option value={`${leaveType.typeName}`}>{leaveType.displayName}</option>
                    </>
                  )
                })}
              </Select>
            </FormControl>
            <FormControl
              my="1.25rem"
              display="grid"
              gridTemplateColumns="50% 50%"
              alignItems="center"
            >
              <FormLabel fontSize="lg">Чөлөө авах огноо:</FormLabel>
              <Input
                type="date"
                size="md"
              />
            </FormControl>
            <FormControl
              my="1.25rem"
              display="grid"
              gridTemplateColumns="50% 50%"
              alignItems="center"
            >
              <FormLabel fontSize="lg">Чөлөө авах цаг:</FormLabel>
              <NumberInput defaultValue={0} min={0} max={20} size="md">
                <NumberInputField/>
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
              <FormLabel fontSize="lg">
                Чөлөөний хүсэлт илгээх менежер:
              </FormLabel>
              <Select variant="outline" size="md">
                <option>Менежер сонгоно уу! </option>
                {managers?.map((manager, index) => (
                  <option key={index} value={manager.id}>
                    {getDisplayName(manager)}
                  </option>
                ))}
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter display="flex" justifyContent="center">
            <Button colorScheme="red" mr={3} onClick={onClose} size="md">
              Болих
            </Button>
            <Button colorScheme="green" bg="#6A994E" size="md" type="submit" onClick={()=>{onClose(), handleClick()}}>
              Хадгалах

            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
