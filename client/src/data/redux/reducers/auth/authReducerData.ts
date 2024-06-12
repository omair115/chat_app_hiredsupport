export interface IAuthReducerState {
  user: { email: string; password: string };
}

export const authReducerInitialState: IAuthReducerState = {
  user: { email: "", password: "" },
};
