import React from 'react'
import useLists,{ AbsenceList } from './fetch/useLists';

export default function useInfoSearchFilter() {

  const { setLists, data, lists} = useLists();
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
          if (list.managerName.toLowerCase().includes(value.toLowerCase())) {
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

  return {handleSearchState, handleSearchModifiedDate, handleSearchApprovedBy, handleSearchHour, handleSearchCreatedDate, handleSearchType, lists}
}
