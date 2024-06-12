import { AnyAction } from "redux";
import { IAuthReducerState, authReducerInitialState } from "./authReducerData";
import { SET_USER_AUTH } from "../../types";

const authReducer = (
  state: IAuthReducerState = authReducerInitialState,
  action: AnyAction
) => {
  switch (action.type) {
    case SET_USER_AUTH:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
