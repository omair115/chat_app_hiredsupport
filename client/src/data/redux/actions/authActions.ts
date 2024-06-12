import { SET_USER_AUTH } from "../types";

export const setUserAuth = (payload: { email: string; password: string }) => ({
  type: SET_USER_AUTH,
  payload,
});
