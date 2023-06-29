import { useMutation } from "@tanstack/react-query";

export default function useDeleteAbsence() {
  const { mutate, isSuccess, isError } = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(
        `http://localhost:8000/api/absence/${id}`,
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
