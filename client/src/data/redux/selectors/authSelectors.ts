import { RootState } from "../reducers";

export const getAuthUser = (state: RootState) => state.auth.user;