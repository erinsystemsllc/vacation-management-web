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
import { LEAVE_REQUEST } from "../Data/globalData";
import useLeaveRequest from "../hooks/fetch/useLeaveRequest";

export type Manager = {
  id: string;
  firstName: string;
  lastName: string;
};

export interface RequestForm {
  type: string | null;
  date: string | null;
  hour: number;
  managerId: string;
  managerName: string;
  employeeId: string;
  employeeFirstName: string;
  employeeLastName: string;
  team: string;
}
export interface LeaveRequestProps {
  onLeaveRequest: () => void;
}
export default function LeaveRequest({ onLeaveRequest }: LeaveRequestProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { managers, leaveTypes, mutate } = useLeaveRequest({ onClose });
  const toast = useToast();

  const getDisplayName = ({ firstName, lastName }: Manager) =>
    `${lastName[0] ?? ""}. ${firstName}`;
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const TypeElement = event.currentTarget[1] as HTMLInputElement;
    const DateElement = event.currentTarget[2] as HTMLInputElement;
    const HourElement = event.currentTarget[3] as HTMLInputElement;
    const ManagerElement = event.currentTarget[4] as HTMLInputElement;
    const managerStr = ManagerElement.value;
    const type = TypeElement.value;
    const hour = parseInt(HourElement.value);
    const manager = managerStr ? JSON.parse(managerStr) : null;
    const managerId = manager.id;
    const managerName = getDisplayName(manager);
    const tokenString = sessionStorage.getItem("token");
    const token = tokenString ? JSON.parse(tokenString) : null;
    const employeeId = token?.id;
    const employeeFirstName = token.firstName;
    const employeeLastName = token.lastName;
    const team = token.team;
    const date = DateElement.value;

    const data: RequestForm = {
      type,
      date,
      hour,
      managerId,
      managerName,
      employeeId,
      employeeFirstName,
      employeeLastName,
      team,
    };

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
    onLeaveRequest();
  };
  const currentDate = () => new Date().toISOString().slice(0, 10);
  return (
    <>
      <Button onClick={onOpen} bg="#6A994E" colorScheme="green">
        {LEAVE_REQUEST.leaveRequestBtn}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />
        <ModalContent
          as="form"
          onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
            handleSubmit(event)
          }
        >
          <ModalHeader fontSize="2xl">{LEAVE_REQUEST.header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl
              display="grid"
              gridTemplateColumns="50% 50%"
              alignItems="center"
            >
              <FormLabel fontSize="lg">{LEAVE_REQUEST.leaveType}</FormLabel>
              <Select variant="outline" size="md" required defaultValue="">
                <option disabled hidden value="">
                  {LEAVE_REQUEST.leaveTypePlaceholder}
                </option>
                {leaveTypes?.map((leaveType) => {
                  return (
                    <option key={leaveType.typeName} value={leaveType.typeName}>
                      {leaveType.displayName}
                    </option>
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
              <FormLabel fontSize="lg">{LEAVE_REQUEST.leaveDate}</FormLabel>
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
              <FormLabel fontSize="lg">{LEAVE_REQUEST.leaveHour}</FormLabel>
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
                {LEAVE_REQUEST.leaveRequestManager}
              </FormLabel>
              <Select variant="outline" size="md" required defaultValue="">
                <option value="" disabled hidden>
                  {LEAVE_REQUEST.leaveRequestManagerPlaceholder}
                </option>
                {managers?.map((manager) => (
                  <option key={manager.id} value={JSON.stringify(manager)}>
                    {getDisplayName(manager)}
                  </option>
                ))}
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter display="flex" justifyContent="center">
            <Button colorScheme="red" mr={3} onClick={onClose} size="md">
              {LEAVE_REQUEST.cancelbtn}
            </Button>
            <Button colorScheme="green" bg="#6A994E" size="md" type="submit">
              {LEAVE_REQUEST.submitBtn}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
