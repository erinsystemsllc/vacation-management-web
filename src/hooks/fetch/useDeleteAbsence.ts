import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../Data/globalData";

export default function useDeleteAbsence() {
  const { mutate, isSuccess, isError } = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(
        `${API_URL.main}/api/absence/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      if (data.status !== "SUCCESS") {
        throw new Error("error");
      }
      return data;
    },
  });

  return { mutate, isSuccess, isError };
}
