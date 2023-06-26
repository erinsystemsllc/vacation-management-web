import { BsThreeDotsVertical } from "react-icons/bs";
import { DeletePop } from "../Data/globalData";
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

type DeleteRequestProps = {
    state: string;
}

export default function DeleteRequest({ state }: DeleteRequestProps) {
    const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure();
   
  const handleClick = () => {
    toast({
        title: `${DeletePop.deleted}`,
        status: 'success',
        duration: 7000,
        isClosable: true,
      })
  }

  return (
    <>
      <Popover>
        <PopoverTrigger>
          {state == `${DeletePop.state}` ? <PopButton>
            <BsThreeDotsVertical size={20} />
          </PopButton> : <PopButton isDisabled>
            <BsThreeDotsVertical size={20} />
          </PopButton>}
        </PopoverTrigger>
        <Portal>
          <PopoverContent w="fit-content">
            <PopoverArrow />
            <PopoverBody>
              <PopButton onClick={onOpen}>{DeletePop.delete}</PopButton>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{DeletePop.header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {DeletePop.content}
          </ModalBody>
          <ModalFooter display="flex" w="100%" justifyContent="space-evenly">
            <Button
              colorScheme="red"
              mr={3}
              onClick={()=>{onClose(); handleClick()}}
              bg="#DE5F55"
              color="white"
            >
                {DeletePop.delete}
            </Button>
            <Button
              bg="#6A994E"
              color="white"
              onClick={onClose}
              colorScheme="green"
            >
                {DeletePop.cancel}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
