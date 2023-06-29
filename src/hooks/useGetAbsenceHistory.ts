import { useQuery } from '@tanstack/react-query';
import useInfo from './useInfo';
import { useState } from 'react';

export default function useGetAbsenceHistory() {
    const info = useInfo();
    const [absenceList, setAbsenceLists] = useState([]);

    const {data} = useQuery({
        queryKey: ['AbsenceHistory'],
        queryFn: async() => {
            const response = await fetch(`http://localhost:8000/api/absence/?userId=${info?.id}`);
            const data = await response.json();
            setAbsenceLists(data);
            return data;
        } 
    })
    const {data: allData} = useQuery({
        queryKey: ['AllAbsenceHistory'],
        queryFn: async()=>{
            const response= await fetch('http://localhost:8000/api/absence/?userId=');
            const data= await response.json();
            return data;
        }
    })

  return {data, absenceList, setAbsenceLists, allData};
}