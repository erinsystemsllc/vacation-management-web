import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { API_URL, User } from "../Data/globalData";



export default function useGetAllUser() {
    const [lists, setLists] = useState<User[]>([])
    const {data, isStale} = useQuery({
        queryKey: ["users"],
        queryFn: async() => {
            const response = await fetch(`${API_URL.main}/api/user/all`)
            const data = await response.json()
            setLists(data)
            return data;
        }
    })

        return {data, setLists, lists, isStale}
}
