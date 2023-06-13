import { Box } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type employee = {
  firstName: string;
  lastName: string;
  age: number;
  nationality: string;
  id: number;
};

export default function Home() {
  const { data, isFetched } = useQuery({
    queryKey: ["Employee"],
    queryFn: async () => {
      const data = await axios.get(
        "https://api.jsonbin.io/v3/b/648037e98e4aa6225eaa7b66"
      );
      return data.data.record.employees;
    },
  });

  return (
    <>
      {isFetched ? (
        <div>
          {data.map((e: employee) => {
            return (
              <Box key={e.id} border="2px solid">
                <p>{e.firstName}</p>
                <p>{e.lastName}</p>
                <p>{e.age}</p>
                <p>{e.nationality}</p>
              </Box>
            );
          })}
        </div>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
}
