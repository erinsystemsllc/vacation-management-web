import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export interface AbsenceList {
  lastName: string;
  firstName: string;
  team: string;
  leaveType: string;
  createdDate: string;
  leaveHour: number;
  approvedBy: string;
  modifiedDate: string;
  state: string;
}

export default function useLists() {
  const token = sessionStorage.getItem("token");
  const parsedToken = JSON.parse(token);
  const id = parsedToken.id;
  const [lists, setLists] = useState<AbsenceList[]>([]);
  const { data } = useQuery({
    queryKey: ["lists"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:8000/api/absence/${id}`);
      const data = await response.json();
      setLists(data);
      return data;
    },
  });
  return { setLists, data, lists };
}
