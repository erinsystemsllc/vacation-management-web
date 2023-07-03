import useGetAbsenceHistory from './useGetAbsenceHistory';
import { AbsenceList } from './fetch/useLists';

interface Props {
  isChecked: boolean;
}

export default function useHistorySearchFilter({isChecked}: Props) {
  const {data, absenceList, setAbsenceLists} = useGetAbsenceHistory({isChecked});

    const handleSearchLast = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = (event.target).value;
    
        const found = data.filter((list: AbsenceList) => {
          if (list.employeeLastName.toLowerCase().includes(value.toLowerCase())) {
            return list;
          }
        });
    
        setAbsenceLists(found);
        if (value === "") {
          setAbsenceLists(data);
        }
      };
    
      const handleSearchFirst = (event: React.ChangeEvent<HTMLInputElement>) => {
        const valueFirst = (event.target).value;
        const found = data.filter((list: AbsenceList) => {
          if (list.employeeFirstName.toLowerCase().includes(valueFirst.toLowerCase())) {
            return list;
          }
        });
    
        setAbsenceLists(found);
        if (valueFirst === "") {
          setAbsenceLists(data.record.lists);
        }
      };
      const handleSearchTeam = (event: React.ChangeEvent<HTMLInputElement>) => {
        const valueFirst = (event.target).value;
    
        const found = data.filter((list: AbsenceList) => {
          if (list.team.toLowerCase().includes(valueFirst.toLowerCase())) {
            return list;
          }
        });
    
        setAbsenceLists(found);
        if (valueFirst === "") {
          setAbsenceLists(data);
        }
      };
    
      const handleSearchType = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = (event.target).value;
    
        const found = data.filter((list: AbsenceList) => {
          if (list.type.displayName.toLowerCase().includes(value.toLowerCase())) {
            return list;
          }
        });
    
        setAbsenceLists(found);
        if (value === "") {
          setAbsenceLists(data);
        }
      };
    
      const handleSearchCreatedDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = (event.target).value;
    
        const found = data.filter((list: AbsenceList) => {
          if (list.createdDate.toLowerCase().includes(value.toLowerCase())) {
            return list;
          }
        });
    
        setAbsenceLists(found);
        if (value === "") {
          setAbsenceLists(data);
        }
      };
    
      const handleSearchHour = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = (event.target).value;
        const number = parseInt(value)
        const found = data.filter((list: AbsenceList) => {
          if (list.hour === number) {
            return list;
          }
        });
    
        setAbsenceLists(found);
        if (value === "") {
          setAbsenceLists(data);
        }
      };
    
      const handleSearchApprovedBy = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = (event.target).value;
    
        const found = data.filter((list: AbsenceList) => {
          if (list.managerName.toLowerCase().includes(value.toLowerCase())) {
            return list;
          }
        });
    
        setAbsenceLists(found);
        if (value === "") {
          setAbsenceLists(data);
        }
      };
    
      const handleSearchModifiedDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = (event.target).value;
    
        const found = data.filter((list: AbsenceList) => {
          if (list.date.toLowerCase().includes(value.toLowerCase())) {
            return list;
          }
        });
    
        setAbsenceLists(found);
        if (value === "") {
          setAbsenceLists(data);
        }
      };
    
      const handleSearchState = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value= (event.target).value;
    
        const found = data.filter((list: AbsenceList) => {
          if (list.state.toLowerCase().includes(value.toLowerCase())) {
            return list;
          }
        });
    
        setAbsenceLists(found);
        if (value === "") {
          setAbsenceLists(data);
        }
      };
  return {handleSearchState, absenceList, handleSearchModifiedDate, handleSearchApprovedBy, handleSearchHour, handleSearchCreatedDate, handleSearchType, handleSearchTeam, handleSearchFirst, handleSearchLast}
}
