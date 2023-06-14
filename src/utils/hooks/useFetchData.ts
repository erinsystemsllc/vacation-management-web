// import { useMutation } from "@tanstack/react-query";
// import axios from "axios";
// import { useState } from "react";

// interface LoginData {
//   username: string;
//   password: string;
// }

// export default function useDataFetch() {
//   const [form, setForm] = useState({});
//   const loginMutation = useMutation(
//     async () => {
//       const { data } = await axios.post("http://localhost:4000/api/auth", form);
//       return data;
//     },
//   );
//   return {loginMutation, setForm}
// }