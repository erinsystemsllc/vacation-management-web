import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { loginErr } from "../data/globalData";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios, {  AxiosError } from "axios";



export default function useLoginForm() {
  const navigate = useNavigate();
  const toast = useToast();

  const [form, setForm] = useState({});

  const loginMutation = useMutation({
    mutationFn: async () => {
      const { data } = await axios.post("http://localhost:8000/api/auth/login", form);
      return data;
    },
    onSuccess: (data) => {
      const loggedIn = JSON.stringify(data.user);
      sessionStorage.setItem('token', loggedIn);
      toast({
        title: "Logged in Successfully",
        status: loginErr.success,
        isClosable: true,
      })
      navigate('/')
    },
    onError: (error: AxiosError<{errorMessage: string}>) => {
      toast({
        title: error?.response?.data?.errorMessage,
        status: loginErr.error,
        isClosable: true,
      })
    },
  });
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget[0] as HTMLInputElement).value;
    const password = (e.currentTarget[1] as HTMLInputElement).value;
    setForm({ email, password });
    loginMutation.mutate();
  };

  return { handleLogin };
}
