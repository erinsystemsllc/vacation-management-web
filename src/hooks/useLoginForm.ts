import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { LoginRequest } from "../Data/globalData";

import { useMutation } from "@tanstack/react-query";

interface LoginForm {
  email: string;
  password: string;
}

export default function useLoginForm() {
  const navigate = useNavigate();
  const toast = useToast();

  const loginMutation = useMutation({
    mutationFn: async (formData: LoginForm) => {
      const response = await fetch(LoginRequest.loginUrl, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if(!data.user) throw new Error(data.message)
      return data;
    },
    onSuccess: (data) => {
      const loggedIn = JSON.stringify(data.user);
      sessionStorage.setItem("token", loggedIn);
      toast({
        title: "Logged in Successfully",
        status: LoginRequest.success,
        isClosable: true,
      });
      navigate("/");
    },
    onError: (error: Error) => {
      const errorMessage = error.message || LoginRequest.unsupportedError;
      toast({
        title: errorMessage,
        status: LoginRequest.error,
        isClosable: true,
      });
    },
  });

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget[0] as HTMLInputElement).value;
    const password = (e.currentTarget[1] as HTMLInputElement).value;
    loginMutation.mutate({ email, password });
  };

  return { handleLogin, loginMutation };
}
