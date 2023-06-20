import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { LoginAlert } from "../Data/globalData";

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
      const response = await fetch(LoginAlert.loginUrl, {
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
        status: LoginAlert.success,
        isClosable: true,
      });
      navigate("/");
    },
    onError: (error: Error) => {
      const errorMessage = error.message || LoginAlert.randomErr;
      toast({
        title: errorMessage,
        status: LoginAlert.error,
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