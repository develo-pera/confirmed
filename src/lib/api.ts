import apiClient from "./api-client";

export async function getUserByIdentifier(identifier: string) {

  try {
    const res = await apiClient.get(`/users?identifier=${identifier}`);

    if (res.status !== 200) {
      throw new Error("Failed to get user");
    }

    return {
      user: res.data.user,
      canonical: res.data.canonical,
    };
  } catch (error) {
    console.error(error);
    return {
      user: null,
      canonical: null,
    };
  }
}