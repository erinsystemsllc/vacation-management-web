import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { LoginAPI } from "../data/globalData";

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
      const response = await fetch(LoginAPI.loginUrl, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if(data.status === "UNAUTHORIZED") throw new Error(data.errorMessage)
      return data;
    },
    onSuccess: (data) => {
      const loggedIn = JSON.stringify(data.user);
      sessionStorage.setItem("token", loggedIn);
      toast({
        title: "Logged in Successfully",
        status: LoginAPI.success,
        isClosable: true,
      });
      navigate("/");
    },
    onError: (error: Error) => {
      const errorMessage = error.message || LoginAPI.randomErr;
      toast({
        title: errorMessage,
        status: LoginAPI.error,
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