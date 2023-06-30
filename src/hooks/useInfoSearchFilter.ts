import React from 'react'
import useLists from './useLists';

export default function useSearchFilter() {

  const { lists, setLists, data} = useLists();
    

    const handleSearchLast = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = (event.target).value;
    
        const found = data.filter((list: AbsenceList) => {
          if (info.lastName.toLowerCase().includes(value.toLowerCase())) {
            return list;
          }
        });
    
        setLists(found);
        if (value === "") {
          setLists(data);
        }
      };
    
      const handleSearchFirst = (event: React.ChangeEvent<HTMLInputElement>) => {
        const valueFirst = (event.target).value;
        const found = data.filter((list: AbsenceList) => {
          if (info.firstName.toLowerCase().includes(valueFirst.toLowerCase())) {
            return list;
          }
        });
    
        setLists(found);
        if (valueFirst === "") {
          setLists(data.record.lists);
        }
      };
      const handleSearchTeam = (event: React.ChangeEvent<HTMLInputElement>) => {
        const valueFirst = (event.target).value;
    
        const found = data.filter((list: AbsenceList) => {
          if (info.team.toLowerCase().includes(valueFirst.toLowerCase())) {
            return list;
          }
        });
    
        setLists(found);
        if (valueFirst === "") {
          setLists(data);
        }
      };
    
      const handleSearchType = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = (event.target).value;
    
        const found = data.filter((list: AbsenceList) => {
          if (list.type.displayName.toLowerCase().includes(value.toLowerCase())) {
            return list;
          }
        });
    
        setLists(found);
        if (value === "") {
          setLists(data);
        }
      };
    
      const handleSearchCreatedDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = (event.target).value;
    
        const found = data.filter((list: AbsenceList) => {
          if (list.createdDate.toLowerCase().includes(value.toLowerCase())) {
            return list;
          }
        });
    
        setLists(found);
        if (value === "") {
          setLists(data);
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
    
        setLists(found);
        if (value === "") {
          setLists(data);
        }
      };
    
      const handleSearchApprovedBy = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = (event.target).value;
    
        const found = data.filter((list: AbsenceList) => {
          if (list.approvedBy.toLowerCase().includes(value.toLowerCase())) {
            return list;
          }
        });
    
        setLists(found);
        if (value === "") {
          setLists(data);
        }
      };
    
      const handleSearchModifiedDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = (event.target).value;
    
        const found = data.filter((list: AbsenceList) => {
          if (list.modifiedDate.toLowerCase().includes(value.toLowerCase())) {
            return list;
          }
        });
    
        setLists(found);
        if (value === "") {
          setLists(data);
        }
      };
    
      const handleSearchState = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value= (event.target).value;
    
        const found = data.filter((list: AbsenceList) => {
          if (list.state.toLowerCase().includes(value.toLowerCase())) {
            return list;
          }
        });
    
        setLists(found);
        if (value === "") {
          setLists(data);
        }
      };

  return {handleSearchState, handleSearchModifiedDate, handleSearchApprovedBy, handleSearchHour, handleSearchCreatedDate, handleSearchType, handleSearchTeam, handleSearchFirst, handleSearchLast}
}
