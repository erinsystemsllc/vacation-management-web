import { useMutation, useQuery } from "@tanstack/react-query";
import { API_URL } from "../../Data/globalData";
import { useToast } from "@chakra-ui/react";
import { RequestForm, Manager } from "../../components/LeaveRequest";
import { LEAVE_RESPONSE } from "../../Data/globalData";

type LeaveType = {
  typeName: string;
  maxHour: number;
  displayName: string;
};

export default function useLeaveRequest({ onClose }: { onClose: () => void }) {
  const toast = useToast();
  const { data: leaveTypes } = useQuery({
    queryKey: ["leaveTypes"],
    queryFn: async () => {
      const response = await fetch(`${API_URL.main}/api/absence/leaveType`);
      const data = await response.json();
      return data as LeaveType[];
    },
  });
  const { data: managers } = useQuery({
    queryKey: ["managers"],
    queryFn: async () => {
      const response = await fetch(
        `${API_URL.main}/api/user/approvedby?role=Менежер`
      );
      const data = await response.json();
      return data as Manager[];
    },
  });
  const { mutate } = useMutation({
    mutationFn: async (data: RequestForm) => {
      await fetch(`${API_URL.main}/api/absence/save`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });
    },
    onSuccess: () => {
      toast({
        title: `${LEAVE_RESPONSE.onSuccess.title}`,
        description: `${LEAVE_RESPONSE.onSuccess.description}`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      onClose();
    },
    onError: () => {
      toast({
        title: `${LEAVE_RESPONSE.onError.title}`,
        description: `${LEAVE_RESPONSE.onError.description}`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    },
  });
  return { leaveTypes, managers, mutate };
}
