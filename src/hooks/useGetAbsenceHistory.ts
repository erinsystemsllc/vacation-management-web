import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { API_URL } from '../Data/globalData';

export default function useGetAbsenceHistory() {
    const [absenceList, setAbsenceLists] = useState([]);
    const info = JSON.parse(sessionStorage.getItem('token'));
    const {data} = useQuery({
        queryKey: ['AbsenceHistory'],
        queryFn: async() => {
            const response = await fetch(`${API_URL.main}/api/absence/?userId=${info?.id}`);
            const data = await response.json();
            setAbsenceLists(data);
            return data;
        } 
    })

    const {data: allData} = useQuery({
        queryKey: ['AbsenceAllHistory'],
        queryFn: async() => {
            const response = await fetch(`${API_URL.main}/api/absence/?userId=`);
            const data = await response.json();
            return data;
        } 
    })

  return {data, absenceList, setAbsenceLists, allData};
}