import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../Data/globalData";

export interface AbsenceList {
  id: string
  createdDate : string,
  date: string,
  employeeId: string,
  employeeFirstName: string,
  employeeLastName: string,
  team: string,
  hour: number,
  managerId: string,
  managerName: string,
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
  const { data, refetch } = useQuery({
    queryKey: ["lists"],
    queryFn: async () => {
      const response = await fetch(
        `${API_URL.main}/api/absence/user/?employeeId=${id}`
      );
      const data = await response.json();
      setLists(data);
      return data;
    },
  });

  // Function to manually trigger revalidation
  const revalidateLists = async () => {
    await refetch();
  };

  return { setLists, data, lists, revalidateLists, refetch };
}
