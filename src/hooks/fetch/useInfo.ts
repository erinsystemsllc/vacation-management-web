import { useEffect, useState } from "react";

interface Profile{
    id: string,
    email: string,
    firstName: string,
    firstWorkDay: string,
    lastName: string,
    password: string,
    position: string,
    team: string,
    role: string,
}
export default interface LeaveRequest{
    id?: any | null,
    leaveType: string,
    leaveHour: number,
    requestDate: Date | null,
    createdDate: Date | null,
    approvedBy: string,
}



export default function useInfo() {
    const [info, setInfo] = useState<Profile | null>(null);
    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            setInfo(JSON.parse(sessionStorage.getItem('token') as string));
        }
    }, []);
    return info;
}