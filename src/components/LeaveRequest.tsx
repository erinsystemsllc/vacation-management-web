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
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
type Manager = {
  id: string;
  firstName: string;
  lastName: string;
};
type LeaveType = {
  typeName: string;
  maxHour: number;
  displayName: string;
};
interface RequestForm {
  employeeId: string;
  managerId: string;
  managerName: string;
  type: string;
  date: string;
  hour: number;
}
export default function LeaveRequest() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

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
      return data as Manager[];
    },
  });
  const { data, mutate, isLoading } = useMutation({
    mutationFn: async (data: RequestForm) => {
      await fetch("http://localhost:8000/api/vacation/save", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });
    },
    onSuccess: () => {
      toast({
        title: "Aмжилттай хадгалагдлаа.",
        description: "Чөлөөний хүсэлт илгээгдсэн.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      onClose();
    },
    onError: () => {
      toast({
        title: "Амжилтгүй.",
        description: "Хүсэлт илгээгдсэнгүй.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    },
  });
  const getDisplayName = ({ firstName, lastName }: Manager) =>
    `${lastName[0] ?? ""}. ${firstName}`;
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const type = event.target[1].value;
    const hour = parseInt(event.target[3].value);
    const managerStr = event.target[4].value;
    const manager = JSON.parse(managerStr);
    const managerId = manager.id;
    const managerName = getDisplayName(manager);
    const token = sessionStorage.getItem("token");
    const parsedToken = JSON.parse(token);
    // const employeeId = parsedToken.id;
    const date = event.target[2].value;
    const data = { type, date, hour, managerId, managerName };
    if (hour === 0) {
      toast({
        title: "Алдаа!",
        description: "Чөлөө авах цагаа оруулна уу.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    mutate(data);
  };
  const currentDate = () => new Date().toISOString().slice(0, 10);
  return (
    <>
      <Button onClick={onOpen} bg="#6A994E" colorScheme="green">
        Чөлөө авах
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />
        <ModalContent
          as="form"
          onSubmit={(event: React.FormEvent) => handleSubmit(event)}
        >
          <ModalHeader fontSize="2xl">Чөлөөний хүсэлт</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl
              display="grid"
              gridTemplateColumns="50% 50%"
              alignItems="center"
            >
              <FormLabel fontSize="lg">Чөлөөний төрөл:</FormLabel>
              <Select variant="outline" size="md" required>
                <option value="" disabled selected hidden>
                  Чөлөөний төрөл оруулна уу!
                </option>
                {leaveTypes?.map((leaveType) => {
                  return (
                    <>
                      <option value={`${leaveType.typeName}`}>
                        {leaveType.displayName}
                      </option>
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
                defaultValue={currentDate()}
                size="md"
                min={currentDate()}
              />
            </FormControl>
            <FormControl
              my="1.25rem"
              display="grid"
              gridTemplateColumns="50% 50%"
              alignItems="center"
            >
              <FormLabel fontSize="lg">Чөлөө авах цаг:</FormLabel>
              <NumberInput defaultValue={0} min={0} max={355} size="md">
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
              <FormLabel fontSize="lg">
                Чөлөөний хүсэлт илгээх менежер:
              </FormLabel>
              <Select variant="outline" size="md" required>
                <option value="" disabled selected hidden>
                  Менежер сонгоно уу!
                </option>
                {managers?.map((manager, index) => (
                  <option key={index} value={JSON.stringify(manager)}>
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
