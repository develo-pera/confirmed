import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";

const useUser = () => {
  const queryClient = useQueryClient();

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

  const updateUser = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiClient.put(`/users`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    }
  });

  return { data, isLoading, updateUser };
}

export default useUser;