import {User} from '../Data/globalData'
import useGetAllUser from "./fetch/useGetAllUser";

export default function useSearchEmployee() {
  const { data, setLists, lists } = useGetAllUser();

  const searchByLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const found = data.filter((employee: User) => {
      if (employee.lastName.toLowerCase().includes(value.toLowerCase())) {
        return employee;
      }
    });
    setLists(found);

    if (value === "") {
      setLists(data);
    }
  };
  const searchByFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const found = data.filter((employee: User) => {
      if (employee.firstName.toLowerCase().includes(value.toLowerCase())) {
        return employee;
      }
    });
    setLists(found);

    if (value === "") {
      setLists(data);
    }
  };

  const searchByEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const found = data.filter((employee: User) => {
      if (employee.email.toLowerCase().includes(value.toLowerCase())) {
        return employee;
      }
    });
    setLists(found);

    if (value === "") {
      setLists(data);
    }
  };
  const searchByRole = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const found = data.filter((employee: User) => {
      if (employee.role.toLowerCase().includes(value.toLowerCase())) {
        return employee;
      }
    });
    setLists(found);

    if (value === "") {
      setLists(data);
    }
  };
  const searchByTeam = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const found = data.filter((employee: User) => {
      if (employee.team.toLowerCase().includes(value.toLowerCase())) {
        return employee;
      }
    });
    setLists(found);

    if (value === "") {
      setLists(data);
    }
  };
  const searchByPosition = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const found = data.filter((employee: User) => {
      if (employee.position.toLowerCase().includes(value.toLowerCase())) {
        return employee;
      }
    });
    setLists(found);

    if (value === "") {
      setLists(data);
    }
  };
  const searchByFirstWork = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const found = data.filter((employee: User) => {
      if (employee.firstWorkDay.toLowerCase().includes(value.toLowerCase())) {
        return employee;
      }
    });
    setLists(found);

    if (value === "") {
      setLists(data);
    }
  };

  return {
    searchByLastName,
    lists,
    searchByFirstName,
    searchByRole,
    searchByPosition,
    searchByFirstWork,
    searchByTeam,
    searchByEmail,
  };
}
