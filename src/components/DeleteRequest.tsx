import { BsThreeDotsVertical } from "react-icons/bs";
import { DELETE_PROPS } from "../Data/globalData";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Portal,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  useToast
} from "@chakra-ui/react";
import { PopButton } from "../themes/customComponents";
import useDeleteAbsence from "../hooks/useDeleteAbsence";

type DeleteRequestProps = {
    state: string;
    id: string;
    remove: (id: string) => void;
}

export default function DeleteRequest({ state, id, remove }: DeleteRequestProps) {
    const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {mutate, isSuccess, isError} = useDeleteAbsence();
  const handleClick = () => {
    mutate(id)
    if(isSuccess){
      toast({
        title: `${DELETE_PROPS.deleted}`,
        status: 'success',
        duration: 7000,
        isClosable: true,
      })
    }
  }
  return (
    <>
      <Popover>
        <PopoverTrigger>
          {state == `${DELETE_PROPS.state}` ? <PopButton>
            <BsThreeDotsVertical size={20} />
          </PopButton> : <PopButton isDisabled>
            <BsThreeDotsVertical size={20} />
          </PopButton>}
        </PopoverTrigger>
        <Portal>
          <PopoverContent w="fit-content">
            <PopoverArrow />
            <PopoverBody>
              <PopButton onClick={onOpen}>{DELETE_PROPS.deleteBtn}</PopButton>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{DELETE_PROPS.header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {DELETE_PROPS.content}
          </ModalBody>
          <ModalFooter display="flex" w="100%" justifyContent="space-evenly">
            <Button
              colorScheme="red"
              mr={3}
              onClick={()=>{onClose(); handleClick(); remove(id)}}
              bg="#DE5F55"
              color="white"
            >
                {DELETE_PROPS.deleteBtn}
            </Button>
            <Button
              bg="#6A994E"
              color="white"
              onClick={onClose}
              colorScheme="green"
            >
                {DELETE_PROPS.cancel}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
