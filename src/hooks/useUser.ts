import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";

const useUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      console.log("queryFn");
      // const token = localStorage.getItem("token");
      // if (!token) {
      //   throw new Error("No token found");
      // }
      // const token = getSession();
      // console.log("token", token);

      const response = await apiClient.get(`/me`);

      return response.data;
    },
    // enabled: !!getSession()
  });

  return { data, isLoading };
}

export default useUser;