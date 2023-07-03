import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

export interface AbsenceList {
  id: string
  createdDate : string,
  date: string,
  employeeId: string,
  hour: number,
  managerId: string,
  modifiedDate: string,
  state: string,
  type: {
    displayName: string,
    maxHour: number,
    typeName: string
  }
}

// managerId bish manager name avmaar bna

export default function useLists() {
  const token= sessionStorage.getItem("token");
  const parsedToken = token ? JSON.parse(token) : null;
  const id = parsedToken?.id;
  const [lists, setLists] = useState<AbsenceList[]>([]);
  const { data } = useQuery({
    queryKey: ["lists"],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:8000/api/absenceList/${id}`
      );
      const data = await response.json();
      setLists(data);
      return data;
    },
  });
  return { setLists, data, lists };
}
