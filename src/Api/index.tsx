import axios, { AxiosResponse } from "axios";
import { API_URLS } from "../Utils/constant";
import { AmountDetailsProps, AmountDetails } from "../Utils/interface";

export const login = async (
  username: string,
  password: string
): Promise<void> => {
  try {
    const response: AxiosResponse = await axios.post(API_URLS.login(), {
      username,
      password,
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export const userDetails = async (userId: number): Promise<AmountDetails> => {
  let data;
  try {
    const response: AxiosResponse = await axios.get(
      `${API_URLS.userData()}${userId}`
    );
    data = await response.data.data;
    // console.log("data", data);
  } catch (error) {
    console.log("error", error);
  }
  return data;
};

export const updateUserDetails = async (
  userId: number,
  updatedAmount: AmountDetailsProps
): Promise<void> => {
  try {
    // console.log("updatedAmount", updatedAmount);
    // console.log("userId", userId);
    const response: AxiosResponse = await axios.put(
      `${API_URLS.userData()}${userId}`,
      updatedAmount
    );

    const data = await response.data;
    return data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
