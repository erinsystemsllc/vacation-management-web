import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { User } from "../Data/globalData";



export default function useGetAllUser() {
    const [lists, setLists] = useState<User[]>([])
    const {data, isStale} = useQuery({
        queryKey: ["users"],
        queryFn: async() => {
            const response = await fetch('http://localhost:8000/api/user/')
            const data = await response.json()
            setLists(data)
            return data;
        }
    })

        return {data, setLists, lists, isStale}
}
