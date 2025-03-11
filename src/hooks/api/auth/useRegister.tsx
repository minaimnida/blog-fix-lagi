import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { BASE_URL } from "@/utils/api";
import { register } from "module";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/lib/axios";
import { toast } from "sonner";

interface Payload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
const useRegister = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (payload: Payload) => {
      await axiosInstance.post("/users/register", {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        password: payload.password,
      });
    },
    onSuccess: () => {
      toast.success("Register berhasil");
      router.push("/login");
    },
    onError: (error: AxiosError<{ message: string; code: number }>) => {
      toast.error(error.response?.data.message);
    },
  });

  // const [isLoading, setIsLoading] = useState<boolean>(false);

  // const register = async (payload: Payload) => {
  //   setIsLoading(true);
  //   try {
  //     const { firstName, lastName, email, password } = payload;
  //     await axios.post(BASE_URL + "/users/register", {
  //       firstName,
  //       lastName,
  //       email,
  //       password,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  // return { register, isLoading };
};

export default useRegister;
