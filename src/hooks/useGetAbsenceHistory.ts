import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { API_URL } from "../Data/globalData";

interface Props {
  isChecked: boolean;
}

export default function useGetAbsenceHistory({ isChecked }: Props) {
  const [absenceList, setAbsenceLists] = useState([]);
  const token = sessionStorage.getItem("token");
  const info = token ? JSON.parse(token) : null;
  const { data, refetch, isFetched } = useQuery({
    queryKey: ["AbsenceHistory"],
    queryFn: async () => {
      const response = await fetch(
        `${API_URL.main}/api/absence/?userId=${!isChecked ? info.id : ""}`
      );
      const data = await response.json();
      return data;
    },
    staleTime: 1000 * 60 * 3,
  });

  useEffect(() => {
    refetch();
    if (isFetched) {
      setAbsenceLists(data);
    }
  }, [isFetched, data, setAbsenceLists, refetch, isChecked]);

  const revalidateLists = async () => {
    await refetch();
  };

  return { data, absenceList, setAbsenceLists, revalidateLists };
}
