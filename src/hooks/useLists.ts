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
  const token= sessionStorage.getItem("token");
  const email = JSON.parse(token);
  const [lists, setLists] = useState<AbsenceList[]>([]);
  const { data } = useQuery({
    queryKey: ["lists"],
    queryFn: async () => {
      const response = await fetch(
        // `http://localhost:8000/api/absenceList/${email}`
        "http://localhost:8000/api/absenceList/chiluugen.byambaa@erin.systems"
      );
      const data = await response.json();
      setLists(data);
      return data;
    },
  });
  return { setLists, data, lists};
}
