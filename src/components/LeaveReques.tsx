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

type Manager = {
  firsName: string;
  lastName: string;
};

export default function LeaveReques() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [jsonData, setJsonData] = useState("");


  const { data, isFetching } = useQuery({
    queryKey: ["leaveType"],
    queryFn: async () => {
      const response = await fetch(
        "http://localhost:8000/api/vacation/leaveType"
      );
      const data = await response.json();
      return data;
    },
  });

  const { data: managers } = useQuery({
    queryKey: ["managers"],
    queryFn: async () => {
      const response = await fetch(
        "http://localhost:8000/api/vacation/approvedby?role=Менежер"
      );
      const data = await response.json();
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
      console.log('success')
    }
  })
  


interface saveReq{
  employee: string,
  approvedBy: string,
  leaveType: string,
  requestDate: string,
  leaveHour: number
}  


  const getDisplayName = ({ firsName, lastName }: Manager) =>
    `${lastName[0] ?? ""}. ${firsName}`;

    const handleFetch = (event: React.FormEvent) => {
      event.preventDefault()
      const d = new Date();
      const year = d.getFullYear();
      const date = d.getDate();
      const m = d.getMonth() + 1;
      const month = m < 10 ? "0" + m : m;
      const currentDate = year + "-" + month + "-" + date;
      const stringComp = event.target[2].value.localeCompare(currentDate);
      const requestDate = stringComp >= 0 ? event.target[2].value : null;
      const leaveType = event.target[1].value;
      const leaveHour = parseInt(event.target[3].value);
      const approvedBy = event.target[4].value;
      const token = sessionStorage.getItem('token')
      const employee = JSON.parse(token).id;
      saveMutation.mutate({employee,approvedBy, leaveType, requestDate, leaveHour})
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
                {data?.map((type: string) => {
                  return (
                    <>
                      <option value={type.id}>{type.typeName}</option>
                    </>
                  );
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
                  <option key={index} value={getDisplayName(manager)}>
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
            <Button colorScheme="green" bg="#6A994E" size="md" type="submit">
              Хадгалах
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
